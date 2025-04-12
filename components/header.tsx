"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            Hotels Jordan
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
              HOME
            </Link>
            <Link href="/destinations" className="text-sm font-medium hover:text-teal-600 transition-colors">
              DESTINATIONS
            </Link>
            <Link href="/hotels" className="text-sm font-medium hover:text-teal-600 transition-colors">
              HOTELS
            </Link>
            <a
              href="https://www.discovercars.com/?a_aid=MMC&a_bid=4414fbe0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              CAR RENTAL
            </a>
            <Link href="/things-to-do" className="text-sm font-medium hover:text-teal-600 transition-colors">
              THINGS TO DO
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-teal-600 transition-colors">
              BLOG
            </Link>
            <Link href="/travel-tips" className="text-sm font-medium hover:text-teal-600 transition-colors">
              TRAVEL TIPS
            </Link>
            <Link href="/planning-guide" className="text-sm font-medium hover:text-teal-600 transition-colors">
              PLANNING
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              CONTACT
            </Link>
            <button aria-label="Search" className="text-sm font-medium hover:text-teal-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </nav>
          <button className="md:hidden z-20" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 md:hidden pt-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/destinations"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                DESTINATIONS
              </Link>
              <Link
                href="/hotels"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                HOTELS
              </Link>
              <a
                href="https://www.discovercars.com/?a_aid=MMC&a_bid=4414fbe0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                CAR RENTAL
              </a>
              <Link
                href="/things-to-do"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                THINGS TO DO
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/travel-tips"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                TRAVEL TIPS
              </Link>
              <Link
                href="/planning-guide"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                PLANNING
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-teal-600 transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
