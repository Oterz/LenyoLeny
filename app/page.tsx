import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "LenyOLeny - Мы просто делаем.",
  description: "Следите за обновлениями. Скоро здесь появится что-то интересное!",
  keywords: ["lenyoleny", "coming soon", "скоро открытие"],
  openGraph: {
    title: "Скоро что-то будет",
    description: "Следите за обновлениями",
    type: "website",
    locale: "ru_RU",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifest />
      <Services />
      <ContactForm />
    </>
  );
}
