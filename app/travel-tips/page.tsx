import Link from "next/link"

export default function TravelTipsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Jordan Travel Tips</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Essential Travel Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/travel-tips/best-time-to-visit"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/seasons-jordan.jpg"
                alt="Best time to visit Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Best Time to Visit Jordan</h3>
              <p className="text-gray-600">
                Learn about Jordan's seasons and when to plan your trip for the best experience.
              </p>
            </div>
          </Link>

          <Link
            href="/travel-tips/getting-around"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/transportation-jordan.jpg"
                alt="Getting around Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Getting Around Jordan</h3>
              <p className="text-gray-600">
                Transportation options, costs, and tips for navigating Jordan efficiently.
              </p>
            </div>
          </Link>

          <Link
            href="/travel-tips/jordan-pass"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/jordan-pass.jpg"
                alt="Jordan Pass Guide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Jordan Pass Guide</h3>
              <p className="text-gray-600">
                Everything you need to know about the Jordan Pass and if it's worth it for your trip.
              </p>
            </div>
          </Link>

          <Link
            href="/travel-tips/accommodation"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/accommodation-jordan.jpg"
                alt="Accommodation in Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Accommodation Guide</h3>
              <p className="text-gray-600">
                From luxury hotels to Bedouin camps - find the perfect place to stay in Jordan.
              </p>
            </div>
          </Link>

          <Link
            href="/travel-tips/food"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/jordanian-food.jpg"
                alt="Jordanian food and cuisine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Food & Cuisine</h3>
              <p className="text-gray-600">Discover Jordan's delicious culinary traditions and must-try dishes.</p>
            </div>
          </Link>

          <Link
            href="/travel-tips/cultural-etiquette"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/cultural-etiquette-jordan.jpg"
                alt="Cultural etiquette in Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cultural Etiquette</h3>
              <p className="text-gray-600">Important customs and etiquette to respect while traveling in Jordan.</p>
            </div>
          </Link>

          <Link
            href="/travel-tips/safety-tips"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/safety-jordan.jpg"
                alt="Safety tips for Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
              <p className="text-gray-600">Is Jordan safe? Essential safety information for travelers.</p>
            </div>
          </Link>

          <Link
            href="/travel-tips/packing-guide"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/travel-tips/packing-jordan.jpg"
                alt="Packing guide for Jordan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Packing Guide</h3>
              <p className="text-gray-600">What to pack for your Jordan adventure in any season.</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Jordan Itineraries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/travel-tips/3-day-itinerary"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">3-Day Itinerary</h3>
            <p className="text-gray-600">Perfect for a quick visit to Jordan's highlights.</p>
          </Link>

          <Link
            href="/travel-tips/5-day-itinerary"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">5-Day Itinerary</h3>
            <p className="text-gray-600">A balanced trip covering Jordan's main attractions.</p>
          </Link>

          <Link
            href="/travel-tips/7-day-itinerary"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">7-Day Itinerary</h3>
            <p className="text-gray-600">The ideal duration for a comprehensive Jordan experience.</p>
          </Link>

          <Link
            href="/travel-tips/10-day-itinerary"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">10-Day Itinerary</h3>
            <p className="text-gray-600">An in-depth exploration of Jordan's diverse regions.</p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Planning Resources</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">Planning a trip to Jordan? Here are some helpful resources:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.visitjordan.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Jordan Tourism Board
              </a>
            </li>
            <li>
              <a
                href="https://www.jordanpass.jo"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jordan Pass Official Website
              </a>
            </li>
            <li>
              <a
                href="https://international.visitjordan.com/page/23/entry-to-jordan"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visa Information
              </a>
            </li>
            <li>
              <a
                href="https://www.xe.com/currencyconverter/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Currency Converter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
