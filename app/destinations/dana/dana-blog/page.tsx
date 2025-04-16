import Image from "next/image"
import Link from "next/link"

export default function DanaBlogPage() {
  const blogPosts = [
    {
      slug: "hiking-dana-biosphere-trails",
      title: "Hiking in Dana Biosphere Reserve: Trails for Every Level",
      excerpt:
        "Discover the best hiking routes through Jordan's largest nature reserve, from easy walks to multi-day treks.",
      date: "March 25, 2023",
      readTime: "9 min read",
    },
    {
      slug: "dana-village-stay",
      title: "Staying in Dana Village: A Step Back in Time",
      excerpt:
        "Experience authentic Jordanian village life in the 500-year-old stone settlement perched on the edge of Wadi Dana.",
      date: "February 18, 2023",
      readTime: "7 min read",
    },
    {
      slug: "feynan-ecolodge-experience",
      title: "Feynan Ecolodge: Sustainable Luxury in the Wilderness",
      excerpt: "Discover one of the world's top ecolodges nestled in the heart of the Dana Biosphere Reserve.",
      date: "January 22, 2023",
      readTime: "8 min read",
    },
    {
      slug: "wildlife-biodiversity-dana",
      title: "Wildlife and Biodiversity in Dana: Jordan's Natural Treasure",
      excerpt: "Learn about the incredible variety of plants and animals that call the Dana Biosphere Reserve home.",
      date: "December 15, 2022",
      readTime: "10 min read",
    },
    {
      slug: "photography-guide-dana-biosphere",
      title: "Photography Guide to Dana Biosphere Reserve",
      excerpt: "Tips and locations for capturing the dramatic landscapes and diverse ecosystems of Dana.",
      date: "November 10, 2022",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Dana Biosphere Reserve Travel Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore Jordan's largest nature reserve through our comprehensive guides, wildlife insights, and practical
          travel tips.
        </p>
      </div>

      <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Dana+Biosphere+Reserve"
          alt="Dana Biosphere Reserve panoramic view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Jordan's Natural Wonder</h2>
            <p className="text-xl">Where dramatic mountains meet diverse ecosystems</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/destinations/dana/dana-blog/${post.slug}`} key={post.slug} className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${post.title.substring(0, 20)}...`}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800">Read more →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">About Dana Biosphere Reserve</h2>
        <p className="mb-6">
          The Dana Biosphere Reserve is Jordan's largest nature reserve, covering over 300 square kilometers of
          spectacular mountains and wadis along the Great Rift Valley. This diverse area contains four distinct
          bio-geographical zones, supporting an extraordinary variety of wildlife, including rare species.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Central-southern Jordan, near Tafilah</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Visitor Center Hours:</span>
                <span>8:00 AM to 4:00 PM daily</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Entrance Fee:</span>
                <span>8-10 JOD per person (varies by trail)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Time Needed:</span>
                <span>1-3 days depending on activities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Travel Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Best Time to Visit:</span>
                <span>Spring (March-May) and autumn (September-November)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">What to Bring:</span>
                <span>Hiking boots, layers of clothing, water, sun protection</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Accommodation:</span>
                <span>Dana Guesthouse, Feynan Ecolodge, Rummana Campsite</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Transportation:</span>
                <span>Private car or organized tour (limited public transport)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
