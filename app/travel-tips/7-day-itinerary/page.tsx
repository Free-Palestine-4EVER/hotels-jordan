import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function SevenDayItinerary() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">7-Day Jordan Itinerary: The Complete Experience</h1>
        <p className="text-gray-600 mb-4">Published on April 11, 2023 • Last updated April 11, 2024</p>
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src="/images/itineraries/7-day-itinerary-jordan.jpg"
            alt="7-Day Jordan Itinerary"
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg mb-8"
          />
        </div>
      </div>

      <div className="prose max-w-none">
        <p>
          A week in Jordan allows you to experience the country's major highlights at a comfortable pace. This 7-day
          itinerary covers the essential sites while adding some depth to your journey, giving you time to truly
          appreciate the beauty, history, and culture of this remarkable country.
        </p>

        <h2>Day 1: Arrival in Amman</h2>
        <p>
          <strong>Morning/Afternoon:</strong> Arrive in Amman and settle into your accommodation. Depending on your
          arrival time, take a gentle stroll around the local neighborhood to begin acclimating.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy dinner at a local restaurant in Amman, perhaps in the popular Rainbow Street
          area, to sample traditional Jordanian cuisine and begin your cultural immersion.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 2: Amman City Exploration</h2>
        <p>
          <strong>Morning:</strong> Visit the Citadel (Jabal al-Qal'a) for panoramic views of Amman and to explore
          ancient ruins including the Temple of Hercules and the Umayyad Palace. Continue to the nearby Roman Theater.
        </p>
        <p>
          <strong>Afternoon:</strong> Explore the Jordan Museum to gain insights into the country's rich history, then
          wander through downtown Amman, visiting local markets and experiencing everyday Jordanian life.
        </p>
        <p>
          <strong>Evening:</strong> Enjoy dinner at a traditional restaurant, perhaps trying mansaf, Jordan's national
          dish.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 3: Jerash and Northern Jordan</h2>
        <p>
          <strong>Morning:</strong> Drive to Jerash (approximately 1 hour from Amman) to explore one of the
          best-preserved Roman provincial cities in the world, with its impressive colonnaded streets, theaters,
          temples, and public squares.
        </p>
        <p>
          <strong>Afternoon:</strong> Visit Ajloun Castle, a 12th-century Muslim castle that served as a military fort
          to protect the region from Crusader attacks. Enjoy the beautiful views of the Jordan Valley from this hilltop
          fortress.
        </p>
        <p>
          <strong>Evening:</strong> Return to Amman for dinner and your final night in the capital.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Amman.
        </p>

        <h2>Day 4: King's Highway to Petra</h2>
        <p>
          <strong>Morning:</strong> Depart Amman and travel south along the scenic King's Highway. Visit Madaba to see
          the famous 6th-century mosaic map of Jerusalem and the Holy Land, then continue to Mount Nebo, where Moses is
          said to have viewed the Promised Land.
        </p>
        <p>
          <strong>Afternoon:</strong> Continue south, stopping at Kerak Castle, an impressive Crusader fortress. Proceed
          to Petra and check into your accommodation.
        </p>
        <p>
          <strong>Evening:</strong> Consider experiencing "Petra by Night" if your visit coincides with this special
          event (Monday, Wednesday, and Thursday nights).
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Wadi Musa (the town adjacent to Petra).
        </p>

        <h2>Day 5: Petra Exploration</h2>
        <p>
          <strong>Full Day:</strong> Dedicate an entire day to exploring the ancient Nabatean city of Petra. Enter
          through the Siq to reach the Treasury, then continue to the Royal Tombs, the Colonnaded Street, the Great
          Temple, and hike up to the Monastery for spectacular views. Take your time to fully appreciate this Wonder of
          the World.
        </p>
        <p>
          <strong>Evening:</strong> Relax with dinner in Wadi Musa, resting after a full day of exploration.
        </p>
        <p>
          <strong>Accommodation:</strong> Stay overnight in Wadi Musa for a second night.
        </p>

        <h2>Day 6: Wadi Rum Desert Experience</h2>
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

        <h2>Day 7: Dead Sea Relaxation</h2>
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

        <h2>Travel Tips for Your 7-Day Itinerary</h2>
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
            <strong>Petra:</strong> Consider hiring a guide for at least part of your Petra visit to gain deeper
            insights into the site's history.
          </li>
          <li>
            <strong>Wadi Rum:</strong> Book your desert camp in advance, especially during high season.
          </li>
          <li>
            <strong>Dead Sea:</strong> Don't plan to swim – you'll float! And keep the water out of your eyes as it's
            extremely salty.
          </li>
        </ul>

        <h2>Alternative Options</h2>
        <p>If you have specific interests, you might consider these alternatives to customize your 7-day itinerary:</p>
        <ul>
          <li>
            Include a visit to the Dana Biosphere Reserve between Petra and Wadi Rum for hiking and nature experiences.
          </li>
          <li>Add Aqaba for a Red Sea experience if you enjoy snorkeling or diving.</li>
          <li>Explore some of Jordan's desert castles east of Amman.</li>
          <li>Visit Umm Qais in the far north for impressive Roman ruins and views of the Sea of Galilee.</li>
        </ul>

        <p>
          Seven days provides a comprehensive introduction to Jordan's diverse attractions. For an even more in-depth
          experience with additional sites and a more relaxed pace, consider our{" "}
          <Link href="/travel-tips/10-day-itinerary" className="text-blue-600 hover:underline">
            10-day itinerary
          </Link>
          . If you're short on time, check our{" "}
          <Link href="/travel-tips/5-day-itinerary" className="text-blue-600 hover:underline">
            5-day
          </Link>{" "}
          or{" "}
          <Link href="/travel-tips/3-day-itinerary" className="text-blue-600 hover:underline">
            3-day
          </Link>{" "}
          options.
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
          <Link href="/destinations/madaba" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Madaba Guide
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm
          title="Questions About This 7-Day Itinerary?"
          subtitle="Need help customizing this itinerary or have specific questions? Send us a message and our Jordan travel experts will assist you."
        />
      </div>
    </div>
  )
}
