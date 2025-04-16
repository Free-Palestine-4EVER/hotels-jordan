import Image from "next/image"
import Link from "next/link"

export default function DesertCastlesBlogPage() {
  const blogPosts = [
    {
      slug: "complete-guide-jordan-desert-castles",
      title: "Complete Guide to Jordan's Desert Castles",
      excerpt:
        "Discover the fascinating Umayyad castles, hunting lodges, and bathhouses scattered throughout eastern Jordan.",
      date: "March 20, 2023",
      readTime: "10 min read",
    },
    {
      slug: "qasr-amra-unesco-frescoes",
      title: "Qasr Amra: UNESCO World Heritage Site with Remarkable Frescoes",
      excerpt:
        "Explore the most famous of Jordan's desert castles, known for its unique and well-preserved early Islamic art.",
      date: "February 15, 2023",
      readTime: "8 min read",
    },
    {
      slug: "desert-castles-day-trip",
      title: "Desert Castles Day Trip from Amman: Perfect Itinerary",
      excerpt: "How to plan the ideal day trip from Amman to see the most impressive desert castles in eastern Jordan.",
      date: "January 25, 2023",
      readTime: "7 min read",
    },
    {
      slug: "qasr-kharana-architecture",
      title: "Qasr Kharana: The Mysterious Architecture of Jordan's Desert Fortress",
      excerpt: "Uncover the secrets behind the unique design and purpose of this enigmatic 8th-century structure.",
      date: "December 10, 2022",
      readTime: "6 min read",
    },
    {
      slug: "qasr-al-azraq-lawrence-headquarters",
      title: "Qasr al-Azraq: T.E. Lawrence's Desert Headquarters",
      excerpt: "Visit the historic fortress where Lawrence of Arabia based his operations during the Arab Revolt.",
      date: "November 5, 2022",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Desert Castles Travel Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore Jordan's fascinating Umayyad castles through our comprehensive guides, historical insights, and
          practical travel tips.
        </p>
      </div>

      <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Jordan+Desert+Castles"
          alt="Jordan Desert Castles panoramic view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Umayyad Legacy in the Desert</h2>
            <p className="text-xl">Discover the architectural treasures of early Islamic civilization</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            href={`/destinations/desert-castles/desert-castles-blog/${post.slug}`}
            key={post.slug}
            className="group"
          >
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

      <div className="mt-16 bg-amber-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">About Jordan's Desert Castles</h2>
        <p className="mb-6">
          The Desert Castles of eastern Jordan are a collection of early Islamic art and architecture dating primarily
          from the Umayyad period (7th-8th centuries). Despite their name, most are not actually fortified castles but
          rather hunting lodges, bathhouses, caravan stations, and retreat palaces for the Umayyad caliphs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Eastern Jordan, 30-100 km east of Amman</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Opening Hours:</span>
                <span>8:00 AM to 4:00 PM (winter), 8:00 AM to 6:00 PM (summer)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Entrance Fee:</span>
                <span>2-3 JOD per castle</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Time Needed:</span>
                <span>Full day to visit multiple castles</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Travel Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Best Time to Visit:</span>
                <span>Spring and autumn for pleasant temperatures</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">What to Bring:</span>
                <span>Water, sun protection, comfortable walking shoes</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Combine With:</span>
                <span>Azraq Wetland Reserve for a full eastern Jordan experience</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Transportation:</span>
                <span>Rental car or organized tour from Amman</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
