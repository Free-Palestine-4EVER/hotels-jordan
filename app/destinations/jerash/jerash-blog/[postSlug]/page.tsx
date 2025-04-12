import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  // Find Jerash destination
  const allDestinations = jordanData.regions.flatMap((region) => region.destinations)
  const jerash = allDestinations.find((d) => d.slug === "jerash")

  if (!jerash) return []

  return jerash.blogPosts.map((post) => ({
    postSlug: post.slug,
  }))
}

export default function JerashBlogPostPage({ params }: { params: { postSlug: string } }) {
  // Find the Jerash destination
  const allDestinations = jordanData.regions.flatMap((region) =>
    region.destinations.map((destination) => ({
      ...destination,
      region: {
        name: region.name,
        slug: region.slug,
      },
    })),
  )

  const destination = allDestinations.find((d) => d.slug === "jerash")

  if (!destination) {
    notFound()
  }

  const blogPost = destination.blogPosts.find((post) => post.slug === params.postSlug)

  if (!blogPost) {
    notFound()
  }

  // Find related blog posts from the same destination
  const relatedPosts = destination.blogPosts.filter((post) => post.slug !== params.postSlug).slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/destinations/jerash/jerash-blog`}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to Jerash Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>

        <div className="text-gray-500 mb-6">
          {blogPost.date} • by {blogPost.author}
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {/* This would normally contain the blog post content */}
          <p>{blogPost.excerpt}</p>
          <p>Full blog post content would be rendered here.</p>

          <h2>About Jerash</h2>
          <p>
            Jerash is one of the best-preserved Roman provincial cities in the world. Its colonnaded streets, theaters,
            temples, and public squares offer an extraordinary glimpse into life during the Roman Empire.
          </p>

          <p>
            Walking through the ruins today, visitors can easily imagine the bustling ancient city that once thrived
            here, with its grand architecture and vibrant public life.
          </p>

          <h2>Visiting Information</h2>
          <p>
            Jerash is located about 50km north of Amman and can be reached in approximately one hour by car. The site is
            open daily, and guided tours are available to help visitors understand the historical significance of the
            various structures.
          </p>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">More Articles About Jerash</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/destinations/jerash/jerash-blog/${post.slug}`} className="group">
                  <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{post.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
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
