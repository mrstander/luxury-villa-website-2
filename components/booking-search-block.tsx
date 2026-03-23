"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function BookingSearchBlock() {
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!startDate || !endDate) return

        const formattedStart = format(startDate, "yyyy-MM-dd")
        const formattedEnd = format(endDate, "yyyy-MM-dd")
        const bookingUrl = `https://book.nightsbridge.com/37327?startdate=${formattedStart}&enddate=${formattedEnd}&rtid=1`
        window.open(bookingUrl, "_blank")
    }

    return (
        <section className="relative z-20 -mt-12 mb-12 px-6">
            <div className="mx-auto max-w-5xl bg-white shadow-xl p-3 md:p-4 rounded-[5px]">
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4"
                >
                    {/* Check In */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="flex-1 flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[5px] transition-colors hover:bg-gray-50 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fcf9f4] text-[#c9a96e] shrink-0">
                                    <CalendarIcon size={18} />
                                </div>
                                <div className="flex flex-1 flex-col text-left">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 cursor-pointer">
                                        Check In
                                    </label>
                                    <span className={cn("font-serif text-base", !startDate && "text-muted-foreground")}>
                                        {startDate ? format(startDate, "PPP") : "Select date"}
                                    </span>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    {/* Check Out */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="flex-1 flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[5px] transition-colors hover:bg-gray-50 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fcf9f4] text-[#c9a96e] shrink-0">
                                    <CalendarIcon size={18} />
                                </div>
                                <div className="flex flex-1 flex-col text-left">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 cursor-pointer">
                                        Check Out
                                    </label>
                                    <span className={cn("font-serif text-base", !endDate && "text-muted-foreground")}>
                                        {endDate ? format(endDate, "PPP") : "Select date"}
                                    </span>
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                disabled={(date) => startDate ? date < startDate : false}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-3 bg-[#c9a96e] px-8 md:px-12 py-5 text-sm uppercase tracking-[0.3em] text-[#2a2318] transition-all duration-300 hover:bg-[#b8963e] rounded-[5px] md:h-full min-h-[60px]"
                    >
                        <Search size={18} />
                        <span>Search</span>
                    </button>
                </form>
            </div>
        </section>
    )
}
