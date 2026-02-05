'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Users, Briefcase, PartyPopper, Award, Crown } from 'lucide-react'

export function Services() {
    const [selectedService, setSelectedService] = useState<string | null>(null)

    const services = [
        {
            icon: Users,
            title: 'Частные мероприятия',
            description: 'Свадьбы, венчания, дни рождения, крещения и другие личные события. Каждый проект создаётся индивидуально, под конкретный запрос.',
        },
        {
            icon: Briefcase,
            title: 'Закрытые клубные форматы',
            description: 'Камерные мероприятия с авторскими активностями и сопровождением.',
        },
        {
            icon: PartyPopper,
            title: 'Арт-ивенты и конференции',
            description: 'Открытия выставок, арт-вечеринки, деловые и культурные события.',
        },
        {
            icon: Award,
            title: 'Корпоративные подарки',
            description: 'Создание концепций и формирование подарков для партнёров и ключевых клиентов.',
        },
        {
            icon: Crown,
            title: 'Корпоративы и тимбилдинги',
            description: 'Корпоративные мероприятия для команд и управленческого состава.',
            wide: true
        }
    ]

    const handleCardClick = (title: string) => {
        setSelectedService(selectedService === title ? null : title)
    }

    return (
        <section className="relative min-h-screen w-full overflow-hidden py-2.5 sm:py-20 lg:py-24 shadow-xl">
            {/* Градиент-оверлей */}

            {/* Контент */}
            <div className="relative z-10 mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
                {/* Заголовок с декоративной линией */}
                <div className="mb-10 sm:mb-16 flex items-start justify-between">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-pattern-light">
                        Что мы делаем
                    </h2>
                    <div className="hidden md:block mt-4">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 20C15 8 30 32 45 20C60 8 75 32 90 20C105 8 110 15 118 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="text-pattern-accent"
                            />
                        </svg>
                    </div>
                </div>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => {
                        const Icon = service.icon
                        const isSelected = selectedService === service.title

                        return (
                            <Card
                                key={service.title}
                                onClick={() => handleCardClick(service.title)}
                                className={`
                                    group relative bg-pattern-shadow/30 border-pattern-accent/10 
                                    hover:bg-pattern-shadow/50 hover:border-pattern-accent/30 
                                    transition-all duration-300 cursor-pointer
                                    hover:shadow-xl hover:shadow-pattern-accent/10
                                    ${service.wide ? 'md:col-span-2 lg:col-span-2' : ''}
                                    ${isSelected ? 'bg-pattern-shadow/50 border-pattern-accent/30 shadow-xl shadow-pattern-accent/10' : ''}
                                `}
                            >
                                <CardContent className="p-8 sm:p-10 h-full flex flex-col justify-between min-h-[280px]">
                                    {/* Стрелка в правом верхнем углу */}
                                    {/* Иконка и название */}
                                    <div className="space-y-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14">
                                            <Icon
                                                className="w-full h-full text-pattern-accent group-hover:scale-110 transition-transform duration-300"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-semibold text-pattern-light">
                                            {service.title}
                                        </h3>

                                        {/* Описание с анимацией */}
                                        <div
                                            className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                            `}
                                        >
                                            <p className="text-pattern-light/80 text-base sm:text-lg leading-relaxed pt-2">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}           