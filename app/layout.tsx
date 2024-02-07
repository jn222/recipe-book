import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import { cn } from "../lib/utils"

import "./globals.css"
import Link from "next/link"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Recipe Book",
  description: "Searchable Recipes"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",

          fontSans.variable
        )}
      >
        <div className="p-10">
          <Link href="/">
            <span className="text-4xl">recipe book 🧑‍🍳</span>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
