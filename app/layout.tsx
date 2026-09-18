import type { Metadata } from "next"
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "City Wide Printing Services | M-37, Mussafah, Abu Dhabi",
  description:
    "Printing, photocopying, typing and large-format printing from M-37, Mussafah, Abu Dhabi. Open daily 8 AM–9 PM. WhatsApp your requirement.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  )
}
