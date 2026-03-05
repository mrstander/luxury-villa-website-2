import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions | Nama Sands",
    description: "Booking terms and conditions for your stay at Nama Sands Safari Reserve.",
}

export default function TermsPage() {
    return (
        <main className="bg-[#f5f0e8] text-[#1e1e1e]">
            {/* ================= HERO ================= */}
            <section className="relative h-[100vh] min-h-[450px] pt-24">
                <Image
                    src="/images/local.jpeg"
                    alt="Scenic view of Nama Sands"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
                        Important Information
                    </p>
                    <h1 className="font-serif text-4xl font-light text-white md:text-6xl">
                        Terms & <span className="italic">Conditions</span>
                    </h1>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-10">
                    <div className="prose prose-neutral max-w-none">
                        <h2 className="font-serif text-3xl font-light italic mb-12 border-b border-black/10 pb-6">
                            Booking Terms & Conditions
                        </h2>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">1. Check-In & Check-Out</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li><strong>Check-in:</strong> 14:00</li>
                                    <li><strong>Check-out:</strong> 10:00</li>
                                    <li>Early arrivals and late departures are subject to availability and prior arrangement.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">2. Cleaning & Housekeeping</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Daily housekeeping is included.</li>
                                    <li>Each morning a full clean and a light clean in the afternoon, including packing/clearing of all braai stations.</li>
                                    <li>Guests are requested to keep personal belongings secure and allow housekeeping access during scheduled service times.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">3. Wildlife Area Safety</h3>
                                <div className="space-y-4 text-neutral-600">
                                    <p>For safety reasons, guests are not permitted to walk beyond the fenced villa area without an authorised guide.</p>
                                    <p>This is a wildlife area and animals may roam freely outside the designated safe zone.</p>
                                    <p className="italic">Management accepts no responsibility for injury or incidents resulting from failure to comply with this rule.</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">4. Maximum Occupancy</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>The number of guests may not exceed the number stated on the confirmed reservation.</li>
                                    <li>No additional overnight visitors are permitted without prior written approval.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">5. Damage & Breakages</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Guests are responsible for any loss, damage, or excessive cleaning required during their stay.</li>
                                    <li>Any damages will be charged to the credit card on file.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">6. Braai Facilities</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Braai facilities are provided for guest use.</li>
                                    <li>Fires must never be left unattended.</li>
                                    <li>No open fires are permitted outside designated areas.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">7. Liability Disclaimer</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Guests stay at their own risk.</li>
                                    <li>The owners and management are not liable for loss, theft, injury, or damage to personal property.</li>
                                    <li>Guests are advised to have comprehensive travel insurance.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">8. Emergency Contacts</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li><strong>On-site Manager:</strong> Thomas Malan 082 873 4580</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">9. Cancellation Policy</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Cancellations made 30 days prior to arrival will receive 50% refund.</li>
                                    <li>Cancellations within 29 days of arrival are non-refundable.</li>
                                    <li>No-shows will be charged in full.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-4">10. Environment & Quiet Hours</h3>
                                <ul className="list-none space-y-2 pl-0 text-neutral-600">
                                    <li>Guests are requested to respect the surrounding environment and neighbouring properties at all times.</li>
                                    <li>Quiet hours apply between 23:00 and 06:00AM.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
