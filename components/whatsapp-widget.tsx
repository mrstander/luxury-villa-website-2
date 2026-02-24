"use client"

import { useState } from "react"
import { MessageCircle, X, Calendar, MessageSquare, Compass, Map } from "lucide-react"
import Link from "next/link"

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const whatsappNumber = "27832348606"
    const whatsappUrl = `https://wa.me/${whatsappNumber}`

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end md:bottom-8 md:right-8">
            {/* Popup */}
            {isOpen && (
                <div className="mb-4 w-[280px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 sm:w-[320px]">
                    {/* Header */}
                    <div className="bg-[#2a2318] p-6 text-white text-center relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-2">Concierge</p>
                        <h3 className="font-serif text-xl italic">How can we assist?</h3>
                    </div>

                    {/* Options */}
                    <div className="p-4 space-y-1">
                        <Link
                            href="/villa"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 w-full p-3 text-left rounded-xl transition-all duration-300 hover:bg-[#f5f0e8] group"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-white transition-colors">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Book a Villa</p>
                                <p className="text-[10px] text-black/50">Check availability and rates</p>
                            </div>
                        </Link>

                        <Link
                            href="/experiences"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 w-full p-3 text-left rounded-xl transition-all duration-300 hover:bg-[#f5f0e8] group"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-white transition-colors">
                                <Compass size={18} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Discover Experiences</p>
                                <p className="text-[10px] text-black/50">Safari drives & adventures</p>
                            </div>
                        </Link>

                        <Link
                            href="/attractions"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 w-full p-3 text-left rounded-xl transition-all duration-300 hover:bg-[#f5f0e8] group"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-white transition-colors">
                                <Map size={18} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Local Attractions</p>
                                <p className="text-[10px] text-black/50">Explore the West Coast</p>
                            </div>
                        </Link>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 w-full p-3 text-left rounded-xl transition-all duration-300 hover:bg-[#f5f0e8] group"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                <MessageSquare size={18} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Chat on WhatsApp</p>
                                <p className="text-[10px] text-black/50">Speak to our team directly</p>
                            </div>
                        </a>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 lg:h-16 lg:w-16 ${isOpen ? "bg-[#2a2318] rotate-90" : "bg-[#25D366]"
                    }`}
                aria-label="Toggle contact options"
            >
                {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
            </button>
        </div>
    )
}
