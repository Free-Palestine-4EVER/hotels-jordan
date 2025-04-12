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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "hiking-climbing-spots-wadi-rum")

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
            While Wadi Rum is famous for its jeep tours and camel treks, the desert's dramatic sandstone mountains and
            rock formations offer some of the most spectacular hiking and climbing opportunities in the Middle East.
            From casual walks to technical multi-pitch climbs, Wadi Rum provides adventures for all skill levels against
            a backdrop of breathtaking desert scenery.
          </p>

          <h2>Hiking in Wadi Rum</h2>

          <p>
            Hiking in Wadi Rum offers a different perspective than vehicle-based exploration. Moving at a slower pace
            allows you to notice the desert's subtle details—the intricate erosion patterns in the rock, the surprising
            plant life, and the absolute silence that can only be experienced on foot.
          </p>

          <h3>Important Considerations Before Hiking</h3>

          <ul>
            <li>
              <strong>Local Guide Requirement:</strong> Independent hiking is not permitted in most areas of Wadi Rum
              Protected Area. A local Bedouin guide is required for most routes.
            </li>
            <li>
              <strong>Weather Considerations:</strong> Hiking is best during spring (March-May) and autumn
              (September-November). Summer temperatures can exceed 40°C (104°F), making hiking dangerous except in early
              morning.
            </li>
            <li>
              <strong>Water:</strong> Carry at least 3 liters per person for a day hike, more in hot weather.
            </li>
            <li>
              <strong>Sun Protection:</strong> Hat, sunglasses, sunscreen, and lightweight long-sleeved clothing are
              essential.
            </li>
            <li>
              <strong>Footwear:</strong> Sturdy hiking shoes with good grip are necessary for the rocky, sandy terrain.
            </li>
          </ul>

          <h3>Top Hiking Routes in Wadi Rum</h3>

          <h4>1. Jebel Umm Adaami</h4>
          <p>
            Jordan's highest mountain (1,854m) offers a challenging but non-technical hike with spectacular panoramic
            views extending into Saudi Arabia on clear days.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Moderate to challenging
            </li>
            <li>
              <strong>Duration:</strong> 5-6 hours round trip
            </li>
            <li>
              <strong>Starting point:</strong> Southern edge of Wadi Rum Protected Area
            </li>
            <li>
              <strong>Highlights:</strong> Summit views, unique high-altitude vegetation, border marker at the top
            </li>
            <li>
              <strong>Best time:</strong> Early morning to avoid heat and maximize visibility
            </li>
          </ul>

          <h4>2. Jebel Burdah Rock Bridge</h4>
          <p>
            This natural rock bridge is one of Wadi Rum's most iconic formations. The hike involves some scrambling and
            a few challenging sections but rewards with the opportunity to stand on one of the highest natural arches in
            the world.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Moderate to challenging with some exposed sections
            </li>
            <li>
              <strong>Duration:</strong> 3-4 hours round trip
            </li>
            <li>
              <strong>Starting point:</strong> Eastern part of Wadi Rum
            </li>
            <li>
              <strong>Highlights:</strong> The spectacular rock bridge, panoramic views from the top
            </li>
            <li>
              <strong>Note:</strong> Not suitable for those with a fear of heights
            </li>
          </ul>

          <h4>3. Jebel Khazali Canyon</h4>
          <p>
            This narrow canyon offers an accessible hiking experience suitable for most fitness levels. The canyon
            contains ancient Thamudic inscriptions and provides welcome shade.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Easy to moderate
            </li>
            <li>
              <strong>Duration:</strong> 1-2 hours
            </li>
            <li>
              <strong>Starting point:</strong> Near the popular Khazali Canyon site
            </li>
            <li>
              <strong>Highlights:</strong> Ancient inscriptions, narrow passages, interesting rock formations
            </li>
            <li>
              <strong>Accessibility:</strong> The first section is suitable for most visitors, while the full canyon
              requires more scrambling
            </li>
          </ul>

          <h4>4. Jebel Umm Fruth Rock Bridge</h4>
          <p>
            A shorter, less challenging alternative to Burdah Rock Bridge, this natural arch is accessible via a
            relatively easy scramble.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Easy to moderate
            </li>
            <li>
              <strong>Duration:</strong> 30-45 minutes round trip
            </li>
            <li>
              <strong>Starting point:</strong> Near the rock bridge in central Wadi Rum
            </li>
            <li>
              <strong>Highlights:</strong> Photogenic rock bridge, relatively easy access
            </li>
            <li>
              <strong>Best for:</strong> Families and those wanting a shorter hiking experience
            </li>
          </ul>

          <h4>5. Jebel Rum (Jebel Makharas)</h4>
          <p>
            The imposing mountain that dominates the western edge of Wadi Rum village offers several hiking routes of
            varying difficulty.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Moderate to challenging
            </li>
            <li>
              <strong>Duration:</strong> 6-8 hours round trip for the main summit
            </li>
            <li>
              <strong>Starting point:</strong> Near Rum village
            </li>
            <li>
              <strong>Highlights:</strong> Spectacular views over the entire Wadi Rum area, interesting rock formations
            </li>
            <li>
              <strong>Variations:</strong> Several routes of different difficulties, including the challenging but
              rewarding Thamudic Route
            </li>
          </ul>

          <h4>6. Lawrence's Spring</h4>
          <p>
            A relatively easy hike leads to this natural spring named after T.E. Lawrence, offering beautiful views over
            the desert from the hillside.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Easy
            </li>
            <li>
              <strong>Duration:</strong> 1 hour round trip
            </li>
            <li>
              <strong>Starting point:</strong> Near the spring parking area
            </li>
            <li>
              <strong>Highlights:</strong> Desert vegetation around the spring, historical connection, panoramic views
            </li>
            <li>
              <strong>Best for:</strong> Beginners and those wanting a shorter hike
            </li>
          </ul>

          <h4>7. Barrah Canyon</h4>
          <p>
            This impressive canyon offers a relatively flat hike between towering sandstone cliffs, making it accessible
            for most fitness levels.
          </p>
          <ul>
            <li>
              <strong>Difficulty:</strong> Easy to moderate
            </li>
            <li>
              <strong>Duration:</strong> 2-3 hours one way (usually combined with jeep transport)
            </li>
            <li>
              <strong>Starting point:</strong> Northern entrance of the canyon
            </li>
            <li>
              <strong>Highlights:</strong> Dramatic canyon walls, desert vegetation, sense of isolation
            </li>
            <li>
              <strong>Note:</strong> Often combined with a jeep drop-off or pick-up at one end
            </li>
          </ul>

          <h2>Rock Climbing in Wadi Rum</h2>

          <p>
            Wadi Rum has earned international recognition as a world-class climbing destination. The desert's towering
            sandstone formations offer everything from single-pitch sport routes to multi-day traditional climbing
            adventures on virgin walls.
          </p>

          <h3>Climbing Characteristics</h3>

          <ul>
            <li>
              <strong>Rock type:</strong> Sandstone of varying quality (from solid to quite friable)
            </li>
            <li>
              <strong>Route styles:</strong> Predominantly traditional (trad) climbing with limited sport routes
            </li>
            <li>
              <strong>Grades:</strong> Range from beginner-friendly 5.6 (French 4c) to challenging 5.13 (French 8a)
            </li>
            <li>
              <strong>Route lengths:</strong> Single-pitch cragging to 800m multi-pitch routes
            </li>
            <li>
              <strong>Ethics:</strong> Clean climbing emphasized; minimal use of fixed protection to preserve the
              natural environment
            </li>
          </ul>

          <h3>Top Climbing Areas in Wadi Rum</h3>

          <h4>1. Jebel Rum East Face</h4>
          <p>
            The massive east face of Jebel Rum offers some of the most classic multi-pitch routes in the desert,
            including the famous "The Beauty."
          </p>
          <ul>
            <li>
              <strong>Route highlight:</strong> "The Beauty" - 400m, 8 pitches, 5.10c (French 6b)
            </li>
            <li>
              <strong>Character:</strong> Long traditional routes on generally good quality sandstone
            </li>
            <li>
              <strong>Best for:</strong> Experienced trad climbers looking for adventure routes
            </li>
            <li>
              <strong>Access:</strong> Approximately 1-hour approach hike from Rum village
            </li>
          </ul>

          <h4>2. Barrah Canyon</h4>
          <p>
            The towering walls of Barrah Canyon offer numerous climbing possibilities, from single-pitch routes to major
            big wall challenges.
          </p>
          <ul>
            <li>
              <strong>Route highlight:</strong> "Merlin's Wand" - 350m, 10 pitches, 5.11b (French 6c+)
            </li>
            <li>
              <strong>Character:</strong> Varied climbing on impressive canyon walls
            </li>
            <li>
              <strong>Best for:</strong> Climbers seeking spectacular settings and varied routes
            </li>
            <li>
              <strong>Access:</strong> Jeep transport required to reach the canyon
            </li>
          </ul>

          <h4>3. Jebel um Ishrin</h4>
          <p>
            This massive mountain offers numerous climbing possibilities, including the classic "Pillar of Wisdom"
            route.
          </p>
          <ul>
            <li>
              <strong>Route highlight:</strong> "Pillar of Wisdom" - 450m, 12 pitches, 5.10d (French 6b+)
            </li>
            <li>
              <strong>Character:</strong> Long routes with varied climbing on generally good rock
            </li>
            <li>
              <strong>Best for:</strong> Experienced climbers looking for full-day adventures
            </li>
            <li>
              <strong>Access:</strong> Jeep transport to the base, then short approach hike
            </li>
          </ul>

          <h4>4. The Domes Area</h4>
          <p>Located near Rum village, this area offers more accessible climbing with shorter approaches.</p>
          <ul>
            <li>
              <strong>Route highlight:</strong> Various single and multi-pitch routes from 5.8 to 5.12 (French 5b to
              7b+)
            </li>
            <li>
              <strong>Character:</strong> More accessible climbing, some sport routes available
            </li>
            <li>
              <strong>Best for:</strong> Climbers seeking shorter approaches and day routes
            </li>
            <li>
              <strong>Access:</strong> Walking distance from Rum village
            </li>
          </ul>

          <h3>Climbing Logistics and Considerations</h3>

          <h4>Guides and Permits</h4>
          <p>
            While experienced climbers can climb independently, hiring a local Bedouin guide is recommended for several
            reasons:
          </p>
          <ul>
            <li>Local knowledge of routes and conditions</li>
            <li>Support with logistics and transportation</li>
            <li>Cultural connection and insights</li>
            <li>Contribution to the local economy</li>
          </ul>
          <p>All climbers must pay the Wadi Rum Protected Area entrance fee (5 JOD or included in the Jordan Pass).</p>

          <h4>Equipment</h4>
          <p>Wadi Rum is primarily a traditional climbing area, requiring:</p>
          <ul>
            <li>Full rack of cams and nuts (doubles recommended for longer routes)</li>
            <li>60-70m ropes (70m preferred for some routes)</li>
            <li>Plenty of slings for the sometimes wandering routes</li>
            <li>Helmets (essential due to the nature of sandstone)</li>
            <li>Approach shoes for the often sandy, rocky approaches</li>
          </ul>
          <p>Limited climbing equipment is available for rent in Jordan, so bringing your own is recommended.</p>

          <h4>Climbing Ethics</h4>
          <p>
            Wadi Rum's climbing community emphasizes preservation of the natural environment and respect for the rock:
          </p>
          <ul>
            <li>Avoid climbing after rain, as wet sandstone is fragile and easily damaged</li>
            <li>Minimize the placement of fixed protection</li>
            <li>Respect existing routes and their first ascensionists' style</li>
            <li>Pack out all trash and minimize impact on the desert environment</li>
            <li>Respect local Bedouin customs and cultural sites</li>
          </ul>

          <h4>Best Season for Climbing</h4>
          <p>The optimal climbing seasons in Wadi Rum are:</p>
          <ul>
            <li>
              <strong>Spring (March-May):</strong> Pleasant temperatures and generally stable weather
            </li>
            <li>
              <strong>Autumn (September-November):</strong> Similar to spring, with excellent conditions
            </li>
            <li>
              <strong>Winter (December-February):</strong> Good for climbing but cold in the shade and for overnight
              bivouacs
            </li>
            <li>
              <strong>Summer (June-August):</strong> Generally too hot for climbing except very early morning
            </li>
          </ul>

          <h2>Guided Hiking and Climbing Options</h2>

          <h3>Recommended Local Guides and Companies</h3>

          <ul>
            <li>
              <strong>Wadi Rum Nomads:</strong> Offers guided hiking trips with experienced local guides
            </li>
            <li>
              <strong>Wadi Rum Bedouin Climbing:</strong> Specializes in climbing trips led by Bedouin guides trained in
              modern climbing techniques
            </li>
            <li>
              <strong>Climbing Jordan:</strong> Based in Amman but organizes regular climbing trips to Wadi Rum
            </li>
            <li>
              <strong>Desert Rock Climbing School:</strong> Offers courses for beginners and guided climbs for more
              experienced climbers
            </li>
          </ul>

          <h3>Multi-Day Trekking Options</h3>

          <p>
            For those seeking a more immersive desert experience, multi-day treks combine hiking with camping in the
            desert:
          </p>
          <ul>
            <li>
              <strong>Wadi Rum Trail:</strong> A 3-5 day trek crossing the major landscapes of Wadi Rum
            </li>
            <li>
              <strong>Bedouin Routes Trek:</strong> Following traditional Bedouin paths between water sources and
              historical sites
            </li>
            <li>
              <strong>Summit Circuit:</strong> Linking several major mountain summits in a challenging 4-6 day trek
            </li>
          </ul>
          <p>These treks typically include a guide, camel support for carrying equipment, and camping equipment.</p>

          <h2>Preparing for Your Hiking or Climbing Adventure</h2>

          <h3>Physical Preparation</h3>
          <p>Wadi Rum's terrain and climate can be challenging. Prepare by:</p>
          <ul>
            <li>Building endurance through regular cardio exercise</li>
            <li>Strengthening legs for sandy and uphill terrain</li>
            <li>Practicing scrambling skills if planning more technical hikes</li>
            <li>Acclimatizing to heat if visiting in warmer months</li>
          </ul>

          <h3>Essential Gear</h3>
          <p>For hiking in Wadi Rum, pack:</p>
          <ul>
            <li>Sturdy hiking boots with ankle support</li>
            <li>Sun protection (hat, sunglasses, high-SPF sunscreen)</li>
            <li>Lightweight, breathable clothing with long sleeves and pants</li>
            <li>Daypack with at least 3 liters of water capacity</li>
            <li>Headlamp (for early starts or unexpected delays)</li>
            <li>Basic first aid kit including blister treatment</li>
            <li>Light jacket or fleece (even in summer, for early mornings)</li>
            <li>Camera with dust protection</li>
          </ul>

          <h3>Safety Considerations</h3>
          <p>Stay safe in Wadi Rum's challenging environment by:</p>
          <ul>
            <li>Never hiking alone—always use a local guide</li>
            <li>Starting early to avoid midday heat</li>
            <li>Carrying more water than you think you'll need</li>
            <li>Informing someone of your route and expected return time</li>
            <li>Checking weather forecasts—flash floods can occur after rain</li>
            <li>Being aware of symptoms of heat exhaustion and dehydration</li>
            <li>Carrying a fully charged mobile phone (though reception is limited)</li>
          </ul>

          <p>
            Whether you're seeking a gentle walk through a scenic canyon or a challenging multi-pitch climb up a
            towering desert tower, Wadi Rum offers some of the Middle East's most rewarding hiking and climbing
            experiences. The combination of spectacular scenery, ancient history, and Bedouin culture creates an
            adventure that engages all the senses and leaves lasting memories. By respecting the desert environment,
            following local guidance, and preparing appropriately, you'll discover a side of Wadi Rum that many visitors
            never experience—the profound connection that comes from exploring this magnificent landscape on foot or by
            hand and foot.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "hiking-climbing-spots-wadi-rum")
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
