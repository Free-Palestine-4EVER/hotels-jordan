import Image from "next/image"
import Link from "next/link"

export default function WhereToStayWadiRum() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Where to Stay in Wadi Rum</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg mb-6">
          Wadi Rum offers a unique opportunity to experience the desert in various accommodation styles, from
          traditional Bedouin camps to luxury glamping experiences. Here are some of the best places to stay during your
          visit to the Valley of the Moon.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
          <h3 className="font-bold text-amber-800">Important Note</h3>
          <p className="text-amber-700">
            All camps in Wadi Rum are located inside the protected area. Most include dinner and breakfast in their
            rates, and many offer jeep tours and other activities. Booking in advance is highly recommended, especially
            during peak season (March-May and September-November).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mohammed Mutlak Camp */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/images/mohammed-mutlak-camp.png" alt="Mohammed Mutlak Camp" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-teal-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Authentic
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Mohammed Mutlak Camp</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              A traditional Bedouin camp offering authentic desert experiences with comfortable accommodations. Run by
              local Bedouins who provide excellent hospitality and cultural insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Traditional tents</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bedouin meals</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Jeep tours</span>
            </div>
            <Link
              href="https://www.mohammedmutlakcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>

        {/* The Villas Resort */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/wadi-rum-luxury-camp.png" alt="The Villas Resort" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Luxury
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">The Villas Resort</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$$$$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              A premium luxury resort offering private villas with stunning desert views. Features high-end amenities,
              gourmet dining, and exclusive desert experiences for discerning travelers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Private villas</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Fine dining</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Private tours</span>
            </div>
            <Link
              href="https://www.thevillas-wadirum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>

        {/* Bubble Luxotel */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/wadi-rum-bubble-night.png" alt="Bubble Luxotel" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Unique
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Bubble Luxotel</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$$$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Sleep under the stars in transparent bubble tents with all the comforts of a luxury hotel. Perfect for
              stargazing and experiencing the desert in a unique way.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bubble tents</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Stargazing</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Private bathroom</span>
            </div>
            <Link
              href="#"
              className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Desert Oasis Camp */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/desert-oasis-retreat.png" alt="Desert Oasis Camp" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Eco-friendly
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Desert Oasis Camp</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              An eco-friendly camp focused on sustainability and minimal environmental impact. Offers comfortable tents,
              traditional meals, and responsible desert tours.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Solar powered</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Organic food</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Eco tours</span>
            </div>
            <Link
              href="#"
              className="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Martian Domes */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/martian-dome-wadi-rum.png" alt="Martian Domes" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Unique
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Martian Domes</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$$$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Experience Mars on Earth in these futuristic dome accommodations. Inspired by the Mars-like landscape of
              Wadi Rum, these domes offer a sci-fi experience with modern comforts.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Futuristic domes</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Air conditioning</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Panoramic views</span>
            </div>
            <Link
              href="#"
              className="block text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Traditional Bedouin Camp */}
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image src="/wadi-rum-bedouin-camp.png" alt="Traditional Bedouin Camp" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
              Budget-friendly
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Traditional Bedouin Camp</h3>
              <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                <span className="text-gray-800">$</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              An authentic budget-friendly option for experiencing traditional Bedouin hospitality. Simple
              accommodations with shared facilities and genuine cultural experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Shared tents</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Traditional music</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Group tours</span>
            </div>
            <Link
              href="#"
              className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4">Booking Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Book directly with camps when possible for the best rates</li>
          <li>Confirm what's included in your stay (meals, activities, transportation)</li>
          <li>Ask about electricity availability and charging options</li>
          <li>Check if the camp provides transportation from Wadi Rum village</li>
          <li>Pack accordingly for desert conditions (temperature changes dramatically at night)</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
          <h3 className="font-bold text-blue-800">Price Guide</h3>
          <p className="text-blue-700 mb-2">
            $ = Budget (under $50 per night)
            <br />
            $$ = Mid-range ($50-100 per night)
            <br />
            $$$ = Upscale ($100-200 per night)
            <br />
            $$$$ = Luxury (over $200 per night)
          </p>
          <p className="text-blue-700">Prices typically include dinner and breakfast.</p>
        </div>
      </div>
    </div>
  )
}
