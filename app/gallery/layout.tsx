import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gallery",
    description: "A visual journey through Nama Sands. Discover curated moments of architecture, wilderness, and luxury experiences.",
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
