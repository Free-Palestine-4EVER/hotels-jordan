import Image from "next/image"
import Link from "next/link"

export default function ArchaeologicalWondersPella() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Archaeological Wonders of Pella: Jordan's Hidden Historical Gem
      </h1>

      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Ancient ruins at Pella archaeological site in Jordan"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Nestled in the Jordan Valley, Pella (known locally as Tabaqat Fahl) is one of Jordan's most significant yet
          underappreciated archaeological sites. With a history spanning over 10,000 years, this ancient city offers
          visitors a journey through multiple civilizations, from prehistoric settlements to Byzantine churches, all set
          against a stunning landscape of rolling hills and fertile valleys.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">A Timeline of Civilizations</h2>
        <p>
          Unlike many archaeological sites that feature remains from one or two historical periods, Pella's exceptional
          value lies in its continuous occupation from the Neolithic period (8000 BCE) through the Ottoman era (19th
          century). This remarkable continuity makes it a living textbook of human civilization in the Middle East.
        </p>

        <div className="bg-amber-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-3">Key Historical Periods at Pella</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Neolithic Period (8000-4500 BCE):</strong> Early farming communities
            </li>
            <li>
              <strong>Bronze Age (3500-1200 BCE):</strong> Canaanite city-state with Egyptian influence
            </li>
            <li>
              <strong>Iron Age (1200-332 BCE):</strong> Biblical period with Israelite connections
            </li>
            <li>
              <strong>Hellenistic Period (332-63 BCE):</strong> Greek influence after Alexander the Great
            </li>
            <li>
              <strong>Roman Period (63 BCE-324 CE):</strong> Part of the Decapolis league of cities
            </li>
            <li>
              <strong>Byzantine Period (324-636 CE):</strong> Early Christian churches and religious significance
            </li>
            <li>
              <strong>Early Islamic Period (636-1516 CE):</strong> Umayyad and Abbasid developments
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Major Archaeological Discoveries</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">The Civic Complex</h3>
        <p>
          At the heart of Roman Pella stands the civic complex, featuring a large odeon (small theater) that could seat
          approximately 400 spectators. Nearby, archaeologists have uncovered the remains of a nymphaeum (public
          fountain) and a bath complex, showcasing the sophisticated urban planning of Roman cities.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Byzantine Churches</h3>
        <p>
          The West Church, dating to the 6th century CE, represents one of the best-preserved Byzantine structures at
          Pella. Its basilica layout, with a central nave flanked by two aisles, exemplifies early Christian
          architecture. Fragments of colorful mosaics that once adorned the floors provide glimpses into the artistic
          achievements of Byzantine craftsmen.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Bronze Age Temples</h3>
        <p>
          Among Pella's most significant discoveries are the Bronze Age temples, dating back to approximately 1800 BCE.
          These structures have yielded valuable insights into Canaanite religious practices and have produced numerous
          artifacts, including figurines, pottery, and ritual objects that illuminate the spiritual life of ancient
          inhabitants.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The Residential Quarter</h3>
        <p>
          Excavations have revealed extensive residential areas that show the evolution of domestic architecture over
          millennia. From simple stone structures of the Bronze Age to more elaborate Roman-era houses with courtyards
          and mosaics, these remains offer a fascinating glimpse into everyday life throughout different historical
          periods.
        </p>

        <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Byzantine church remains at Pella archaeological site"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Historical Significance</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">Biblical Connections</h3>
        <p>
          While not explicitly mentioned in the Bible, Pella holds significance in Christian history as a place of
          refuge. According to Eusebius, a 4th-century church historian, Christians fled Jerusalem before its
          destruction in 70 CE and sought sanctuary in Pella, establishing one of the earliest Christian communities
          outside Jerusalem.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The Decapolis League</h3>
        <p>
          During the Roman period, Pella was one of the ten cities of the Decapolis, a league of semi-autonomous
          Greco-Roman cities in the eastern frontier regions of the Roman Empire. This status brought prosperity and
          cultural exchange, evident in the architectural remains and artifacts from this period.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Early Islamic Transformation</h3>
        <p>
          After the Muslim conquest in the 7th century CE, Pella (then known as Fahl) continued to thrive as an
          important regional center. Archaeological evidence shows how the city adapted to new cultural influences while
          maintaining continuity with its past. The earthquake of 749 CE marked a significant turning point, after which
          the settlement pattern shifted.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Excavations and Discoveries</h2>
        <p>
          Archaeological work at Pella continues to this day, with joint projects involving Jordanian authorities and
          international teams, particularly from Australia. Recent excavations have focused on the Bronze Age temples,
          Islamic-era structures, and the extensive cemetery areas that contain thousands of burials spanning multiple
          periods.
        </p>

        <p>
          Each season brings new discoveries that help archaeologists piece together the complex history of this
          remarkable site. Advanced techniques such as ground-penetrating radar and digital mapping are revealing
          previously unknown structures and helping to create a more comprehensive understanding of Pella's urban
          development over time.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-3">Visitor Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Location:</strong> Approximately 130 km northwest of Amman, near the modern town of Tabaqat Fahl
            </li>
            <li>
              <strong>Opening Hours:</strong> 8:00 AM to 4:00 PM (winter), 8:00 AM to 6:00 PM (summer)
            </li>
            <li>
              <strong>Entrance Fee:</strong> 3 JOD per person
            </li>
            <li>
              <strong>Facilities:</strong> Visitor center, restrooms, and parking available
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Spring (March-May) when the landscape is green and temperatures are
              moderate
            </li>
            <li>
              <strong>Recommended Visit Duration:</strong> 2-3 hours to explore the main archaeological areas
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Visitors</h2>
        <p>
          Unlike Jordan's more famous sites like Petra or Jerash, Pella offers a more intimate and less crowded
          experience. Visitors can explore at their own pace, often with entire sections of the ancient city to
          themselves. This tranquility, combined with the spectacular setting overlooking the Jordan Valley, creates a
          uniquely contemplative atmosphere.
        </p>

        <p>
          The site is spread across several hills and valleys, so comfortable walking shoes are essential. A hat,
          sunscreen, and plenty of water are also recommended, especially during the warmer months. While the main
          excavated areas are accessible via paths, some parts of the site require more challenging walks up hillsides.
        </p>

        <p>
          For the best experience, consider hiring a knowledgeable guide who can bring the ruins to life with stories of
          the people who once lived here. The visitor center also provides informative displays about the site's history
          and the ongoing archaeological work.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p>
          Pella represents one of Jordan's most valuable archaeological treasures—a site where visitors can witness the
          layered history of human civilization in the Middle East. From prehistoric settlements to Roman splendor and
          Byzantine religious monuments, the ruins tell a compelling story of cultural evolution, adaptation, and
          resilience.
        </p>

        <p>
          For travelers seeking to venture beyond Jordan's more famous attractions, Pella offers a rewarding journey
          into the past. Its relatively undiscovered status means you can explore this remarkable site without the
          crowds, creating a more authentic connection with history. As ongoing excavations continue to unearth new
          discoveries, Pella's importance in understanding the ancient world only continues to grow.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Explore More Pella Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/destinations/pella/pella-blog/day-trip-pella-from-amman"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Day Trip to Pella from Amman: Complete Itinerary
          </Link>
          <Link
            href="/destinations/pella/pella-blog/pella-vs-jerash-archaeological-comparison"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Pella vs. Jerash: Comparing Jordan's Archaeological Giants
          </Link>
        </div>
      </div>
    </div>
  )
}
