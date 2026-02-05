"use client";

import { Input } from "../ui/Input";
import { Phone, Send, CheckCircle, Mail } from "lucide-react";
import { useState, useTransition } from "react";
import { sendContactForm } from "@/lib/actions/contact";
import Modal from "@/components/ui/Modal";
import { MemphisPattern } from "../ico/Shapes";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await sendContactForm(formData);

      if (result.success) {
        setIsSuccess(true);
      } else {
        setMessage({
          type: "error",
          text: result.message,
        });
      }
    });
  };

  return (
    <>
      <section className="relative mb-2.5 w-full overflow-hidden py-2.5 shadow-xl sm:py-20 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-2.5">
                <h2 className="text-pattern-light text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">
                  Начать
                  <span className="text-pattern-accent ml-3">разговор</span>
                </h2>
              </div>

              {/* Контакты */}
              <div className="space-y-0 lg:space-y-5">
                <button
                  onClick={() => setIsContactsModalOpen(true)}
                  className="bg-pattern-accent/30 hover:bg-pattern-primary/50 text-pattern-light flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-4 text-lg font-semibold transition-colors duration-300"
                >
                  Показать контакты
                </button>
                <MemphisPattern className="hidden lg:block" size={200} />
              </div>
            </div>

            {/* Правая часть - форма или сообщение об успехе */}
            <div className="bg-pattern-shadow/30 border-pattern-accent/10 rounded-lg border p-8 sm:p-10">
              {isSuccess ? (
                /* Сообщение об успехе */
                <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                  <div className="bg-pattern-shadow flex h-20 w-20 items-center justify-center rounded-full">
                    <CheckCircle className="text-pattern-accent h-12 w-12" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-pattern-light text-2xl font-semibold sm:text-3xl">
                      Ваш запрос отправлен
                    </h3>
                    <p className="text-pattern-light/80 text-base sm:text-lg">
                      Мы получили вашу заявку и свяжемся с вами в ближайшее время
                    </p>
                  </div>
                </div>
              ) : (
                /* Форма */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Имя */}
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      required
                      disabled={isPending}
                      className="bg-pattern-bg/50 border-pattern-light/20 text-pattern-light placeholder:text-pattern-light/40 focus:border-pattern-accent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      required
                      disabled={isPending}
                      className="bg-pattern-bg/50 border-pattern-light/20 text-pattern-light placeholder:text-pattern-light/40 focus:border-pattern-accent disabled:opacity-50"
                    />
                  </div>

                  {message && message.type === "error" && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/20 p-4 text-sm text-red-200">
                      {message.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-pattern-accent hover:bg-pattern-primary text-pattern-light flex w-full items-center justify-center gap-2 rounded-lg py-4 text-lg font-semibold transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  {/* Текст о согласии */}
                  <p className="text-pattern-light/60 text-center text-xs sm:text-sm">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Модалка с контактами */}
      <Modal
        open={isContactsModalOpen}
        setOpen={setIsContactsModalOpen}
        title="Контакты"
        maxWidth="md"
      >
        <div className="space-y-6 py-4">
          {/* Телефон */}
          <a
            href="tel:+79776245630"
            className="hover:text-pattern-accent group flex items-center gap-4 text-white transition-colors duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Телефон</span>
              <span className="text-lg font-medium">+7 (977) 624 56 30</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/message/5LUHP4N74TIJP1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pattern-accent group flex items-center gap-4 text-white transition-colors duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 transition-colors duration-300 group-hover:bg-green-100">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">WhatsApp</span>
              <span className="text-lg font-medium">Написать в WhatsApp</span>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/AgencyLenyOLeny"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pattern-accent group flex items-center gap-4 text-white transition-colors duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <Send className="h-5 w-5 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Telegram</span>
              <span className="text-lg font-medium">Написать в Telegram</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:manager@lenyoleny.ru"
            className="hover:text-pattern-accent group flex items-center gap-4 text-white transition-colors duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 transition-colors duration-300 group-hover:bg-purple-100">
              <Mail className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Email</span>
              <span className="text-lg font-medium">manager@lenyoleny.ru</span>
            </div>
          </a>

          {/* Разделитель */}
          <div className="border-pattern-accent mt-6 border-t pt-4">
            <p className="text-center text-sm text-white italic">
              Для VIP клиентов - круглосуточно
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
