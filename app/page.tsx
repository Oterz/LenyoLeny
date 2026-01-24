import Image from "next/image";
import pk from "../public/pk.jpg";
import mob from "../public/mob.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Скоро что-то будет | LenyoLeny",
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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <Image
        src={pk}
        alt="Background"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover hidden md:block"
      />
      <Image
        src={mob}
        alt="Background"
        fill
        priority
        sizes="100vw"
        fetchPriority="high"
        className="object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white">
          Тут скоро<br />что-то будет!
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 md:mb-10">
          Следите за обновлениями
        </p>
        <a
          href="mailto:manager@lenyoleny.ru"
          className="bg-[#FF6B35] hover:bg-[#FF5722] text-white font-semibold px-10 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl transition-colors duration-200"
        >
          Связаться
        </a>
      </div>
    </div>
  );
}