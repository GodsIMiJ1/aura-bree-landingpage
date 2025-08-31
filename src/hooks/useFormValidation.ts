import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FieldValidation {
  [key: string]: ValidationRules;
}

interface FormData {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 500); // Limit length
};

export const useFormValidation = (validationRules: FieldValidation) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string => {
    const rules = validationRules[name];
    if (!rules) return '';

    const sanitizedValue = sanitizeInput(value);

    if (rules.required && !sanitizedValue) {
      return 'This field is required';
    }

    if (rules.email && sanitizedValue && !emailRegex.test(sanitizedValue)) {
      return 'Please enter a valid email address';
    }

    if (rules.phone && sanitizedValue && !phoneRegex.test(sanitizedValue)) {
      return 'Please enter a valid phone number';
    }

    if (rules.minLength && sanitizedValue.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && sanitizedValue.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    return '';
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const sanitizeFormData = (formData: FormData): FormData => {
    const sanitized: FormData = {};
    Object.keys(formData).forEach(key => {
      sanitized[key] = sanitizeInput(formData[key]);
    });
    return sanitized;
  };

  const clearErrors = () => setErrors({});

  return {
    errors,
    validateField,
    validateForm,
    sanitizeFormData,
    clearErrors
  };
};