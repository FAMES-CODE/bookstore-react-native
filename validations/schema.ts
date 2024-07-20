import { z } from "zod";

export const schema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .min(5, {
      message: "Name must be at least 6 characters",
    }),
  address: z.string().min(6, {
    message: "Address must be at least 6 characters",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits",
  }),
});
