import Image from "next/image"

export default function PackingGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-emerald-800">Jordan Packing Guide: What to Bring</h1>

      <Image
        src="/images/travel-tips/packing-guide-jordan.jpg"
        alt="Packing Guide for Jordan"
        width={1000}
        height={500}
        className="w-full h-auto rounded-lg mb-8"
      />

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Packing appropriately for Jordan can make a significant difference in your travel experience. The country's
          diverse landscapes—from urban cities to desert camps and the Dead Sea—require thoughtful preparation. This
          guide will help you pack efficiently for your Jordanian adventure.
        </p>

        <div className="bg-emerald-50 p-6 rounded-lg mb-8 border-l-4 border-emerald-600">
          <h2 className="text-xl font-semibold mb-3 text-emerald-800">Essential Packing Checklist</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Modest, lightweight clothing</li>
            <li>Comfortable walking shoes</li>
            <li>Sun protection (hat, sunglasses, sunscreen)</li>
            <li>Reusable water bottle</li>
            <li>Power adapter (Type C/F, 230V)</li>
            <li>Basic first aid kit</li>
            <li>Travel documents (passport, Jordan Pass, etc.)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Clothing Recommendations</h2>

        <p className="mb-4">
          Jordan is a conservative country, and while tourist areas are more relaxed, respectful dress is appreciated
          everywhere.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-emerald-700">General Clothing Tips</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Lightweight, breathable fabrics (cotton, linen)</li>
          <li>Clothes that can be layered (temperatures vary between day and night)</li>
          <li>Modest attire that covers shoulders and knees</li>
          <li>Neutral colors that don't show dust easily</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-emerald-700">For Women</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Long, loose-fitting pants or skirts</li>
          <li>Loose tops with sleeves (short or long)</li>
          <li>Light scarf or shawl (for covering shoulders or head when needed)</li>
          <li>Modest swimwear for the Dead Sea</li>
          <li>Maxi dresses or longer tunics</li>
          <li>Cardigan or light jacket for cooler evenings</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-emerald-700">For Men</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Lightweight pants or longer shorts (below the knee)</li>
          <li>T-shirts or button-up shirts</li>
          <li>Light sweater or jacket for evenings</li>
          <li>Swim shorts for the Dead Sea</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-emerald-700">Footwear</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Comfortable, closed-toe walking shoes for exploring ruins</li>
          <li>Hiking boots if planning serious hikes</li>
          <li>Sandals for casual days and the Dead Sea</li>
          <li>Water shoes for the Dead Sea (the salt crystals can be sharp)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Seasonal Considerations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Summer (June-August)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ultra-lightweight clothing</li>
              <li>High SPF sunscreen</li>
              <li>Wide-brimmed hat</li>
              <li>Cooling neck scarf</li>
              <li>Electrolyte packets</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Winter (December-February)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Warm jacket or coat</li>
              <li>Sweaters for layering</li>
              <li>Warm hat and gloves</li>
              <li>Waterproof shoes</li>
              <li>Umbrella or rain jacket</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Spring (March-May)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Light layers</li>
              <li>Light rain jacket</li>
              <li>Sunscreen</li>
              <li>Allergy medication if sensitive</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Fall (September-November)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Light layers</li>
              <li>Light jacket for evenings</li>
              <li>Sunscreen</li>
              <li>Comfortable walking shoes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Location-Specific Items</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Petra</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Comfortable walking shoes with good grip</li>
              <li>Hat with neck protection</li>
              <li>Bandana (for dust)</li>
              <li>Small backpack for water and snacks</li>
              <li>Camera with extra batteries</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Wadi Rum</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Warm clothes for cold desert nights</li>
              <li>Headlamp or flashlight</li>
              <li>Sleeping bag liner (if camping)</li>
              <li>Sandals for the camp</li>
              <li>Scarf to protect from sand</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Dead Sea</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Flip-flops or water shoes</li>
              <li>Old swimwear (salt can damage fabric)</li>
              <li>Cover-up for walking to/from the beach</li>
              <li>Waterproof bag for wet items</li>
              <li>Moisturizer for after swimming</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Amman & Cities</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Smart-casual outfits for restaurants</li>
              <li>Comfortable shoes for walking on hills</li>
              <li>Light scarf for women (for religious sites)</li>
              <li>Small daypack for exploring</li>
              <li>Portable charger for devices</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Health & Hygiene</h2>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>High SPF sunscreen (50+ recommended)</li>
          <li>After-sun lotion or aloe vera gel</li>
          <li>Insect repellent</li>
          <li>Hand sanitizer</li>
          <li>Wet wipes</li>
          <li>Personal medications</li>
          <li>Basic first aid kit (bandages, pain relievers, anti-diarrheal medication)</li>
          <li>Tissues/toilet paper (not always available in public restrooms)</li>
          <li>Travel-sized toiletries</li>
          <li>Menstrual products (limited availability in rural areas)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Electronics & Documents</h2>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Power adapter (Type C/F, 230V)</li>
          <li>Portable charger/power bank</li>
          <li>Camera with extra memory cards</li>
          <li>Phone with offline maps downloaded</li>
          <li>Passport and copies (physical and digital)</li>
          <li>Travel insurance documents</li>
          <li>Jordan Pass (if purchased)</li>
          <li>Cash in Jordanian Dinars and credit cards</li>
          <li>Emergency contact information</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Miscellaneous Useful Items</h2>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Reusable water bottle (1L minimum)</li>
          <li>Daypack for excursions</li>
          <li>Arabic phrasebook or translation app</li>
          <li>Binoculars for wildlife and landscapes</li>
          <li>Travel pillow for long journeys</li>
          <li>Ziplock bags for protecting electronics from sand/water</li>
          <li>Small gifts from your country (if visiting locals)</li>
          <li>Notebook and pen</li>
        </ul>

        <div className="bg-amber-50 p-6 rounded-lg mb-8 border-l-4 border-amber-500">
          <h3 className="text-xl font-semibold mb-3 text-amber-800">What Not to Pack</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Revealing clothing (very short shorts, sleeveless tops)</li>
            <li>Expensive jewelry or flashy accessories</li>
            <li>Drone (requires special permission in Jordan)</li>
            <li>Too many heavy books (e-readers are better)</li>
            <li>Unnecessary valuables</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Shopping in Jordan</h2>

        <p className="mb-4">
          Don't worry if you forget something—most items can be purchased in Jordan, especially in Amman:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Pharmacies are well-stocked with medications and toiletries</li>
          <li>Malls in Amman have international clothing brands</li>
          <li>Local markets sell inexpensive clothing and accessories</li>
          <li>Supermarkets carry snacks, drinks, and basic necessities</li>
        </ul>

        <p className="italic text-gray-600 mt-8">
          Last updated: April 2025. Packing needs may vary based on your specific itinerary and the current season.
        </p>
      </div>
    </div>
  )
}
