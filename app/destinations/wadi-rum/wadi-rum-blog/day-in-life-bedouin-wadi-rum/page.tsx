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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "day-in-life-bedouin-wadi-rum")

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
            The Bedouin people have inhabited the deserts of Jordan for thousands of years, developing a unique way of
            life perfectly adapted to one of Earth's most challenging environments. While tourism has brought changes to
            traditional Bedouin life in Wadi Rum, many aspects of their culture, customs, and daily routines remain
            intact. This glimpse into a day in the life of a Bedouin in Wadi Rum offers insight into a fascinating
            culture that has stood the test of time.
          </p>

          <h2>Dawn: The Day Begins</h2>
          <p>
            For the Bedouin, the day typically begins before sunrise. In a desert environment, the early morning hours
            provide the coolest temperatures for essential tasks. The first order of business is often prayer—most
            Bedouin are devout Muslims who observe the five daily prayers, with the first (Fajr) occurring at dawn.
          </p>

          <p>
            After prayer, it's time to rekindle the fire for morning tea. Tea is far more than just a beverage in
            Bedouin culture—it's a cornerstone of hospitality and daily life. The preparation follows a specific ritual,
            with tea typically boiled three times with generous amounts of sugar and often flavored with sage, mint, or
            other desert herbs.
          </p>

          <h2>Morning: Tending to Essential Needs</h2>
          <p>
            Traditionally, morning hours would be dedicated to tending livestock—primarily goats and camels. While fewer
            Bedouin maintain large herds today, those who do take their animals to graze in areas where desert plants
            grow. Camels can be left to roam relatively freely, as they know to return to their owners, but goats
            require more supervision.
          </p>

          <p>
            For Bedouin involved in tourism, mornings might instead be spent preparing for the day's visitors—checking
            jeeps, organizing supplies for tours, or preparing accommodations for new guests arriving at camps.
          </p>

          <p>
            Women typically focus on domestic tasks in the morning, including bread making. Traditional Bedouin bread
            (arbood) is baked in the embers of a fire, creating a simple but delicious flatbread that forms a staple of
            the diet. Water collection and conservation are also critical morning tasks, with every drop carefully
            managed.
          </p>

          <h2>Midday: Seeking Shelter</h2>
          <p>
            As the sun climbs higher and temperatures rise, activity slows down. The harsh midday heat makes this a time
            for seeking shade and resting. Traditionally, this would be inside a goat-hair tent, which is remarkably
            effective at providing cool shade. The tight weave of the fabric blocks the sun while allowing air to
            circulate.
          </p>

          <p>
            This period might be used for socializing, storytelling, or handicrafts. Many Bedouin women are skilled at
            weaving and embroidery, creating intricate designs that tell stories of their tribal heritage. Men might use
            this time for making or repairing tools and equipment.
          </p>

          <p>
            For those working with tourists, midday might involve serving lunch to visitors or guiding them to shaded
            areas for their own rest period. A simple lunch typically consists of bread, yogurt, olive oil, and za'atar
            (a Middle Eastern herb mix).
          </p>

          <h2>Afternoon: Work Resumes</h2>
          <p>
            As temperatures begin to cool in the late afternoon, activity picks up again. This is often when Bedouin
            guides take tourists on jeep tours or camel rides to see the sunset from prime locations. The changing light
            creates spectacular effects on the red sandstone formations, and guides know exactly where to position
            visitors for the best experience.
          </p>

          <p>
            For those maintaining more traditional lifestyles, the afternoon is when livestock are gathered and brought
            back to camp. It's also a time for collecting firewood for the evening's cooking and warmth, as desert
            nights can be surprisingly cold.
          </p>

          <h2>Evening: Community Time</h2>
          <p>
            The evening meal is typically the main meal of the day and often a communal affair. Traditional Bedouin
            hospitality dictates that guests are always welcomed and fed, even if resources are limited. A special
            occasion might call for mansaf (Jordan's national dish of lamb cooked in fermented dried yogurt and served
            with rice) or zarb (meat and vegetables cooked in an underground sand oven).
          </p>

          <p>
            After dinner, the community gathers around the fire. This is a time for coffee ceremonies, music, and
            storytelling. Bedouin coffee (gahwa) is prepared in a distinctive long-beaked pot and served in small cups,
            often flavored with cardamom. The coffee ceremony has its own etiquette and is an important social ritual.
          </p>

          <p>
            Music is another essential element of evening gatherings. Traditional instruments like the rababa (a
            single-stringed violin) and the shabbaba (a type of flute) accompany songs that tell stories of tribal
            history, love, and desert life. Poetry has always been highly valued in Bedouin culture, with skilled poets
            earning great respect.
          </p>

          <h2>Night: Under the Stars</h2>
          <p>
            As the fire dies down, it's time for the final prayer of the day and then sleep. Traditionally, Bedouin
            might sleep inside their tents or outside under the stars, depending on the weather. Their intimate
            knowledge of the night sky served not just for navigation but as a calendar marking seasonal changes that
            would affect migration patterns.
          </p>

          <p>
            Today, those running tourist camps might stay up later, ensuring guests are comfortable and perhaps offering
            stargazing sessions with explanations of how the stars guided Bedouin life for centuries.
          </p>

          <h2>The Changing Bedouin Way of Life</h2>
          <p>
            While this description captures elements of traditional Bedouin daily life, it's important to note that
            Bedouin culture in Wadi Rum has evolved significantly in recent decades. Many Bedouin now live in permanent
            settlements rather than moving seasonally with their herds. Tourism has become a major source of income,
            with many working as guides, camp operators, or drivers.
          </p>

          <p>
            Modern technology has also made inroads—it's not uncommon to see solar panels outside traditional tents,
            powering mobile phones that keep Bedouin connected to family members and the outside world. Many younger
            Bedouin are educated in schools and some pursue higher education in cities.
          </p>

          <p>
            Despite these changes, core values of Bedouin culture remain strong: hospitality, honor, community
            solidarity, and a deep connection to the desert landscape. The Bedouin of Wadi Rum have managed to adapt to
            changing circumstances while preserving the essence of their cultural identity.
          </p>

          <p>
            For visitors to Wadi Rum, spending time with Bedouin hosts offers more than just a glimpse into an exotic
            lifestyle—it's an opportunity to learn from a culture that has mastered the art of living sustainably in one
            of Earth's most challenging environments, finding abundance and joy in a landscape that might seem barren to
            outsiders.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "day-in-life-bedouin-wadi-rum")
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
