import Image from "next/image"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/destinations/amman/amman-blog" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Amman Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Amman on a Budget: Free or Cheap Things to Do in the City</h1>

        <div className="text-gray-500 mb-6">March 25, 2025 • by Jordan Explorer Team</div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=800&text=Amman+Budget"
            alt="Amman on a Budget"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Traveling to Amman doesn't have to break the bank. While Jordan's capital city offers plenty of luxury
            experiences, it also provides numerous opportunities for budget-conscious travelers to explore its rich
            culture, history, and vibrant street life without spending a fortune. From free historical sites to
            affordable local eateries, this guide will help you experience the best of Amman while keeping your expenses
            to a minimum.
          </p>

          <h2>Free Cultural and Historical Experiences</h2>

          <h3>Explore Downtown Amman (Al-Balad)</h3>
          <p>
            The heart of old Amman is a treasure trove of free experiences and the perfect place to absorb local
            culture:
          </p>
          <ul>
            <li>
              <strong>Wander the traditional souks</strong> - Explore the colorful markets selling everything from
              spices and textiles to gold and antiques. The vegetable market, gold souk, and clothing markets offer
              fascinating glimpses into local life.
            </li>
            <li>
              <strong>Visit King Hussein Mosque</strong> - This beautiful mosque in the center of downtown welcomes
              respectful visitors outside prayer times (modest dress required).
            </li>
            <li>
              <strong>Explore the historic streets</strong> - The area around the Husseini Mosque features some of
              Amman's oldest buildings and bustling commercial activity.
            </li>
            <li>
              <strong>People-watching</strong> - Find a comfortable spot at one of the many staircases connecting
              downtown's terraced streets and observe the vibrant urban life.
            </li>
            <li>
              <strong>Street art</strong> - Downtown Amman features increasing amounts of urban art and murals,
              particularly in the areas connecting to Jabal Amman.
            </li>
          </ul>
          <p>
            <strong>Budget tip:</strong> Downtown is easily walkable, though hilly. Save on transportation by exploring
            this area on foot, but wear comfortable shoes!
          </p>

          <h3>Free Museum Days and Discounted Entries</h3>
          <p>Several of Amman's museums offer free or discounted admission at specific times:</p>
          <ul>
            <li>
              <strong>The Jordan Museum</strong> - Free entry on Wednesdays for Jordanian citizens and residents (bring
              your residency card if applicable).
            </li>
            <li>
              <strong>Royal Automobile Museum</strong> - Occasionally offers free days during national celebrations.
              Check their social media for announcements.
            </li>
            <li>
              <strong>Jordan National Gallery of Fine Arts</strong> - Free entry during special exhibitions and events.
            </li>
            <li>
              <strong>Children's Museum</strong> - Offers discounted rates on certain weekdays.
            </li>
          </ul>
          <p>
            <strong>Budget tip:</strong> If you're planning to visit Petra and multiple sites across Jordan, the Jordan
            Pass includes entry to many museums and archaeological sites, potentially saving you money overall.
          </p>

          <h3>Free Viewpoints for Spectacular City Panoramas</h3>
          <p>Amman's hilly topography offers numerous free spots to enjoy breathtaking views:</p>
          <ul>
            <li>
              <strong>Viewpoint near Paris Circle</strong> (Jabal Amman) - A public terrace offering spectacular views
              of downtown and the Citadel.
            </li>
            <li>
              <strong>The steps connecting downtown to Jabal Amman</strong> - Various points along these historic
              staircases provide excellent vistas.
            </li>
            <li>
              <strong>Al-Weibdeh viewpoints</strong> - Several free public viewpoints in this artistic neighborhood
              offer different perspectives of the city.
            </li>
            <li>
              <strong>Jabal Al-Qalaa street viewpoints</strong> - The roads circling the Citadel hill have several spots
              with panoramic views (without entering the paid archaeological site).
            </li>
          </ul>
          <p>
            <strong>Budget tip:</strong> Visit these viewpoints at sunset for the most magical experience as the white
            stone buildings take on a golden hue and the call to prayer echoes across the city.
          </p>

          <h2>Affordable Cultural Experiences</h2>

          <h3>Budget-Friendly Historical Sites</h3>
          <p>While some historical sites charge admission, these are worth the modest investment:</p>
          <ul>
            <li>
              <strong>Roman Theater</strong> - At just 2 JOD (approximately $2.80 USD), this impressive ancient
              structure in downtown offers excellent value. The ticket also includes access to the small Folklore Museum
              and Museum of Popular Traditions housed within the complex.
            </li>
            <li>
              <strong>Nymphaeum</strong> - This partially restored Roman public fountain complex is often overlooked but
              costs just 1 JOD to visit.
            </li>
            <li>
              <strong>Abu Darwish Mosque</strong> - This distinctive black and white striped mosque on Jabal
              Al-Ashrafiyeh welcomes visitors outside prayer times (free, but a small donation is appreciated).
            </li>
          </ul>
          <p>
            <strong>Budget tip:</strong> The Citadel (Jabal al-Qal'a) charges 3 JOD for entry, but if you're on a very
            tight budget, you can still enjoy views
          </p>
        </div>
      </div>
    </div>
  )
}
