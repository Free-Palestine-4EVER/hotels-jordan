import Link from "next/link"
import Image from "next/image"
import { jordanData } from "@/data/jordan"

export default function RegionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Regions of Jordan</h1>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Explore Jordan's diverse geographical regions, each offering unique landscapes and experiences
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jordanData.regions.map((region) => (
          <Link key={region.slug} href={`/regions/${region.slug}`} className="group">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`/images/regions/${region.slug}/${region.slug}-overview.jpg`}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{region.name}</h2>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.destinations.slice(0, 4).map((destination) => (
                    <span key={destination.slug} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {destination.name}
                    </span>
                  ))}
                  {region.destinations.length > 4 && (
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      +{region.destinations.length - 4} more
                    </span>
                  )}
                </div>
                <span className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                  Explore Region →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
