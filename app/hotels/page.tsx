import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotels | Hotels Jordan",
  description: "Find the perfect accommodation for your stay in Jordan.",
}

export default function HotelsPage() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-5xl font-bold mb-8">Hotels in Jordan</h1>

      <div className="max-w-3xl mx-auto bg-gray-50 p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're currently compiling a comprehensive list of the best hotels and accommodations throughout Jordan. Check
          back soon to find the perfect place to stay during your visit.
        </p>
        <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
      </div>
    </div>
  )
}
