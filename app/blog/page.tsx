import Link from "next/link"
import Image from "next/image"
import { jordanData } from "@/data/jordan"

export default function BlogPage() {
  // Get all blog posts from all destinations
  const allBlogPosts = jordanData.regions
    .flatMap((region) => region.destinations)
    .flatMap((destination) =>
      (destination.blogPosts || []).map((post) => ({
        ...post,
        destination: {
          name: destination.name,
          slug: destination.slug,
        },
      })),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Jordan Travel Blog</h1>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Travel tips, destination guides, and stories from the Kingdom of Wonder
      </p>

      <div className="max-w-4xl mx-auto">
        {allBlogPosts.length > 0 ? (
          <div className="space-y-12">
            {allBlogPosts.map((post) => (
              <div key={post.slug} className="border-b pb-12">
                <div className="relative h-48">
                  <Image
                    src={`/images/blog/${post.slug}-thumbnail.jpg`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="text-gray-500 mb-2">
                    {post.date} • by {post.author} •
                    <Link
                      href={`/destinations/${post.destination.slug}`}
                      className="ml-1 text-teal-600 hover:text-teal-700"
                    >
                      {post.destination.name}
                    </Link>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/destinations/${post.destination.slug}/${post.destination.slug}-blog/${post.slug}`}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              We're currently working on amazing blog content about Jordan. Check back soon for travel guides, tips, and
              stories.
            </p>
            <Link
              href="/destinations"
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block"
            >
              Explore Destinations
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
