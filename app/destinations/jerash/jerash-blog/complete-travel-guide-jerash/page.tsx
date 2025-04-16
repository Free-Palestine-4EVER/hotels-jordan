import Image from "next/image"
import Link from "next/link"

export default function CompleteGuideJerashPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/destinations/jerash/jerash-blog`}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to Jerash Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">A Complete Travel Guide to Jerash: Jordan's Roman City</h1>

        <div className="text-gray-500 mb-6">2025-01-18 • by Jordan Explorer Team</div>

        <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Jerash+Travel+Guide"
            alt="Complete Travel Guide to Jerash"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">
            Jerash stands as one of the most spectacular and well-preserved Roman cities outside of Italy, offering
            visitors an extraordinary journey through time. This comprehensive guide covers everything you need to know
            to plan an unforgettable visit to this archaeological wonder, from practical information to historical
            context and insider tips.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-medium text-amber-800">
              <strong>Quick Facts:</strong> Jerash (ancient Gerasa) was founded around the 2nd century BCE, flourished
              under Roman rule, and was part of the Decapolis, a group of ten important Greco-Roman cities in the
              eastern Mediterranean region.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Jerash: A Brief History</h2>
          <p>
            Before planning your visit, it helps to understand the historical significance of Jerash. The city's origins
            date back to the Neolithic period, but it rose to prominence after Alexander the Great's conquest of the
            region. The Romans arrived in 63 BCE when Pompey conquered the area, incorporating it into the Roman
            province of Syria.
          </p>
          <p>
            Jerash's golden age came during the 2nd and 3rd centuries CE, when it benefited from the Pax Romana (Roman
            Peace) and its strategic location on important trade routes. The city grew wealthy from agriculture and
            commerce, allowing its citizens to fund the magnificent public buildings and monuments that still impress
            visitors today.
          </p>
          <p>
            After centuries of prosperity, Jerash began to decline following a devastating earthquake in 749 CE. The
            city was largely abandoned and forgotten until its rediscovery by German explorer Ulrich Jasper Seetzen in
            1806. Excavations began in the 1920s and continue to this day, gradually revealing the splendor of this
            ancient urban center.
          </p>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Jerash+Aerial+View"
              alt="Aerial view of Jerash archaeological site"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              Aerial view showing the extensive layout of the ancient city of Jerash
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Planning Your Visit</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">When to Go</h3>
          <p>
            The best time to visit Jerash is during spring (March to May) and autumn (September to November) when
            temperatures are pleasant for exploring the extensive outdoor site. Summer months (June to August) can be
            extremely hot, with temperatures often exceeding 30°C (86°F), making early morning or late afternoon visits
            advisable. Winter (December to February) offers cooler temperatures and fewer crowds but occasionally brings
            rain that can make the stone surfaces slippery.
          </p>
          <p>
            If possible, try to avoid visiting on Fridays (the Muslim holy day) and during major holidays when the site
            can be crowded with local visitors and tourists. Early weekday mornings typically offer the most peaceful
            experience for photography and contemplation.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">How to Get There</h3>
          <p>
            Jerash is located approximately 50 kilometers (31 miles) north of Amman, making it an easy day trip from the
            capital. Here are your transportation options:
          </p>

          <ul>
            <li>
              <strong>By Car:</strong> The most flexible option is to rent a car and drive yourself. The journey takes
              about 45-60 minutes from Amman via the well-maintained Highway 35. Parking is available near the site
              entrance.
            </li>
            <li>
              <strong>By Taxi:</strong> A private taxi from Amman will cost around 25-35 JOD one-way. Consider
              negotiating a round-trip fare with waiting time if you want the driver to return you to Amman (typically
              45-60 JOD for the entire trip).
            </li>
            <li>
              <strong>By Public Bus:</strong> The most economical option is to take a public bus from Amman's Tabarbour
              Bus Station (North Bus Station). Buses depart regularly throughout the day, cost around 1-2 JOD, and take
              approximately 1 hour. Note that the last return bus usually leaves Jerash by late afternoon.
            </li>
            <li>
              <strong>Organized Tours:</strong> Many hotels and travel agencies in Amman offer day tours to Jerash,
              often combined with other northern sites like Ajloun Castle or Umm Qais. These typically cost 40-70 JOD
              per person, including transportation and guide services.
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="font-medium text-blue-800">
              <strong>Travel Tip:</strong> If you're using public transportation, consider combining Jerash with a visit
              to Ajloun Castle. From Jerash, you can take a direct bus to Ajloun (30 minutes), explore the castle, and
              then return to Amman from there, creating an efficient northern Jordan day trip.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Entrance Fees and Hours</h3>
          <p>Jerash Archaeological Site is open daily throughout the year:</p>
          <ul>
            <li>Summer (April-September): 8:00 AM to 7:00 PM</li>
            <li>Winter (October-March): 8:00 AM to 5:00 PM</li>
          </ul>
          <p>
            The entrance fee is 10 JOD for foreign visitors. If you have purchased the Jordan Pass (highly recommended
            if you're visiting multiple sites in Jordan), entry to Jerash is included. The Roman Army and Chariot
            Experience (RACE) requires a separate ticket (5 JOD) and typically has shows at 11:00 AM and 2:00 PM daily
            except Fridays.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Navigating the Archaeological Site</h2>
          <p>
            Jerash is a large archaeological site covering approximately 800,000 square meters (80 hectares). While the
            main attractions are concentrated in a walkable area, you'll want to plan at least 3-4 hours to explore the
            site properly. Here's a suggested route that covers the major highlights in a logical sequence:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Suggested Itinerary</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Hadrian's Arch and Hippodrome</strong> - Begin at the southern entrance with the triumphal arch
              and the chariot racing venue
            </li>
            <li>
              <strong>South Gate and City Walls</strong> - Pass through the ancient city entrance
            </li>
            <li>
              <strong>Oval Plaza (Forum)</strong> - Marvel at the unique oval-shaped public space
            </li>
            <li>
              <strong>Cardo Maximus (Colonnaded Street)</strong> - Walk the main north-south thoroughfare
            </li>
            <li>
              <strong>South Theater</strong> - Explore the large amphitheater with remarkable acoustics
            </li>
            <li>
              <strong>Temple of Zeus</strong> - Visit the remains of this important religious site
            </li>
            <li>
              <strong>South Tetrapylon</strong> - See the monumental gateway where two main streets intersect
            </li>
            <li>
              <strong>Nymphaeum</strong> - Admire the ornate public fountain
            </li>
            <li>
              <strong>West Baths</strong> - Explore the extensive bathing complex
            </li>
            <li>
              <strong>Cathedral and Byzantine Churches</strong> - Discover Jerash's Christian heritage
            </li>
            <li>
              <strong>North Theater</strong> - Visit the smaller but well-preserved theater
            </li>
            <li>
              <strong>Temple of Artemis</strong> - Climb to this magnificent temple complex
            </li>
            <li>
              <strong>Archaeological Museum</strong> - Finish your visit with the artifacts on display
            </li>
          </ol>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Jerash+Site+Map"
              alt="Map of Jerash archaeological site"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              Map showing the layout of major monuments and suggested walking route through Jerash
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Enhancing Your Experience</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Guided Tours vs. Self-Guided Exploration</h3>
          <p>
            While Jerash can be explored independently, hiring a guide significantly enhances the experience by bringing
            the ruins to life with historical context and stories. Official guides are available at the visitor center
            near the entrance (20-25 JOD for a 2-3 hour tour), and many speak excellent English. Alternatively, you can
            book a guide in advance through your hotel or tour agency.
          </p>
          <p>
            If you prefer self-guided exploration, consider purchasing a detailed guidebook or downloading a reputable
            audio guide app before your visit. The on-site information panels provide basic context, but additional
            resources will deepen your understanding of what you're seeing.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Photography Tips</h3>
          <p>Jerash offers countless photographic opportunities. Here are some tips for capturing the best images:</p>
          <ul>
            <li>
              The golden hours of early morning and late afternoon provide the most flattering light, with long shadows
              that accentuate architectural details
            </li>
            <li>
              The Oval Plaza and Cardo Maximus are particularly photogenic from elevated positions—try capturing them
              from the steps of the Temple of Zeus
            </li>
            <li>
              The columns of the Temple of Artemis create striking geometric patterns when photographed from creative
              angles
            </li>
            <li>Include people in some shots to provide scale and bring the ancient city to life</li>
            <li>Consider bringing a polarizing filter to enhance the blue sky against the honey-colored limestone</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Facilities and Amenities</h3>
          <p>Jerash has basic visitor facilities, including:</p>
          <ul>
            <li>Restrooms near the entrance and at several locations throughout the site</li>
            <li>A few small shops selling snacks, drinks, and souvenirs</li>
            <li>Several restaurants near the entrance, including the popular Lebanese House Restaurant</li>
            <li>Limited shaded areas, primarily around the visitor center and museum</li>
          </ul>
          <p>
            It's advisable to bring your own water, sun protection, and snacks, especially if you plan to explore the
            site thoroughly.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="font-medium text-green-800">
              <strong>Local Insight:</strong> Just outside the archaeological site, you'll find several shops selling
              beautiful mosaics made by local artisans. While similar souvenirs are available throughout Jordan, the
              pieces here are often of higher quality and directly support the Jerash community.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Beyond the Archaeological Site</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Modern Jerash</h3>
          <p>
            The modern city of Jerash surrounds the archaeological site and offers a glimpse of contemporary Jordanian
            life. While most visitors focus exclusively on the ancient ruins, spending an hour or two exploring the
            modern town can provide cultural context and local flavor.
          </p>
          <p>
            The city's main market (souq) offers fresh produce, spices, and everyday items used by local residents.
            Several small restaurants serve authentic Jordanian cuisine at prices lower than those found at
            tourist-oriented establishments near the archaeological site. The East Jerash Mosque, with its distinctive
            minarets, provides an interesting architectural contrast to the ancient Roman structures.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Jerash Festival</h3>
          <p>
            If you're visiting in July or August, you might have the opportunity to experience the Jerash Festival of
            Culture and Arts. This annual event transforms the ancient city into a vibrant venue for performances of
            music, dance, poetry, and drama. The festival showcases both Jordanian cultural traditions and international
            performances, with the South Theater and other ancient venues serving as spectacular backdrops.
          </p>
          <p>
            The festival typically runs for two weeks, with performances scheduled in the late afternoon and evening.
            Tickets for individual events can be purchased at the festival office or online through the official
            website. If your visit coincides with the festival, booking accommodation in advance is essential, as Jerash
            and nearby cities fill quickly during this popular event.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Nearby Attractions</h3>
          <p>If you have additional time in the region, consider visiting these nearby attractions:</p>
          <ul>
            <li>
              <strong>Ajloun Castle (Qal'at Ar-Rabad)</strong> - A magnificent 12th-century Muslim castle built by one
              of Saladin's generals, located about 25 km west of Jerash
            </li>
            <li>
              <strong>Dibbin Forest Reserve</strong> - A peaceful natural area with hiking trails through pine forests,
              just 10 km from Jerash
            </li>
            <li>
              <strong>Umm Qais (ancient Gadara)</strong> - Another Decapolis city with spectacular views over the Sea of
              Galilee, about 60 km northwest of Jerash
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Where to Stay</h2>
          <p>
            Most visitors experience Jerash as a day trip from Amman, but staying overnight allows for a more relaxed
            exploration and the opportunity to see the site in the soft morning light before day-trippers arrive.
            Accommodation options include:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">In Jerash</h3>
          <ul>
            <li>
              <strong>Olive Branch Hotel</strong> - A mid-range option within walking distance of the archaeological
              site, offering comfortable rooms and a restaurant serving traditional Jordanian cuisine
            </li>
            <li>
              <strong>Jerash Rest House</strong> - A budget-friendly choice near the site entrance with basic but clean
              accommodations
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Nearby</h3>
          <ul>
            <li>
              <strong>Ajloun Forest Reserve Cabins</strong> - For a unique experience, consider staying in these
              eco-friendly cabins managed by the Royal Society for the Conservation of Nature, located about 30 minutes
              from Jerash
            </li>
            <li>
              <strong>Amman Hotels</strong> - The capital offers the widest range of accommodation options, from luxury
              international chains to boutique hotels and budget hostels
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Final Tips for an Unforgettable Visit</h2>
          <div className="bg-gray-100 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Wear appropriate footwear</strong> - The site involves considerable walking on uneven stone
                  surfaces
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Dress in layers</strong> - Mornings can be cool while afternoons heat up considerably,
                  especially in spring and fall
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Respect the ruins</strong> - Avoid climbing on ancient structures not designated for visitor
                  access
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Stay hydrated</strong> - The combination of sun, heat, and walking demands regular water
                  intake
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Take your time</strong> - Jerash rewards slow exploration; don't rush through the site trying
                  to see everything quickly
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Look for details</strong> - Notice the chariot wheel ruts in the stone streets, the Greek and
                  Latin inscriptions, and the subtle architectural differences between buildings from different periods
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            Jerash offers a remarkable window into the ancient world, where visitors can walk through a complete Roman
            city and experience the grandeur of classical urban planning and architecture. Whether you're a history
            enthusiast, a photography lover, or simply curious about past civilizations, Jerash delivers an
            unforgettable experience that brings ancient history vividly to life.
          </p>
          <p>
            By planning your visit thoughtfully using this guide, you'll maximize your time at this extraordinary site
            and create lasting memories of one of Jordan's most impressive archaeological treasures. As you walk the
            colonnaded streets and stand in the theaters where citizens gathered nearly two millennia ago, you'll gain a
            deeper appreciation for the sophisticated civilization that once flourished in this corner of the Roman
            Empire.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Jerash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`/destinations/jerash/jerash-blog/top-things-to-do-jerash`} className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Jerash+Things+To+Do"
                    alt="Top Things to Do in Jerash"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Top Things to Do in Jerash, Jordan</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    Discover the essential experiences and must-see attractions in Jordan's best-preserved Roman city.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`/destinations/jerash/jerash-blog/exploring-ancient-ruins-jerash`} className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Jerash+Ruins"
                    alt="Exploring the Ancient Ruins of Jerash"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Exploring the Ancient Ruins of Jerash: What Not to Miss</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    Navigate the extensive archaeological site of Jerash with our guide to the most impressive and
                    significant ruins.
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
