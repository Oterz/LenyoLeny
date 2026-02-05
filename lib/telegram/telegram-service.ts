// src/lib/telegram/telegram-service.ts
import { env } from "@/lib/env/server";

interface TelegramMessage {
  name: string;
  phone: string;
}

export class TelegramService {
  private botToken: string;
  private chatId: string;

  constructor() {
    this.botToken = env.TELEGRAM_BOT_TOKEN;
    this.chatId = env.TELEGRAM_CHAT_ID;
  }

  private formatMessage(data: TelegramMessage): string {
    return `
<b>Новая заявка с сайта!</b>

<b>Имя:</b> ${data.name}
<b>Телефон:</b> ${data.phone}

<b>Время:</b> ${new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "short",
      timeStyle: "short",
    })}
    `.trim();
  }

  async sendContactForm(data: TelegramMessage): Promise<{ success: boolean; error?: string }> {
    try {
      const message = this.formatMessage(data);

      const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: "HTML",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("[TelegramService] Ошибка отправки:", result);
        return {
          success: false,
          error: result.description || "Ошибка отправки в Telegram",
        };
      }

      return { success: true };
    } catch (error) {
      console.error("[TelegramService] Ошибка:", error);
      return {
        success: false,
        error: "Ошибка подключения к Telegram",
      };
    }
  }
}

export const telegramService = new TelegramService();
