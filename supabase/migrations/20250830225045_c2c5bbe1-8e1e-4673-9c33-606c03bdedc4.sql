-- Secure all database functions by adding search_path parameter to prevent schema manipulation attacks

-- Update get_user_role function
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Update training_get_user_role function  
CREATE OR REPLACE FUNCTION public.training_get_user_role()
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT role FROM public.training_profiles WHERE id = auth.uid();
$$;

-- Update register_staff function
CREATE OR REPLACE FUNCTION public.register_staff(_full_name text, _role role_type DEFAULT 'reception'::role_type)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.staff (user_id, full_name, role)
  VALUES (auth.uid(), _full_name, COALESCE(_role,'reception'))
  ON CONFLICT (user_id) DO UPDATE SET full_name=excluded.full_name, role=excluded.role, active=true;
END; 
$$;

-- Update calculate_audit_hash function
CREATE OR REPLACE FUNCTION public.calculate_audit_hash(p_ts timestamp with time zone, p_actor_type text, p_actor_id uuid, p_action text, p_entity text, p_entity_id uuid, p_summary text, p_prev_hash text)
RETURNS text
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  RETURN encode(
    digest(
      COALESCE(p_prev_hash, '') || 
      p_ts::text || 
      p_actor_type || 
      COALESCE(p_actor_id::text, '') || 
      p_action || 
      p_entity || 
      COALESCE(p_entity_id::text, '') || 
      p_summary,
      'sha256'
    ),
    'hex'
  );
END;
$$;

-- Update audit_hash_trigger function  
CREATE OR REPLACE FUNCTION public.audit_hash_trigger()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
DECLARE
  last_hash TEXT;
BEGIN
  -- Get the previous hash from the last audit entry
  SELECT hash INTO last_hash 
  FROM public.audit_log 
  ORDER BY ts DESC 
  LIMIT 1;
  
  -- Calculate the hash for this entry
  NEW.hash = public.calculate_audit_hash(
    NEW.ts,
    NEW.actor_type,
    NEW.actor_id,
    NEW.action,
    NEW.entity,
    NEW.entity_id,
    NEW.summary,
    last_hash
  );
  
  NEW.prev_hash = last_hash;
  
  RETURN NEW;
END;
$$;

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;