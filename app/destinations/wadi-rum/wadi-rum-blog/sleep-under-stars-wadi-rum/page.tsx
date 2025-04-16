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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "sleep-under-stars-wadi-rum")

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
            There are few experiences in life as profound as falling asleep beneath a canopy of stars in the vast
            silence of the desert. In Wadi Rum, this isn't just a romantic notion—it's a nightly reality that draws
            travelers from around the world seeking connection with nature in its most elemental form.
          </p>

          <h2>The Night Sky Like You've Never Seen It</h2>
          <p>
            If you've spent most of your life in cities or suburbs, nothing can prepare you for your first glimpse of
            the night sky in Wadi Rum. Far from light pollution, the desert reveals the cosmos in all its glory. The
            Milky Way stretches across the sky like a luminous river, and stars appear so numerous and bright that
            familiar constellations can be hard to pick out among the dazzling display.
          </p>

          <p>
            Many visitors report being able to see shooting stars every few minutes, and during certain times of year,
            meteor showers turn the experience into a celestial fireworks show. The clarity of the air and the absence
            of humidity make for exceptional visibility, with stars appearing to shine right down to the horizon.
          </p>

          <h2>Types of Overnight Accommodations</h2>
          <p>Wadi Rum offers a range of sleeping options to suit different comfort levels and budgets:</p>

          <h3>Traditional Bedouin Camps</h3>
          <p>
            These camps feature goat-hair tents similar to those used by Bedouins for centuries. Simple but comfortable,
            they typically include mattresses on the floor with clean bedding. Shared bathroom facilities are usually
            available. The authentic experience often includes traditional music around a campfire and Bedouin tea.
          </p>

          <h3>Luxury "Bubble" Tents</h3>
          <p>
            For those seeking a more upscale experience, transparent or partially transparent dome tents offer the
            comfort of a hotel room with the magic of sleeping under the stars. These climate-controlled bubbles
            typically include proper beds, private bathrooms, and sometimes even air conditioning.
          </p>

          <h3>Martian Tents</h3>
          <p>
            Inspired by the otherworldly landscape that has served as a backdrop for numerous Mars-set films, these
            unique accommodations resemble space habitats. They offer a blend of comfort and novelty, with solid
            structures that still allow for stargazing through strategic windows.
          </p>

          <h3>Open-Air Sleeping</h3>
          <p>
            For the purest experience, some camps offer the option to sleep on mattresses placed directly on the sand
            dunes, with nothing between you and the stars. This is typically offered as an add-on option during warmer
            months.
          </p>

          <h2>What to Expect During Your Stay</h2>

          <h3>The Evening Routine</h3>
          <p>
            Most desert stays follow a similar pattern. You'll arrive at your camp in the late afternoon, perhaps after
            a day of exploring. As the sun sets, the desert transforms with a spectacular light show as the red sands
            take on deeper hues. After sunset, dinner is served—often a traditional zarb, meat and vegetables cooked
            underground in the sand.
          </p>

          <p>
            After dinner, Bedouin hosts typically invite guests to gather around a fire. This is when the magic truly
            begins. As your eyes adjust to the darkness, the stars emerge in greater numbers. Many camps offer informal
            astronomy sessions, pointing out constellations and planets. Some even provide telescopes.
          </p>

          <h3>The Sound of Silence</h3>
          <p>
            One of the most striking aspects of sleeping in Wadi Rum is the profound silence. Many visitors find it
            almost disorienting at first—the complete absence of the background noise that fills our modern lives. This
            silence creates a meditative atmosphere that enhances the stargazing experience.
          </p>

          <h2>Practical Tips for Your Night Under the Stars</h2>
          <ul>
            <li>Even in summer, desert nights can get surprisingly cold. Bring warm layers.</li>
            <li>
              If you're sensitive to light while sleeping, consider bringing an eye mask for the early morning when the
              sun rises.
            </li>
            <li>
              Bring a headlamp or flashlight with a red light option to preserve night vision while moving around the
              camp.
            </li>
            <li>Download a star-mapping app before your trip (and make sure it works offline).</li>
            <li>
              If you're a photographer, bring a tripod and learn the basics of night photography before your trip.
            </li>
            <li>Book your stay around the new moon for the darkest skies and best stargazing.</li>
          </ul>

          <h2>The Morning After</h2>
          <p>
            Waking up in the desert is almost as magical as falling asleep there. The sunrise transforms the landscape
            once again, with the first rays of light painting the rock formations in gold and amber. Many camps offer
            early morning activities like sunrise hikes to nearby viewpoints or hot air balloon rides for those who want
            to extend the magic.
          </p>

          <p>
            Sleeping under the stars in Wadi Rum isn't just accommodation—it's the highlight of many travelers' Jordan
            experience. The combination of otherworldly landscapes, Bedouin hospitality, and the most spectacular night
            sky you'll ever witness creates memories that last a lifetime.
          </p>

          <p>
            Whether you choose a simple traditional camp or a luxury bubble tent, the experience of connecting with the
            cosmos in this ancient landscape is something that can't be replicated anywhere else. It's a reminder of our
            place in the universe and the timeless beauty that exists beyond our busy, illuminated world.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "sleep-under-stars-wadi-rum")
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
