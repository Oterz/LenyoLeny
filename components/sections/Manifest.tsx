import { Card, CardContent } from "@/components/ui/Card";

export function Manifest() {
    const items = [
        {
            text: "Все люди -",
            highlight: "индивидуальны",
        },
        {
            text: "Все мероприятия -",
            highlight: "уникальны",
        },
        {
            text: "Каждый проект -",
            highlight: "создается персонально",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden py-2.5 shadow-xl sm:py-20 lg:py-24">
            <div className="relative z-10 mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="mb-5 sm:mb-16">
                    <h2 className="text-pattern-light text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">
                        Когда задача важна - её просто делают.
                    </h2>
                </div>

                {/* Сетка карточек */}
                <div className="mx-auto grid grid-cols-1 gap-6 sm:gap-8">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            className="group bg-pattern-shadow/30 border-pattern-accent/10 hover:bg-pattern-shadow/50 hover:border-pattern-accent/30 hover:shadow-pattern-accent/10 relative cursor-pointer transition-all duration-300 hover:shadow-xl"
                        >
                            <CardContent className="flex h-full flex-col justify-between p-8 sm:p-10">
                                <div className="space-y-6">
                                    <h3 className="text-pattern-light/90 text-2xl font-light sm:text-3xl md:text-4xl">
                                        {item.text}{" "}
                                        <span className="relative inline-block">
                                            <span className="text-bright-orange relative z-10 font-medium">
                                                {item.highlight}
                                            </span>
                                        </span>
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
