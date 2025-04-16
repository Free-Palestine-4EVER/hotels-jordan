import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function FiveDayItinerary() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">5-Day Jordan Itinerary: The Perfect Introduction</h1>
        <p className="text-gray-600 mb-4">Published on April 11, 2023 • Last updated April 11, 2024</p>
        <Image
          src="/images/itineraries/5-day-itinerary-jordan.jpg"
          alt="5-Day Jordan Itinerary"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />
      </div>

      <div className="prose max-w-none">
        <p>
          Five days in Jordan gives you the perfect introduction to this fascinating country. This balanced itinerary
          allows you to experience Jordan's most iconic sites without feeling too rushed, including the ancient city of
          Petra, the otherworldly desert of Wadi Rum, the historic capital of Amman, and the therapeutic waters of the
          Dead Sea.
        </p>

        <h2>Day 1: Amman Exploration</h2>
        <p>
          <strong>Morning:</strong> Begin your Jordan adventure in the capital city of Amman. Visit the Citadel (Jabal
          al-Qal'a) for panoramic views and to explore ancient ruins including the Temple of Hercules and the Umayyad
          Palace.
        </p>
        <p>
          <strong>Afternoon:</strong> Explore the Roman Theater and the nearby Jordan Museum, which houses important
          archaeological artifacts including some of the Dead Sea Scrolls. Wander through downtown Amman to experience
          local life.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy dinner at a traditional restaurant in Rainbow Street, sampling classic
          Jordanian dishes like mansaf (the national dish) or maqluba.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 2: Jerash and Desert Castles</h2>
        <p>
          <strong>Morning:</strong> Take a day trip to Jerash (approximately 1 hour from Amman), home to one of the
          best-preserved Roman provincial cities in the world. Explore the impressive colonnaded streets, theaters,
          temples, and public squares.
        </p>
        <p>
          <strong>Afternoon:</strong> On your return to Amman, visit one or two of Jordan's desert castles in the
          eastern desert, such as Qasr Amra or Qasr Kharana. These Umayyad-era structures offer fascinating insights
          into early Islamic art and architecture.
        </p>
        <p>
          <strong>Evening:</strong> Return to Amman for dinner and your second night.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 3: Petra - The Rose City</h2>
        <p>
          <strong>Morning:</strong> Depart early from Amman for the approximately 3-hour drive to Petra. Consider
          stopping at Kerak Castle en route to break up the journey and explore this impressive Crusader fortress.
        </p>
        <p>
          <strong>Afternoon and Evening:</strong> Spend the rest of the day exploring the ancient Nabatean city of
          Petra. Enter through the Siq to reach the Treasury, then continue to the Royal Tombs, the Colonnaded Street,
          and if time permits, hike up to the Monastery for spectacular views.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Wadi Musa (the town adjacent to Petra).
        </p>

        <h2>Day 4: Wadi Rum Desert Experience</h2>
        <p>
          <strong>Morning:</strong> After breakfast, drive to Wadi Rum (approximately 1.5 hours from Petra).
        </p>
        <p>
          <strong>Afternoon:</strong> Embark on a 4-hour jeep tour through the spectacular desert landscape of Wadi Rum.
          Visit ancient rock inscriptions, towering sandstone mountains, natural arches, and Bedouin camps.
        </p>
        <p>
          <strong>Evening:</strong> Experience authentic Bedouin hospitality with dinner and overnight stay at a desert
          camp. Enjoy stargazing in one of the world's best locations for viewing the night sky.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in a Bedouin camp in Wadi Rum.
        </p>

        <h2>Day 5: Dead Sea Relaxation</h2>
        <p>
          <strong>Morning:</strong> After breakfast in the desert, drive to the Dead Sea (approximately 4 hours from
          Wadi Rum).
        </p>
        <p>
          <strong>Afternoon:</strong> Spend your final day relaxing at the Dead Sea, the lowest point on Earth. Float
          effortlessly in the mineral-rich waters and apply the famous Dead Sea mud, known for its therapeutic
          properties.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy a sunset dinner at your resort before departing or spending one final night in
          Jordan.
        </p>

        <h2>Travel Tips for Your 5-Day Itinerary</h2>
        <ul>
          <li>
            <strong>Transportation:</strong> Renting a car gives you flexibility, but hiring a driver is also a good
            option for this itinerary.
          </li>
          <li>
            <strong>Jordan Pass:</strong> Purchase a{" "}
            <Link href="/travel-tips/jordan-pass-guide" className="text-blue-600 hover:underline">
              Jordan Pass
            </Link>{" "}
            before arrival to save money on visa fees and entrance to multiple attractions.
          </li>
          <li>
            <strong>Petra:</strong> Wear comfortable shoes and bring sun protection for your day in Petra.
          </li>
          <li>
            <strong>Wadi Rum:</strong> Pack a light jacket even in summer, as desert nights can be cool.
          </li>
          <li>
            <strong>Dead Sea:</strong> Don't shave right before visiting, and keep the salty water out of your eyes.
          </li>
        </ul>

        <h2>Alternative Options</h2>
        <p>If you have specific interests, you might consider these alternatives to customize your 5-day itinerary:</p>
        <ul>
          <li>
            Add Madaba and Mount Nebo between Amman and the Dead Sea to see the famous mosaic map and biblical site.
          </li>
          <li>
            Spend an extra half-day in Petra to explore at a more leisurely pace or hike some of the less-visited
            trails.
          </li>
          <li>Include Aqaba for a Red Sea experience if you enjoy snorkeling or diving.</li>
        </ul>

        <p>
          Five days provides a wonderful introduction to Jordan's highlights. For a more comprehensive experience
          including additional sites and a more relaxed pace, consider our{" "}
          <Link href="/travel-tips/7-day-itinerary" className="text-blue-600 hover:underline">
            7-day
          </Link>{" "}
          or{" "}
          <Link href="/travel-tips/10-day-itinerary" className="text-blue-600 hover:underline">
            10-day
          </Link>{" "}
          itineraries. If you're short on time, check our{" "}
          <Link href="/travel-tips/3-day-itinerary" className="text-blue-600 hover:underline">
            3-day
          </Link>{" "}
          essential highlights tour.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to plan your Jordan adventure?</h3>
        <p className="mb-4">Explore our detailed guides on other destinations in Jordan to enhance your itinerary.</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/destinations/petra" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Petra Guide
          </Link>
          <Link href="/destinations/wadi-rum" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Wadi Rum Guide
          </Link>
          <Link href="/destinations/dead-sea" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Dead Sea Guide
          </Link>
          <Link href="/destinations/jerash" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Jerash Guide
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm
          title="Questions About This 5-Day Itinerary?"
          subtitle="Need help customizing this itinerary or have specific questions? Send us a message and our Jordan travel experts will assist you."
        />
      </div>
    </div>
  )
}
