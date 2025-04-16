"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Most read blog posts data
const mostReadPosts = [
  {
    title: "Top 10 Things to Do in Amman for First-Time Visitors",
    slug: "/destinations/amman/amman-blog/top-10-things-to-do-amman",
    excerpt: "A guide to the must-see attractions and experiences in Amman, from ancient ruins to modern cafes.",
    image: "/images/blog/amman/top-10-things-amman.jpg",
    date: "2025-01-15",
    author: "Jordan Explorer Team",
    destination: "Amman",
  },
  {
    title: "The Ultimate Guide to Petra, Jordan",
    slug: "/destinations/petra/petra-blog/ultimate-guide-petra-jordan",
    excerpt: "Everything you need to know about visiting Jordan's most famous archaeological site.",
    image: "/images/blog/petra/ultimate-guide.jpg",
    date: "2025-01-05",
    author: "Jordan Explorer Team",
    destination: "Petra",
  },
  {
    title: "Floating Experience at the Dead Sea",
    slug: "/destinations/dead-sea/dead-sea-blog/floating-experience-dead-sea",
    excerpt: "Everything you need to know about floating in the mineral-rich waters of the Dead Sea.",
    image: "/images/blog/dead-sea/floating-experience.jpg",
    date: "2025-01-10",
    author: "Jordan Explorer Team",
    destination: "Dead Sea",
  },
  {
    title: "Sleep Under the Stars in Wadi Rum",
    slug: "/destinations/wadi-rum/wadi-rum-blog/sleep-under-stars-wadi-rum",
    excerpt: "A guide to the most memorable overnight experiences in the Wadi Rum desert.",
    image: "/images/blog/wadi-rum/sleeping-stars.jpg",
    date: "2025-02-18",
    author: "Jordan Explorer Team",
    destination: "Wadi Rum",
  },
  {
    title: "Adventure Guide to Wadi Mujib",
    slug: "/destinations/wadi-mujib/wadi-mujib-blog/adventure-guide-wadi-mujib",
    excerpt: "Everything you need to know about tackling the thrilling water hike through Wadi Mujib canyon.",
    image: "/images/blog/wadi-mujib/siq-trail-guide.jpg",
    date: "2025-01-15",
    author: "Jordan Explorer Team",
    destination: "Wadi Mujib",
  },
  {
    title: "The Madaba Map: A Complete Guide",
    slug: "/destinations/madaba/madaba-blog/madaba-map-complete-guide",
    excerpt: "Everything you need to know about the world's oldest surviving map of the Holy Land.",
    image: "/images/blog/madaba/madaba-map-guide.jpg",
    date: "2025-01-10",
    author: "Jordan Explorer Team",
    destination: "Madaba",
  },
  {
    title: "Top Things to Do in Jerash",
    slug: "/destinations/jerash/jerash-blog/top-things-to-do-jerash",
    excerpt: "Discover the must-see attractions and experiences in the ancient Roman city of Jerash.",
    image: "/images/blog/jerash/top-things-jerash.jpg",
    date: "2025-01-20",
    author: "Jordan Explorer Team",
    destination: "Jerash",
  },
  {
    title: "The Biblical Significance of Mount Nebo",
    slug: "/destinations/mount-nebo/mount-nebo-blog/biblical-significance-mount-nebo",
    excerpt: "Understanding the spiritual importance of this sacred mountain in Christian and Jewish traditions.",
    image: "/images/blog/mount-nebo/biblical-significance.jpg",
    date: "2025-01-15",
    author: "Jordan Explorer Team",
    destination: "Mount Nebo",
  },
  {
    title: "Best Jeep Tours in Wadi Rum",
    slug: "/destinations/wadi-rum/wadi-rum-blog/best-jeep-tours-wadi-rum",
    excerpt: "How to choose the perfect desert tour in the Valley of the Moon.",
    image: "/images/blog/wadi-rum/jeep-tours.jpg",
    date: "2025-03-25",
    author: "Jordan Explorer Team",
    destination: "Wadi Rum",
  },
  {
    title: "The Baptism Site: Religious Significance",
    slug: "/destinations/bethany-beyond-jordan/bethany-beyond-jordan-blog/baptism-site-religious-significance",
    excerpt: "Understanding the spiritual importance and practical information for visiting Bethany Beyond the Jordan.",
    image: "/images/blog/bethany/religious-significance.jpg",
    date: "2025-01-15",
    author: "Jordan Explorer Team",
    destination: "Bethany Beyond the Jordan",
  },
]

export default function BlogPostsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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

  // Original sliding animation for desktop - EXACT SAME as destinations slider
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
      const newIndex = Math.floor(scrollAmount / cardWidth) % mostReadPosts.length
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }, 30) // Adjust speed here - lower number = faster scroll

    return () => clearInterval(slideTimer)
  }, [isMobile, currentIndex, mostReadPosts.length])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className={`flex space-x-6 py-4 overflow-x-auto scrollbar-hide ${isMobile ? "snap-x snap-mandatory" : ""}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: isMobile ? "x mandatory" : "none",
        }}
      >
        {mostReadPosts.map((post, index) => (
          <Link
            key={index}
            href={post.slug}
            className={`group flex-shrink-0 ${isMobile ? "snap-center" : ""}`}
            style={{ width: "300px" }}
          >
            <div className="border rounded-lg overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg?height=192&width=300&query=blog post"}
                  alt={post.title}
                  width={300}
                  height={192}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs px-2 py-1 rounded">
                  {post.destination}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex justify-between items-center text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
