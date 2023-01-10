import { object, ref, string } from 'yup';

export const validationSchema = object({
  email: string().email().required('Email is required'),
  password: string()
    .min(6, 'Minimum amount of character is 6')
    .max(30, 'Maximum amount of character is 30')
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .min(6, 'Minimum amount of character is 6')
    .max(30, 'Maximum amount of character is 30')
    .required('Confirm password is required'),
});
