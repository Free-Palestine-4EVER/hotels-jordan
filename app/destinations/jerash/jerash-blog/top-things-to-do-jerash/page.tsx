import Image from "next/image"
import Link from "next/link"

export default function TopThingsToDoJerashPage() {
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

        <h1 className="text-4xl font-bold mb-4">Top Things to Do in Jerash, Jordan</h1>

        <div className="text-gray-500 mb-6">2025-01-10 • by Jordan Explorer Team</div>

        <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Jerash+Things+To+Do"
            alt="Top Things to Do in Jerash"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">
            Standing amid the remarkably preserved ruins of Jerash feels like stepping directly into the pages of a
            history book. As one of the world's most magnificent and complete Roman provincial cities, Jerash offers
            visitors an unparalleled journey back in time, where ancient columns cast long shadows across stone-paved
            streets that have witnessed over two millennia of human history.
          </p>

          <p>
            Unlike many ancient sites that require significant imagination to envision their former glory, Jerash
            presents its splendor openly, with colonnaded streets, grand theaters, spacious plazas, and ornate temples
            still standing in testament to Roman urban planning and architectural achievement. In this comprehensive
            guide, we'll explore the essential experiences that make Jerash one of Jordan's most rewarding
            archaeological treasures.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-medium text-amber-800">
              <strong>Traveler's Tip:</strong> The Jordan Pass includes entrance to Jerash along with Petra and over 40
              other attractions, plus your tourist visa fee. It's excellent value if you're planning to visit multiple
              sites in Jordan.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Enter Through Hadrian's Arch</h2>
          <p>
            Begin your exploration at the monumental Hadrian's Arch, an imposing 11-meter-high structure built in 129 CE
            to commemorate Emperor Hadrian's visit to the city. This triumphal arch once served as the grand southern
            entrance to Jerash and offers a spectacular introduction to the archaeological wonders that await.
          </p>
          <p>
            The arch's intricate carvings and impressive scale immediately signal the importance and prosperity of
            ancient Gerasa (as Jerash was known in Roman times). Take a moment here to appreciate the craftsmanship and
            consider that you're following in the footsteps of the emperor himself as you pass through this ceremonial
            gateway.
          </p>
          <p>
            Just beyond the arch lies the Hippodrome, where chariot races and athletic competitions once entertained
            thousands of spectators. If you time your visit right, you can witness the Roman Army and Chariot Experience
            (RACE), a reenactment that brings the ancient spectacles back to life with surprising authenticity.
          </p>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Hadrian's+Arch"
              alt="Hadrian's Arch in Jerash"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              Hadrian's Arch stands as a monumental gateway to the ancient city of Jerash
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Marvel at the Unique Oval Plaza</h2>
          <p>
            The Forum, or Oval Plaza, represents one of Jerash's most distinctive architectural features. Unlike the
            typical rectangular Roman forum, this unusual oval-shaped public space is surrounded by a colonnade of 56
            Ionic columns, creating an elegant perimeter that frames the expansive limestone-paved plaza.
          </p>
          <p>
            Measuring 90 meters long and 80 meters wide, the plaza once served as the vibrant heart of civic life,
            connecting the main north-south cardo (street) with the Temple of Zeus. Stand in the center of this
            magnificent space and turn slowly to take in the 360-degree view of columns and surrounding monuments. The
            acoustics here are remarkable—even a whisper can sometimes be heard across the plaza.
          </p>
          <p>
            The plaza's unique design represents a fascinating architectural compromise between Roman urban planning
            principles and the existing topography of the site. Local guides often point out the slight tilt of the
            plaza, an intentional design feature for rainwater drainage that demonstrates the practical ingenuity behind
            the beauty.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Walk the Colonnaded Cardo Maximus</h2>
          <p>
            No visit to Jerash is complete without a leisurely stroll down the spectacular Cardo Maximus, the city's
            main thoroughfare stretching over 800 meters from the Oval Plaza to the North Gate. This remarkably
            preserved street remains paved with its original stones, where you can still see the ruts carved by chariot
            wheels over centuries of use.
          </p>
          <p>
            Flanked by towering Corinthian columns that once supported covered walkways, the Cardo creates a dramatic
            perspective that showcases Roman urban planning at its finest. As you walk, notice how the columns are
            slightly different heights—they were donated by wealthy citizens, with taller columns indicating greater
            status and wealth.
          </p>
          <p>
            Beneath your feet runs an elaborate underground sewage system, accessible through periodic manholes that
            reveal the sophisticated infrastructure that supported this ancient city of 20,000 inhabitants. The street
            is intersected by two decumanus (east-west streets), creating the classic grid pattern typical of Roman
            colonial cities.
          </p>
          <p>
            Along the Cardo, you'll encounter numerous shops, public buildings, and monuments that once formed the
            commercial and social center of Gerasa. Look for the circular marks on some column bases—these once held
            colorful market umbrellas for merchants selling their wares.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="font-medium text-blue-800">
              <strong>Photography Tip:</strong> The best light for photographing the Cardo is in the late afternoon when
              the sun casts dramatic shadows from the columns across the stone pavement, creating a striking visual
              rhythm that captures the grandeur of the ancient street.
            </p>
          </div>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Colonnaded+Street"
              alt="Colonnaded Street in Jerash"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              The magnificent colonnaded street stretches through the heart of ancient Jerash
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Experience the South Theater's Perfect Acoustics</h2>
          <p>
            The South Theater stands as one of Jerash's most impressive and well-preserved monuments. Built between
            90-92 CE during the reign of Emperor Domitian, this magnificent 3,000-seat amphitheater continues to
            astonish visitors with its remarkable state of preservation and ingenious design.
          </p>
          <p>
            Climb the steep steps to the upper tiers for a breathtaking panoramic view of the city ruins and surrounding
            landscape. The theater's 32 rows of seating are divided into distinct sections: the lower seats (ima cavea)
            were reserved for nobility, the middle section (media cavea) for merchants and military, and the upper rows
            (summa cavea) for common citizens.
          </p>
          <p>
            The theater's most famous feature is its extraordinary acoustics. Stand on the small limestone disk marking
            the center of the orchestra (performance area) and speak in a normal voice—your words will carry clearly to
            the uppermost seats without amplification. This acoustic miracle results from precise mathematical
            calculations in the theater's design, including the curved seating arrangement and the strategic placement
            of the stage building (scaenae frons), which once rose three stories high with elaborate decorations.
          </p>
          <p>
            Local Jordanian musicians often demonstrate these acoustics with impromptu bagpipe performances, a tradition
            dating back to when Scottish regiments were stationed in Jordan during the British mandate period. The
            haunting melodies echoing through this ancient Roman space create an unforgettable cross-cultural
            experience.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Explore the Majestic Temple of Artemis</h2>
          <p>
            Perched on a hill overlooking the city, the Temple of Artemis represents the pinnacle of Jerash's religious
            architecture. Dedicated to the patron goddess of the city (identified with the Greek Artemis), this grand
            sanctuary was built between 150-170 CE and once dominated the skyline of ancient Gerasa.
          </p>
          <p>
            Approach the temple via the monumental staircase that leads from the lower city to the sacred precinct. The
            climb offers increasingly impressive views and builds anticipation for the architectural marvel that awaits.
            At the top, you'll find yourself on a massive platform that supported the temple complex, designed to
            inspire awe in ancient worshippers.
          </p>
          <p>
            Of the original temple, eleven colossal Corinthian columns still stand, each reaching a height of 12 meters
            and topped with exquisitely carved capitals. These remaining columns demonstrate a fascinating engineering
            feature—they appear to sway slightly in strong winds. This flexibility was intentionally built into their
            design as a seismic precaution, allowing the structure to withstand earthquakes that have toppled more rigid
            buildings.
          </p>
          <p>
            Inside what was once the inner sanctum (cella), look for the raised platform where the cult statue of
            Artemis would have stood. Nearby, you might notice holes in some stone blocks—these once secured precious
            metal decorations that adorned the temple, all long since looted.
          </p>
          <p>
            The temple's strategic position, visible from throughout the city, reinforced the goddess's role as
            protector of Gerasa. Today, it offers visitors one of the most photogenic spots in Jerash, particularly in
            the golden light of late afternoon when the limestone columns glow warmly against the blue sky.
          </p>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Temple+of+Artemis"
              alt="Temple of Artemis in Jerash"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              The majestic columns of the Temple of Artemis stand tall against the Jordanian sky
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Watch the Roman Army and Chariot Experience</h2>
          <p>
            For a dynamic glimpse into the past that brings the ancient ruins to life, the Roman Army and Chariot
            Experience (RACE) offers an entertaining and educational spectacle. Held twice daily in the restored
            Hippodrome, this 45-minute performance recreates the military displays, gladiatorial contests, and chariot
            races that once thrilled the citizens of Gerasa.
          </p>
          <p>
            Performers dressed in authentic Roman military attire demonstrate battle formations, weapons handling, and
            combat techniques used by the legions that once garrisoned the eastern frontiers of the Empire. The
            precision of the drills reflects the disciplined military machine that enabled Rome to control vast
            territories for centuries.
          </p>
          <p>
            The highlight of the show is undoubtedly the chariot race, where replica Roman chariots thunder around the
            track in a heart-pounding recreation of ancient Rome's most popular spectator sport. The thundering hooves,
            creaking wheels, and shouting charioteers create a multisensory experience that helps visitors connect with
            the excitement that once animated this space.
          </p>
          <p>
            While some purists might find the show somewhat theatrical, most visitors—especially families with
            children—appreciate how it brings historical context to the silent stones. The performance offers a welcome
            break from self-guided exploration and helps visualize how these ancient spaces were actually used.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-medium text-amber-800">
              <strong>Visitor Information:</strong> The RACE show typically runs at 11:00 AM and 2:00 PM daily, except
              Fridays. Times may vary seasonally, so it's advisable to check the current schedule upon arrival. The show
              requires a separate ticket (5 JOD) in addition to the Jerash entrance fee.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Discover the North Theater's Intimate Setting</h2>
          <p>
            While smaller than its southern counterpart, the North Theater offers a more intimate glimpse into ancient
            performance spaces. Originally built in 165 CE as a small odeon (covered theater) with just 14 rows of
            seats, it was later expanded in the 3rd century to accommodate around 1,600 spectators.
          </p>
          <p>
            What makes this theater particularly interesting is its original purpose—it was built not primarily for
            entertainment but for city council meetings and political gatherings. The excellent acoustics ensured that
            speakers could be heard clearly by all assembly members, an important feature in ancient democratic
            processes.
          </p>
          <p>
            Look closely at some of the seats in the lower section, where you can still see Greek inscriptions
            indicating reserved seating for important officials and civic groups. These named seats offer a rare
            personal connection to the individuals who once governed this prosperous provincial city.
          </p>
          <p>
            The theater's stage building has been partially reconstructed, giving visitors a better sense of how the
            complete structure would have appeared. The scaenae frons (stage backdrop) would have featured elaborate
            multi-story architecture with columns, niches for statues, and decorative elements that framed performances.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Admire the Ornate Nymphaeum</h2>
          <p>
            The Nymphaeum of Jerash represents one of the most ornate public monuments in the city and the finest
            example of a Roman ornamental fountain in the Middle East. Built in 191 CE and dedicated to the water
            nymphs, this two-story structure once featured elaborate marble facing, statuary, and a constant flow of
            water that would have created a cooling oasis in the Mediterranean heat.
          </p>
          <p>
            Water cascaded from seven lion-head spouts into a large semi-circular basin, creating both a practical water
            source for citizens and a symbolic display of the city's prosperity and engineering prowess. The sound of
            flowing water would have added a pleasant acoustic element to the urban environment, while the structure's
            orientation provided welcome shade during hot afternoons.
          </p>
          <p>
            Though much of its decorative elements have been lost to time, you can still appreciate the Nymphaeum's
            grand scale and architectural sophistication. The semi-dome that once crowned the structure was adorned with
            intricate painted scenes, while niches throughout the façade housed statues of nymphs and other water
            deities.
          </p>
          <p>
            The Nymphaeum's prominence in the city plan—located at a major intersection of the Cardo and South
            Decumanus—reflects the importance of public water features in Roman urban design, serving both practical and
            aesthetic functions while demonstrating the engineering that brought fresh water to the city via aqueducts
            from distant springs.
          </p>

          <div className="relative h-[400px] my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Nymphaeum"
              alt="Nymphaeum in Jerash"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              The ornate Nymphaeum once provided both practical water access and aesthetic beauty to ancient Jerash
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Explore the Byzantine Churches</h2>
          <p>
            While Jerash is primarily celebrated for its Roman architecture, the city's Byzantine period (4th-7th
            centuries CE) has left a fascinating religious legacy in the form of at least 15 churches. These churches
            represent the transformation of the city following the Empire's adoption of Christianity and offer insight
            into early Christian architectural traditions.
          </p>
          <p>
            The Cathedral (or Church of St. Theodore), built around 375 CE, stands as the largest and most impressive of
            Jerash's churches. Located just off the main Cardo, its foundations incorporate elements of an earlier Roman
            temple, symbolizing Christianity's replacement of pagan worship. Look for the remnants of the synthronon (a
            semicircular bench for clergy) in the apse and the baptismal font that once welcomed new members to the
            faith.
          </p>
          <p>
            What makes Jerash's Byzantine churches particularly remarkable are their mosaic floors. Though time has
            damaged many, several churches still display beautiful geometric patterns, floral motifs, and inscriptions
            that provide information about donors and construction dates. The Church of St. John the Baptist features
            some of the best-preserved examples, with intricate designs incorporating crosses, birds, and fruit—symbols
            rich with Christian meaning.
          </p>
          <p>
            The Church of SS. Cosmas and Damianus and the adjoining Church of St. George form an interesting complex
            with connecting doorways, suggesting they may have served related liturgical functions. Their shared atrium
            would have provided a gathering space for the Christian community before and after services.
          </p>
          <p>
            As you explore these sacred spaces, notice how they follow a similar basilica floor plan—a central nave
            flanked by side aisles and ending in a semicircular apse oriented to the east. This architectural template
            would influence church design throughout Europe for centuries to come.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Visit the Jerash Archaeological Museum</h2>
          <p>
            Complete your exploration of Jerash with a visit to the Archaeological Museum, housed in the former rest
            house near the site entrance. Though modest in size, this well-organized museum provides valuable context
            for the ruins you've explored and houses artifacts that bring the ancient city's daily life into focus.
          </p>
          <p>
            The collection includes an impressive array of statuary, including a remarkably well-preserved marble
            Aphrodite and several portrait busts of emperors and local notables. These sculptures once adorned the
            city's public buildings and private homes, representing both religious devotion and social status.
          </p>
          <p>
            Glass cases display smaller items that connect visitors to the everyday experiences of Jerash's ancient
            inhabitants: oil lamps that lit their homes, cosmetic tools used for personal grooming, jewelry that adorned
            wealthy citizens, and toys that entertained their children. Pottery vessels of various shapes and sizes
            illustrate the storage, cooking, and dining practices of different historical periods.
          </p>
          <p>
            Of particular interest are the numismatic displays featuring coins minted in Gerasa and those from
            throughout the Empire that circulated in this commercial hub. These coins often bear the profiles of
            emperors and local symbols, serving as both currency and propaganda tools that spread imperial imagery
            throughout the Roman world.
          </p>
          <p>
            The museum also houses architectural elements too delicate to remain on site, including finely carved
            capitals, decorative friezes, and fragments of the elaborate mosaics that once adorned Jerash's churches and
            wealthy homes. Informative panels explain the historical context of major exhibits, helping visitors
            understand how these objects fit into the broader narrative of the city's development.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="font-medium text-green-800">
              <strong>Local Insight:</strong> After exploring Jerash, many visitors enjoy lunch at the Lebanese House
              Restaurant near the site entrance, which offers traditional Middle Eastern cuisine with views overlooking
              the ancient city. Their mezze platters and freshly baked bread make for a perfect post-exploration meal.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Practical Tips for Visiting Jerash</h2>
          <div className="bg-gray-100 p-6 rounded-lg my-6">
            <h3 className="font-bold mb-3">Essential Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Opening Hours:</strong> 8:00 AM to 5:00 PM in winter (October-March) and 8:00 AM to 7:00 PM in
                  summer (April-September)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Entrance Fee:</strong> 10 JOD (included in the Jordan Pass)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Time Needed:</strong> At least 3-4 hours to properly explore the site
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Best Time to Visit:</strong> Early morning or late afternoon to avoid midday heat and crowds
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Guided Tours:</strong> Available at the entrance for around 20-25 JOD, or book in advance
                  through your hotel
                </span>
              </li>
            </ul>

            <h3 className="font-bold mt-6 mb-3">Visitor Recommendations</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  Wear comfortable walking shoes with good grip, as the ancient stones can be slippery and uneven
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>Bring sun protection (hat, sunscreen, sunglasses) as most of the site is unshaded</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>Carry plenty of water, especially during summer months (May-September)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  Consider hiring a local guide to bring the ruins to life with historical context and stories
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>
                  The site is partially accessible for visitors with mobility challenges, but many areas involve steps
                  and uneven terrain
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">•</span>
                <span>Photography is permitted throughout the site without additional fees</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion: Why Jerash Deserves Your Time</h2>
          <p>
            Jerash offers one of the most complete and well-preserved examples of a provincial Roman city in the world.
            Its remarkable state of preservation, the scale of its monuments, and the coherence of its urban plan
            provide an unparalleled window into ancient life that few archaeological sites can match.
          </p>
          <p>
            What makes Jerash particularly special is how it allows visitors to experience a complete Roman city—not
            just isolated monuments but an integrated urban environment where you can walk the same streets that
            merchants, soldiers, priests, and ordinary citizens traversed nearly two millennia ago. The site's
            manageable size and clear layout make it accessible even to those with limited knowledge of ancient history.
          </p>
          <p>
            While Petra rightfully claims the spotlight as Jordan's premier attraction, Jerash deserves equal
            consideration in any thoughtful Jordan itinerary. Many visitors report that Jerash exceeds their
            expectations, offering a less crowded but equally impressive historical experience that deepens their
            understanding of Jordan's rich multicultural heritage.
          </p>
          <p>
            Whether you're a history enthusiast, a photography lover, or simply a curious traveler, Jerash rewards your
            attention with beauty, historical significance, and the rare opportunity to walk through an ancient world
            that feels remarkably present and accessible. As you leave through Hadrian's Arch, you'll carry with you not
            just photographs but a tangible connection to the distant past that few other archaeological sites can
            provide.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Jerash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`/destinations/jerash/jerash-blog/complete-travel-guide-jerash`} className="group">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Jerash+Travel+Guide"
                    alt="A Complete Travel Guide to Jerash"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">A Complete Travel Guide to Jerash: Jordan's Roman City</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    Everything you need to know to plan the perfect visit to Jerash, from tickets and tours to local
                    tips.
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
