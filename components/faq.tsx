"use client"

import * as React from "react"
import { useInView } from "@/hooks/use-in-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = {
    location: [
        {
            question: "How far from Cape Town?",
            answer: "1 hour and 30 minutes drive (125km) via N7 and R45.",
        },
        {
            question: "Check-in/out times?",
            answer: "Check-in: 14:00 | Check-out: 11:00",
        },
    ],
    wildlife: [
        {
            question: "What wildlife can be seen?",
            answer:
                "Giraffe, Cape Eland, Camels, Fallow Deer, Springbok, Impala, Golden Wildebeest, Brindle Tailed Gnu, Golden Oryx, Kalahari Oryx, Kudu, Ostrich, Lynx, Bat-eared Fox, Duiker, Steenbok, and Rhone.",
        },
        {
            question: "Are game drives private?",
            answer: "Yes, all game drives are private.",
        },
        {
            question: "What is included in the rate?",
            answer: "One game drive per day is included in the rate.",
        },
        {
            question: "Is it malaria free?",
            answer: "No.",
        },
    ],
    accommodation: [
        {
            question: "Are children allowed?",
            answer: "Yes, children are welcome.",
        },
        {
            question: "Is the pool heated year-round?",
            answer: "Yes – heated with a wooden fire.",
        },
        {
            question: "What catering options are available?",
            answer: "Full catering, semi-catering, and self-catering options are available.",
        },
    ],
    practical: [
        {
            question: "Load shedding back-up?",
            answer:
                "Green energy – totally off the grid with an 80kW generated backup system.",
        },
    ],
}

export function FAQ() {
    const { ref, isInView } = useInView()

    return (
        <section id="faq" className="bg-background py-24 md:py-32">
            <div ref={ref} className="mx-auto max-w-4xl px-6 lg:px-10">
                {/* Section Heading */}
                <div
                    className={`mb-12 text-center transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
                        Questions
                    </p>
                    <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
                        Frequently Asked <span className="italic">Questions</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div
                    className={`transition-all duration-700 delay-200 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <Tabs defaultValue="location" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                            <TabsTrigger value="location">Location</TabsTrigger>
                            <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                            <TabsTrigger value="practical">Practical</TabsTrigger>
                        </TabsList>

                        <TabsContent value="location">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.location.map((faq, index) => (
                                    <AccordionItem key={index} value={`location-${index}`}>
                                        <AccordionTrigger className="text-left font-serif text-lg">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="wildlife">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.wildlife.map((faq, index) => (
                                    <AccordionItem key={index} value={`wildlife-${index}`}>
                                        <AccordionTrigger className="text-left font-serif text-lg">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="accommodation">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.accommodation.map((faq, index) => (
                                    <AccordionItem key={index} value={`accommodation-${index}`}>
                                        <AccordionTrigger className="text-left font-serif text-lg">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="practical">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.practical.map((faq, index) => (
                                    <AccordionItem key={index} value={`practical-${index}`}>
                                        <AccordionTrigger className="text-left font-serif text-lg">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
