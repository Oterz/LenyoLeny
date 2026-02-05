import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "LenyOLeny - Мы просто делаем",
  description:
    "Частные мероприятия, закрытые клубные форматы, арт-ивенты, конференции, корпоративные события, тимбилдинги и подарочные проекты",
  openGraph: {
    title: "Скоро что-то будет",
    description: "Следите за обновлениями",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "LenyOLeny",
      },
    ],
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
