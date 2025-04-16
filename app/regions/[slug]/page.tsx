import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return jordanData.regions.map((region) => ({
    slug: region.slug,
  }))
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = jordanData.regions.find((r) => r.slug === params.slug)

  if (!region) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/regions" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Regions
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{region.name}</h1>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-lg">{region.description}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Destinations in {region.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {region.destinations.map((destination) => (
            <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={
                      destination.image || `/images/destinations/${destination.slug}/${destination.slug}-thumbnail.jpg`
                    }
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

        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
          <h2 className="text-xl font-bold text-teal-800 mb-4">Planning Your Visit to {region.name}</h2>
          <p className="mb-4">
            Explore the diverse attractions of {region.name} with our comprehensive guides and travel tips.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/travel-tips/getting-around"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors inline-block"
            >
              Transportation Guide
            </Link>
            <Link
              href="/travel-tips/accommodation"
              className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-md hover:bg-teal-50 transition-colors inline-block"
            >
              Where to Stay
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
