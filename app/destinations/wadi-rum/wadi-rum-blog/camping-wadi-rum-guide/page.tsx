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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "camping-wadi-rum-guide")

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
            Spending a night (or several) in the desert wilderness of Wadi Rum is an essential part of experiencing this
            unique destination. While technically it's possible to visit Wadi Rum as a day trip from Aqaba or Petra, you
            would miss the magic of the desert at night—the spectacular stargazing, the profound silence, and the
            camaraderie around a Bedouin campfire. Fortunately, Wadi Rum offers a range of overnight options to suit
            every preference and budget, from basic traditional camps to luxurious "glamping" experiences.
          </p>

          <h2>Types of Camping Experiences in Wadi Rum</h2>

          <h3>Traditional Bedouin Camps</h3>
          <p>
            These camps feature large goat-hair tents divided into sections, similar to those used by Bedouins for
            centuries. The tents are designed to be cool in summer and warm in winter, with thick walls that provide
            insulation. Inside, you'll typically find simple mattresses on the floor with clean bedding, rugs, and
            perhaps some basic furniture.
          </p>
          <p>
            Traditional camps usually have shared bathroom facilities with basic toilets and sometimes showers (though
            water is a precious resource in the desert). The experience focuses on authenticity rather than luxury, with
            meals cooked over an open fire and evenings spent around the campfire listening to Bedouin music and
            stories.
          </p>
          <p>
            <strong>Best for:</strong> Budget travelers, those seeking an authentic cultural experience, and travelers
            who value simplicity.
          </p>
          <p>
            <strong>Price range:</strong> 25-50 JOD per person, including dinner and breakfast.
          </p>

          <h3>Mid-Range Camps</h3>
          <p>
            These camps offer a step up in comfort while still maintaining a traditional atmosphere. Accommodations are
            typically in permanent tents with proper beds (rather than mattresses on the floor), and many have private
            or semi-private bathroom facilities. The common areas are often more developed, with comfortable seating and
            better lighting.
          </p>
          <p>
            Mid-range camps usually offer more elaborate meals, sometimes including a traditional zarb (meat and
            vegetables cooked underground in the sand). Many also provide additional amenities like charging stations
            for electronics and hot showers.
          </p>
          <p>
            <strong>Best for:</strong> Travelers who want some comfort without sacrificing the authentic desert
            experience.
          </p>
          <p>
            <strong>Price range:</strong> 50-80 JOD per person, including dinner and breakfast.
          </p>

          <h3>Luxury "Glamping" Experiences</h3>
          <p>
            In recent years, several luxury camps have opened in Wadi Rum, offering high-end accommodations that combine
            the adventure of desert camping with the comforts of a boutique hotel. These camps feature spacious tents or
            cabins with proper beds, quality linens, private bathrooms with hot showers, and sometimes even air
            conditioning or heating.
          </p>
          <p>
            The most distinctive luxury option is the "bubble tent" or "martian dome"—transparent or semi-transparent
            structures that allow you to stargaze from your bed. These futuristic accommodations have become
            increasingly popular, especially after Wadi Rum was featured in several Mars-set films.
          </p>
          <p>
            Luxury camps typically offer gourmet meals, often blending traditional Bedouin cuisine with international
            influences. Many also provide additional services like guided stargazing with telescopes, private jeep
            tours, and more elaborate evening entertainment.
          </p>
          <p>
            <strong>Best for:</strong> Travelers seeking comfort and unique experiences, honeymooners, and those for
            whom budget is not a primary concern.
          </p>
          <p>
            <strong>Price range:</strong> 100-300+ JOD per person, depending on the level of luxury and the specific
            accommodation type.
          </p>

          <h3>Wild Camping</h3>
          <p>
            For the truly adventurous, some guides offer the option of wild camping—setting up simple bedding directly
            under the stars in a remote location, away from established camps. This provides the most immersive desert
            experience but comes with minimal facilities (typically just what the guide brings along).
          </p>
          <p>
            <strong>Best for:</strong> Adventure seekers who prioritize solitude and connection with nature over
            comfort.
          </p>
          <p>
            <strong>Price range:</strong> Usually arranged as part of a custom tour, with prices varying widely.
          </p>

          <h2>What to Expect During Your Stay</h2>

          <h3>Arrival and Check-in</h3>
          <p>
            Most visitors arrive at the Wadi Rum Visitor Center, where they meet their camp representative or guide.
            From there, you'll typically be transported to your camp by jeep, often as part of an afternoon tour of the
            desert's highlights. Some camps are located quite far from the visitor center (up to an hour's drive), while
            others are closer.
          </p>
          <p>
            Upon arrival at the camp, you'll be shown to your accommodation and given an orientation. Many camps offer
            welcome tea as part of the traditional Bedouin hospitality.
          </p>

          <h3>Facilities and Amenities</h3>
          <p>
            Bathroom facilities vary widely between camps. Traditional camps typically have shared bathrooms with basic
            toilets and limited water for washing. Mid-range and luxury camps usually offer private bathrooms with
            western-style toilets and showers, though water conservation is still important in the desert environment.
          </p>
          <p>
            Electricity is limited in most camps, often provided by generators that run for specific hours or solar
            power. Many camps offer charging stations for electronics in common areas, but it's wise to bring portable
            chargers as backup.
          </p>
          <p>
            Wi-Fi is rare in Wadi Rum camps, and mobile reception is spotty at best. This disconnection from technology
            is considered part of the desert experience by many visitors.
          </p>

          <h3>Meals and Dining</h3>
          <p>
            Most camps include dinner and breakfast in their rates. Dinner is typically served in a communal tent or
            around a campfire, creating opportunities to meet other travelers. The food is usually traditional Bedouin
            cuisine, with dishes like maglouba (a rice and vegetable dish), grilled meats, hummus, and fresh salads.
          </p>
          <p>
            A highlight at many camps is zarb—meat and vegetables cooked in an underground sand oven. This traditional
            cooking method produces incredibly tender and flavorful food, and the unearthing of the zarb is often
            presented as a ceremonial event before dinner.
          </p>
          <p>
            Breakfast typically includes bread, cheese, yogurt, eggs, and fruit, along with tea and coffee. Some luxury
            camps offer more elaborate breakfast options.
          </p>
          <p>
            Most camps can accommodate dietary restrictions with advance notice, though options may be more limited at
            basic camps.
          </p>

          <h3>Evening Activities</h3>
          <p>
            Evenings in Wadi Rum typically center around the campfire, where guides and camp staff often share Bedouin
            music, stories, and sometimes dance. This is a wonderful opportunity to learn about Bedouin culture and
            connect with your hosts.
          </p>
          <p>
            Stargazing is another highlight of evenings in Wadi Rum. The desert's clear air and minimal light pollution
            create ideal conditions for observing the night sky. Many camps offer mats for lying out under the stars,
            and some luxury camps provide telescopes and guided astronomy sessions.
          </p>

          <h2>Top Recommended Camps in Wadi Rum</h2>

          <h3>Traditional Camps</h3>
          <ul>
            <li>
              <strong>Wadi Rum Bedouin Camp:</strong> Run by a local Bedouin family, this camp offers an authentic
              experience with simple accommodations and excellent hospitality.
            </li>
            <li>
              <strong>Rum Stars Camp:</strong> Known for its friendly atmosphere and good location, this traditional
              camp offers basic but comfortable accommodations.
            </li>
          </ul>

          <h3>Mid-Range Camps</h3>
          <ul>
            <li>
              <strong>Rahayeb Desert Camp:</strong> This well-established camp offers a good balance of comfort and
              authenticity, with private tents and good food.
            </li>
            <li>
              <strong>Wadi Rum Quiet Village:</strong> Located in a beautiful setting, this camp features comfortable
              tents and excellent guided tours.
            </li>
          </ul>

          <h3>Luxury Camps</h3>
          <ul>
            <li>
              <strong>Memories Aicha Luxury Camp:</strong> Known for its transparent bubble tents and excellent service,
              this is one of the most popular luxury options.
            </li>
            <li>
              <strong>Wadi Rum Night Luxury Camp:</strong> Offers a variety of high-end accommodations, including bubble
              tents and "martian domes," with excellent food and amenities.
            </li>
            <li>
              <strong>Sun City Camp:</strong> Famous for its futuristic "martian tents" and comprehensive facilities,
              this camp offers a unique luxury experience.
            </li>
          </ul>

          <h2>Tips for a Great Camping Experience in Wadi Rum</h2>

          <h3>Packing Essentials</h3>
          <ul>
            <li>
              <strong>Warm clothing:</strong> Even in summer, desert nights can be surprisingly cold. Bring layers that
              you can add or remove as temperatures change.
            </li>
            <li>
              <strong>Headlamp or flashlight:</strong> Essential for navigating around the camp at night.
            </li>
            <li>
              <strong>Power bank:</strong> Charging options may be limited, so bring backup power for your devices.
            </li>
            <li>
              <strong>Toiletries and wet wipes:</strong> Water is limited, so wet wipes are useful for freshening up.
            </li>
            <li>
              <strong>Comfortable shoes:</strong> For walking around the camp and exploring the surrounding area.
            </li>
            <li>
              <strong>Hat and sunscreen:</strong> The desert sun is intense, even in winter.
            </li>
          </ul>

          <h3>Booking and Planning</h3>
          <ul>
            <li>
              <strong>Book directly:</strong> Whenever possible, book directly with the camp rather than through
              intermediaries to get the best rates and ensure your specific needs are communicated.
            </li>
            <li>
              <strong>Confirm what's included:</strong> Make sure you understand what meals, activities, and
              transportation are included in your booking.
            </li>
            <li>
              <strong>Communicate dietary restrictions:</strong> If you have specific dietary needs, inform the camp
              well in advance.
            </li>
            <li>
              <strong>Consider the season:</strong> Spring (March-May) and fall (September-November) offer the most
              pleasant temperatures for desert camping.
            </li>
          </ul>

          <h3>During Your Stay</h3>
          <ul>
            <li>
              <strong>Respect water usage:</strong> Water is a precious resource in the desert, so be mindful of your
              consumption.
            </li>
            <li>
              <strong>Embrace the digital detox:</strong> Limited connectivity is part of the desert experience—use it
              as an opportunity to disconnect.
            </li>
            <li>
              <strong>Respect cultural norms:</strong> Dress modestly, especially in common areas, and ask before taking
              photos of Bedouin hosts.
            </li>
            <li>
              <strong>Leave no trace:</strong> Respect the desert environment by not leaving any trash behind.
            </li>
          </ul>

          <p>
            Camping in Wadi Rum is more than just accommodation—it's an integral part of experiencing the desert's
            magic. Whether you choose a simple traditional camp or a luxurious bubble tent, the combination of stunning
            landscapes, Bedouin hospitality, and star-filled skies creates memories that will last a lifetime. The
            temporary disconnection from modern life's constant stimulation offers a rare opportunity for reflection and
            connection with both nature and the ancient cultures that have called this remarkable landscape home for
            thousands of years.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "camping-wadi-rum-guide")
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
