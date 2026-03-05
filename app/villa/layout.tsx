import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "The Villa",
    description: "Refined luxury immersed in fynbos landscapes and panoramic valley views. Discover the features and facilities of our private luxury villa.",
}

export default function VillaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
