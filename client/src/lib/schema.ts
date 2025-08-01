import { z } from "zod";

// Contact form schema for client-side validation
export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  userType: z.enum(["transporter", "healthcare", "patient", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  language: z.string(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;