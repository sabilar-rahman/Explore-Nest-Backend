/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Schema } from "mongoose";
import { z } from "zod";

const customerSchema = z.object({
  name: z.string().nonempty({ message: "Customer name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  address: z.string().optional(),
});

// Define a Zod schema for the booking data
const BookingSchema = z.object({
  // _id: z
  //   .string()
  //   .refine((val) => Schema.Types.ObjectId, {
  //     message: "Invalid Id. Must be a valid ObjectId.",
  //   })
  //   .optional(),
  customer: customerSchema.optional(),
  serviceId: z
    .string()
    .refine((val) => Schema.Types.ObjectId, {
      message: "Invalid serviceId. Must be a valid ObjectId.",
    })
    .optional(),
  slotId: z
    .string()
    .refine((val) => Schema.Types.ObjectId, {
      message: "Invalid slotId. Must be a valid ObjectId.",
    })
    .optional(),
  vehicleType: z
    .string()
    .min(1, { message: "Vehicle type is required." })
    .optional(),
  vehicleBrand: z
    .string()
    .min(1, { message: "Vehicle brand is required." })
    .optional(),
  vehicleModel: z
    .string()
    .min(1, { message: "Vehicle model is required." })
    .optional(),
  manufacturingYear: z
    .number()
    .int()
    .min(1900)
    .max(new Date().getFullYear(), {
      message: "Invalid manufacturing year.",
    })
    .optional(),
  registrationPlate: z
    .string()
    .min(1, { message: "Registration plate is required." })
    .optional(),
});
export default BookingSchema;


