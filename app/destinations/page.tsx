import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"

export default function DestinationsPage() {
<<<<<<< HEAD
  // Flatten all destinations from all regions
=======
  // Make sure we're getting all destinations from all regions
>>>>>>> 3ff535879da28e2e3cbabbbdbd4e0cc2fe1b8745
  const allDestinations = jordanData.regions.flatMap((region) =>
    region.destinations.map((destination) => ({
      ...destination,
      region: {
        name: region.name,
        slug: region.slug,
      },
    })),
  )

<<<<<<< HEAD
=======
  console.log(`Total destinations: ${allDestinations.length}`) // Debug log

>>>>>>> 3ff535879da28e2e3cbabbbdbd4e0cc2fe1b8745
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Destinations in Jordan</h1>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Explore the diverse attractions and experiences that Jordan has to offer, from ancient wonders to natural
        landscapes
      </p>

<<<<<<< HEAD
=======
      {/* Display all destinations in a grid without filtering by region */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {allDestinations.map((destination) => (
          <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="group">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={destination.image || `/images/destinations/${destination.slug}/${destination.slug}-main.jpg`}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{destination.region.name} Region</p>
                <p className="text-gray-600 mt-1 line-clamp-2">{destination.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Optional: Also show destinations organized by region */}
      <h2 className="text-3xl font-bold mb-8 text-center">Destinations by Region</h2>
>>>>>>> 3ff535879da28e2e3cbabbbdbd4e0cc2fe1b8745
      {jordanData.regions.map((region) => (
        <div key={region.slug} className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{region.name}</h2>
            <Link href={`/regions/${region.slug}`} className="text-teal-600 hover:text-teal-700 transition-colors">
              View Region →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.destinations.map((destination) => (
              <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="group">
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || `/images/destinations/${destination.slug}/${destination.slug}-main.jpg`}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-gray-600 mt-1 line-clamp-2">{destination.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 p-6 bg-teal-50 rounded-lg border border-teal-100">
        <h2 className="text-2xl font-bold text-teal-800 mb-4">Need Help Planning Your Jordan Trip?</h2>
        <p className="mb-6">
          Our travel experts can help you create the perfect itinerary based on your interests, budget, and travel
          style.
        </p>
        <Link
          href="/travel-tips"
          className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block mr-4"
        >
          View Travel Tips
        </Link>
        <Link
          href="/contact"
          className="bg-white text-teal-600 border border-teal-600 px-6 py-3 rounded-md hover:bg-teal-50 transition-colors inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
