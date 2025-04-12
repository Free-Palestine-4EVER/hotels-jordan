import Image from "next/image"
import Link from "next/link"

export default function AjlounCastleGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/destinations/ajloun/ajloun-blog" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Ajloun Blog
          </Link>
        </div>

        <article>
          <header className="mb-10">
            <div className="text-gray-500 mb-2">April 5, 2024 • by Sarah Johnson</div>
            <h1 className="text-4xl font-bold mb-6">Complete Guide to Ajloun Castle</h1>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=2000&text=Ajloun+Castle"
                alt="Ajloun Castle"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction to Ajloun Castle</h2>
            <p>
              Perched atop a hill overlooking the verdant hills of northern Jordan, Ajloun Castle (Qal'at Ar-Rabad)
              stands as one of the finest examples of medieval Arab-Islamic military architecture. Built in 1184 CE by
              Izz al-Din Usama, a general of Saladin (Salah ad-Din), the castle served as a crucial defensive fortress
              against Crusader attacks from nearby castles in what is now modern-day Israel and Palestine.
            </p>

            <p>
              Unlike many castles in the region that were built by Crusaders, Ajloun Castle represents Muslim military
              architecture, constructed specifically to protect the region from Crusader expansion and to safeguard
              communication routes between Damascus and Cairo. The strategic location of the castle allowed it to
              control the three main passages into northern Jordan and monitor movements across the Jordan Valley.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Historical Significance</p>
              <p className="text-sm">
                Ajloun Castle is one of the few castles in Jordan that was built by Muslims rather than Crusaders,
                making it an important example of Islamic military architecture from the Ayyubid period.
              </p>
            </div>

            <h2>Historical Background</h2>
            <p>
              The castle was named "Qal'at Ar-Rabad" originally, referring to the ruler of the district Rabadh, though
              today it's more commonly known as Ajloun Castle after the nearby town. The original structure consisted of
              a compact square design with four corner towers. However, after Izz al-Din's death, the Ayyubid governor
              expanded the castle in 1214 CE, adding a new gate and a fifth tower.
            </p>

            <p>
              Throughout its history, the castle changed hands multiple times. Following the Ayyubid period, it came
              under Mamluk control in the 13th century. The Mamluks further expanded and renovated the castle, adding
              the distinctive decorative elements still visible today. The castle remained in use through the Ottoman
              period but gradually lost its military importance.
            </p>

            <p>
              The castle has survived numerous natural disasters, including a devastating earthquake in 1927 that caused
              significant damage. Extensive restoration work has been carried out since the 1960s, helping to preserve
              this remarkable structure for future generations.
            </p>

            <div className="relative h-[400px] rounded-lg overflow-hidden my-8">
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Ajloun+Castle+Architecture"
                alt="Architectural details of Ajloun Castle"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
                The distinctive arched entrance of Ajloun Castle showcases classic Islamic military architecture
              </div>
            </div>

            <h2>Architectural Features</h2>
            <p>Ajloun Castle exemplifies medieval Islamic military architecture with several notable features:</p>

            <ul>
              <li>
                <strong>Defensive Design:</strong> The castle's strategic hilltop location provides a commanding view of
                the surrounding countryside. Its thick walls, ranging from 1.5 to 2.5 meters, were designed to withstand
                siege warfare.
              </li>
              <li>
                <strong>Towers:</strong> The castle features seven semi-circular towers, with the largest being the
                southeast tower. These towers provided additional defensive capabilities and allowed defenders to
                monitor approaches from all directions.
              </li>
              <li>
                <strong>Entrance:</strong> The main entrance is a fine example of defensive architecture, featuring a
                bent entrance passage designed to slow attackers and make them vulnerable to defensive fire from above.
              </li>
              <li>
                <strong>Interior Spaces:</strong> Inside, the castle contains numerous rooms, halls, galleries, and a
                central courtyard. Many of these spaces served specific functions, including a mosque, dormitories for
                soldiers, storage rooms, and water cisterns.
              </li>
              <li>
                <strong>Inscriptions:</strong> Several Arabic inscriptions can be found throughout the castle, providing
                historical context and information about its construction and renovations.
              </li>
            </ul>

            <h2>Visitor Information</h2>

            <h3>Getting to Ajloun Castle</h3>
            <p>
              Ajloun Castle is located approximately 75 kilometers northwest of Amman. There are several ways to reach
              the castle:
            </p>

            <ul>
              <li>
                <strong>By Car:</strong> The drive from Amman takes about 1.5 hours. Take the highway north toward
                Jerash, then follow signs to Ajloun. The castle is well-signposted from the town of Ajloun.
              </li>
              <li>
                <strong>By Public Transport:</strong> Buses run from Amman's North Bus Station (Tabarbour) to Ajloun
                town. From there, you can take a taxi to the castle, which is about 3 kilometers from the town center.
              </li>
              <li>
                <strong>Organized Tours:</strong> Many tour companies in Amman offer day trips to Ajloun, often combined
                with nearby Jerash.
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
              <p className="font-medium">Visitor Tip</p>
              <p className="text-sm">
                Consider combining your visit to Ajloun Castle with the nearby Ajloun Forest Reserve for a full day of
                historical and natural attractions. The reserve is just a 15-minute drive from the castle.
              </p>
            </div>

            <h3>Opening Hours and Admission</h3>
            <p>The castle is open daily:</p>
            <ul>
              <li>Summer (April-October): 8:00 AM to 7:00 PM</li>
              <li>Winter (November-March): 8:00 AM to 4:00 PM</li>
            </ul>

            <p>Admission fees:</p>
            <ul>
              <li>Foreign visitors: 3 JOD</li>
              <li>Jordanian/Arab nationals: 1 JOD</li>
              <li>The Jordan Pass includes entry to Ajloun Castle</li>
            </ul>

            <h3>Best Time to Visit</h3>
            <p>
              Spring (March-May) and autumn (September-November) offer the most pleasant weather for exploring the
              castle. Summer can be quite hot, though cooler than Amman due to the higher elevation. Winter visits can
              be chilly and occasionally rainy, but the castle is less crowded during this time.
            </p>

            <p>
              For the best experience, try to arrive early in the morning to avoid tour groups and to capture the best
              lighting for photography. Sunset is also a magical time to visit, as the golden light bathes the castle
              and surrounding landscape.
            </p>

            <h2>Exploring the Castle</h2>

            <h3>Suggested Route</h3>
            <p>
              A typical visit to Ajloun Castle takes 1-2 hours. Here's a suggested route to make the most of your visit:
            </p>

            <ol>
              <li>
                <strong>Main Entrance and Gateway:</strong> Begin at the impressive main entrance, noting the defensive
                architecture of the bent passageway.
              </li>
              <li>
                <strong>Central Courtyard:</strong> Emerge into the open courtyard at the heart of the castle, which
                once served as a gathering place for soldiers and residents.
              </li>
              <li>
                <strong>Eastern Tower:</strong> Explore the largest tower, which contains multiple levels and rooms,
                including storage areas and living quarters.
              </li>
              <li>
                <strong>Mosque:</strong> Visit the small prayer room, identifiable by its mihrab (prayer niche)
                indicating the direction of Mecca.
              </li>
              <li>
                <strong>Upper Levels:</strong> Climb to the upper levels for panoramic views of the surrounding
                countryside, including the Jordan Valley and, on clear days, the Sea of Galilee.
              </li>
              <li>
                <strong>Museum:</strong> Don't miss the small museum displaying artifacts found at the castle and
                information about its history.
              </li>
            </ol>

            <div className="relative h-[400px] rounded-lg overflow-hidden my-8">
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Ajloun+Castle+View"
                alt="View from Ajloun Castle"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
                The breathtaking view from Ajloun Castle's upper levels, overlooking the hills of northern Jordan
              </div>
            </div>

            <h3>Key Features to Look For</h3>
            <p>As you explore the castle, keep an eye out for these notable features:</p>

            <ul>
              <li>
                <strong>Arrow Slits:</strong> Narrow openings in the walls that allowed defenders to shoot arrows at
                attackers while remaining protected.
              </li>
              <li>
                <strong>Water Cisterns:</strong> Large underground chambers designed to collect and store rainwater,
                essential during sieges.
              </li>
              <li>
                <strong>Stone Carvings:</strong> Look for decorative elements and inscriptions, particularly around
                doorways and in the mosque area.
              </li>
              <li>
                <strong>Secret Passages:</strong> Some areas of the castle contain hidden corridors and escape routes.
              </li>
              <li>
                <strong>Mamluk Additions:</strong> Notice the architectural differences between the original Ayyubid
                construction and later Mamluk additions, particularly in the decorative elements.
              </li>
            </ul>

            <h2>Nearby Attractions</h2>

            <p>
              While Ajloun Castle is the main attraction in the area, there are several other sites worth visiting
              nearby:
            </p>

            <ul>
              <li>
                <strong>Ajloun Forest Reserve:</strong> Just 15 minutes from the castle, this nature reserve offers
                beautiful hiking trails through oak, pine, and strawberry trees, with opportunities to spot wildlife.
              </li>
              <li>
                <strong>Tell Mar Elias:</strong> An archaeological site believed to be the birthplace of the Prophet
                Elijah, located about 7 kilometers northwest of Ajloun.
              </li>
              <li>
                <strong>Ajloun Town:</strong> The town itself has a charming old quarter with traditional architecture,
                local restaurants, and small shops selling olive oil products.
              </li>
              <li>
                <strong>Soap House:</strong> Visit the Soap House in Ajloun town to see how traditional olive oil soap
                is made and purchase locally-made products.
              </li>
              <li>
                <strong>Jerash:</strong> The ancient Roman city of Jerash is about 30 minutes by car from Ajloun and
                makes for an excellent combined day trip.
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="font-medium">Local Experience</p>
              <p className="text-sm">
                Don't miss trying the local olive oil in Ajloun, which is considered some of the best in Jordan. Many
                small producers offer tastings and sell their products directly to visitors.
              </p>
            </div>

            <h2>Practical Tips for Visitors</h2>

            <ul>
              <li>
                <strong>Wear comfortable shoes:</strong> The castle has many uneven surfaces and stairs to navigate.
              </li>
              <li>
                <strong>Bring water:</strong> Especially during summer months, as the site can be hot and exposed.
              </li>
              <li>
                <strong>Allow enough time:</strong> While you can see the castle in an hour, allowing 2 hours gives you
                time to explore thoroughly and enjoy the views.
              </li>
              <li>
                <strong>Photography:</strong> The castle offers excellent photography opportunities, particularly from
                the upper levels. Early morning or late afternoon light is best.
              </li>
              <li>
                <strong>Guided tours:</strong> Consider hiring a local guide at the entrance for a more informative
                experience. Guides typically charge 10-15 JOD for a tour.
              </li>
              <li>
                <strong>Accessibility:</strong> The castle involves climbing stairs and walking on uneven surfaces,
                which may be challenging for visitors with mobility issues.
              </li>
            </ul>

            <h2>Conclusion</h2>

            <p>
              Ajloun Castle stands as a testament to Jordan's rich historical tapestry and the strategic importance of
              this region throughout the centuries. Its well-preserved structure offers visitors a glimpse into medieval
              Islamic military architecture and the complex history of the Crusader-Ayyubid conflicts.
            </p>

            <p>
              Beyond its historical significance, the castle rewards visitors with breathtaking panoramic views of the
              surrounding hills and valleys, making it clear why this location was chosen for such an important
              defensive structure. Whether you're a history enthusiast, architecture lover, or simply seeking beautiful
              landscapes, Ajloun Castle deserves a place on your Jordan itinerary.
            </p>

            <p>
              As you walk through its ancient halls and climb its towers, you'll connect with centuries of history and
              gain a deeper appreciation for the strategic genius and architectural skill that went into creating this
              enduring monument to Jordan's past.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">More Ajloun Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Ajloun+Forest"
                  alt="Hiking Trails in Ajloun Forest Reserve"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">Hiking Trails in Ajloun Forest Reserve</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Discover the best hiking trails through Jordan's beautiful Ajloun Forest Reserve with routes for all
                  skill levels.
                </p>
                <Link
                  href="/destinations/ajloun/ajloun-blog/hiking-trails-ajloun-forest-reserve"
                  className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Ajloun+Day+Trip"
                  alt="Day Trip to Ajloun from Amman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">Day Trip to Ajloun from Amman: Complete Itinerary</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Plan the perfect day trip from Amman to Ajloun with this detailed itinerary covering transportation,
                  sights, and local food.
                </p>
                <Link
                  href="/destinations/ajloun/ajloun-blog/day-trip-ajloun-from-amman-itinerary"
                  className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
