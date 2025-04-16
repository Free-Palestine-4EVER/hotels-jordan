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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "sunrise-sunset-spots-wadi-rum")

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
            In Wadi Rum, the rising and setting sun transforms the desert landscape in ways that have to be seen to be
            believed. As sunlight shifts across the red sandstone mountains and vast sand plains, the colors change
            dramatically—from soft pinks and golds to deep reds and purples—creating a natural light show that
            photographers and travelers alike find mesmerizing. Experiencing sunrise or sunset (or ideally both) is an
            essential part of any visit to Wadi Rum.
          </p>

          <h2>Why Sunrise and Sunset Are Special in Wadi Rum</h2>
          <p>The magic of Wadi Rum's sunrise and sunset experiences comes from a combination of factors:</p>
          <ul>
            <li>
              <strong>The desert's mineral-rich red sandstone</strong> reflects light in spectacular ways, creating a
              constantly shifting palette of colors
            </li>
            <li>
              <strong>The clear desert air</strong>, free from pollution and moisture, allows for crisp, vibrant light
              conditions
            </li>
            <li>
              <strong>The dramatic topography</strong> of mountains, canyons, and open plains creates varied shadows and
              light patterns
            </li>
            <li>
              <strong>The silence of the desert</strong> enhances the sensory experience, making these moments
              particularly meditative
            </li>
          </ul>

          <h2>Top Sunrise Spots in Wadi Rum</h2>

          <h3>1. Jebel Umm Adaami Viewpoint</h3>
          <p>
            While climbing Jordan's highest mountain (1,854m) for sunrise requires an overnight camping trip near the
            base and an early start, the reward is unparalleled. From this vantage point, you can watch the sun rise
            over Saudi Arabia in the distance, gradually illuminating the vast desert landscape below. The first light
            hitting the red mountains creates a spectacular contrast with the still-shadowed valleys.
          </p>
          <p>
            <strong>Best for:</strong> Serious hikers and photographers willing to make the effort for a truly special
            experience.
          </p>
          <p>
            <strong>How to get there:</strong> This requires advance planning with your guide, as it's about a 2-hour
            drive from the main visitor area to the starting point, plus a 2-3 hour hike to reach the summit.
          </p>

          <h3>2. The Seven Pillars of Wisdom</h3>
          <p>
            This iconic rock formation, named after T.E. Lawrence's famous book, is perfectly positioned to catch the
            first light of day. As the sun rises, each of the "pillars" becomes illuminated in sequence, creating a
            beautiful play of light and shadow. The area in front of the formation offers several excellent vantage
            points.
          </p>
          <p>
            <strong>Best for:</strong> Photographers and those staying near the visitor center, as this is one of the
            more accessible sunrise spots.
          </p>
          <p>
            <strong>How to get there:</strong> Located near the visitor center, this is easily reached by a short drive
            or even a walk from nearby camps.
          </p>

          <h3>3. Jebel Khazali</h3>
          <p>
            The eastern face of this mountain catches the early morning light beautifully. What makes this spot special
            is the combination of the mountain itself and the open desert in front of it, allowing you to see the
            changing colors across both the rock face and the sand plains.
          </p>
          <p>
            <strong>Best for:</strong> Those who want a classic desert sunrise without a difficult journey.
          </p>
          <p>
            <strong>How to get there:</strong> Most camps can arrange an early morning jeep ride to this location, which
            is about 15-20 minutes from the main visitor area.
          </p>

          <h3>4. Burdah Rock Bridge Area</h3>
          <p>
            While climbing the rock bridge itself for sunrise would require advanced planning and climbing skills, the
            area around this dramatic formation offers excellent sunrise viewing. The morning light illuminates the
            natural arch and surrounding mountains in a spectacular fashion.
          </p>
          <p>
            <strong>Best for:</strong> Those staying in camps in the eastern part of Wadi Rum.
          </p>
          <p>
            <strong>How to get there:</strong> About 30-40 minutes by jeep from the visitor center, this location
            requires pre-arrangement with your guide.
          </p>

          <h2>Top Sunset Spots in Wadi Rum</h2>

          <h3>1. Jebel Umm Fruth Rock Bridge</h3>
          <p>
            This natural rock bridge is one of the most popular sunset spots in Wadi Rum, and for good reason. As the
            sun sets, the bridge glows a deep red-orange, creating a stunning silhouette opportunity. The surrounding
            area also offers excellent views of the changing colors across the wider landscape.
          </p>
          <p>
            <strong>Best for:</strong> Photographers seeking that classic Wadi Rum shot and travelers who want to
            combine sunset viewing with a visit to one of the area's most famous formations.
          </p>
          <p>
            <strong>How to get there:</strong> Located about 20 minutes by jeep from the visitor center, this is
            included in most standard tours.
          </p>

          <h3>2. Lawrence's Spring Viewpoint</h3>
          <p>
            The hill above Lawrence's Spring offers a panoramic view that's particularly beautiful at sunset. From this
            elevated position, you can watch the shadows lengthen across the valley floor while the western mountains
            are bathed in golden light.
          </p>
          <p>
            <strong>Best for:</strong> Those who enjoy a short hike (about 15 minutes up a moderate slope) for their
            sunset view.
          </p>
          <p>
            <strong>How to get there:</strong> Lawrence's Spring is about 10 minutes by jeep from the visitor center,
            and most guides know the best viewpoint for sunset.
          </p>

          <h3>3. The Red Sand Dunes</h3>
          <p>
            Several areas in Wadi Rum feature dramatic red sand dunes, and these make for spectacular sunset viewing.
            The contrast between the deep red sand and the golden light creates a magical atmosphere. Climbing to the
            top of a dune provides a 360-degree view of the changing colors across the entire landscape.
          </p>
          <p>
            <strong>Best for:</strong> Those who want to feel the sand between their toes while watching the sunset, and
            families with children who can play in the sand.
          </p>
          <p>
            <strong>How to get there:</strong> There are several dune areas throughout Wadi Rum; your guide can
            recommend the best one based on your location.
          </p>

          <h3>4. Jebel Rakhabat</h3>
          <p>
            This less-visited area offers some of the most dramatic sunset views in Wadi Rum. The mountain's western
            face catches the last light of day, turning a deep crimson that contrasts beautifully with the cooler
            shadows spreading across the desert floor.
          </p>
          <p>
            <strong>Best for:</strong> Those seeking a less crowded sunset experience away from the main tourist routes.
          </p>
          <p>
            <strong>How to get there:</strong> Located in the southern part of Wadi Rum, this requires specific planning
            with your guide as it's not on standard routes.
          </p>

          <h3>5. Mushroom Rock</h3>
          <p>
            This distinctive rock formation, shaped vaguely like a mushroom, is surrounded by open desert that provides
            excellent sunset views. The rock itself becomes a striking silhouette as the sun drops behind the western
            mountains.
          </p>
          <p>
            <strong>Best for:</strong> Those who want to combine geological interest with sunset viewing.
          </p>
          <p>
            <strong>How to get there:</strong> Included on many standard tours, this is about 25 minutes by jeep from
            the visitor center.
          </p>

          <h2>Tips for Sunrise and Sunset Photography in Wadi Rum</h2>
          <ul>
            <li>
              <strong>Arrive early:</strong> The colors begin changing well before the sun actually appears or
              disappears, so arrive at your chosen spot at least 30 minutes before the actual sunrise or sunset time
            </li>
            <li>
              <strong>Bring a tripod:</strong> The low light conditions around sunrise and sunset benefit from a stable
              platform for your camera
            </li>
            <li>
              <strong>Use a wide-angle lens:</strong> To capture the vastness of the landscape and the dramatic sky
            </li>
            <li>
              <strong>Include human elements:</strong> A person, camel, or jeep in the foreground adds scale and
              interest to landscape shots
            </li>
            <li>
              <strong>Look behind you:</strong> During sunset especially, the most beautiful light might actually be on
              the rocks opposite the setting sun
            </li>
            <li>
              <strong>Stay after sunset:</strong> The "blue hour" after the sun has set often provides the most magical
              light, as the sky deepens to indigo while the desert takes on a mysterious quality
            </li>
          </ul>

          <h2>Practical Considerations</h2>
          <p>When planning to experience sunrise or sunset in Wadi Rum, keep these practical tips in mind:</p>
          <ul>
            <li>
              <strong>Dress in layers:</strong> Desert temperatures can drop significantly at these times, particularly
              at sunrise
            </li>
            <li>
              <strong>Bring a headlamp or flashlight:</strong> Essential for finding your way before sunrise or after
              sunset
            </li>
            <li>
              <strong>Communicate your interests clearly:</strong> Let your guide know in advance if sunrise/sunset
              viewing is a priority so they can plan accordingly
            </li>
            <li>
              <strong>Be patient:</strong> Weather conditions can affect the quality of the light show—some days are
              more spectacular than others
            </li>
            <li>
              <strong>Respect the silence:</strong> These are magical moments best experienced without loud
              conversations or music
            </li>
          </ul>

          <p>
            Whether you're a professional photographer or simply someone who appreciates natural beauty, witnessing the
            sunrise or sunset in Wadi Rum is likely to be one of the most memorable experiences of your Jordan journey.
            The combination of extraordinary landscape, perfect light, and desert silence creates moments of connection
            with nature that stay with travelers long after they've left the sands of Wadi Rum behind.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "sunrise-sunset-spots-wadi-rum")
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
