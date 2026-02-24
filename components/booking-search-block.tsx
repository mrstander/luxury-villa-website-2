"use client"

import { useState } from "react"
import { Calendar, Search } from "lucide-react"

export function BookingSearchBlock() {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!startDate || !endDate) return

        const bookingUrl = `https://book.nightsbridge.com/37327?startdate=${startDate}&enddate=${endDate}&rtid=1`
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
                    <div className="flex-1 flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[5px] transition-colors hover:bg-gray-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fcf9f4] text-[#c9a96e] shrink-0">
                            <Calendar size={18} />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                Check In
                            </label>
                            <input
                                type="date"
                                required
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="bg-transparent font-serif text-base outline-none cursor-pointer w-full"
                            />
                        </div>
                    </div>

                    {/* Check Out */}
                    <div className="flex-1 flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[5px] transition-colors hover:bg-gray-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fcf9f4] text-[#c9a96e] shrink-0">
                            <Calendar size={18} />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                Check Out
                            </label>
                            <input
                                type="date"
                                required
                                value={endDate}
                                min={startDate ? startDate : undefined}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="bg-transparent font-serif text-base outline-none cursor-pointer w-full"
                            />
                        </div>
                    </div>

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
