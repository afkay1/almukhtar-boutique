import { z } from "zod";

export const BookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters / يجب أن يحتوي الاسم على حرفين على الأقل" })
    .max(100),
  phone: z
    .string()
    .min(9, { message: "Please enter a valid phone number / يرجى إدخال رقم هاتف صحيح" })
    .regex(/^(?:\+?966|0)?5\d{8}$/, {
      message: "Please enter a valid Saudi mobile number (e.g. 0597193831) / يرجى إدخال رقم جوال سعودي صحيح",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address / يرجى إدخال بريد إلكتروني صحيح" })
    .optional()
    .or(z.literal("")),
  branch: z.enum(["flagship", "fitting-studio"], {
    errorMap: () => ({ message: "Please select a branch / يرجى اختيار الفرع" }),
  }),
  serviceType: z.enum([
    "made-to-measure-suit",
    "alteration",
    "blazer-fitting",
    "trouser-adjustment",
    "vip-styling-consultation",
  ], {
    errorMap: () => ({ message: "Please select a service type / يرجى اختيار نوع الخدمة" }),
  }),
  fabricPreference: z.string().min(1, { message: "Please select a fabric preference / يرجى اختيار نوع القماش المفضل" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date / يرجى تحديد التاريخ المفضل" }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time slot / يرجى تحديد الوقت المفضل" }),
  notes: z.string().max(500).optional(),
});

export type BookingFormData = z.infer<typeof BookingSchema>;

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters / يجب أن يحتوي الاسم على حرفين على الأقل" })
    .max(100),
  email: z.string().email({ message: "Please enter a valid email / يرجى إدخال بريد إلكتروني صحيح" }),
  phone: z
    .string()
    .min(9, { message: "Please enter a valid phone number / يرجى إدخال رقم هاتف صحيح" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters / يرجى كتابة موضوع الاستفسار" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters / يجب أن تحتوي الرسالة على 10 أحرف على الأقل" })
    .max(1500),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
