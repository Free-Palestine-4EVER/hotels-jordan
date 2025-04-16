import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotels Jordan | Your Guide to Jordan's Best Accommodations",
  description: "Explore Jordan's hotels, destinations, and activities with our comprehensive travel guide.",
<<<<<<< HEAD
    generator: 'v0.dev'
=======
>>>>>>> 3ff535879da28e2e3cbabbbdbd4e0cc2fe1b8745
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7142894016772610" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7142894016772610"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
<<<<<<< HEAD


import './globals.css'
=======
>>>>>>> 3ff535879da28e2e3cbabbbdbd4e0cc2fe1b8745
