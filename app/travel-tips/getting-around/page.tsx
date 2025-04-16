import Link from "next/link"
import Image from "next/image"

export default function GettingAroundPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Getting Around Jordan</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/transportation-jordan.jpg"
          alt="Transportation in Jordan"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Transportation Options in Jordan</h2>
        <p>
          Jordan offers various transportation options to suit different travel styles and budgets. From self-driving
          adventures to guided tours, understanding your options will help you navigate the country efficiently and make
          the most of your visit.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Best for independence:</strong> Rental car
            </li>
            <li>
              <strong>Most economical:</strong> Public buses
            </li>
            <li>
              <strong>Most comfortable:</strong> Private driver/tour
            </li>
            <li>
              <strong>Best for major sites only:</strong> JETT buses
            </li>
            <li>
              <strong>Best for groups:</strong> Shared taxi (service)
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Rental Cars</h2>
        <p>
          Renting a car in Jordan gives you the most flexibility and is highly recommended if you're comfortable driving
          in a foreign country. Jordan's main highways are well-maintained, and road signs are in both Arabic and
          English.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Advantages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete freedom to create your own schedule</li>
          <li>Ability to reach remote areas not served by public transportation</li>
          <li>Convenience of door-to-door travel</li>
          <li>Cost-effective for groups of 3 or more</li>
          <li>Option to stop at viewpoints and small attractions along the way</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>International Driver's Permit recommended (but not always required)</li>
          <li>Fuel is relatively expensive in Jordan</li>
          <li>Navigation can be challenging in cities like Amman</li>
          <li>Aggressive driving style in urban areas</li>
          <li>Limited parking in city centers</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Rental Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Major international companies (Hertz, Avis, Budget) have offices at Queen Alia International Airport and in
            Amman
          </li>
          <li>Local companies often offer better rates but may have older vehicles</li>
          <li>Book in advance, especially during high season</li>
          <li>Thoroughly inspect the vehicle and document any existing damage before driving off</li>
          <li>Consider a 4WD vehicle if planning to visit Wadi Rum or other desert areas</li>
          <li>Most rentals are manual transmission; specify automatic if needed</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            Download offline maps on Google Maps or use apps like Maps.me before your trip. Cell service can be spotty
            in remote areas, and having offline navigation is invaluable.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Private Driver/Guide</h2>
        <p>
          Hiring a private driver or guide is a comfortable and stress-free way to explore Jordan. This option combines
          the convenience of door-to-door service with local knowledge and expertise.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Advantages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>No need to navigate or worry about driving in unfamiliar territory</li>
          <li>Local insights and recommendations</li>
          <li>Ability to customize your itinerary</li>
          <li>Convenient for families or travelers with limited mobility</li>
          <li>Driver can help with language barriers and cultural context</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>More expensive than self-driving or public transportation</li>
          <li>Less spontaneity unless arranged in advance</li>
          <li>Quality of guides can vary</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Booking Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book through reputable tour companies or your hotel</li>
          <li>Clarify what's included (entrance fees, meals, etc.)</li>
          <li>Discuss your interests in advance so the guide can tailor the experience</li>
          <li>Expect to pay $100-200 per day depending on the itinerary and vehicle type</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Public Buses</h2>
        <p>
          Jordan has an extensive network of public buses connecting major cities and towns. These range from modern
          coaches to older minibuses.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Types of Buses</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>JETT Buses:</strong> Modern, air-conditioned coaches that operate on fixed schedules between major
            cities. Comfortable but limited routes and frequencies.
          </li>
          <li>
            <strong>Local Buses:</strong> Smaller, often older buses that serve more routes but with less comfort and no
            fixed schedules (they depart when full).
          </li>
          <li>
            <strong>Minibuses:</strong> Serve shorter routes within cities or to nearby towns. Very economical but can
            be crowded.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Popular JETT Routes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Amman to Petra (3-4 hours)</li>
          <li>Amman to Aqaba (4 hours)</li>
          <li>Amman to Dead Sea (1 hour)</li>
          <li>Amman to Irbid (1 hour)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most economical option for solo travelers</li>
          <li>Limited schedules may restrict your itinerary</li>
          <li>Not all tourist destinations are well-served by public buses</li>
          <li>Language barriers can be challenging at bus stations</li>
          <li>Luggage space may be limited on local buses</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            For JETT buses, book tickets at least a day in advance, especially during high season. You can book online
            at{" "}
            <a
              href="https://www.jett.com.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800"
            >
              www.jett.com.jo
            </a>{" "}
            or at their offices in major cities.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Shared Taxis (Service)</h2>
        <p>
          Shared taxis, locally known as "service" (pronounced "ser-veess"), are a common mode of transportation in
          Jordan. These are typically white taxis that operate on fixed routes between cities or within urban areas.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">How They Work</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Depart from designated stations in each city</li>
          <li>Leave when full (usually 4-5 passengers)</li>
          <li>Fixed price per seat</li>
          <li>Faster than buses but more expensive</li>
          <li>Can drop you along the route if needed</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Good balance of cost and convenience</li>
          <li>More frequent departures than buses</li>
          <li>Limited luggage space</li>
          <li>May need to wait until the taxi fills up</li>
          <li>Not ideal for reaching remote tourist sites</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Private Taxis</h2>
        <p>
          Yellow taxis are available in all major cities for point-to-point transportation. They're convenient for
          getting around within cities or for day trips to nearby attractions.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Using Taxis</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Insist on using the meter or negotiate the fare before starting the journey</li>
          <li>Most drivers in tourist areas speak basic English</li>
          <li>Have your destination written in Arabic if possible</li>
          <li>Tipping is not required but rounding up is appreciated</li>
          <li>For day trips, negotiate a waiting fee or round-trip fare</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ride-Hailing Apps</h3>
        <p>
          Uber and Careem operate in Amman and some other major cities. These apps provide the convenience of cashless
          payment and predetermined fares.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Domestic Flights</h2>
        <p>
          Royal Jordanian Airlines operates domestic flights between Amman and Aqaba. This can be a time-saving option
          if you're planning to visit the Red Sea and are short on time.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Flight time is approximately 45 minutes</li>
          <li>Multiple daily flights</li>
          <li>Can be cost-effective if booked in advance</li>
          <li>Convenient if you're starting or ending your trip in Aqaba</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Organized Tours</h2>
        <p>
          For travelers with limited time or those who prefer a structured experience, organized tours are an excellent
          option. Many companies offer day trips from major cities or multi-day packages covering Jordan's highlights.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Types of Tours</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Day trips:</strong> Popular options include Amman to Dead Sea, Jerash, or Mount Nebo
          </li>
          <li>
            <strong>Multi-day tours:</strong> Comprehensive packages covering major attractions
          </li>
          <li>
            <strong>Specialized tours:</strong> Hiking, photography, culinary, or historical focus
          </li>
          <li>
            <strong>Group tours:</strong> Join other travelers for a more economical option
          </li>
          <li>
            <strong>Private tours:</strong> Customized itineraries with dedicated guide
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>All logistics handled for you</li>
          <li>Expert guides provide historical and cultural context</li>
          <li>Fixed itineraries with limited flexibility</li>
          <li>Group dynamics can impact your experience</li>
          <li>Usually more expensive than independent travel</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Transportation to Specific Destinations</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Getting to Petra</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>From Amman:</strong> JETT bus (3-4 hours), rental car (3 hours), or tour
          </li>
          <li>
            <strong>From Aqaba:</strong> Taxi or minibus (2 hours), rental car (1.5 hours)
          </li>
          <li>
            <strong>From Wadi Rum:</strong> Taxi (1.5 hours) or tour
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Getting to Wadi Rum</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>From Aqaba:</strong> Taxi (1 hour) or tour
          </li>
          <li>
            <strong>From Petra:</strong> Taxi (1.5 hours) or tour
          </li>
          <li>
            <strong>Note:</strong> Public transportation to Wadi Rum is limited; most visitors arrange transportation
            through their camp
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Getting to the Dead Sea</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>From Amman:</strong> JETT bus (1 hour), rental car (1 hour), or tour
          </li>
          <li>
            <strong>Public beach access:</strong> Amman Beach or O Beach (entrance fee applies)
          </li>
          <li>
            <strong>Resort day passes:</strong> Available at most Dead Sea resorts
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Border Crossings</h2>
        <p>If your itinerary includes neighboring countries, here are the main border crossing options:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Jordan-Israel Crossings</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>King Hussein/Allenby Bridge:</strong> Near the Dead Sea, connects to Jerusalem (not open for foreign
            tourists entering Jordan)
          </li>
          <li>
            <strong>Jordan River/Sheikh Hussein:</strong> Northern crossing, connects to Nazareth/Tiberias
          </li>
          <li>
            <strong>Wadi Araba/Yitzhak Rabin:</strong> Southern crossing between Aqaba and Eilat
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Transportation to/from Borders</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Taxis are the most reliable option for reaching border crossings</li>
          <li>No public buses go directly to borders</li>
          <li>Some tour companies offer transfer services</li>
          <li>Rental cars typically cannot be taken across borders</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2">Important Note</h3>
          <p>
            Border crossing regulations can change. Check the latest information before planning your trip, especially
            regarding visa requirements and crossing fees.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Considerations</h2>
        <p>For travelers with mobility challenges, transportation in Jordan requires some planning:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Major hotels can arrange accessible transportation</li>
          <li>Public transportation is generally not wheelchair accessible</li>
          <li>Private drivers with suitable vehicles are the best option</li>
          <li>Many tourist sites have limited accessibility features</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Final Recommendations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>For first-time visitors:</strong> Rental car or private driver provides the most flexibility
          </li>
          <li>
            <strong>For budget travelers:</strong> Combination of JETT buses and shared taxis
          </li>
          <li>
            <strong>For short trips (3-4 days):</strong> Organized tour covering major highlights
          </li>
          <li>
            <strong>For families:</strong> Private driver or rental car
          </li>
          <li>
            <strong>For solo travelers:</strong> Public transportation is economical but requires more time and
            flexibility
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            Consider a hybrid approach: rent a car for part of your trip (e.g., exploring the King's Highway) and use
            tours or public transportation for other segments. This gives you flexibility while avoiding the stress of
            driving in busy cities.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/travel-tips/jordan-pass"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Jordan Pass Guide</h3>
            <p className="text-sm text-gray-600">Save on entrance fees and visa costs</p>
          </Link>
          <Link href="/travel-tips/safety" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-semibold mb-1">Safety Tips</h3>
            <p className="text-sm text-gray-600">Staying safe while traveling in Jordan</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
