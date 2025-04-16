"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function DestinationSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const destinations = [
    {
      name: "Petra",
      image: "/images/destinations/petra/petra-treasury-slider.jpg",
      slug: "petra",
      excerpt: "The legendary 'Rose City' carved into pink sandstone cliffs",
    },
    {
      name: "Wadi Rum",
      image: "/images/destinations/wadi-rum/wadi-rum-desert-slider.jpg",
      slug: "wadi-rum",
      excerpt: "The 'Valley of the Moon' with dramatic desert landscapes",
    },
    {
      name: "Dead Sea",
      image: "/images/destinations/dead-sea/dead-sea-floating-slider.jpg",
      slug: "dead-sea",
      excerpt: "Float effortlessly in the mineral-rich waters at the lowest point on Earth",
    },
    {
      name: "Jerash",
      image: "/images/destinations/jerash/jerash-ruins-slider.jpg",
      slug: "jerash",
      excerpt: "Explore one of the best-preserved Roman cities in the world",
    },
    {
      name: "Amman",
      image: "/images/destinations/amman/amman-citadel-slider.jpg",
      slug: "amman",
      excerpt: "Discover Jordan's vibrant capital city with ancient ruins and modern culture",
    },
    {
      name: "Aqaba",
      image: "/images/destinations/aqaba/aqaba-red-sea-slider.jpg",
      slug: "aqaba",
      excerpt: "Jordan's only coastal city with access to the Red Sea's coral reefs",
    },
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Original sliding animation for desktop
  useEffect(() => {
    // Skip on mobile
    if (isMobile || !sliderRef.current) return

    const slider = sliderRef.current
    let scrollAmount = 0

    const slideTimer = setInterval(() => {
      slider.scrollTo({
        left: scrollAmount,
        behavior: "auto", // Use auto instead of smooth for continuous scrolling
      })

      scrollAmount += 1 // Increment by 1px at a time for smooth continuous scrolling

      // Reset when reaching the end
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0
      }

      // Update current index based on scroll position
      const cardWidth = 300 + 24
      const newIndex = Math.floor(scrollAmount / cardWidth) % destinations.length
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }, 30) // Adjust speed here - lower number = faster scroll

    return () => clearInterval(slideTimer)
  }, [isMobile, currentIndex, destinations.length])

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className={`flex space-x-6 py-4 overflow-x-auto scrollbar-hide ${isMobile ? "snap-x snap-mandatory" : ""}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: isMobile ? "x mandatory" : "none",
        }}
      >
        {destinations.map((destination, index) => (
          <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className={`group flex-shrink-0 ${isMobile ? "snap-center" : ""}`}
            style={{ width: "300px" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md h-64">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                width={300}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{destination.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
