import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Things To Do | Hotels Jordan",
  description: "Discover exciting activities and experiences throughout Jordan.",
}

export default function ThingsToDoPage() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-5xl font-bold mb-8">Things To Do in Jordan</h1>

      <div className="max-w-3xl mx-auto bg-gray-50 p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're currently curating the best activities and experiences throughout Jordan. Check back soon for a
          comprehensive guide to things to do in this beautiful country.
        </p>
        <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
      </div>
      <div className="relative h-48">
        <Image
          src={`/images/activities/placeholder.jpg`}
          alt={"Placeholder Activity"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  )
}
