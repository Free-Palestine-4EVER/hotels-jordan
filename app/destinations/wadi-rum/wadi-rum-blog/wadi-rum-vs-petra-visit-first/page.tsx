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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "wadi-rum-vs-petra-visit-first")

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
            When planning a trip to Jordan, two destinations invariably top the must-visit list: the ancient rose-red
            city of Petra and the otherworldly desert landscape of Wadi Rum. Both are UNESCO World Heritage Sites and
            offer experiences that will stay with you for a lifetime. But if you're mapping out your Jordan itinerary,
            you might be wondering which one to visit first. This isn't just a logistical question—the order in which
            you experience these iconic destinations can actually impact your overall impression of Jordan.
          </p>

          <h2>Petra and Wadi Rum: A Brief Comparison</h2>

          <h3>Petra: The Rose-Red City</h3>
          <p>
            Carved into rose-colored sandstone cliffs by the Nabataean people over 2,000 years ago, Petra is an
            archaeological wonder that combines monumental architecture with intricate detail. Its most famous
            structure, the Treasury (Al-Khazneh), is just the beginning of a vast complex that includes hundreds of
            tombs, a Roman-style theater, temples, and monasteries spread across a huge area.
          </p>

          <p>
            <strong>Experience type:</strong> Historical and archaeological, requiring significant walking on uneven
            terrain. Petra is primarily a daytime experience, though there are night tours by candlelight on select
            evenings.
          </p>

          <h3>Wadi Rum: The Valley of the Moon</h3>
          <p>
            Wadi Rum offers a completely different experience—a vast desert wilderness of red sands, towering sandstone
            mountains, natural arches, and narrow canyons. This is a place of natural rather than human-made wonders,
            though it does contain some ancient petroglyphs and inscriptions. Wadi Rum is also home to Bedouin
            communities who maintain aspects of their traditional lifestyle.
          </p>

          <p>
            <strong>Experience type:</strong> Nature and cultural immersion, typically explored by jeep, camel, or on
            foot. Wadi Rum is a 24-hour experience, with daytime exploration and nighttime stargazing and camping.
          </p>

          <h2>The Case for Visiting Petra First</h2>

          <h3>Historical Chronology</h3>
          <p>
            From a historical perspective, visiting Petra first makes sense. The Nabataean civilization that created
            Petra was already flourishing when the earliest known inscriptions appeared in what is now Wadi Rum. Seeing
            Petra first gives you a chronological understanding of the region's history.
          </p>

          <h3>Physical Considerations</h3>
          <p>
            Petra requires significant physical exertion—the main trail from the entrance to the Monastery is about 8km
            round trip with considerable elevation change. Visiting Petra when you're fresh rather than after the
            potential physical demands of desert camping might be preferable for some travelers.
          </p>

          <h3>Building Anticipation</h3>
          <p>
            There's something magical about the approach to Petra through the Siq, the narrow gorge that suddenly opens
            to reveal the Treasury. This moment of revelation is one of travel's great experiences, and some argue it
            should come before the wide-open vistas of Wadi Rum.
          </p>

          <h2>The Case for Visiting Wadi Rum First</h2>

          <h3>Geographical Flow</h3>
          <p>
            If you're coming from Amman or the north, Wadi Rum is further south than Petra. Visiting Wadi Rum first and
            then Petra on your way back north creates a more efficient route, potentially saving travel time.
          </p>

          <h3>Easing Into the Experience</h3>
          <p>
            Wadi Rum offers a gentler introduction to Jordan's landscapes and culture. The pace is slower, and while
            there are activities available, they're generally less demanding than a full day at Petra. Starting with
            Wadi Rum allows you to acclimatize to Jordan's heat and pace before tackling Petra's extensive site.
          </p>

          <h3>The Grand Finale Argument</h3>
          <p>
            Some travelers prefer to save what many consider Jordan's crown jewel—Petra—for last. This approach builds
            anticipation throughout your trip and ensures your journey ends with one of the world's most spectacular
            archaeological sites.
          </p>

          <h2>Practical Considerations</h2>

          <h3>Weather and Timing</h3>
          <p>
            Both sites can be extremely hot during summer months (June-August), but Wadi Rum, being a desert, can
            experience more extreme temperature variations. In winter, Petra's narrow canyons provide some shelter from
            cold winds, while Wadi Rum nights can be bitterly cold. Consider the season when deciding your order.
          </p>

          <h3>Duration at Each Site</h3>
          <p>
            Most visitors need at least one full day to see Petra's highlights, with many preferring two days to explore
            more thoroughly and at a relaxed pace. Wadi Rum typically requires one day for exploration plus an overnight
            stay for the full experience. Your available time might influence which you prioritize.
          </p>

          <h3>Accommodation Considerations</h3>
          <p>
            Petra has a wider range of accommodation options in nearby Wadi Musa, from luxury hotels to budget hostels.
            Wadi Rum's options are more limited and specialized, focusing on desert camps ranging from basic to
            luxurious "glamping" experiences. Your accommodation preferences might influence your itinerary.
          </p>

          <h2>Suggested Itineraries</h2>

          <h3>If You Visit Petra First</h3>
          <p>
            <strong>Day 1:</strong> Arrive in Petra in the morning, explore the main trail through the Siq to the
            Treasury, continue to the Royal Tombs and the Colonnaded Street. Return to your hotel in Wadi Musa.
          </p>
          <p>
            <strong>Day 2:</strong> Return to Petra to explore the Monastery (Al-Deir) and other areas you missed on day
            one. In the late afternoon, travel to Wadi Rum (approximately 1.5 hours by car).
          </p>
          <p>
            <strong>Day 3:</strong> Full day exploring Wadi Rum by jeep tour, with an overnight stay in a desert camp.
          </p>
          <p>
            <strong>Day 4:</strong> Morning activity in Wadi Rum (perhaps a camel ride or sunrise viewing), then depart
            for your next destination.
          </p>

          <h3>If You Visit Wadi Rum First</h3>
          <p>
            <strong>Day 1:</strong> Arrive in Wadi Rum in the afternoon, settle into your camp, and take a sunset jeep
            tour. Enjoy dinner and stargazing at your desert camp.
          </p>
          <p>
            <strong>Day 2:</strong> Morning activity in Wadi Rum, then travel to Petra in the afternoon. Consider
            visiting Petra by Night if your timing aligns (it runs on Monday, Wednesday, and Thursday evenings).
          </p>
          <p>
            <strong>Day 3:</strong> Full day exploring Petra's main attractions, including the Treasury, Royal Tombs,
            and Colonnaded Street.
          </p>
          <p>
            <strong>Day 4:</strong> Second day in Petra to visit the Monastery and other sites, then depart for your
            next destination.
          </p>

          <h2>The Verdict: Which Should You Visit First?</h2>
          <p>
            There's no definitive answer to which site you should visit first—both approaches have their merits, and
            your decision should be based on your personal preferences, physical condition, and practical
            considerations.
          </p>

          <p>
            <strong>Visit Petra first if:</strong>
          </p>
          <ul>
            <li>You're particularly interested in history and archaeology</li>
            <li>You want to tackle the more physically demanding site while you're fresh</li>
            <li>You're visiting during extreme weather and want to start with the more sheltered location</li>
          </ul>

          <p>
            <strong>Visit Wadi Rum first if:</strong>
          </p>
          <ul>
            <li>You're coming from Aqaba or the south</li>
            <li>You want to ease into your Jordan experience with a more relaxed setting</li>
            <li>You prefer to save what many consider the highlight (Petra) for last</li>
            <li>You want to experience desert camping before hotel comforts</li>
          </ul>

          <p>
            Whichever order you choose, both Petra and Wadi Rum will leave you with unforgettable memories of Jordan's
            rich history and breathtaking landscapes. The contrast between these two UNESCO World Heritage Sites—one a
            testament to human ingenuity and artistry, the other a showcase of nature's grandeur—is part of what makes a
            visit to Jordan so special.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "wadi-rum-vs-petra-visit-first")
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
