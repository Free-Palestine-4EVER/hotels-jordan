import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const destinations = jordanData.regions.flatMap((region) => region.destinations)
  return destinations.map((destination) => ({
    destinationSlug: destination.slug,
  }))
}

export default function DestinationPage({ params }: { params: { destinationSlug: string } }) {
  // Find the destination across all regions
  const allDestinations = jordanData.regions.flatMap((region) =>
    region.destinations.map((destination) => ({
      ...destination,
      region: {
        name: region.name,
        slug: region.slug,
      },
    })),
  )

  const destination = allDestinations.find((d) => d.slug === params.destinationSlug)

  if (!destination) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/regions/${destination.region.slug}`}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to {destination.region.name}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <p className="text-lg mb-6">{destination.description}</p>

            {destination.blogPosts && destination.blogPosts.length > 0 && (
              <Link
                href={`/destinations/${destination.slug}/blog`}
                className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors mb-6"
              >
                Read {destination.name} Travel Blog
              </Link>
            )}

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-3">Key Information</h2>
              <div className="space-y-2">
                {destination.bestTimeToVisit && (
                  <p>
                    <span className="font-semibold">Best Time to Visit:</span> {destination.bestTimeToVisit}
                  </p>
                )}
                {destination.howToGetThere && (
                  <p>
                    <span className="font-semibold">How to Get There:</span> {destination.howToGetThere}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={destination.image || `/images/destinations/${destination.slug}/${destination.slug}-hero.jpg`}
              alt={destination.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {destination.attractions && destination.attractions.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Top Attractions in {destination.name}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destination.attractions.map((attraction) => (
                <li key={attraction} className="bg-gray-50 p-4 rounded-lg border">
                  <span className="font-medium">{attraction}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {destination.thingsToDo && destination.thingsToDo.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Things to Do in {destination.name}</h2>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <ul className="list-disc pl-5 space-y-2">
                {destination.thingsToDo.map((thing) => (
                  <li key={thing}>{thing}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {destination.whereToStay && destination.whereToStay.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Where to Stay in {destination.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.whereToStay.map((place) => (
                <a
                  key={place.name}
                  href={place.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-lg border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100">
                    {place.type === "luxury" ? "Luxury" : place.type === "mid-range" ? "Mid-Range" : "Budget"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {destination.tips && destination.tips.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Travel Tips for {destination.name}</h2>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
              <ul className="list-disc pl-5 space-y-2">
                {destination.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {destination.blogPosts && destination.blogPosts.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{destination.name} Travel Articles</h2>
              <Link
                href={`/destinations/${destination.slug}/blog`}
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.blogPosts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/destinations/${destination.slug}/blog/${post.slug}`} className="group">
                  <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
