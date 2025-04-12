import Image from "next/image"
import Link from "next/link"

export default function HowToGetWadiRumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/destinations/wadi-rum/wadi-rum-blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Wadi Rum Blog
      </Link>

      <h1 className="text-3xl font-bold mb-6">How to Get to Wadi Rum from Amman, Aqaba, and Petra</h1>

      <div className="relative w-full h-96 mb-8">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Road leading to Wadi Rum with mountains in the background"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Wadi Rum's otherworldly landscape is a must-visit destination in Jordan, but its remote desert location means
          some planning is required to get there. This comprehensive guide covers all transportation options from
          Jordan's major tourist hubs: Amman, Aqaba, and Petra.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting to Wadi Rum from Amman</h2>

        <p>
          The capital city of Amman is likely your entry point to Jordan and is located about 300 km (4-5 hours) from
          Wadi Rum.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Private Car/Taxi</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 4-5 hours
          </li>
          <li>
            <strong>Cost:</strong> 70-100 JOD ($100-140)
          </li>
          <li>
            <strong>Convenience:</strong> High - door-to-door service with flexibility to stop
          </li>
          <li>
            <strong>How to arrange:</strong> Hotels can arrange taxis, or use ride-hailing apps like Careem
          </li>
        </ul>

        <p>
          This is the most comfortable and flexible option. The journey follows the Desert Highway (Highway 15) south.
          Consider asking your driver to stop at scenic points or roadside restaurants along the way.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Rental Car</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 4-5 hours
          </li>
          <li>
            <strong>Cost:</strong> 30-50 JOD ($42-70) per day plus fuel
          </li>
          <li>
            <strong>Convenience:</strong> High - complete flexibility
          </li>
          <li>
            <strong>Requirements:</strong> International driving permit recommended
          </li>
        </ul>

        <p>
          Renting a car gives you complete freedom. The route is straightforward along well-maintained highways. Note
          that you'll need to park at the Wadi Rum Visitor Center and transfer to a 4x4 vehicle to enter the protected
          area.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Public Bus</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 6-7 hours (including transfers)
          </li>
          <li>
            <strong>Cost:</strong> 12-15 JOD ($17-21)
          </li>
          <li>
            <strong>Convenience:</strong> Low - requires multiple transfers
          </li>
          <li>
            <strong>Schedule:</strong> Limited departures, morning only
          </li>
        </ul>

        <p>
          The budget option requires taking a JETT bus from Amman to Aqaba (5 hours), then a local minibus or taxi to
          Wadi Rum (1 hour). JETT buses depart from their main station in Abdali, Amman.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting to Wadi Rum from Aqaba</h2>

        <p>
          Aqaba, Jordan's only coastal city, is the closest major city to Wadi Rum at just 70 km away (about 1 hour).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Taxi</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 1 hour
          </li>
          <li>
            <strong>Cost:</strong> 25-35 JOD ($35-50)
          </li>
          <li>
            <strong>Convenience:</strong> High
          </li>
          <li>
            <strong>Availability:</strong> Readily available at hotels or city center
          </li>
        </ul>

        <p>
          This is the most straightforward option from Aqaba. Many visitors fly into Aqaba's King Hussein International
          Airport and take a taxi directly to Wadi Rum.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Minibus</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 1.5 hours (including waiting time)
          </li>
          <li>
            <strong>Cost:</strong> 5 JOD ($7)
          </li>
          <li>
            <strong>Convenience:</strong> Medium
          </li>
          <li>
            <strong>Schedule:</strong> Departs when full, usually morning only
          </li>
        </ul>

        <p>
          Minibuses depart from the main station in Aqaba but only leave when full. This option is best for budget
          travelers with flexible schedules.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting to Wadi Rum from Petra</h2>

        <p>
          Many travelers visit Wadi Rum after exploring Petra. The distance between them is about 100 km (1.5-2 hours).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Taxi</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 1.5-2 hours
          </li>
          <li>
            <strong>Cost:</strong> 35-45 JOD ($50-65)
          </li>
          <li>
            <strong>Convenience:</strong> High
          </li>
          <li>
            <strong>How to arrange:</strong> Through your hotel in Wadi Musa (Petra)
          </li>
        </ul>

        <p>
          This is the most common and convenient option. The scenic drive takes you through desert landscapes and small
          villages.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Public Transport</h3>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Duration:</strong> 3-4 hours (including transfers)
          </li>
          <li>
            <strong>Cost:</strong> 7-10 JOD ($10-14)
          </li>
          <li>
            <strong>Convenience:</strong> Low
          </li>
          <li>
            <strong>Complexity:</strong> Requires changing at Aqaba
          </li>
        </ul>

        <p>
          Budget travelers can take a minibus from Petra to Aqaba, then another from Aqaba to Wadi Rum. This option
          requires time and patience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Organized Tours</h2>

        <p>Many visitors opt for organized tours that include transportation:</p>

        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Day trips from Aqaba:</strong> 50-70 JOD ($70-100) including transportation and basic tour
          </li>
          <li>
            <strong>Multi-day tours from Amman:</strong> 150-300 JOD ($210-420) including Petra, Wadi Rum, and Dead Sea
          </li>
          <li>
            <strong>Jordan Pass holders:</strong> Discounted rates available with some tour operators
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Important Tips</h2>

        <div className="bg-gray-100 p-6 rounded-lg">
          <ul className="list-disc pl-6">
            <li>
              <strong>Visitor Center:</strong> All transportation options will take you to the Wadi Rum Visitor Center,
              where you'll need to pay the entrance fee (5 JOD or included in Jordan Pass) and arrange a 4x4 tour or
              transfer to your camp
            </li>
            <li>
              <strong>Pre-arrange accommodation:</strong> Most desert camps will arrange pickup from the Visitor Center
            </li>
            <li>
              <strong>Timing:</strong> Try to arrive before 4 PM to have enough daylight for check-in and initial
              exploration
            </li>
            <li>
              <strong>Return journeys:</strong> Arrange your return transportation in advance, especially if using
              public transport
            </li>
            <li>
              <strong>Jordan Pass:</strong> Consider purchasing this if visiting multiple sites in Jordan, as it
              includes entry to Wadi Rum and Petra
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sample Itineraries</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">From Amman</h3>
        <p>
          <strong>Day 1:</strong> Depart Amman early morning (7-8 AM) by JETT bus to Aqaba, arrive around 1-2 PM, take a
          taxi to Wadi Rum, arrive by 3 PM
          <br />
          <strong>Alternative:</strong> Arrange private taxi from Amman, depart 9-10 AM, arrive Wadi Rum by 2-3 PM
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">From Petra</h3>
        <p>
          <strong>Morning departure:</strong> Leave Petra around 9-10 AM by taxi, arrive at Wadi Rum by 11:30 AM-12:30
          PM
          <br />
          <strong>Afternoon departure:</strong> Leave Petra around 2 PM, arrive at Wadi Rum by 4 PM (still enough time
          to check in before sunset)
        </p>

        <p className="mt-6">
          Regardless of your starting point, the journey to Wadi Rum is part of the adventure. The changing landscapes
          as you approach the desert—from urban centers to agricultural areas to stark desert terrain—provide a
          fascinating introduction to Jordan's diverse geography.
        </p>
      </div>
    </div>
  )
}
