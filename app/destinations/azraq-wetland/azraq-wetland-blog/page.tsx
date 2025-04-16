import Image from "next/image"
import Link from "next/link"

export default function AzraqWetlandBlogPage() {
  const blogPosts = [
    {
      slug: "birdwatching-guide-azraq-wetland",
      title: "Birdwatching Guide to Azraq Wetland Reserve",
      excerpt: "Discover the diverse bird species that visit this unique desert oasis during migration seasons.",
      date: "March 15, 2023",
      readTime: "7 min read",
    },
    {
      slug: "conservation-efforts-azraq",
      title: "Conservation Efforts at Azraq: Saving a Desert Oasis",
      excerpt:
        "Learn about the environmental challenges and restoration projects that have helped revive this crucial ecosystem.",
      date: "February 20, 2023",
      readTime: "8 min read",
    },
    {
      slug: "desert-oasis-azraq-wetland",
      title: "Desert Oasis: The Unique Ecosystem of Azraq Wetland",
      excerpt:
        "Explore the fascinating contrast between desert and wetland in one of Jordan's most unique natural reserves.",
      date: "January 25, 2023",
      readTime: "6 min read",
    },
    {
      slug: "day-trip-azraq-desert-castles",
      title: "Day Trip: Combining Azraq Wetland and Desert Castles",
      excerpt: "How to plan the perfect eastern Jordan excursion combining natural and historical attractions.",
      date: "December 10, 2022",
      readTime: "9 min read",
    },
    {
      slug: "wildlife-photography-azraq",
      title: "Wildlife Photography in Azraq: Tips and Best Locations",
      excerpt:
        "Expert advice for capturing stunning images of birds, water buffalo, and other wildlife in the wetland reserve.",
      date: "November 5, 2022",
      readTime: "7 min read",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Azraq Wetland Reserve Travel Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover Jordan's unique desert oasis through our comprehensive guides, conservation insights, and practical
          travel tips.
        </p>
      </div>

      <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Azraq+Wetland+Reserve"
          alt="Azraq Wetland Reserve panoramic view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">An Oasis in the Desert</h2>
            <p className="text-xl">Where water brings life to the eastern Jordanian desert</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/destinations/azraq-wetland/azraq-wetland-blog/${post.slug}`} key={post.slug} className="group">
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
        <h2 className="text-2xl font-bold mb-4">About Azraq Wetland Reserve</h2>
        <p className="mb-6">
          The Azraq Wetland Reserve is a unique oasis in the heart of Jordan's eastern desert. Once a major stopover for
          millions of migratory birds, the wetland faced severe water depletion in the 20th century but has been
          partially restored through conservation efforts. Today, it stands as a testament to successful ecological
          restoration and provides a crucial habitat for wildlife in an otherwise arid region.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Eastern Jordan, 100 km east of Amman</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Opening Hours:</span>
                <span>9:00 AM to 5:00 PM (winter), 9:00 AM to 6:00 PM (summer)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Entrance Fee:</span>
                <span>2 JOD per person</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Time Needed:</span>
                <span>1-2 hours</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Travel Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">Best Time to Visit:</span>
                <span>Winter and spring for bird migration seasons</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">What to Bring:</span>
                <span>Binoculars, camera with zoom lens, water, sun protection</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Combine With:</span>
                <span>Desert Castles (Qasr Amra, Qasr Kharana, Qasr Azraq)</span>
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
