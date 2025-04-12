import Link from "next/link"
import Image from "next/image"

export default function PellaBlogPage() {
  const blogPosts = [
    {
      slug: "archaeological-wonders-pella",
      title: "Archaeological Wonders of Pella: Jordan's Hidden Historical Gem",
      excerpt:
        "Discover the remarkable archaeological site of Pella, with its multi-layered history spanning over 10,000 years of human civilization.",
      date: "April 10, 2023",
      readTime: "10 min read",
    },
    {
      slug: "day-trip-pella-from-amman",
      title: "Day Trip to Pella from Amman: Complete Itinerary",
      excerpt:
        "Plan the perfect day excursion from Amman to explore the ancient ruins of Pella with this detailed itinerary and practical travel tips.",
      date: "March 18, 2023",
      readTime: "7 min read",
    },
    {
      slug: "pella-vs-jerash-archaeological-comparison",
      title: "Pella vs. Jerash: Comparing Jordan's Archaeological Giants",
      excerpt:
        "How does the lesser-known site of Pella compare to the famous ruins of Jerash? We explore the unique features and visitor experience of both.",
      date: "February 25, 2023",
      readTime: "8 min read",
    },
    {
      slug: "photography-guide-pella-ruins",
      title: "Photography Guide to Pella's Ancient Ruins",
      excerpt:
        "Capture stunning images of Pella's archaeological treasures with expert tips on lighting, composition, and the best viewpoints.",
      date: "January 30, 2023",
      readTime: "6 min read",
    },
    {
      slug: "historical-significance-pella-jordan",
      title: "The Historical Significance of Pella in Jordan's Past",
      excerpt:
        "Explore how Pella played a crucial role throughout different periods of history, from the Bronze Age to the early Islamic era.",
      date: "December 12, 2022",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pella Travel Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore one of Jordan's most significant archaeological sites through our comprehensive guides, historical
          insights, and practical travel tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/destinations/pella/pella-blog/${post.slug}`} key={post.slug} className="group">
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

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Plan Your Visit to Pella</h2>
        <p className="mb-6">
          Pella is one of Jordan's most significant archaeological sites, offering a glimpse into multiple layers of
          human history. Located in the Jordan Valley, it's accessible from both Amman and Irbid.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Jordan Valley, 130 km northwest of Amman</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Opening Hours:</span>
                <span>8:00 AM to 5:00 PM (winter), 8:00 AM to 6:00 PM (summer)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Entrance Fee:</span>
                <span>3 JOD per person</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Time Needed:</span>
                <span>2-3 hours</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Travel Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Best Time to Visit:</span>
                <span>Spring (March-May) or autumn (September-November)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">What to Bring:</span>
                <span>Sun protection, water, comfortable walking shoes</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Combine With:</span>
                <span>Umm Qais, Jerash, or Ajloun for a northern Jordan tour</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Transportation:</span>
                <span>Rental car or private taxi (limited public transport)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
