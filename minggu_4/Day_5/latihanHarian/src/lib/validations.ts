import { z } from 'zod'

export const loginSchema = z.object({
    email: z
    .string()
    .email('Invalid email address')
    .min(1, 'email is required'),
    password: z
    .string()
    .min(1, 'password is required')
    .min(8, 'password must be at least 8 characters')
})

export const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email().min(1, 'Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number')
    .min(1, 'Password is required'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword']
})