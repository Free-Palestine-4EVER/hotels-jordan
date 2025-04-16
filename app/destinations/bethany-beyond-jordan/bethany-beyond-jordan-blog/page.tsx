import Link from "next/link"
import Image from "next/image"

export default function BethanyBeyondJordanBlogPage() {
  const blogPosts = [
    {
      slug: "baptism-site-religious-significance",
      title: "The Baptism Site at Bethany Beyond the Jordan: Religious Significance and History",
      excerpt:
        "Explore the profound religious significance of Bethany Beyond the Jordan, the site where Jesus was baptized by John the Baptist according to Christian tradition.",
      date: "April 15, 2023",
      readTime: "8 min read",
    },
    {
      slug: "day-trip-guide-bethany-jordan",
      title: "Day Trip Guide to Bethany Beyond the Jordan",
      excerpt:
        "Plan the perfect day trip to this UNESCO World Heritage site with our comprehensive guide covering transportation, timing, and must-see spots.",
      date: "March 22, 2023",
      readTime: "6 min read",
    },
    {
      slug: "visiting-tips-bethany-beyond-jordan",
      title: "Essential Visiting Tips for Bethany Beyond the Jordan",
      excerpt:
        "Make the most of your visit to this sacred site with practical advice on timing, dress code, photography, and cultural etiquette.",
      date: "February 8, 2023",
      readTime: "5 min read",
    },
    {
      slug: "archaeological-discoveries-bethany-jordan",
      title: "Recent Archaeological Discoveries at Bethany Beyond the Jordan",
      excerpt:
        "Learn about the latest findings from ongoing excavations that continue to reveal new insights about this historically significant site.",
      date: "January 17, 2023",
      readTime: "7 min read",
    },
    {
      slug: "interfaith-significance-bethany-jordan",
      title: "The Interfaith Significance of Bethany Beyond the Jordan",
      excerpt:
        "Discover how this sacred site holds importance across multiple religious traditions and serves as a place of interfaith dialogue and understanding.",
      date: "December 5, 2022",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Bethany Beyond the Jordan Travel Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the sacred baptism site of Jesus Christ through our comprehensive guides, historical insights, and
          practical travel tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            href={`/destinations/bethany-beyond-jordan/bethany-beyond-jordan-blog/${post.slug}`}
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

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Plan Your Visit to Bethany Beyond the Jordan</h2>
        <p className="mb-6">
          Bethany Beyond the Jordan is a sacred site of immense historical and religious significance. Located near the
          Dead Sea, it's easily accessible from Amman and makes for a meaningful addition to any Jordan itinerary.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Eastern bank of the Jordan River, near the Dead Sea</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Opening Hours:</span>
                <span>8:00 AM to 5:00 PM (winter), 8:00 AM to 6:00 PM (summer)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Entrance Fee:</span>
                <span>12 JOD per person</span>
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
                <span className="font-medium mr-2">What to Wear:</span>
                <span>Modest clothing (shoulders and knees covered)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Combine With:</span>
                <span>Dead Sea, Mount Nebo, and Madaba for a full day trip</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Transportation:</span>
                <span>Taxi, rental car, or organized tour from Amman</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
