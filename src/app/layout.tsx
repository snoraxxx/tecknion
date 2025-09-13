import type React from "react"
import type { Metadata } from "next"
import { Limelight } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const limelight = Limelight({
  subsets: ["latin"],
  variable: "--font-limelight",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Tecknion Architects",
  description: "Innovative architectural design studio creating exceptional spaces",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${limelight.variable} font-limelight antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
