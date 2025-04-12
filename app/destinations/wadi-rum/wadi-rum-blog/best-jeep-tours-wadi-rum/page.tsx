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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "best-jeep-tours-wadi-rum")

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
            Exploring Wadi Rum by jeep is the most popular and efficient way to experience the vast desert landscape.
            With distances between major attractions often spanning several kilometers across soft sand, a 4x4 vehicle
            with a knowledgeable Bedouin driver is essential for making the most of your time in this magnificent
            wilderness.
          </p>

          <h2>Why Take a Jeep Tour in Wadi Rum?</h2>
          <p>
            While hiking and camel trekking offer their own unique perspectives, jeep tours allow you to cover much more
            ground and see a wider variety of Wadi Rum's spectacular formations and historical sites. The open-back
            jeeps used in most tours provide excellent visibility and photo opportunities, while the skilled Bedouin
            drivers navigate the challenging terrain with impressive expertise.
          </p>

          <h2>Types of Jeep Tours Available</h2>

          <h3>Short Tours (2-3 hours)</h3>
          <p>
            Perfect for visitors with limited time, these tours typically cover 3-5 major sites such as the Seven
            Pillars of Wisdom, Lawrence's Spring, and Khazali Canyon. Prices usually start around 35-45 JOD per jeep
            (not per person).
          </p>

          <h3>Half-Day Tours (4-5 hours)</h3>
          <p>
            These more comprehensive tours allow you to see 6-8 sites and often include a stop for Bedouin tea in a
            scenic location. Expect to pay 60-70 JOD per jeep.
          </p>

          <h3>Full-Day Tours (7-8 hours)</h3>
          <p>
            For those who want to explore Wadi Rum thoroughly, full-day tours cover all the major attractions plus some
            off-the-beaten-path locations. These tours typically include lunch in the desert and cost 90-120 JOD per
            jeep.
          </p>

          <h3>Sunset/Sunrise Special Tours</h3>
          <p>
            These specialized tours focus on bringing you to the perfect viewpoints for witnessing the desert's magical
            transformation during the golden hours. Sunset tours often end at your camp, while sunrise tours typically
            start from your overnight accommodation.
          </p>

          <h3>Custom Tours</h3>
          <p>
            Most operators are happy to customize itineraries based on your specific interests, whether that's
            photography, geology, history, or simply finding the most peaceful spots away from other tourists.
          </p>

          <h2>Top Jeep Tour Operators in Wadi Rum</h2>

          <h3>Wadi Rum Nomads</h3>
          <p>
            One of the most professional operations in Wadi Rum, they offer well-maintained vehicles and highly
            knowledgeable guides who speak excellent English. Their tours emphasize authentic experiences and
            environmental responsibility.
          </p>

          <h3>Rum Stars Camp</h3>
          <p>
            Run by a local Bedouin family, this operation combines excellent tours with overnight stays at their
            well-regarded camp. Their guides are particularly good at finding less-visited spots even during busy
            periods.
          </p>

          <h3>Wadi Rum Bedouin Guide</h3>
          <p>
            Led by Mohammed Alzalabieh, this smaller operation offers personalized service and guides who are
            particularly knowledgeable about the area's geology and history. They're known for flexibility and
            accommodating special requests.
          </p>

          <h3>Bedouin Directions</h3>
          <p>
            Operated by Mehedi Saleh, this company has built a strong reputation for reliability and authentic
            experiences. Their guides are especially good at sharing Bedouin culture and traditions during tours.
          </p>

          <h2>Must-See Stops on Your Jeep Tour</h2>

          <h3>Lawrence's Spring</h3>
          <p>
            Named after T.E. Lawrence (Lawrence of Arabia), this natural spring offers a surprising patch of greenery in
            the desert and beautiful views from the hill above it.
          </p>

          <h3>Khazali Canyon</h3>
          <p>
            A narrow fissure in the mountain containing ancient Thamudic and Nabataean inscriptions dating back
            thousands of years. The 100-meter long canyon is easy to explore on foot.
          </p>

          <h3>Little Bridge</h3>
          <p>
            One of several natural rock bridges in Wadi Rum, this one is relatively easy to climb for spectacular views
            and photos.
          </p>

          <h3>Um Frouth Rock Bridge</h3>
          <p>
            A more dramatic and higher arch that makes for impressive photographs, especially in the late afternoon
            light.
          </p>

          <h3>Red Sand Dunes</h3>
          <p>
            Several areas of Wadi Rum feature stunning red sand dunes that are perfect for climbing (and sliding down).
            The contrast between the red sand and blue sky makes for incredible photos.
          </p>

          <h3>Burdah Rock Bridge</h3>
          <p>
            One of the highest natural arches in the world, reaching it requires a challenging climb that's not for
            everyone, but even viewing it from below is impressive.
          </p>

          <h2>Tips for Getting the Most from Your Jeep Tour</h2>
          <ul>
            <li>Book directly with operators rather than through hotels or online platforms to get better rates</li>
            <li>Bring plenty of water, sun protection, and a scarf to cover your face during dusty drives</li>
            <li>
              Start early in the morning or late afternoon to avoid the midday heat and harsh light for photography
            </li>
            <li>Discuss your interests with your guide at the beginning so they can tailor stops accordingly</li>
            <li>Don't overpack your itinerary—leave time to simply enjoy the scenery and silence</li>
            <li>Tip your driver/guide if you're satisfied with the service (5-10 JOD is customary for a day tour)</li>
          </ul>

          <h2>Environmental Considerations</h2>
          <p>
            While jeep tours are the standard way to explore Wadi Rum, they do have an environmental impact. Choose
            operators who demonstrate respect for the desert environment by staying on established tracks, properly
            disposing of waste, and educating visitors about conservation. The best guides will emphasize the importance
            of preserving this unique ecosystem for future generations.
          </p>

          <p>
            A jeep tour through Wadi Rum is more than just sightseeing—it's an immersion into a landscape that has
            remained largely unchanged for thousands of years. With the right guide, you'll come away with not just
            spectacular photos but also a deeper understanding of the desert's natural history, cultural significance,
            and timeless beauty.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "best-jeep-tours-wadi-rum")
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
