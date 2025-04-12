import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function ThreeDayItinerary() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">3-Day Jordan Itinerary: Essential Highlights</h1>
        <p className="text-gray-600 mb-4">Published on April 11, 2023 • Last updated April 11, 2024</p>
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src="/images/itineraries/3-day-itinerary-jordan.jpg"
            alt="3-Day Jordan Itinerary"
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg mb-8"
          />
        </div>
      </div>

      <div className="prose max-w-none">
        <p>
          Only have 3 days to explore Jordan? While it's a short time to experience everything this beautiful country
          has to offer, you can still visit the most iconic sites with this carefully crafted itinerary. This fast-paced
          schedule focuses on the absolute must-see attractions to make the most of your limited time.
        </p>

        <h2>Day 1: Amman Exploration</h2>
        <p>
          <strong>Morning:</strong> Begin your Jordan adventure in the capital city of Amman. Start with a visit to the
          Citadel (Jabal al-Qal'a), offering panoramic views of the city and home to important historical structures
          including the Temple of Hercules and the Umayyad Palace.
        </p>
        <p>
          <strong>Afternoon:</strong> Explore the impressive Roman Theater, a 6,000-seat ancient amphitheater dating
          back to the 2nd century. Afterward, wander through the vibrant streets of downtown Amman, visiting the souks
          (markets) and sampling local street food.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy dinner at one of Amman's rooftop restaurants in the trendy Rainbow Street
          area, offering delicious Jordanian cuisine and beautiful city views.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 2: Petra - The Rose City</h2>
        <p>
          <strong>Early Morning:</strong> Depart early from Amman for the approximately 3-hour drive to Petra. An early
          start is essential to maximize your time at this Wonder of the World.
        </p>
        <p>
          <strong>Day:</strong> Spend the entire day exploring the ancient Nabatean city of Petra. Enter through the
          dramatic Siq (narrow gorge) to reach the iconic Treasury (Al-Khazneh). Continue to explore the Royal Tombs,
          the Monastery (if you have the energy for the climb), and other remarkable structures carved into the
          rose-colored sandstone cliffs.
        </p>
        <p>
          <strong>Evening:</strong> Consider experiencing "Petra by Night" if your visit coincides with this special
          event (Monday, Wednesday, and Thursday nights), where the Siq and Treasury are illuminated by thousands of
          candles.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Wadi Musa (the town adjacent to Petra).
        </p>

        <h2>Day 3: Dead Sea Experience</h2>
        <p>
          <strong>Morning:</strong> After breakfast, drive to the Dead Sea (approximately 3 hours from Petra).
        </p>
        <p>
          <strong>Afternoon:</strong> Spend your final day floating in the mineral-rich waters of the Dead Sea, the
          lowest point on Earth. Apply the famous Dead Sea mud, known for its therapeutic properties, and relax on the
          shores of this natural wonder.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy a sunset dinner at your resort before departing or spending one final night in
          Jordan.
        </p>

        <h2>Travel Tips for Your 3-Day Itinerary</h2>
        <ul>
          <li>
            <strong>Transportation:</strong> Consider hiring a private driver for this itinerary to maximize your
            limited time.
          </li>
          <li>
            <strong>Jordan Pass:</strong> Purchase a{" "}
            <Link href="/travel-tips/jordan-pass-guide" className="text-blue-600 hover:underline">
              Jordan Pass
            </Link>{" "}
            before arrival to save money on visa fees and entrance to Petra.
          </li>
          <li>
            <strong>Packing:</strong> Bring comfortable walking shoes for Petra, modest clothing for cultural sites, and
            swimwear for the Dead Sea.
          </li>
          <li>
            <strong>Hydration:</strong> Jordan's climate can be hot and dry; carry water at all times, especially when
            exploring Petra.
          </li>
        </ul>

        <h2>Alternative Options</h2>
        <p>If you have specific interests, you might consider these alternatives to customize your 3-day itinerary:</p>
        <ul>
          <li>
            Replace the Dead Sea with a day trip to Jerash to see some of the best-preserved Roman ruins in the world.
          </li>
          <li>
            Include a quick visit to Wadi Rum for a 2-hour jeep tour if you're willing to have a very packed schedule.
          </li>
          <li>Add Mount Nebo and Madaba to your journey between Amman and the Dead Sea.</li>
        </ul>

        <p>
          While 3 days is a whirlwind tour of Jordan, this itinerary ensures you'll experience the country's most iconic
          attractions. For a more relaxed pace and to include other remarkable sites like Wadi Rum, consider extending
          your stay with our{" "}
          <Link href="/travel-tips/5-day-itinerary" className="text-blue-600 hover:underline">
            5-day
          </Link>
          ,{" "}
          <Link href="/travel-tips/7-day-itinerary" className="text-blue-600 hover:underline">
            7-day
          </Link>
          , or{" "}
          <Link href="/travel-tips/10-day-itinerary" className="text-blue-600 hover:underline">
            10-day
          </Link>{" "}
          itineraries.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to plan your Jordan adventure?</h3>
        <p className="mb-4">Explore our detailed guides on other destinations in Jordan to enhance your itinerary.</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/destinations/petra" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Petra Guide
          </Link>
          <Link href="/destinations/amman" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Amman Guide
          </Link>
          <Link href="/destinations/dead-sea" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Dead Sea Guide
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm
          title="Questions About This 3-Day Itinerary?"
          subtitle="Need help customizing this itinerary or have specific questions? Send us a message and our Jordan travel experts will assist you."
        />
      </div>
    </div>
  )
}
