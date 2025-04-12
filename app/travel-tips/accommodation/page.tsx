import Link from "next/link"
import Image from "next/image"

export default function AccommodationGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Accommodation Guide for Jordan</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/accommodation-guide-jordan.jpg"
          alt="Accommodation in Jordan"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Accommodation Options in Jordan</h2>
        <p>
          Jordan offers a diverse range of accommodation options to suit every budget and travel style. From luxury
          resorts overlooking the Dead Sea to authentic Bedouin camps under the stars in Wadi Rum, your choice of where
          to stay can greatly enhance your Jordan experience.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Luxury experience:</strong> 5-star hotels in Amman, Dead Sea resorts
            </li>
            <li>
              <strong>Mid-range comfort:</strong> 3-4 star hotels, boutique properties
            </li>
            <li>
              <strong>Budget options:</strong> Hostels, guesthouses, budget hotels
            </li>
            <li>
              <strong>Unique stays:</strong> Bedouin camps, ecolodges, homestays
            </li>
            <li>
              <strong>Booking ahead:</strong> Essential in high season (Mar-May, Sep-Nov)
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Accommodation by Destination</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Amman</h3>
        <p>
          As Jordan's capital and largest city, Amman offers the widest range of accommodation options in the country,
          from international luxury chains to budget hostels.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Luxury Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Four Seasons Hotel Amman:</strong> Located in the prestigious 5th Circle area with panoramic city
            views
          </li>
          <li>
            <strong>The St. Regis Amman:</strong> Elegant luxury in the diplomatic area
          </li>
          <li>
            <strong>W Amman:</strong> Contemporary luxury with vibrant design
          </li>
          <li>
            <strong>Fairmont Amman:</strong> Sophisticated rooms and excellent dining options
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD150-400 ($210-560) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mid-Range Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Amman Rotana:</strong> Modern tower hotel with excellent facilities
          </li>
          <li>
            <strong>The House Boutique Suites:</strong> Elegant apartment-style accommodation
          </li>
          <li>
            <strong>Kempinski Hotel Amman:</strong> Reliable international standard
          </li>
          <li>
            <strong>Corp Amman Hotel:</strong> Comfortable rooms in a central location
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD70-150 ($100-210) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Budget Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>The Sydney Hotel:</strong> Simple rooms in downtown Amman
          </li>
          <li>
            <strong>Jordan Tower Hotel:</strong> Basic but clean with a great location
          </li>
          <li>
            <strong>Cliff Hostel:</strong> Affordable dormitory and private rooms
          </li>
          <li>
            <strong>Nomads Hotel & Hostel:</strong> Social atmosphere with rooftop terrace
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD15-70 ($20-100) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Neighborhood Guide</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Jabal Amman & Rainbow Street:</strong> Trendy area with cafes, restaurants, and boutique hotels
          </li>
          <li>
            <strong>Downtown (Balad):</strong> Historic center with budget options and local atmosphere
          </li>
          <li>
            <strong>Abdoun & Sweifieh:</strong> Upscale residential areas with luxury hotels
          </li>
          <li>
            <strong>Shmeisani:</strong> Business district with mid-range and upscale options
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            For a local experience in Amman, consider staying in the Jabal Amman or Jabal al-Weibdeh neighborhoods.
            These historic districts offer charming boutique hotels, local cafes, and art galleries within walking
            distance.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Petra (Wadi Musa)</h3>
        <p>
          Accommodation in Petra is concentrated in the adjacent town of Wadi Musa. Options range from luxury hotels
          with views of the mountains to simple guesthouses within walking distance of the Petra entrance.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Luxury Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mövenpick Resort Petra:</strong> Located directly at the entrance to Petra
          </li>
          <li>
            <strong>Petra Marriott Hotel:</strong> Panoramic views from a hillside location
          </li>
          <li>
            <strong>The Old Village Hotel & Resort:</strong> Atmospheric property in converted traditional houses
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD120-250 ($170-350) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mid-Range Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Petra Guest House Hotel:</strong> Just steps from the entrance with a cave bar
          </li>
          <li>
            <strong>Petra Moon Hotel:</strong> Comfortable rooms and a rooftop pool
          </li>
          <li>
            <strong>P Quattro Relax Hotel:</strong> Modern hotel with good amenities
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD60-120 ($85-170) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Budget Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Rocky Mountain Hotel:</strong> Simple rooms with mountain views
          </li>
          <li>
            <strong>Valentine Inn:</strong> Budget-friendly with free shuttle to Petra
          </li>
          <li>
            <strong>Petra Capsule Hostel:</strong> Modern pod-style beds for backpackers
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD15-60 ($20-85) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Location Considerations</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Near the entrance:</strong> Most convenient but often more expensive
          </li>
          <li>
            <strong>Wadi Musa town center:</strong> More dining options and local atmosphere
          </li>
          <li>
            <strong>Hillside locations:</strong> Better views but may require transportation to the site
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            If you're planning to do the "Petra by Night" experience (which runs Monday, Wednesday, and Thursday
            evenings), staying close to the entrance is particularly convenient as the event ends late.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Wadi Rum</h3>
        <p>
          Staying in a Bedouin camp in Wadi Rum is one of Jordan's most unique accommodation experiences. Options range
          from basic traditional camps to luxury "glamping" experiences.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Luxury Desert Camps</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Memories Aicha Luxury Camp:</strong> Transparent bubble tents for stargazing
          </li>
          <li>
            <strong>Wadi Rum Night Luxury Camp:</strong> Full-service luxury tents with private bathrooms
          </li>
          <li>
            <strong>Sun City Camp:</strong> Famous for its Martian domes
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD100-300 ($140-420) per night, often including dinner and breakfast
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mid-Range Camps</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Wadi Rum Bedouin Camp:</strong> Comfortable tents with shared facilities
          </li>
          <li>
            <strong>Rahayeb Desert Camp:</strong> Traditional experience with modern amenities
          </li>
          <li>
            <strong>Hasan Zawaideh Camp:</strong> Family-run camp with good food
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD50-100 ($70-140) per night, usually including meals
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Basic Camps</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Bedouin Directions Camp:</strong> Authentic experience with basic facilities
          </li>
          <li>
            <strong>Wadi Rum Beduland Camp:</strong> Simple tents with traditional hospitality
          </li>
          <li>
            <strong>Bedouin Life Style Camp:</strong> No-frills desert experience
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD25-50 ($35-70) per night, including meals
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">What to Expect</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most camps include dinner and breakfast in their rates</li>
          <li>Many offer jeep tours and other activities as packages</li>
          <li>Electricity may be limited to certain hours (except in luxury camps)</li>
          <li>Wi-Fi is rare, and cell service is limited</li>
          <li>Shared bathrooms are common in basic and mid-range camps</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            Book a camp that's located deep within the protected area rather than near the visitor center for a more
            immersive desert experience. The best camps are reached by 4x4 transfer and offer spectacular sunset views
            from their location.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Dead Sea</h3>
        <p>
          The Dead Sea shoreline is home to several luxury resorts that take advantage of the area's unique natural
          features. Most properties offer private beach access and spa facilities using Dead Sea minerals.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Luxury Resorts</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Kempinski Hotel Ishtar Dead Sea:</strong> Expansive property with multiple pools
          </li>
          <li>
            <strong>Hilton Dead Sea Resort & Spa:</strong> Modern luxury with excellent facilities
          </li>
          <li>
            <strong>Mövenpick Resort & Spa Dead Sea:</strong> Village-style resort with extensive gardens
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD120-300 ($170-420) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mid-Range Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dead Sea Spa Hotel:</strong> One of the original Dead Sea hotels with medical spa
          </li>
          <li>
            <strong>Holiday Inn Resort Dead Sea:</strong> Family-friendly with good amenities
          </li>
          <li>
            <strong>Ramada Resort by Wyndham Dead Sea:</strong> Comfortable option with private beach
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD70-120 ($100-170) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Budget Options</h4>
        <p>True budget accommodation is limited at the Dead Sea. For more affordable options:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Consider day trips from Amman or Madaba</li>
          <li>Look for deals at the mid-range hotels during off-season</li>
          <li>Use public beaches like Amman Beach (entrance fee applies) and stay elsewhere</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            Dead Sea resort prices can drop significantly in summer (June-August) when temperatures are extremely high.
            If you can tolerate the heat and plan your Dead Sea activities for early morning or late afternoon, you can
            find excellent deals.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Aqaba</h3>
        <p>
          Jordan's only coastal city offers a range of accommodation options from international resorts to local hotels,
          all providing access to the Red Sea.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Luxury Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Kempinski Hotel Aqaba:</strong> Sleek design with private beach
          </li>
          <li>
            <strong>Hyatt Regency Aqaba Ayla Resort:</strong> Modern resort in the Ayla development
          </li>
          <li>
            <strong>Al Manara, a Luxury Collection Hotel:</strong> Elegant property with Saraya Aqaba lagoon views
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD120-250 ($170-350) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mid-Range Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>DoubleTree by Hilton Hotel Aqaba:</strong> City hotel with rooftop pool
          </li>
          <li>
            <strong>Oryx Hotel Aqaba:</strong> Comfortable rooms in the city center
          </li>
          <li>
            <strong>Marina Plaza Hotel:</strong> Near the marina with sea views
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD60-120 ($85-170) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Budget Options</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Darna Village Beach Hostel:</strong> Beachfront hostel with private and dorm rooms
          </li>
          <li>
            <strong>My Hotel:</strong> Simple but clean rooms in the city center
          </li>
          <li>
            <strong>Lacosta Hotel:</strong> Budget option with a pool
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD20-60 ($28-85) per night
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Location Considerations</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>North Beach:</strong> Quieter area with better snorkeling and diving access
          </li>
          <li>
            <strong>City Center:</strong> More dining options and local atmosphere
          </li>
          <li>
            <strong>Tala Bay:</strong> Resort complex south of the city
          </li>
          <li>
            <strong>Ayla:</strong> New development with marina and lagoons
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Other Destinations</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Madaba</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Luxury:</strong> Grand Hotel Madaba
          </li>
          <li>
            <strong>Mid-range:</strong> Mosaic City Hotel, Mariam Hotel
          </li>
          <li>
            <strong>Budget:</strong> Moab Land Hotel, Salome Hotel
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Dana Biosphere Reserve</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Unique:</strong> Dana Guesthouse (ecolodge with spectacular views)
          </li>
          <li>
            <strong>Luxury:</strong> Feynan Ecolodge (solar-powered desert lodge)
          </li>
          <li>
            <strong>Basic:</strong> Rummana Campsite (tent accommodation in nature)
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Jerash</h4>
        <p>Limited accommodation options; most visitors stay in Amman and visit as a day trip.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mid-range:</strong> Olive Branch Hotel
          </li>
          <li>
            <strong>Budget:</strong> Hadrian's Gate Hotel
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Unique Accommodation Experiences</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Homestays</h3>
        <p>
          For an authentic cultural experience, consider a homestay with a local family. Organizations like the Jordan
          Tourism Board's "Meaningful Travel Map" can help arrange these experiences in villages like:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Umm Qais:</strong> Stay with local families in this northern village with Roman ruins
          </li>
          <li>
            <strong>Ajloun:</strong> Forest reserve area with family homestay options
          </li>
          <li>
            <strong>Feynan:</strong> Bedouin homestays in this remote desert area
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD30-60 ($40-85) per night, often including meals
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ecolodges</h3>
        <p>Jordan has several ecolodges that offer sustainable accommodation in natural settings:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Feynan Ecolodge:</strong> Solar-powered lodge in the Dana Biosphere Reserve
          </li>
          <li>
            <strong>Ajloun Forest Reserve Cabins:</strong> Wooden cabins in a highland forest
          </li>
          <li>
            <strong>Azraq Lodge:</strong> Converted 1940s British military hospital near the wetland reserve
          </li>
        </ul>
        <p>
          <strong>Price range:</strong> JD70-150 ($100-210) per night
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Historic Properties</h3>
        <p>Several historic buildings have been converted into atmospheric hotels:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Taybet Zaman Hotel & Resort:</strong> Former Ottoman village near Petra
          </li>
          <li>
            <strong>Old Village Resort:</strong> Traditional stone houses in Wadi Musa
          </li>
          <li>
            <strong>Beit Zaman:</strong> Historic property in Madaba
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Booking Tips</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">When to Book</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>High season (March-May, September-November):</strong> Book 2-3 months in advance, especially for
            Petra and Wadi Rum
          </li>
          <li>
            <strong>Shoulder season (February, June, December):</strong> Book 1-2 months ahead for best options
          </li>
          <li>
            <strong>Low season (July-August, January):</strong> Last-minute bookings often possible
          </li>
          <li>
            <strong>Holidays:</strong> Book well in advance for Eid periods, Christmas/New Year, and Easter
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Saving Money</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visit during shoulder or low season for significant discounts</li>
          <li>Many hotels offer better rates for direct bookings</li>
          <li>Package deals including tours can offer good value, especially in Wadi Rum</li>
          <li>Breakfast is often included; half-board options can be economical</li>
          <li>Some credit cards offer hotel benefits or points for stays</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Important Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tourist tax:</strong> Hotels charge a government tax (typically 7%) plus service charge (5-10%)
          </li>
          <li>
            <strong>Ramadan:</strong> Some facilities may have limited hours during the holy month
          </li>
          <li>
            <strong>Family rooms:</strong> Many hotels offer family rooms or connecting options
          </li>
          <li>
            <strong>Accessibility:</strong> Newer hotels generally have better accessibility features
          </li>
          <li>
            <strong>Wi-Fi:</strong> Available in most accommodations but quality varies
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            For longer stays (3+ nights), don't hesitate to ask for discounts, especially in the off-season. Many hotels
            are willing to negotiate rates for extended stays or may offer complimentary upgrades.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Recommended Itinerary-Based Accommodation</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Classic 7-Day Jordan Tour</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Days 1-2:</strong> Amman - The House Boutique Suites or Canary Hotel
          </li>
          <li>
            <strong>Days 3-4:</strong> Petra - Petra Guest House or Petra Moon Hotel
          </li>
          <li>
            <strong>Day 5:</strong> Wadi Rum - Wadi Rum Bedouin Camp or Sun City Camp
          </li>
          <li>
            <strong>Days 6-7:</strong> Dead Sea - Dead Sea Spa Hotel or Mövenpick Resort
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Budget 5-Day Itinerary</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Days 1-2:</strong> Amman - Jordan Tower Hotel or Sydney Hotel
          </li>
          <li>
            <strong>Days 3-4:</strong> Petra - Valentine Inn or Rocky Mountain Hotel
          </li>
          <li>
            <strong>Day 5:</strong> Wadi Rum - Bedouin Directions Camp
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Luxury 10-Day Experience</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Days 1-3:</strong> Amman - Four Seasons or St. Regis
          </li>
          <li>
            <strong>Day 4:</strong> Dana - Feynan Ecolodge
          </li>
          <li>
            <strong>Days 5-6:</strong> Petra - Mövenpick Resort Petra
          </li>
          <li>
            <strong>Days 7-8:</strong> Wadi Rum - Memories Aicha Luxury Camp
          </li>
          <li>
            <strong>Days 9-10:</strong> Dead Sea - Kempinski Ishtar
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/travel-tips/best-time-to-visit"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Best Time to Visit</h3>
            <p className="text-sm text-gray-600">When to book for the best rates and weather</p>
          </Link>
          <Link
            href="/travel-tips/getting-around"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Getting Around Jordan</h3>
            <p className="text-sm text-gray-600">Transportation between accommodation locations</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
