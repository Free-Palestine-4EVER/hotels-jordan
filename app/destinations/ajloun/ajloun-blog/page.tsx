import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export default function AjlounBlogPage() {
  // Find the Ajloun destination from the data
  const allDestinations = jordanData.regions.flatMap((region) =>
    region.destinations.map((destination) => ({
      ...destination,
      region: {
        name: region.name,
        slug: region.slug,
      },
    })),
  )

  const destination = allDestinations.find((d) => d.slug === "ajloun")

  if (!destination) {
    notFound()
  }

  // If there are no blog posts yet, we'll show placeholder content
  const hasBlogPosts = destination.blogPosts && destination.blogPosts.length > 0

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href={`/destinations/ajloun`} className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Ajloun
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Ajloun Travel Blog</h1>
        <p className="text-gray-600 mb-12">
          Discover travel tips, guides, and stories about Ajloun to help plan your perfect visit to this historic castle
          town and forest region.
        </p>

        {hasBlogPosts ? (
          <div className="space-y-12">
            {destination.blogPosts.map((post) => (
              <div key={post.slug} className="border-b pb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={post.image || "/placeholder.svg?height=600&width=800&text=Ajloun+Blog"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-500 mb-2">
                    {post.date} • by {post.author}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/destinations/ajloun/ajloun-blog/${post.slug}`}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              We're currently working on amazing blog content about Ajloun. Check back soon for travel guides, tips, and
              stories about Ajloun Castle, the Forest Reserve, and the surrounding region.
            </p>
            <div className="space-y-6 mt-8">
              <h3 className="text-xl font-semibold">Topics we'll be covering:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium">Ajloun Castle Guide</h4>
                  <p className="text-sm text-gray-600">Complete visitor information for this 12th-century fortress</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium">Hiking in Ajloun Forest Reserve</h4>
                  <p className="text-sm text-gray-600">Trail guides and nature experiences</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium">Local Food & Crafts</h4>
                  <p className="text-sm text-gray-600">Discover olive oil, soap making, and traditional cuisine</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium">Day Trips from Ajloun</h4>
                  <p className="text-sm text-gray-600">Exploring nearby attractions and hidden gems</p>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block mt-8"
            >
              Browse All Blog Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
