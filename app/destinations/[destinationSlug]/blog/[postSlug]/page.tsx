import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const destinations = jordanData.regions.flatMap((region) => region.destinations)

  const params = []

  for (const destination of destinations) {
    if (destination.blogPosts) {
      for (const post of destination.blogPosts) {
        params.push({
          destinationSlug: destination.slug,
          postSlug: post.slug,
        })
      }
    }
  }

  return params
}

export default function BlogPostPage({ params }: { params: { destinationSlug: string; postSlug: string } }) {
  // Find the destination
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

  // Find the blog post
  const post = destination.blogPosts?.find((p) => p.slug === params.postSlug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/destinations/${destination.slug}/blog`}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to {destination.name} Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {post.date && (
          <div className="text-gray-600 mb-6">
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image || `/images/blog/${destination.slug}/${post.slug}-header.jpg`}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">{post.excerpt}</p>

          {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}

          {!post.content && (
            <>
              <p>
                Jordan offers a unique blend of ancient history, stunning landscapes, and rich culture. From the
                rose-red city of Petra to the otherworldly deserts of Wadi Rum, there's something for every traveler to
                discover.
              </p>
              <p>
                Whether you're interested in archaeological wonders, outdoor adventures, or simply immersing yourself in
                the local culture, Jordan has it all. The country's compact size makes it easy to explore multiple
                destinations in a single trip.
              </p>
              <p>
                Don't miss the opportunity to float in the Dead Sea, explore the ancient ruins of Jerash, or hike
                through the Dana Biosphere Reserve. And of course, no visit to Jordan would be complete without
                experiencing the legendary Jordanian hospitality.
              </p>
              <h2>Planning Your Visit</h2>
              <p>
                The best time to visit Jordan is during the spring (March to May) or autumn (September to November) when
                the weather is mild and pleasant. Summer can be extremely hot, especially in desert areas, while winter
                can bring cold temperatures and occasional snow.
              </p>
              <p>
                Most visitors to Jordan enter through Queen Alia International Airport in Amman. From there, you can
                easily arrange transportation to other parts of the country. Renting a car is a popular option for
                exploring Jordan at your own pace.
              </p>
              <h2>Local Customs and Etiquette</h2>
              <p>
                Jordan is a predominantly Muslim country, so it's important to dress modestly, especially when visiting
                religious sites. Women should cover their shoulders and knees, and men should avoid wearing shorts in
                conservative areas.
              </p>
              <p>
                Jordanians are known for their hospitality, and you may be invited to share a meal or tea with locals.
                It's considered polite to accept such invitations if possible. When entering someone's home, it's
                customary to remove your shoes.
              </p>
              <h2>Conclusion</h2>
              <p>
                Jordan is a destination that offers a perfect blend of history, culture, and natural beauty. Whether
                you're a history buff, an adventure seeker, or a cultural enthusiast, you'll find plenty to love about
                this Middle Eastern gem.
              </p>
            </>
          )}
        </div>

        {destination.blogPosts && destination.blogPosts.length > 1 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">More Articles About {destination.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.blogPosts
                .filter((p) => p.slug !== params.postSlug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/destinations/${destination.slug}/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{relatedPost.excerpt}</p>
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
