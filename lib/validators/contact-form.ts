// src/lib/validators/contact-form.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное")
    .regex(/^[а-яА-ЯёЁa-zA-Z\s-]+$/, "Имя может содержать только буквы, пробелы и дефисы"),
  phone: z
    .string()
    .min(1, "Телефон обязателен")
    .regex(
      /^(\+7|8|7)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
      "Введите корректный российский номер телефона (например: +7 999 000-00-00, 8 999 000 00 00)"
    )
    .transform((phone) => {
      // Очищаем от всех символов кроме цифр
      const cleaned = phone.replace(/\D/g, "");
      // Приводим к формату +7XXXXXXXXXX
      if (cleaned.startsWith("8")) {
        return "+7" + cleaned.slice(1);
      }
      if (cleaned.startsWith("7")) {
        return "+" + cleaned;
      }
      return "+7" + cleaned;
    }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
