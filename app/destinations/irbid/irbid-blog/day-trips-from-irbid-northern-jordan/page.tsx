import Image from "next/image"
import Link from "next/link"

export default function DayTripsFromIrbidPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/destinations/irbid/irbid-blog" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Irbid Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Best Day Trips from Irbid: Exploring Northern Jordan</h1>

        <div className="text-gray-500 mb-6">March 15, 2024 • by Layla Al-Hassan</div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Northern+Jordan+Landscape"
            alt="Scenic view of northern Jordan's rolling hills"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            While many travelers to Jordan base themselves in Amman, the northern city of Irbid offers an excellent
            alternative for exploring the country's northern treasures. As Jordan's second-largest city and academic
            hub, Irbid provides comfortable accommodations, good restaurants, and a central location that makes it
            perfect for day trips to some of Jordan's most impressive archaeological sites and natural landscapes.
          </p>

          <p>
            This guide highlights the best day trips from Irbid, providing practical information on transportation,
            timing, and what to see at each destination. Whether you're interested in Roman ruins, Byzantine mosaics,
            medieval castles, or natural reserves, northern Jordan offers a wealth of experiences within easy reach of
            Irbid.
          </p>

          <div className="bg-teal-50 p-6 rounded-lg my-8">
            <h3 className="text-teal-800 font-bold mb-2">Travel Tip</h3>
            <p className="text-teal-700 mb-0">
              Consider hiring a driver for the day if you're planning to visit multiple sites or remote locations. While
              public transportation exists to most major sites, having your own transportation provides flexibility and
              saves significant time. Many hotels in Irbid can arrange reliable drivers at reasonable rates.
            </p>
          </div>

          <h2>Umm Qais (Ancient Gadara)</h2>
          <p>
            Just 30 kilometers northwest of Irbid, Umm Qais offers one of the most spectacular settings of any
            archaeological site in Jordan. The ancient Greco-Roman city of Gadara sits on a hilltop with breathtaking
            panoramic views over the Sea of Galilee, the Golan Heights, and the Jordan Valley.
          </p>

          <h3>What to See</h3>
          <ul>
            <li>
              <strong>West Theater:</strong> A well-preserved black basalt theater with views of the surrounding
              landscape
            </li>
            <li>
              <strong>Basilica Terrace:</strong> Remains of a Byzantine church with beautiful columns
            </li>
            <li>
              <strong>Decumanus Maximus:</strong> The main colonnaded street lined with shops and public buildings
            </li>
            <li>
              <strong>Ottoman Village:</strong> 19th-century buildings constructed using ancient stones
            </li>
            <li>
              <strong>Archaeological Museum:</strong> Housed in an Ottoman-era building with artifacts from the site
            </li>
            <li>
              <strong>Panoramic Viewpoint:</strong> Offering one of Jordan's most spectacular vistas
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Umm+Qais+Ruins"
              alt="Black basalt ruins at Umm Qais with Sea of Galilee view"
              fill
              className="object-cover"
            />
          </div>

          <p>
            What makes Umm Qais unique is the black basalt used in its construction, creating a striking contrast with
            the surrounding landscape. The site also features an excellent restaurant with terrace views, making it a
            perfect spot for lunch after exploring the ruins.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 30 km (about 45 minutes by car)
            </li>
            <li>
              <strong>Transportation:</strong> Regular minibuses from Irbid's northern bus station, taxis, or private
              car
            </li>
            <li>
              <strong>Opening Hours:</strong> 8:00 AM to 5:00 PM (winter), 8:00 AM to 6:30 PM (summer)
            </li>
            <li>
              <strong>Entrance Fee:</strong> 3 JOD (included in Jordan Pass)
            </li>
            <li>
              <strong>Recommended Time:</strong> 2-3 hours for the site, plus time for lunch
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Late afternoon for golden light on the ruins and spectacular sunset
              views
            </li>
          </ul>

          <h2>Jerash (Ancient Gerasa)</h2>
          <p>
            Often described as the best-preserved Roman provincial city outside Italy, Jerash is one of Jordan's most
            impressive archaeological sites. Though slightly farther from Irbid than other destinations on this list,
            its extraordinary ruins make it well worth the journey.
          </p>

          <h3>What to See</h3>
          <ul>
            <li>
              <strong>Hadrian's Arch:</strong> The monumental gateway built to honor Emperor Hadrian's visit in 129 CE
            </li>
            <li>
              <strong>Hippodrome:</strong> Where Roman chariot races and other sporting events were held
            </li>
            <li>
              <strong>Oval Plaza:</strong> An unusual elliptical forum surrounded by columns
            </li>
            <li>
              <strong>Cardo Maximus:</strong> The main colonnaded street running the length of the city
            </li>
            <li>
              <strong>South Theater:</strong> A well-preserved 3,000-seat theater with remarkable acoustics
            </li>
            <li>
              <strong>Temple of Artemis:</strong> Dedicated to the patron goddess of the city
            </li>
            <li>
              <strong>Churches:</strong> Several Byzantine churches with beautiful mosaic floors
            </li>
            <li>
              <strong>Nymphaeum:</strong> An ornate public fountain
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Jerash+Oval+Plaza"
              alt="The Oval Plaza and colonnaded street at Jerash"
              fill
              className="object-cover"
            />
          </div>

          <p>
            What makes Jerash exceptional is the completeness of the city plan and the excellent state of preservation.
            Walking along the ancient streets, with their original paving stones still showing chariot wheel ruts,
            provides an immersive experience of life in a Roman provincial city.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 50 km (about 1 hour by car)
            </li>
            <li>
              <strong>Transportation:</strong> Direct buses from Irbid's main bus station, taxis, or private car
            </li>
            <li>
              <strong>Opening Hours:</strong> 8:00 AM to 5:00 PM (winter), 8:00 AM to 7:00 PM (summer)
            </li>
            <li>
              <strong>Entrance Fee:</strong> 10 JOD (included in Jordan Pass)
            </li>
            <li>
              <strong>Recommended Time:</strong> 3-4 hours to properly explore the site
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Early morning to avoid crowds and heat
            </li>
            <li>
              <strong>Special Event:</strong> The Roman Army and Chariot Experience show (additional fee)
            </li>
          </ul>

          <h2>Ajloun Castle and Forest Reserve</h2>
          <p>
            Offering a contrast to the ancient ruins, Ajloun combines medieval history with natural beauty. The
            impressive castle and nearby forest reserve make for a perfect day trip, especially during spring when the
            hills are carpeted with wildflowers.
          </p>

          <h3>What to See</h3>
          <ul>
            <li>
              <strong>Ajloun Castle (Qal'at Ar-Rabad):</strong> Built in 1184 by one of Saladin's generals to protect
              against Crusader attacks, this impressive fortress offers panoramic views from its towers and a
              fascinating glimpse into medieval military architecture.
            </li>
            <li>
              <strong>Ajloun Forest Reserve:</strong> A beautiful protected area covering 13 square kilometers of
              Mediterranean woodland, with several hiking trails ranging from easy 1-hour walks to more challenging
              routes.
            </li>
            <li>
              <strong>Soap House:</strong> A local women's cooperative producing traditional olive oil soaps using
              ancient methods.
            </li>
            <li>
              <strong>Tell Mar Elias:</strong> The ruins of a Byzantine church believed to be the birthplace of the
              Prophet Elijah.
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Ajloun+Castle"
              alt="Medieval Ajloun Castle perched on a forested hilltop"
              fill
              className="object-cover"
            />
          </div>

          <p>
            The combination of historical and natural attractions makes Ajloun appealing to a wide range of interests.
            The area also offers a refreshing contrast to Jordan's desert landscapes, with its dense pine forests and
            cooler temperatures.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 35 km (about 45 minutes by car)
            </li>
            <li>
              <strong>Transportation:</strong> Regular buses from Irbid to Ajloun town, then taxis to the castle; or
              direct by private car
            </li>
            <li>
              <strong>Castle Opening Hours:</strong> 8:00 AM to 4:00 PM (winter), 8:00 AM to 7:00 PM (summer)
            </li>
            <li>
              <strong>Castle Entrance Fee:</strong> 3 JOD (included in Jordan Pass)
            </li>
            <li>
              <strong>Forest Reserve Fee:</strong> 2 JOD for self-guided trails, guided hikes available for additional
              fees
            </li>
            <li>
              <strong>Recommended Time:</strong> 1-2 hours for the castle, 2-3 hours for hiking in the reserve
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Spring (March-May) for wildflowers or autumn for pleasant hiking
              weather
            </li>
          </ul>

          <h2>Pella (Tabaqat Fahl)</h2>
          <p>
            One of Jordan's most significant archaeological sites, Pella remains largely unexcavated, giving it an
            authentic, undiscovered feel. The site spans 6,000 years of history, from the Stone Age to medieval Islamic
            periods, set against the backdrop of the lush northern Jordan Valley.
          </p>

          <h3>What to See</h3>
          <ul>
            <li>
              <strong>West Church:</strong> Byzantine basilica with well-preserved columns and architectural elements
            </li>
            <li>
              <strong>East Church:</strong> Another Byzantine structure with visible mosaic fragments
            </li>
            <li>
              <strong>Civic Complex:</strong> Remains of the Roman-era administrative center
            </li>
            <li>
              <strong>Odeon:</strong> A small Roman theater
            </li>
            <li>
              <strong>Tell Husn:</strong> The main tell (archaeological mound) with layers of civilization
            </li>
            <li>
              <strong>Bronze Age Defensive Walls:</strong> Some of the oldest structures visible at the site
            </li>
            <li>
              <strong>Panoramic Views:</strong> Spectacular vistas of the Jordan Valley
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Pella+Archaeological+Site"
              alt="Ancient ruins at Pella with Jordan Valley in background"
              fill
              className="object-cover"
            />
          </div>

          <p>
            Unlike many of Jordan's more developed archaeological sites, Pella offers a more contemplative experience.
            The combination of important historical ruins, beautiful natural setting, and relative lack of crowds makes
            it a rewarding destination for history enthusiasts.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 30 km (about 40 minutes by car)
            </li>
            <li>
              <strong>Transportation:</strong> Limited public transportation; taxi or private car recommended
            </li>
            <li>
              <strong>Opening Hours:</strong> 8:00 AM to 5:00 PM daily
            </li>
            <li>
              <strong>Entrance Fee:</strong> 3 JOD (included in Jordan Pass)
            </li>
            <li>
              <strong>Recommended Time:</strong> 1-2 hours
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Spring for green landscapes and wildflowers
            </li>
            <li>
              <strong>Facilities:</strong> Basic rest house with refreshments
            </li>
          </ul>

          <h2>Umm el-Jimal</h2>
          <p>
            Often called the "Black Gem of the Desert," Umm el-Jimal is one of Jordan's most underrated archaeological
            sites. This remarkably preserved Byzantine and early Islamic town was built entirely of black basalt stone,
            creating a striking and somewhat eerie landscape of dark ruins.
          </p>

          <h3>What to See</h3>
          <ul>
            <li>
              <strong>Byzantine Churches:</strong> Remains of 15 churches dating from the 4th to 7th centuries
            </li>
            <li>
              <strong>Barracks:</strong> A massive structure that may have housed Roman soldiers
            </li>
            <li>
              <strong>Praetorium:</strong> A large courtyard house with impressive arches
            </li>
            <li>
              <strong>West Gate:</strong> One of the original entrances to the walled town
            </li>
            <li>
              <strong>Reservoirs and Cisterns:</strong> Sophisticated water collection systems
            </li>
            <li>
              <strong>Domestic Structures:</strong> Well-preserved houses showing daily life in antiquity
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Umm+el-Jimal+Black+Ruins"
              alt="Black basalt ruins at Umm el-Jimal"
              fill
              className="object-cover"
            />
          </div>

          <p>
            What makes Umm el-Jimal special is its completeness—entire neighborhoods remain intact, allowing visitors to
            wander through ancient streets and imagine life in this frontier town. The site is also far less visited
            than Jordan's more famous attractions, offering a more peaceful experience.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 70 km (about 1 hour by car)
            </li>
            <li>
              <strong>Transportation:</strong> No regular public transportation; taxi or private car necessary
            </li>
            <li>
              <strong>Opening Hours:</strong> 8:00 AM to 4:00 PM daily
            </li>
            <li>
              <strong>Entrance Fee:</strong> 2 JOD (included in Jordan Pass)
            </li>
            <li>
              <strong>Recommended Time:</strong> 1-2 hours
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Morning for best light for photography
            </li>
            <li>
              <strong>Facilities:</strong> Limited; bring water and snacks
            </li>
          </ul>

          <h2>Dibeen Forest Reserve</h2>
          <p>
            For a break from archaeological sites, Dibeen Forest Reserve offers a refreshing natural experience. This
            pine forest is one of the most ecologically diverse areas in Jordan, home to endangered wildlife and rare
            plant species.
          </p>

          <h3>What to Experience</h3>
          <ul>
            <li>
              <strong>Hiking Trails:</strong> Several marked paths ranging from easy 1-hour walks to more challenging
              routes
            </li>
            <li>
              <strong>Picnic Areas:</strong> Designated spots for outdoor meals surrounded by pine trees
            </li>
            <li>
              <strong>Birdwatching:</strong> The reserve is home to over 17 endangered species
            </li>
            <li>
              <strong>Wildlife Spotting:</strong> Possibilities include the Persian squirrel, stone marten, and various
              reptiles
            </li>
            <li>
              <strong>Plant Diversity:</strong> Over 300 species including wild orchids (seasonal)
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Dibeen+Forest"
              alt="Pine trees and hiking trail in Dibeen Forest Reserve"
              fill
              className="object-cover"
            />
          </div>

          <p>
            Dibeen provides a stark contrast to the arid landscapes often associated with Jordan. The cool, pine-scented
            air and dappled sunlight filtering through the forest canopy create a tranquil environment perfect for
            nature lovers.
          </p>

          <h3>Practical Information</h3>
          <ul>
            <li>
              <strong>Distance from Irbid:</strong> 65 km (about 1 hour by car)
            </li>
            <li>
              <strong>Transportation:</strong> No public transportation; taxi or private car necessary
            </li>
            <li>
              <strong>Opening Hours:</strong> 9:00 AM to 4:00 PM (winter), 9:00 AM to 6:00 PM (summer)
            </li>
            <li>
              <strong>Entrance Fee:</strong> 2 JOD
            </li>
            <li>
              <strong>Recommended Time:</strong> 2-4 hours depending on hiking
            </li>
            <li>
              <strong>Best Time to Visit:</strong> Spring for wildflowers or autumn for pleasant temperatures
            </li>
            <li>
              <strong>Facilities:</strong> Visitor center, restrooms, picnic areas
            </li>
          </ul>

          <div className="bg-amber-50 p-6 rounded-lg my-8">
            <h3 className="text-amber-800 font-bold mb-2">Packing Tip</h3>
            <p className="text-amber-700 mb-0">
              For forest reserves and natural areas, wear sturdy walking shoes, bring sun protection (even in forests),
              carry sufficient water, and pack a light jacket as temperatures can be cooler than in urban areas,
              especially in spring and autumn.
            </p>
          </div>

          <h2>Multi-Site Day Trip Itineraries</h2>
          <p>
            With efficient planning, it's possible to combine multiple sites in a single day trip from Irbid. Here are
            some recommended combinations:
          </p>

          <h3>Northern Archaeological Circuit</h3>
          <p>
            <strong>Umm Qais → Pella</strong>
          </p>
          <ul>
            <li>
              <strong>Morning:</strong> Start early at Umm Qais (8:00 AM) to enjoy the site before crowds arrive
            </li>
            <li>
              <strong>Lunch:</strong> Enjoy the panoramic views at the Umm Qais Resthouse restaurant
            </li>
            <li>
              <strong>Afternoon:</strong> Drive to Pella (about 45 minutes) and explore the ruins
            </li>
            <li>
              <strong>Return:</strong> Back to Irbid by early evening
            </li>
          </ul>

          <h3>Nature and History Combination</h3>
          <p>
            <strong>Ajloun Castle → Ajloun Forest Reserve</strong>
          </p>
          <ul>
            <li>
              <strong>Morning:</strong> Visit Ajloun Castle when it opens
            </li>
            <li>
              <strong>Late Morning:</strong> Drive to the nearby forest reserve
            </li>
            <li>
              <strong>Lunch:</strong> Picnic in the reserve or eat at the reserve's restaurant
            </li>
            <li>
              <strong>Afternoon:</strong> Hike one of the forest trails
            </li>
            <li>
              <strong>Return:</strong> Back to Irbid by late afternoon
            </li>
          </ul>

          <h3>Eastern Exploration</h3>
          <p>
            <strong>Umm el-Jimal → Mafraq</strong>
          </p>
          <ul>
            <li>
              <strong>Morning:</strong> Drive to Umm el-Jimal and explore the black city
            </li>
            <li>
              <strong>Lunch:</strong> Traditional meal in Mafraq
            </li>
            <li>
              <strong>Afternoon:</strong> Visit the archaeological museum in Mafraq
            </li>
            <li>
              <strong>Return:</strong> Back to Irbid by evening
            </li>
          </ul>

          <h3>Full Day Roman Experience</h3>
          <p>
            <strong>Jerash → Umm Qais</strong>
          </p>
          <ul>
            <li>
              <strong>Early Morning:</strong> Start at Jerash when it opens (requires early departure from Irbid)
            </li>
            <li>
              <strong>Lunch:</strong> Quick meal in Jerash town
            </li>
            <li>
              <strong>Afternoon:</strong> Drive to Umm Qais (about 1.5 hours)
            </li>
            <li>
              <strong>Evening:</strong> Enjoy sunset views from Umm Qais before returning to Irbid
            </li>
          </ul>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Northern+Jordan+Map"
              alt="Map showing day trip destinations from Irbid"
              fill
              className="object-cover"
            />
          </div>

          <h2>Transportation Options</h2>

          <h3>Public Transportation</h3>
          <p>While public transportation exists to many of these destinations, it has limitations:</p>
          <ul>
            <li>
              <strong>Buses and Minibuses:</strong> Regular services connect Irbid to Jerash, Ajloun town, and Umm Qais,
              but schedules can be irregular and services often end by mid-afternoon
            </li>
            <li>
              <strong>Shared Taxis:</strong> More flexible than buses but still operate primarily on fixed routes
            </li>
            <li>
              <strong>Connections:</strong> Some sites require multiple connections or additional taxis from the nearest
              town
            </li>
          </ul>

          <h3>Private Transportation</h3>
          <p>For maximum flexibility and efficiency, consider these options:</p>
          <ul>
            <li>
              <strong>Rental Car:</strong> Provides complete freedom but requires confidence driving in Jordan
            </li>
            <li>
              <strong>Private Taxi for the Day:</strong> Can be arranged through hotels, typically 50-70 JOD depending
              on distance and number of sites
            </li>
            <li>
              <strong>Guided Tours:</strong> Several companies offer day trips from Irbid with English-speaking guides
            </li>
          </ul>

          <h2>Practical Tips for Day Trips from Irbid</h2>

          <h3>Essential Items to Bring</h3>
          <ul>
            <li>
              <strong>Jordan Pass:</strong> If you're visiting multiple sites, this provides entry to most attractions
            </li>
            <li>
              <strong>Water and Snacks:</strong> Facilities can be limited at some sites
            </li>
            <li>
              <strong>Sun Protection:</strong> Hat, sunscreen, and sunglasses, even in cooler months
            </li>
            <li>
              <strong>Comfortable Walking Shoes:</strong> Archaeological sites have uneven terrain
            </li>
            <li>
              <strong>Camera:</strong> The views from many northern sites are spectacular
            </li>
            <li>
              <strong>Light Jacket:</strong> Northern Jordan can be cooler than other regions, especially in spring and
              fall
            </li>
          </ul>

          <h3>Timing Considerations</h3>
          <ul>
            <li>
              <strong>Start Early:</strong> Many sites are best experienced in morning light and before midday heat
            </li>
            <li>
              <strong>Check Closing Times:</strong> Hours vary seasonally and some sites close earlier than expected
            </li>
            <li>
              <strong>Friday Mornings:</strong> Many sites are quieter as this is the main prayer time
            </li>
            <li>
              <strong>Seasonal Awareness:</strong> Spring brings wildflowers but also more visitors; winter offers
              solitude but shorter days
            </li>
          </ul>

          <div className="bg-teal-50 p-6 rounded-lg my-8">
            <h3 className="text-teal-800 font-bold mb-2">Local Insight</h3>
            <p className="text-teal-700 mb-0">
              If using public transportation, always confirm the time of the last return service to Irbid. In some
              cases, the final bus may depart as early as 3:00 or 4:00 PM, particularly from smaller destinations like
              Umm Qais or Pella.
            </p>
          </div>

          <h2>Conclusion: Irbid as Your Northern Jordan Base</h2>
          <p>
            Using Irbid as a base for exploring northern Jordan offers several advantages over day trips from Amman. The
            shorter distances mean less time spent on the road and more time experiencing the sites. Additionally,
            you'll have the opportunity to experience authentic Jordanian city life in a place less affected by tourism
            than the capital.
          </p>
          <p>
            The diversity of day trip options from Irbid is remarkable—from world-class Roman ruins to medieval castles,
            from dense forests to panoramic viewpoints overlooking three countries. Each destination offers a different
            perspective on Jordan's rich natural and cultural heritage.
          </p>
          <p>
            Whether you choose to focus on the archaeological wonders, natural beauty, or a combination of both,
            northern Jordan rewards explorers with experiences that often feel more authentic and less crowded than the
            country's more famous southern attractions. By taking the time to base yourself in Irbid and venture out to
            these remarkable sites, you'll discover a side of Jordan that many visitors miss.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Irbid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/destinations/irbid/irbid-blog/top-things-to-do-irbid" className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Irbid+Things+To+Do"
                    alt="Top 10 Things to Do in Irbid: Jordan's University City"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Top 10 Things to Do in Irbid: Jordan's University City</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    Discover the best attractions, activities, and hidden gems in Jordan's second-largest city.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/destinations/irbid/irbid-blog/local-food-markets-irbid-culinary-guide" className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Irbid+Food+Markets"
                    alt="Local Food and Markets in Irbid: A Culinary Guide"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Local Food and Markets in Irbid: A Culinary Guide</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    Taste your way through Irbid's traditional restaurants, street food, and bustling markets.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
