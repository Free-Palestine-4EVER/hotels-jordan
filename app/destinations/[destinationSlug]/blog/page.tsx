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

export default function DestinationBlogPage({ params }: { params: { destinationSlug: string } }) {
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

  // Check if the destination has blog posts
  if (!destination.blogPosts || destination.blogPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href={`/destinations/${destination.slug}`}
              className="text-teal-600 hover:text-teal-700 transition-colors"
            >
              ← Back to {destination.name}
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-8">{destination.name} Travel Blog</h1>
          <p>No blog posts available for this destination yet. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/destinations/${destination.slug}`}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to {destination.name}
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">{destination.name} Travel Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destination.blogPosts.map((post) => (
            <Link key={post.slug} href={`/destinations/${destination.slug}/blog/${post.slug}`} className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image || `/images/blog/${destination.slug}/${post.slug}.jpg`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
