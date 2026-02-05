import HeroImage from "@/public/hero.png";
import Image from "next/image";
import { MemphisStar, MemphisZigzag } from "../ico/Shapes";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden py-2.5 shadow-xl sm:py-20 lg:py-24">
            <div className="relative z-10 mx-auto flex items-center px-4 py-8 sm:px-6 sm:py-12 lg:h-[70vh] lg:px-8 lg:py-0">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-10 sm:gap-8 lg:grid-cols-2">
                        <div className="relative order-2 space-y-0 sm:space-y-8 lg:order-1">
                            <h1 className="relative mt-15 text-7xl leading-none font-bold text-white lg:mt-0 xl:text-8xl">
                                Мы просто
                                <br />
                                <span className="text-rich-orange">делаем</span>
                            </h1>
                            <MemphisZigzag className="hidden lg:block -right-4 -bottom-15 h-40 w-40 -scale-100 rotate-90 items-center justify-center lg:absolute lg:h-60 lg:w-60" />
                        </div>

                        {/* Блок с изображением */}
                        <div className="order-2 flex items-center lg:order-1 lg:justify-center">
                            <div className="relative aspect-square w-full max-w-62.5 sm:max-w-75 lg:max-w-md">
                                <MemphisStar size={50} className="absolute" />
                                <MemphisStar size={35} className="absolute top-10 left-7" />

                                <div className="relative h-full w-full">
                                    <Image
                                        src={HeroImage}
                                        alt="Декоративный элемент"
                                        fill
                                        priority
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
