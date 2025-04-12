import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export default function WadiRumBlogPage() {
  // Find Wadi Rum in the jordanData
  const wadiRum = jordanData.regions
    .flatMap((region) => region.destinations)
    .find((destination) => destination.slug === "wadi-rum")

  if (!wadiRum) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href={`/destinations/wadi-rum`} className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Wadi Rum
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Wadi Rum Travel Blog</h1>
        <p className="text-gray-600 mb-12">
          Discover travel tips, guides, and stories about Wadi Rum to help plan your perfect desert adventure.
        </p>

        {wadiRum.blogPosts && wadiRum.blogPosts.length > 0 ? (
          <div className="space-y-12">
            {wadiRum.blogPosts.map((post) => (
              <div key={post.slug} className="border-b pb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-gray-500 mb-2">
                    {post.date} • by {post.author}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/destinations/wadi-rum/wadi-rum-blog/${post.slug}`}
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
              We're currently working on amazing blog content about Wadi Rum. Check back soon for travel guides, tips,
              and stories.
            </p>
            <Link
              href="/blog"
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block"
            >
              Browse All Blog Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
