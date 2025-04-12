import Link from "next/link"
import Image from "next/image"

export default function BestTimeToVisitPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Best Time to Visit Jordan</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/seasons-jordan.jpg"
          alt="Seasons in Jordan"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview of Jordan's Climate</h2>
        <p>
          Jordan experiences a predominantly Mediterranean climate with four distinct seasons. The country's varied
          topography—from the Jordan Valley (the lowest point on Earth) to highlands and desert plateaus—creates diverse
          microclimates across different regions.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Best overall time to visit:</strong> Spring (March to May) and Autumn (September to November)
            </li>
            <li>
              <strong>Peak tourist season:</strong> April-May and October-November
            </li>
            <li>
              <strong>Budget-friendly period:</strong> Winter (December to February), except holidays
            </li>
            <li>
              <strong>Best for desert experiences:</strong> Spring and Autumn
            </li>
            <li>
              <strong>Best for Dead Sea:</strong> Year-round, but avoid summer midday heat
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Seasonal Breakdown</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Spring (March to May)</h3>
        <p>
          Spring is widely considered the ideal time to visit Jordan. Temperatures are pleasantly warm but not hot,
          ranging from 15-30°C (59-86°F) depending on the region. The landscape blooms with wildflowers, especially in
          the northern highlands and Jordan Valley.
        </p>
        <p>
          This is perfect weather for exploring archaeological sites like Petra and Jerash without the scorching heat.
          However, be aware that this is peak tourist season, so expect higher prices and more crowds at popular
          attractions.
        </p>
        <p>
          <strong>Tip:</strong> Book accommodations and tours well in advance if traveling during April and May.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Summer (June to August)</h3>
        <p>
          Summers in Jordan are hot and dry, with temperatures regularly exceeding 35°C (95°F) in most regions. In Amman
          and the highlands, the heat is more tolerable with cooler evenings. The Jordan Valley and Wadi Rum can reach
          extreme temperatures of 40-45°C (104-113°F).
        </p>
        <p>
          Despite the heat, summer offers certain advantages: fewer tourists, lower prices, and longer daylight hours.
          If you visit during summer, plan outdoor activities for early morning or late afternoon, and ensure you stay
          hydrated.
        </p>
        <p>
          <strong>Tip:</strong> The Aqaba coast and higher elevations like Dana Reserve can be more comfortable in
          summer.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Autumn (September to November)</h3>
        <p>
          Like spring, autumn offers ideal weather conditions for exploring Jordan. Temperatures gradually cool down
          from summer highs, ranging from 15-30°C (59-86°F). The landscape may be drier than spring, but the golden
          light makes for spectacular photography, especially in desert regions.
        </p>
        <p>
          October and November see an increase in tourism, though not quite as busy as spring. This is an excellent time
          for hiking in nature reserves like Dana and Ajloun.
        </p>
        <p>
          <strong>Tip:</strong> November can occasionally bring the first rainfall of the season, which rarely disrupts
          travel plans but can create beautiful atmospheric conditions at sites like Petra.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Winter (December to February)</h3>
        <p>
          Winter in Jordan is cool and can be rainy, especially in the western parts of the country. Amman occasionally
          sees snow, while higher elevations may experience freezing temperatures at night. Daytime temperatures
          typically range from 8-16°C (46-61°F) in Amman and the highlands.
        </p>
        <p>
          The desert regions remain relatively mild during the day but can be very cold at night. The Dead Sea maintains
          a pleasant temperature year-round, making winter an excellent time to visit this region.
        </p>
        <p>
          Winter offers the advantage of significantly fewer tourists and lower prices (except during the Christmas/New
          Year holiday period).
        </p>
        <p>
          <strong>Tip:</strong> Pack layers and a waterproof jacket if visiting during winter.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Regional Considerations</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Amman and Northern Highlands</h3>
        <p>
          The capital and northern regions have a Mediterranean climate with four distinct seasons. Spring and autumn
          are ideal, summers are hot but dry, and winters can be cool with occasional rainfall and even snow.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Petra and Central Jordan</h3>
        <p>
          Petra is located at a higher elevation, making it slightly cooler than other regions. The narrow siq and
          valleys can trap heat in summer but also channel cold winds in winter. The best times to visit are April-May
          and September-October.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Wadi Rum and Southern Desert</h3>
        <p>
          The desert experiences extreme temperature variations between day and night. Summer days can be unbearably
          hot, while winter nights can drop below freezing. Spring and autumn offer the most comfortable conditions for
          desert camping and exploration.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Dead Sea and Jordan Valley</h3>
        <p>
          This region sits at the lowest point on Earth and has a unique microclimate. Winters are warm and pleasant
          (20-25°C/68-77°F), making it an ideal winter sun destination. Summers are extremely hot, often exceeding 40°C
          (104°F).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Aqaba (Red Sea)</h3>
        <p>
          Aqaba enjoys a warm desert climate with hot summers and mild winters. It's a year-round destination, though
          summer temperatures can be very high. The water temperature remains pleasant throughout the year, making it
          good for swimming even in winter.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Events and Festivals</h2>
        <p>Consider these cultural events when planning your visit:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Ramadan:</strong> The Islamic holy month (dates vary yearly) can affect opening hours and food
            availability during daylight, but offers unique cultural experiences and evening festivities.
          </li>
          <li>
            <strong>Jerash Festival (July):</strong> A celebration of arts, culture, and music in the ancient Roman
            city.
          </li>
          <li>
            <strong>Eid al-Fitr and Eid al-Adha:</strong> Islamic holidays that bring local celebrations but also
            increased domestic tourism and higher prices.
          </li>
          <li>
            <strong>Christmas celebrations:</strong> Particularly in Madaba and other Christian communities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Month-by-Month Guide</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Month</th>
                <th className="border border-gray-300 p-3 text-left">Weather</th>
                <th className="border border-gray-300 p-3 text-left">Crowds</th>
                <th className="border border-gray-300 p-3 text-left">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">January</td>
                <td className="border border-gray-300 p-3">Cool, possible rain/snow (8-14°C)</td>
                <td className="border border-gray-300 p-3">Low</td>
                <td className="border border-gray-300 p-3">Good for Dead Sea, budget travel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">February</td>
                <td className="border border-gray-300 p-3">Cool, possible rain (9-16°C)</td>
                <td className="border border-gray-300 p-3">Low</td>
                <td className="border border-gray-300 p-3">Good for Dead Sea, budget travel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">March</td>
                <td className="border border-gray-300 p-3">Warming up, occasional rain (12-20°C)</td>
                <td className="border border-gray-300 p-3">Moderate</td>
                <td className="border border-gray-300 p-3">Excellent - spring blooms begin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">April</td>
                <td className="border border-gray-300 p-3">Pleasant, warm days (16-25°C)</td>
                <td className="border border-gray-300 p-3">High</td>
                <td className="border border-gray-300 p-3">Ideal - peak season</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">May</td>
                <td className="border border-gray-300 p-3">Warm, dry (18-30°C)</td>
                <td className="border border-gray-300 p-3">High</td>
                <td className="border border-gray-300 p-3">Ideal - peak season</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">June</td>
                <td className="border border-gray-300 p-3">Hot, dry (22-35°C)</td>
                <td className="border border-gray-300 p-3">Moderate</td>
                <td className="border border-gray-300 p-3">Good for highlands, early mornings</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">July</td>
                <td className="border border-gray-300 p-3">Very hot, dry (25-40°C)</td>
                <td className="border border-gray-300 p-3">Low</td>
                <td className="border border-gray-300 p-3">Challenging - early morning activities only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">August</td>
                <td className="border border-gray-300 p-3">Very hot, dry (25-40°C)</td>
                <td className="border border-gray-300 p-3">Low</td>
                <td className="border border-gray-300 p-3">Challenging - early morning activities only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">September</td>
                <td className="border border-gray-300 p-3">Hot but cooling (20-35°C)</td>
                <td className="border border-gray-300 p-3">Moderate</td>
                <td className="border border-gray-300 p-3">Very good - heat subsiding</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">October</td>
                <td className="border border-gray-300 p-3">Pleasant, warm days (18-30°C)</td>
                <td className="border border-gray-300 p-3">High</td>
                <td className="border border-gray-300 p-3">Ideal - peak season</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">November</td>
                <td className="border border-gray-300 p-3">Mild, possible rain (14-22°C)</td>
                <td className="border border-gray-300 p-3">Moderate</td>
                <td className="border border-gray-300 p-3">Very good - shoulder season</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">December</td>
                <td className="border border-gray-300 p-3">Cool, possible rain (10-18°C)</td>
                <td className="border border-gray-300 p-3">Low (except holidays)</td>
                <td className="border border-gray-300 p-3">Good for Dead Sea, budget travel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Final Recommendations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>For first-time visitors:</strong> April-May or October-November offer the best overall experience.
          </li>
          <li>
            <strong>For budget travelers:</strong> January-February or June-August provide lower prices and fewer
            crowds.
          </li>
          <li>
            <strong>For photography enthusiasts:</strong> The golden light of autumn (October) creates magical
            conditions at Petra and Wadi Rum.
          </li>
          <li>
            <strong>For hikers:</strong> March-May is ideal for green landscapes and wildflowers.
          </li>
          <li>
            <strong>For Dead Sea relaxation:</strong> Winter months offer pleasant temperatures without the extreme
            heat.
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            If visiting during Ramadan, be respectful by not eating, drinking, or smoking in public during daylight
            hours. Many restaurants will be closed during the day but come alive after sunset, offering a unique
            cultural experience.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/travel-tips/packing-guide"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Packing Guide</h3>
            <p className="text-sm text-gray-600">What to pack for different seasons in Jordan</p>
          </Link>
          <Link
            href="/travel-tips/accommodation"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Accommodation Guide</h3>
            <p className="text-sm text-gray-600">Where to stay during different seasons</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
