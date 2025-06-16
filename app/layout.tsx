import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lakshmi Naga Sushmitha Vallabhani | Full Stack Developer & QA Engineer",
  description:
    "Portfolio of Lakshmi Naga Sushmitha Vallabhani, a Full Stack Developer and QA Engineer with expertise in Java, Node.js, Python, and DevOps.",
  keywords: "Full Stack Developer, QA Engineer, DevOps, Java, Node.js, Python, Selenium, Jenkins, Docker",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
