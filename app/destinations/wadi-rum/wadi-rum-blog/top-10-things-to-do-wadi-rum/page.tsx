import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export default function BlogPost() {
  // Find Wadi Rum in the jordanData
  const wadiRum = jordanData.regions
    .flatMap((region) => region.destinations)
    .find((destination) => destination.slug === "wadi-rum")

  if (!wadiRum) {
    notFound()
  }

  // Find this specific blog post
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "top-10-things-to-do-wadi-rum")

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/destinations/wadi-rum/wadi-rum-blog"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to Wadi Rum Blog
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
          <p className="lead text-xl">{blogPost.excerpt}</p>

          <p>
            Wadi Rum, also known as the Valley of the Moon, offers some of the most spectacular desert scenery in the
            world. This vast wilderness of red sands and towering rock formations has captivated travelers for
            centuries. Here are the top 10 things you absolutely must do when visiting this magical place.
          </p>

          <h2>1. Take a Jeep Tour Through the Desert</h2>
          <p>
            The classic way to explore Wadi Rum is on a 4x4 jeep tour with a Bedouin guide. These tours take you to the
            most spectacular rock formations, ancient inscriptions, and natural arches scattered throughout the desert.
            Most camps offer half-day or full-day tours that can be customized to your interests.
          </p>

          <h2>2. Spend a Night in a Bedouin Camp</h2>
          <p>
            From basic tents to luxurious "glamping" domes with clear roofs for stargazing, spending at least one night
            in the desert is essential. The silence of the desert and the brilliance of the night sky create an
            unforgettable experience.
          </p>

          <h2>3. Ride a Camel Across the Sands</h2>
          <p>
            For a more traditional desert experience, take a camel trek through Wadi Rum. The slower pace allows you to
            truly absorb the landscape and imagine what it was like for travelers crossing these sands centuries ago.
          </p>

          <h2>4. Climb Jebel Umm Adaami</h2>
          <p>
            For adventure seekers, climbing Jordan's highest mountain (1,854 meters) offers incredible panoramic views
            that extend into Saudi Arabia on clear days. The hike takes about 2-3 hours each way and is best done with a
            guide.
          </p>

          <h2>5. Watch the Sunset from Lawrence's Spring</h2>
          <p>
            Named after T.E. Lawrence (Lawrence of Arabia), this natural spring is surrounded by lush vegetation that
            stands in stark contrast to the red desert. It's one of the most picturesque spots to watch the sunset
            transform the desert colors.
          </p>

          <h2>6. Explore Khazali Canyon</h2>
          <p>
            This narrow fissure in the mountain contains ancient Thamudic and Nabataean inscriptions dating back
            thousands of years. The 100-meter long canyon is easy to explore on foot and offers a glimpse into the
            area's rich history.
          </p>

          <h2>7. Stargaze Under the Desert Sky</h2>
          <p>
            With minimal light pollution, Wadi Rum offers some of the best stargazing opportunities in the world. Many
            camps offer stargazing sessions with telescopes, but even with the naked eye, the night sky is spectacular.
          </p>

          <h2>8. Try Traditional Bedouin Cuisine</h2>
          <p>
            Experience a traditional zarb dinner—meat and vegetables cooked underground in a sand oven. This ancient
            cooking method produces incredibly tender and flavorful food, typically enjoyed communally around a fire.
          </p>

          <h2>9. Hot Air Balloon at Sunrise</h2>
          <p>
            For a truly special experience, take a hot air balloon ride at sunrise to see the desert awakening from
            above. The changing colors of the landscape as the sun rises create magical photo opportunities.
          </p>

          <h2>10. Visit the Seven Pillars of Wisdom</h2>
          <p>
            This iconic rock formation was named after T.E. Lawrence's famous book. Located near the visitor center,
            it's often the first impressive sight visitors see when entering Wadi Rum and makes for a perfect
            introduction to the area's dramatic geology.
          </p>

          <h2>Tips for Visiting Wadi Rum</h2>
          <ul>
            <li>Bring plenty of water, sun protection, and a hat—the desert sun is intense</li>
            <li>Wear comfortable shoes suitable for walking on sand</li>
            <li>Pack warm clothes for the evening, as desert temperatures drop significantly at night</li>
            <li>Book your camp in advance, especially during high season (March-May and September-November)</li>
            <li>Most activities can be arranged through your camp, but it's good to research options beforehand</li>
          </ul>

          <p>
            Whether you're seeking adventure, tranquility, or a connection with nature and ancient cultures, Wadi Rum
            offers experiences that will stay with you long after you've left the desert behind. The timeless landscape
            has a way of putting life into perspective and creating memories that last a lifetime.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "top-10-things-to-do-wadi-rum")
              .slice(0, 2)
              .map((post) => (
                <Link key={post.slug} href={`/destinations/wadi-rum/wadi-rum-blog/${post.slug}`} className="group">
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
      </div>
    </div>
  )
}
