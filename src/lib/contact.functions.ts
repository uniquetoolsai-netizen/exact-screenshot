import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    const contactSchema = z.object({
      name: z
        .string()
        .trim()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(100, { message: "Name must be less than 100 characters" }),
      email: z
        .string()
        .trim()
        .email({ message: "Invalid email address" })
        .max(255, { message: "Email must be less than 255 characters" }),
      phone: z
        .string()
        .trim()
        .max(20, { message: "Phone must be less than 20 characters" })
        .regex(/^[0-9+\-\s()]*$/, {
          message: "Phone can only contain numbers, spaces, +, -, (, )",
        })
        .optional()
        .or(z.literal("")),
      enquiryType: z.enum(["general", "birthday", "school", "corporate", "feedback"], {
        message: "Please select an enquiry type",
      }),
      message: z
        .string()
        .trim()
        .min(10, { message: "Message must be at least 10 characters" })
        .max(1000, { message: "Message must be less than 1000 characters" }),
    });

    return contactSchema.parse(data);
  })
  .handler(async ({ data }) => {
    // In production, wire this up to your email/CRM service.
    // Never log sensitive form data to the console.
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly.",
    };
  });
