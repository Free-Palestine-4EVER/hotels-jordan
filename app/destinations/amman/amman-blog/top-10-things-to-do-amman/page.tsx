import Image from "next/image"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/destinations/amman/amman-blog" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Amman Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Top 10 Things to Do in Amman for First-Time Visitors</h1>

        <div className="text-gray-500 mb-6">January 15, 2025 • by Jordan Explorer Team</div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=800&text=Top+10+Things+Amman"
            alt="Top 10 Things to Do in Amman"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Amman, Jordan's vibrant capital, offers a fascinating blend of ancient history and modern urban life. If
            you're visiting for the first time, here are the top 10 experiences you shouldn't miss.
          </p>

          <h2>1. Explore the Amman Citadel (Jabal al-Qal'a)</h2>
          <p>
            Perched on the highest hill in Amman, the Citadel offers panoramic views of the city and houses important
            historical structures including the Temple of Hercules, the Umayyad Palace, and the Archaeological Museum.
            Dating back to the Bronze Age, this site has been occupied by numerous civilizations, making it a living
            testament to Amman's rich history.
          </p>
          <p>
            The Archaeological Museum houses artifacts from prehistoric times to the 15th century, including some of the
            Dead Sea Scrolls. Visit in the late afternoon to catch the golden light illuminating the ancient stones and
            stay for a spectacular sunset over the city's rolling hills.
          </p>

          <h2>2. Visit the Roman Theater</h2>
          <p>
            This well-preserved 2nd-century Roman amphitheater is cut into the hillside and once seated 6,000
            spectators. It's a remarkable example of Roman architecture and engineering, with its steep seating
            providing excellent acoustics. The theater is still occasionally used for cultural events and concerts.
          </p>
          <p>
            Climb to the top tier for impressive views of downtown Amman. The small folklore and cultural museums on
            either side of the theater are worth exploring to learn about traditional Jordanian life and costumes.
          </p>

          <h2>3. Stroll Through Downtown Amman (Al-Balad)</h2>
          <p>
            The bustling heart of the city, Downtown Amman is filled with shops, street vendors, restaurants, and cafes.
            This is where you'll experience authentic local life. Wander through the gold souks, spice markets, and
            traditional crafts shops.
          </p>
          <p>
            Don't miss the opportunity to try fresh juice from street vendors, shop for traditional Jordanian
            handicrafts, or simply sit at a café and watch city life unfold. The area is particularly lively in the
            evenings when locals come out to shop and socialize.
          </p>

          <h2>4. Sample Jordanian Cuisine</h2>
          <p>
            Amman offers countless opportunities to try authentic Jordanian food. Visit Hashem Restaurant, a famous
            eatery that has been serving delicious falafel, hummus, and ful medames for decades. For a more upscale
            experience, try Sufra on Rainbow Street for traditional Jordanian dishes in a beautiful setting.
          </p>
          <p>
            Be sure to try mansaf (Jordan's national dish of lamb cooked in yogurt sauce served over rice), maqluba (an
            upside-down rice and vegetable dish), and knafeh (a sweet cheese pastry soaked in syrup) for dessert.
          </p>

          <h2>5. Explore Rainbow Street</h2>
          <p>
            This trendy street in Jabal Amman is lined with cafes, restaurants, boutiques, and art galleries housed in
            beautiful old buildings. It's the perfect place to experience Amman's more cosmopolitan side.
          </p>
          <p>
            Visit during the evening when the street comes alive with locals and visitors enjoying the vibrant
            atmosphere. Don't miss Souk Jara, a weekly open-air market held on Fridays during summer months, featuring
            local crafts, food, and entertainment.
          </p>

          <h2>6. Visit the Jordan Museum</h2>
          <p>
            This modern museum houses an impressive collection of artifacts that tell the story of Jordan's history,
            from prehistoric times to the present. Highlights include some of the Dead Sea Scrolls and artifacts from
            the ancient city of Petra.
          </p>
          <p>
            The museum provides an excellent overview of Jordan's cultural heritage and is a perfect introduction to the
            country's rich history before visiting other archaeological sites.
          </p>

          <h2>7. Explore the King Abdullah I Mosque</h2>
          <p>
            This magnificent blue-domed mosque can accommodate up to 7,000 worshippers inside and another 3,000 in the
            courtyard. Unlike many mosques in the region, it welcomes non-Muslim visitors outside prayer times (modest
            dress required).
          </p>
          <p>
            The mosque's stunning architecture, with its blue dome and intricate decorations, makes it one of Amman's
            most recognizable landmarks. Guided tours are available to help visitors understand the significance of
            different areas within the mosque.
          </p>

          <h2>8. Shop at Amman's Modern Malls</h2>
          <p>
            For a taste of contemporary Amman, visit one of the city's modern shopping malls like Abdali Boulevard, City
            Mall, or Taj Mall. These offer international brands, local boutiques, restaurants, and entertainment
            options.
          </p>
          <p>
            Abdali Boulevard, an open-air complex, is particularly pleasant for evening strolls and dining. These malls
            showcase the more cosmopolitan side of Amman and provide air-conditioned respite during hot summer days.
          </p>

          <h2>9. Take in the View from the Amman Rotana Hotel</h2>
          <p>
            As the tallest building in the city, the Amman Rotana offers spectacular panoramic views from its rooftop
            restaurant and bar. Even if you're not staying at the hotel, it's worth visiting for a meal or drink with a
            view.
          </p>
          <p>
            The 360-degree vista allows you to appreciate Amman's unique topography, spread across seven hills (or more,
            depending on who you ask). It's particularly magical at night when the city is illuminated.
          </p>

          <h2>10. Experience Amman's Cafe Culture</h2>
          <p>
            Coffee and tea are central to Jordanian social life, and Amman has a thriving cafe scene. From traditional
            Arabic coffee shops to modern specialty coffee cafes, there's something for every taste.
          </p>
          <p>
            Books@Cafe in Jabal Amman offers a relaxed atmosphere with good food and great views, while Rumi Cafe
            provides a more traditional experience. Spend an afternoon like locals do, sipping Arabic coffee or mint tea
            while engaging in conversation or people-watching.
          </p>

          <h2>Practical Tips for Exploring Amman</h2>
          <ul>
            <li>
              <strong>Getting Around</strong>: Taxis are plentiful and relatively inexpensive. Use ride-hailing apps
              like Careem or Uber for convenience.
            </li>
            <li>
              <strong>Best Time to Visit</strong>: Spring (March to May) and fall (September to November) offer the most
              pleasant temperatures.
            </li>
            <li>
              <strong>Language</strong>: Arabic is the official language, but English is widely spoken in tourist areas.
            </li>
            <li>
              <strong>Currency</strong>: The Jordanian Dinar (JOD) is one of the strongest currencies in the region.
              Keep small bills handy for taxis and small purchases.
            </li>
            <li>
              <strong>Dress Code</strong>: While Amman is relatively liberal, modest dress is appreciated, especially
              when visiting religious sites.
            </li>
          </ul>

          <p>
            Amman rewards those who take time to explore its many layers. From ancient ruins to cutting-edge art
            galleries, traditional souks to modern malls, the city offers a fascinating glimpse into both Jordan's past
            and its future. Use this list as a starting point, but don't be afraid to wander and discover your own
            favorite spots in this welcoming city.
          </p>
        </div>
      </div>
    </div>
  )
}
