import Link from "next/link"
import Image from "next/image"

export default function UmmQaisBlogPage() {
  const blogPosts = [
    {
      title: "Top Things to See and Do in Umm Qais, Jordan",
      slug: "top-things-to-see-and-do-umm-qais",
      excerpt:
        "Discover the ancient wonders and breathtaking views of one of Jordan's most underrated archaeological sites.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Why Umm Qais Should Be on Your Jordan Travel Itinerary",
      slug: "why-umm-qais-should-be-on-your-jordan-itinerary",
      excerpt: "Discover the compelling reasons to visit this hidden gem in northern Jordan.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Exploring the Ancient Ruins of Gadara in Umm Qais",
      slug: "exploring-ancient-ruins-gadara-umm-qais",
      excerpt: "A journey through time at the remarkable Greco-Roman city of Gadara.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Umm Qais: Where You Can See Syria, Israel, and the Sea of Galilee",
      slug: "umm-qais-see-syria-israel-sea-of-galilee",
      excerpt: "Experience the breathtaking tri-country panorama from this strategic hilltop location.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "A Day Trip to Umm Qais from Amman: What to Expect",
      slug: "day-trip-to-umm-qais-from-amman",
      excerpt: "Your complete guide to visiting Umm Qais as a day trip from Jordan's capital.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "The Roman Theater of Umm Qais: A Journey Through Time",
      slug: "roman-theater-umm-qais-journey-through-time",
      excerpt: "Discover the unique black basalt theater and its spectacular setting.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Best Views in Jordan: Sunset Over the Sea of Galilee from Umm Qais",
      slug: "best-views-jordan-sunset-sea-of-galilee-umm-qais",
      excerpt: "Experience the magical golden hour at one of Jordan's most scenic viewpoints.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Umm Qais Local Culture: Meet the People of Northern Jordan",
      slug: "umm-qais-local-culture-people-northern-jordan",
      excerpt: "Discover the traditions, cuisine, and hospitality of Jordan's northern communities.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Hiking Trails Around Umm Qais: Nature Meets History",
      slug: "hiking-trails-around-umm-qais-nature-history",
      excerpt: "Explore the beautiful landscapes surrounding the ancient city of Gadara.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Dining with a View: Where to Eat in Umm Qais",
      slug: "dining-with-view-where-to-eat-umm-qais",
      excerpt: "Savor traditional Jordanian cuisine while enjoying spectacular panoramic views.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Umm Qais Travel Guide & Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the ancient wonders, breathtaking views, and hidden treasures of Umm Qais, one of Jordan's most
          remarkable archaeological sites.
        </p>
      </header>

      <div className="relative w-full h-[500px] mb-16 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Panoramic view of Umm Qais ruins with the Sea of Galilee in the background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Explore Ancient Gadara</h2>
            <p className="text-xl">Where history, culture, and breathtaking views converge in northern Jordan</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link href={`/destinations/umm-qais/umm-qais-blog/${post.slug}`} key={index} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800">Read more →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Umm Qais</h2>
        <p className="text-gray-600 mb-4">
          Perched on a hill overlooking the Jordan Valley, Umm Qais (ancient Gadara) offers visitors a unique
          combination of spectacular ruins, breathtaking views, and rich history that spans millennia. Once a thriving
          Greco-Roman city and an important member of the Decapolis league, today Umm Qais stands as one of Jordan's
          most impressive yet undervisited archaeological treasures.
        </p>
        <p className="text-gray-600 mb-4">
          What makes Umm Qais truly special is its dramatic setting. From its vantage point, visitors can see three
          countries—Jordan, Syria, and Israel—as well as the shimmering waters of the Sea of Galilee (Lake Tiberias).
          This strategic location has made it an important settlement since ancient times, and today makes it one of the
          most scenic spots in all of Jordan.
        </p>
        <p className="text-gray-600">
          Unlike the more famous sites of Petra or Jerash, Umm Qais offers a more tranquil experience, often allowing
          visitors to explore its extensive ruins without crowds. The site combines Greco-Roman, Ottoman, and Byzantine
          influences, creating a fascinating historical tapestry that rewards those who make the journey to northern
          Jordan.
        </p>
      </div>
    </div>
  )
}
