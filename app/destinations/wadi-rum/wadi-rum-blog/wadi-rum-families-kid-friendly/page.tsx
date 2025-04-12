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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "wadi-rum-families-kid-friendly")

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
            Wadi Rum might not be the first destination that comes to mind when planning a family vacation, but this
            magnificent desert wilderness offers a surprising array of kid-friendly adventures that can create lasting
            memories for travelers of all ages. Far from being just an extreme environment for adventure seekers, Wadi
            Rum provides children with a natural playground that stimulates imagination, teaches resilience, and offers
            experiences they simply can't find at home.
          </p>

          <h2>Why Wadi Rum Works for Families</h2>
          <p>
            Children are natural explorers, and Wadi Rum is the ultimate exploration ground. The desert's dramatic
            landscapes—with mountains that seem to rise from nowhere, natural rock bridges, and vast open spaces—create
            a sense of wonder that resonates with kids. Many parents report that their children, who might be glued to
            screens at home, become completely engaged with their surroundings in Wadi Rum.
          </p>

          <p>
            The Bedouin guides who lead tours through the desert are often excellent with children, understanding
            intuitively how to make the experience fun and educational. Many have children of their own and know how to
            communicate the desert's magic in ways kids can understand.
          </p>

          <h2>Best Activities for Families in Wadi Rum</h2>

          <h3>Jeep Tours with Kid-Friendly Stops</h3>
          <p>
            The classic jeep tour of Wadi Rum can be easily adapted for families. Look for tours that include stops
            where kids can be active:
          </p>
          <ul>
            <li>
              <strong>Sand dunes:</strong> Children love climbing up and sliding down the red sand dunes found in
              several locations throughout Wadi Rum.
            </li>
            <li>
              <strong>Rock bridges:</strong> Some of the smaller natural bridges, like Um Frouth, are relatively easy to
              climb with supervision and provide a great sense of achievement.
            </li>
            <li>
              <strong>Echo canyons:</strong> Narrow canyons where kids can experience impressive echoes are always a
              hit.
            </li>
            <li>
              <strong>Ancient inscriptions:</strong> Seeing drawings made by people thousands of years ago can spark
              children's imagination about the past.
            </li>
          </ul>

          <p>
            When booking a jeep tour, be sure to communicate that you're traveling with children and ask for a
            family-friendly itinerary. Most tour operators are happy to customize the experience, perhaps including more
            stops and keeping the pace relaxed.
          </p>

          <h3>Camel Rides</h3>
          <p>
            A short camel ride is often the highlight of a child's visit to Wadi Rum. These gentle animals move at a
            slow pace that's perfect for taking in the scenery. For younger children, they can ride with a parent, while
            older kids can have their own camel with a guide leading it. Even a 30-minute ride provides the experience,
            though some families opt for longer treks.
          </p>

          <h3>Sand Art and Bottle Filling</h3>
          <p>
            Many camps offer the opportunity for children to create colorful sand art by filling small bottles with
            layers of differently colored sand from the desert. This makes for a perfect souvenir that kids have created
            themselves.
          </p>

          <h3>Star Gazing</h3>
          <p>
            The night sky in Wadi Rum is spectacular, with minimal light pollution revealing stars, planets, and the
            Milky Way in breathtaking clarity. For many urban children, this might be their first experience of truly
            dark skies. Some camps offer simple astronomy sessions with telescopes, but even just lying on a mat and
            looking up can be magical.
          </p>

          <h3>Bedouin Music and Culture</h3>
          <p>
            Evening entertainment at camps often includes traditional Bedouin music, which can fascinate children. Some
            camps encourage guests to try playing simple instruments or learning basic dance moves. This cultural
            exchange helps children understand that people live differently around the world.
          </p>

          <h2>Family-Friendly Accommodation in Wadi Rum</h2>
          <p>When choosing accommodation in Wadi Rum with children, consider these options:</p>

          <h3>Family Tents in Traditional Camps</h3>
          <p>
            Many traditional Bedouin camps offer larger family tents that can accommodate parents and children together.
            These provide an authentic experience while keeping the family unit together.
          </p>

          <h3>Bubble Tents</h3>
          <p>
            The transparent or semi-transparent "bubble" tents have become popular in Wadi Rum and are a hit with kids
            who love the novelty of sleeping under the stars while still being in a protected environment. Some camps
            offer family-sized bubbles.
          </p>

          <h3>Camps with Private Bathrooms</h3>
          <p>
            While traditional camps often have shared facilities, several mid-range and luxury options now offer private
            bathrooms attached to each tent, which many families find more convenient.
          </p>

          <h3>Recommended Family-Friendly Camps</h3>
          <ul>
            <li>
              <strong>Wadi Rum Night Luxury Camp:</strong> Offers family domes and tents with private bathrooms, plus
              activities specifically designed for children.
            </li>
            <li>
              <strong>Memories Aicha Luxury Camp:</strong> Features family suites and organizes child-friendly
              activities like sand boarding and simple desert crafts.
            </li>
            <li>
              <strong>Rahayeb Desert Camp:</strong> A mid-range option with family tents and guides who are particularly
              good with children.
            </li>
          </ul>

          <h2>Practical Tips for Visiting Wadi Rum with Kids</h2>

          <h3>Timing Your Visit</h3>
          <p>
            The extreme summer heat (June-August) can be challenging for children. Spring (March-May) and fall
            (September-November) offer more moderate temperatures that are better suited for family visits.
          </p>

          <h3>Packing Essentials</h3>
          <p>Beyond the usual desert essentials (sunscreen, hats, etc.), consider bringing:</p>
          <ul>
            <li>Headlamps for each child – they love having their own light source at night</li>
            <li>A small backpack for each child with their own water bottle and snacks</li>
            <li>Wet wipes for quick clean-ups when water is scarce</li>
            <li>A favorite stuffed animal or comfort item for sleeping in a new environment</li>
            <li>Simple games that don't require batteries or electricity for evening entertainment</li>
            <li>A star chart or constellation guide to make stargazing more engaging</li>
          </ul>

          <h3>Health and Safety</h3>
          <p>While Wadi Rum is generally safe, keep these considerations in mind:</p>
          <ul>
            <li>Children dehydrate faster than adults, so ensure they drink water regularly</li>
            <li>Reapply sunscreen frequently, even on cloudy days</li>
            <li>Bring basic first aid supplies, including bandages for minor scrapes</li>
            <li>Consider bringing children's pain/fever medication as it may not be readily available</li>
            <li>Ensure children wear closed-toe shoes for walking on rocky terrain</li>
          </ul>

          <h3>Managing Expectations</h3>
          <p>
            Prepare your children for the desert experience beforehand. Explain that there will be limited electricity,
            possibly no Wi-Fi, and basic bathroom facilities. Frame these as part of the adventure rather than
            inconveniences. Most children adapt quickly when they understand what to expect.
          </p>

          <h2>Educational Opportunities</h2>
          <p>A visit to Wadi Rum offers numerous opportunities for learning:</p>
          <ul>
            <li>Geology: The dramatic rock formations provide a visual lesson in how landscapes form</li>
            <li>Astronomy: The clear night skies are perfect for learning about stars and planets</li>
            <li>History: Ancient inscriptions and T.E. Lawrence's history in the area offer historical context</li>
            <li>Cultural exchange: Interaction with Bedouin guides teaches children about different ways of life</li>
            <li>Environmental awareness: The desert ecosystem demonstrates adaptation and resource conservation</li>
          </ul>

          <h2>Sample Family Itinerary</h2>
          <p>
            <strong>Day 1:</strong>
          </p>
          <ul>
            <li>Arrive at Wadi Rum Visitor Center by mid-morning</li>
            <li>Meet your guide and transfer to your camp to drop off luggage</li>
            <li>Short jeep tour (2-3 hours) with kid-friendly stops including sand dunes for sliding</li>
            <li>Return to camp for late afternoon rest time</li>
            <li>Sunset viewing from a comfortable spot near camp</li>
            <li>Dinner and evening around the campfire with Bedouin music</li>
            <li>Early stargazing before bedtime</li>
          </ul>

          <p>
            <strong>Day 2:</strong>
          </p>
          <ul>
            <li>Breakfast at camp</li>
            <li>Morning camel ride (30-60 minutes depending on children's ages)</li>
            <li>Sand art activity at camp</li>
            <li>Lunch and rest during the hottest part of the day</li>
            <li>Afternoon jeep tour to different sites, including an easy rock bridge to climb</li>
            <li>Return to camp for dinner</li>
            <li>More extensive stargazing session</li>
          </ul>

          <p>
            A visit to Wadi Rum with children offers a rare opportunity to disconnect from technology and reconnect as a
            family while experiencing one of the world's most spectacular landscapes. The combination of adventure,
            cultural immersion, and natural beauty creates memories that will stay with your children long after the
            sand has been shaken from their shoes.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "wadi-rum-families-kid-friendly")
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
