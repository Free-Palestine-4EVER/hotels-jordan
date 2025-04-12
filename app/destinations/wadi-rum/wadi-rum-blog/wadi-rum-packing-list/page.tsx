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
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "wadi-rum-packing-list")

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
            Preparing for a trip to Wadi Rum requires thoughtful packing to ensure comfort and safety in the desert
            environment. The unique conditions of this magnificent landscape—from scorching daytime heat to chilly
            nights, and from soft sand to rocky terrain—demand specific gear and supplies. This comprehensive packing
            list will help you prepare for an unforgettable desert adventure, whether you're staying for one night or
            several days.
          </p>

          <h2>Essential Clothing</h2>

          <p>
            Desert clothing should protect you from the sun while keeping you cool during the day and warm at night. The
            key is lightweight, breathable layers that can be added or removed as temperatures change.
          </p>

          <h3>Daytime Clothing</h3>
          <ul>
            <li>
              <strong>Lightweight, loose-fitting pants:</strong> Protects legs from sun and scratches while allowing
              airflow
            </li>
            <li>
              <strong>Long-sleeved shirts:</strong> Preferably light-colored and made of breathable fabric like cotton
              or technical quick-dry material
            </li>
            <li>
              <strong>T-shirts:</strong> For layering or when temperatures are moderate
            </li>
            <li>
              <strong>Wide-brimmed hat:</strong> Essential for sun protection (secure strap recommended for windy
              conditions)
            </li>
            <li>
              <strong>Lightweight scarf or shemagh:</strong> Versatile for sun protection, dust protection, or extra
              warmth
            </li>
            <li>
              <strong>Sunglasses:</strong> Polarized lenses recommended for desert glare
            </li>
            <li>
              <strong>Sturdy walking shoes or hiking boots:</strong> Closed-toe with good ankle support for rocky
              terrain
            </li>
            <li>
              <strong>Socks:</strong> Several pairs of moisture-wicking socks to prevent blisters
            </li>
          </ul>

          <h3>Evening/Nighttime Clothing</h3>
          <ul>
            <li>
              <strong>Warm fleece or jacket:</strong> Desert temperatures can drop significantly after sunset
            </li>
            <li>
              <strong>Thermal base layer:</strong> For winter visits or if you're sensitive to cold
            </li>
            <li>
              <strong>Warm hat/beanie:</strong> Essential in winter months when nights can approach freezing
            </li>
            <li>
              <strong>Gloves:</strong> Light gloves for winter visits
            </li>
            <li>
              <strong>Warm sleepwear:</strong> Comfortable clothing for sleeping in desert camps
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="italic">
              <strong>Seasonal Tip:</strong> If visiting between November and March, pack significantly warmer clothing.
              Winter nights in Wadi Rum can drop below freezing, and desert winds can make it feel even colder.
            </p>
          </div>

          <h2>Sun and Skin Protection</h2>

          <p>
            The desert sun is intense, and protection is non-negotiable. Even on cloudy days, UV rays can be strong, and
            the reflection from sand intensifies exposure.
          </p>

          <ul>
            <li>
              <strong>High SPF sunscreen:</strong> Minimum SPF 30, water-resistant formula recommended
            </li>
            <li>
              <strong>Lip balm with SPF:</strong> Desert air and sun can quickly dry and damage lips
            </li>
            <li>
              <strong>After-sun lotion or aloe vera gel:</strong> For soothing skin after sun exposure
            </li>
            <li>
              <strong>Hand sanitizer:</strong> For hygiene when water is limited
            </li>
            <li>
              <strong>Moisturizer:</strong> Desert air is extremely dry and can dehydrate skin quickly
            </li>
          </ul>

          <h2>Hydration and Nutrition</h2>

          <p>
            Staying hydrated is critical in the desert environment. While most camps provide meals and basic drinking
            water, having your own supplies is important, especially during daytime activities.
          </p>

          <ul>
            <li>
              <strong>Reusable water bottle:</strong> 1-2 liter capacity (insulated bottles help keep water cool)
            </li>
            <li>
              <strong>Hydration bladder:</strong> Convenient for longer hikes or jeep tours
            </li>
            <li>
              <strong>Electrolyte tablets or powder:</strong> To replace minerals lost through sweating
            </li>
            <li>
              <strong>Energy bars or trail mix:</strong> Portable snacks for between meals
            </li>
            <li>
              <strong>Dried fruits or nuts:</strong> Traditional desert snacks that provide energy
            </li>
          </ul>

          <h2>Personal Hygiene and Health</h2>

          <p>
            Desert camping means limited access to facilities. Pack compact, efficient hygiene items and essential
            medications.
          </p>

          <ul>
            <li>
              <strong>Biodegradable wet wipes:</strong> For freshening up when showers aren't available
            </li>
            <li>
              <strong>Travel-sized toiletries:</strong> Shampoo, conditioner, soap in small containers
            </li>
            <li>
              <strong>Quick-dry travel towel:</strong> Lightweight and compact
            </li>
            <li>
              <strong>Toilet paper:</strong> Always good to have your own supply
            </li>
            <li>
              <strong>Personal medications:</strong> Bring more than you think you'll need
            </li>
            <li>
              <strong>Basic first aid kit:</strong> Including:
              <ul>
                <li>Adhesive bandages in various sizes</li>
                <li>Antiseptic wipes</li>
                <li>Blister treatment</li>
                <li>Pain relievers</li>
                <li>Anti-diarrheal medication</li>
                <li>Antihistamines for allergic reactions</li>
                <li>Tweezers (for splinters or thorns)</li>
              </ul>
            </li>
            <li>
              <strong>Prescription medications:</strong> In original containers with clear labeling
            </li>
            <li>
              <strong>Motion sickness remedies:</strong> If you're sensitive to bumpy jeep rides
            </li>
          </ul>

          <h2>Camping and Sleeping Gear</h2>

          <p>
            Most Wadi Rum camps provide bedding, but having certain personal items can enhance comfort, especially if
            you're particular about your sleeping environment.
          </p>

          <ul>
            <li>
              <strong>Sleeping bag liner:</strong> For extra warmth or if you prefer your own bedding
            </li>
            <li>
              <strong>Travel pillow:</strong> If you have specific neck support needs
            </li>
            <li>
              <strong>Earplugs:</strong> Desert nights are generally quiet, but camp sounds can vary
            </li>
            <li>
              <strong>Eye mask:</strong> For light sleepers or early risers
            </li>
            <li>
              <strong>Headlamp or flashlight:</strong> Essential for navigating camps at night
            </li>
            <li>
              <strong>Extra batteries or power bank:</strong> Limited or no electricity in many camps
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="italic">
              <strong>Accommodation Tip:</strong> Check with your camp about what bedding and facilities they provide.
              Luxury camps often supply everything you need, while basic camps might have more limited provisions.
            </p>
          </div>

          <h2>Electronics and Photography</h2>

          <p>
            Wadi Rum offers spectacular photo opportunities, but the desert environment presents challenges for
            electronic equipment.
          </p>

          <ul>
            <li>
              <strong>Camera:</strong> The landscape deserves good photography equipment if you have it
            </li>
            <li>
              <strong>Extra memory cards:</strong> You'll take more photos than you expect
            </li>
            <li>
              <strong>Protective camera bag:</strong> To shield equipment from sand and dust
            </li>
            <li>
              <strong>Lens cleaning kit:</strong> Desert dust will get on your lenses
            </li>
            <li>
              <strong>Tripod:</strong> For night photography or steady landscape shots
            </li>
            <li>
              <strong>Power bank/portable charger:</strong> Many camps have limited or no electricity
            </li>
            <li>
              <strong>Universal adapter:</strong> If staying in hotels before/after Wadi Rum
            </li>
            <li>
              <strong>Phone in waterproof/dustproof case:</strong> Protects against sand and potential water exposure
            </li>
          </ul>

          <h2>Backpack and Day Bag</h2>

          <p>You'll need different bags for different purposes during your Wadi Rum adventure.</p>

          <ul>
            <li>
              <strong>Main luggage:</strong> Preferably a soft duffel bag rather than hard suitcase (easier to transport
              in jeeps)
            </li>
            <li>
              <strong>Day pack:</strong> 15-25 liter capacity for carrying essentials during jeep tours or hikes
            </li>
            <li>
              <strong>Dry bag or ziplock bags:</strong> To protect electronics and important documents from sand and
              potential water exposure
            </li>
          </ul>

          <h2>Documents and Money</h2>

          <ul>
            <li>
              <strong>Passport and visa documentation:</strong> Keep in waterproof/dustproof container
            </li>
            <li>
              <strong>Travel insurance details:</strong> Including emergency contact numbers
            </li>
            <li>
              <strong>Jordan Pass:</strong> If purchased (includes Wadi Rum entry fee)
            </li>
            <li>
              <strong>Cash:</strong> Many camps and local vendors don't accept cards
            </li>
            <li>
              <strong>Credit/debit cards:</strong> As backup and for larger establishments
            </li>
            <li>
              <strong>Emergency contacts:</strong> Written down, not just stored in your phone
            </li>
          </ul>

          <h2>Optional Items for Enhanced Experience</h2>

          <p>These items aren't essential but can significantly improve your Wadi Rum experience:</p>

          <ul>
            <li>
              <strong>Binoculars:</strong> For wildlife spotting and appreciating distant landscapes
            </li>
            <li>
              <strong>Star chart or astronomy app:</strong> Wadi Rum offers exceptional stargazing
            </li>
            <li>
              <strong>Notebook and pen:</strong> For journaling your desert experience
            </li>
            <li>
              <strong>Playing cards or small games:</strong> For entertainment during downtime
            </li>
            <li>
              <strong>Arabic phrasebook:</strong> Basic greetings are appreciated by local Bedouin
            </li>
            <li>
              <strong>Small gifts:</strong> If visiting Bedouin families (tea, coffee, or small items from your home
              country are appropriate)
            </li>
            <li>
              <strong>Lightweight sandals:</strong> For wearing around camp (closed-toe still recommended)
            </li>
          </ul>

          <h2>Seasonal Packing Considerations</h2>

          <h3>Summer (June-August)</h3>
          <p>
            Summer brings extreme heat, with daytime temperatures regularly exceeding 40°C (104°F). Additional
            considerations include:
          </p>
          <ul>
            <li>Extra water capacity and electrolyte supplements</li>
            <li>Higher SPF sunscreen and more frequent application</li>
            <li>Cooling neck wrap or bandana that can be soaked in water</li>
            <li>Very lightweight, breathable clothing with UPF protection</li>
            <li>Portable handheld fan for still air conditions</li>
          </ul>

          <h3>Winter (December-February)</h3>
          <p>Winter nights can drop below freezing, and days can be cool. Additional items to consider:</p>
          <ul>
            <li>Warm sleeping bag (if your camp doesn't provide adequate bedding)</li>
            <li>Thermal base layers (top and bottom)</li>
            <li>Warm hat, gloves, and scarf</li>
            <li>Insulated jacket (down or synthetic)</li>
            <li>Rain jacket (rare but possible winter showers)</li>
            <li>Warm socks for night</li>
          </ul>

          <h2>What Not to Bring</h2>

          <p>Some items are unnecessary or inappropriate for Wadi Rum:</p>

          <ul>
            <li>
              <strong>Revealing clothing:</strong> Out of respect for local culture, avoid shorts above the knee and
              sleeveless tops
            </li>
            <li>
              <strong>Expensive jewelry:</strong> Can get damaged or lost in the desert environment
            </li>
            <li>
              <strong>Hairdryers or styling tools:</strong> Most camps have limited or no electricity
            </li>
            <li>
              <strong>Heavy books:</strong> Opt for e-readers to save weight
            </li>
            <li>
              <strong>Drones:</strong> Require special permission in Jordan and are prohibited in many protected areas
            </li>
          </ul>

          <h2>Pre-Departure Checklist</h2>

          <p>Before heading to Wadi Rum, make sure you:</p>

          <ul>
            <li>Check weather forecasts for your specific travel dates</li>
            <li>Confirm what your accommodation provides (bedding, towels, meals, water)</li>
            <li>Break in new hiking boots if purchased for the trip</li>
            <li>Test all electronic equipment and pack necessary chargers</li>
            <li>Purchase critical items (medications, specific sun protection) before arriving in Jordan</li>
            <li>Inform your bank of travel plans to prevent cards being blocked for suspicious foreign transactions</li>
            <li>Make copies of important documents (passport, insurance)</li>
          </ul>

          <h2>Shopping in Jordan</h2>

          <p>If you forget something or prefer to purchase locally, here's what to know:</p>

          <ul>
            <li>
              <strong>Amman:</strong> Has the best selection of outdoor gear and specialized equipment
            </li>
            <li>
              <strong>Aqaba:</strong> Good for basic supplies and some outdoor gear
            </li>
            <li>
              <strong>Wadi Musa (Petra):</strong> Has tourist supplies but limited selection
            </li>
            <li>
              <strong>Wadi Rum Village:</strong> Very limited supplies—don't count on purchasing anything beyond basic
              snacks and water
            </li>
          </ul>

          <p>
            Packing appropriately for Wadi Rum enhances your desert experience, allowing you to focus on the
            breathtaking landscape rather than physical discomfort. The desert environment demands respect and
            preparation, but with the right gear, you'll be ready to fully immerse yourself in the timeless beauty of
            this extraordinary place. From watching the sunset paint the sandstone mountains in gold to gazing at the
            star-filled night sky from your camp, your Wadi Rum adventure will be more comfortable and memorable with
            these essential items in your pack.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "wadi-rum-packing-list")
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
