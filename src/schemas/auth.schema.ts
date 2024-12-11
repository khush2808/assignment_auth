import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;
