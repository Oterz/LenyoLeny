// src/actions/contact.ts
"use server";

import { contactFormSchema } from "../validators/contact-form";
import { telegramService } from "../telegram/telegram-service";

export async function sendContactForm(formData: FormData) {
  try {
    const validation = contactFormSchema.safeParse({
      name: formData.get("name"),
      phone: formData.get("phone"),
    });

    if (!validation.success) {
      const errorMessage = validation.error.issues.map((issue) => issue.message).join(", ");

      return {
        success: false,
        message: errorMessage,
      };
    }

    // Отправляем в Telegram
    const result = await telegramService.sendContactForm(validation.data);

    if (!result.success) {
      return {
        success: false,
        message: "Не удалось отправить заявку. Попробуйте позже или позвоните нам.",
      };
    }

    return {
      success: true,
      message: "Спасибо! Мы свяжемся с вами в ближайшее время",
    };
  } catch (error) {
    console.error("[sendContactForm] Ошибка:", error);
    return {
      success: false,
      message: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
    };
  }
}
