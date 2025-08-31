-- Fix remaining database security issues

-- Update needs_initial_setup function to include search_path
CREATE OR REPLACE FUNCTION public.needs_initial_setup()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT NOT EXISTS (
    SELECT 1 FROM public.staff WHERE role = 'admin' AND active = true
  );
$$;

-- Update setup_initial_admin function to include search_path
CREATE OR REPLACE FUNCTION public.setup_initial_admin(_user_id uuid, _full_name text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only allow if no admin exists
  IF NOT public.needs_initial_setup() THEN
    RAISE EXCEPTION 'Admin user already exists';
  END IF;
  
  -- Create or update staff record with admin role
  INSERT INTO public.staff (user_id, name, role, active)
  VALUES (_user_id, _full_name, 'admin', true)
  ON CONFLICT (user_id) 
  DO UPDATE SET 
    role = 'admin',
    active = true,
    name = _full_name,
    updated_at = now();
    
  -- Log the admin creation
  INSERT INTO public.audit_log (actor_type, actor_id, action, entity, entity_id, summary)
  VALUES ('system', _user_id, 'create', 'staff', _user_id, 'Initial admin user setup completed');
END;
$$;

-- Update ensure_visit_on_checkin function to include search_path  
CREATE OR REPLACE FUNCTION public.ensure_visit_on_checkin()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
DECLARE
  _today_start timestamptz := date_trunc('day', timezone('utc', now()));
  _today_end   timestamptz := _today_start + interval '1 day';
  _visit_id uuid;
BEGIN
  -- Does a waiting/active visit already exist today?
  SELECT v.id INTO _visit_id
  FROM public.visits v
  WHERE v.patient_id = NEW.patient_id
    AND v.arrived_at >= _today_start
    AND v.arrived_at <  _today_end
    AND v.triage_status IN ('waiting','active')
  ORDER BY v.arrived_at DESC
  LIMIT 1;

  IF _visit_id IS NULL THEN
    INSERT INTO public.visits (patient_id, arrived_at, triage_status, notes)
    VALUES (NEW.patient_id, now(), 'waiting', 'Auto-created from check-in')
    RETURNING id INTO _visit_id;
    
    -- Log the auto-creation
    INSERT INTO public.audit_log (actor_type, actor_id, action, entity, entity_id, summary)
    VALUES ('system', NULL, 'create', 'visit', _visit_id, 'Auto-created visit from patient check-in');
  END IF;

  RETURN NEW;
END;
$$;

-- Update AI training functions to include search_path
CREATE OR REPLACE FUNCTION public.training_update_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_ai_settings_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;