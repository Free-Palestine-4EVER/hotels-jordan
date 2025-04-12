import Image from "next/image"
import Link from "next/link"

export default function TopThingsToDoUmmQais() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Top Things to See and Do in Umm Qais, Jordan
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover the ancient wonders and breathtaking views of one of Jordan's most underrated archaeological sites
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Panoramic view of Umm Qais ruins with the Sea of Galilee in the background"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sm text-gray-500 mt-2">
          The stunning panoramic view from Umm Qais overlooking the Sea of Galilee, the Golan Heights, and the Yarmouk
          River Valley
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
          <p className="font-medium text-amber-800">
            <span className="font-bold">TRAVEL TIP:</span> Umm Qais is located about 110 km north of Amman. The site is
            open daily from 8:00 AM to 4:00 PM in winter and until 6:30 PM in summer. Entrance is included with the
            Jordan Pass or costs 3 JD separately.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">Introduction to Umm Qais</h2>

        <p>
          Perched on a hill overlooking the Jordan Valley, Umm Qais (ancient Gadara) offers visitors a unique
          combination of spectacular ruins, breathtaking views, and rich history that spans millennia. Once a thriving
          Greco-Roman city and an important member of the Decapolis league, today Umm Qais stands as one of Jordan's
          most impressive yet undervisited archaeological treasures.
        </p>

        <p>
          What makes Umm Qais truly special is its dramatic setting. From its vantage point, visitors can see three
          countries—Jordan, Syria, and Israel—as well as the shimmering waters of the Sea of Galilee (Lake Tiberias).
          This strategic location has made it an important settlement since ancient times, and today makes it one of the
          most scenic spots in all of Jordan.
        </p>

        <p>
          Unlike the more famous sites of Petra or Jerash, Umm Qais offers a more tranquil experience, often allowing
          visitors to explore its extensive ruins without crowds. The site combines Greco-Roman, Ottoman, and Byzantine
          influences, creating a fascinating historical tapestry that rewards those who make the journey to northern
          Jordan.
        </p>

        <div className="relative w-full h-[350px] my-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=350&width=800"
            alt="The black basalt colonnade at Umm Qais"
            fill
            className="object-cover"
          />
          <div className="text-sm text-gray-500 mt-2">
            The distinctive black basalt colonnade along the ancient main street of Gadara
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">Top Attractions in Umm Qais</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. The Western Theater</h3>

        <p>
          One of the most impressive structures at Umm Qais is the Western Theater, built in the 2nd century AD. Unlike
          many Roman theaters that were built into hillsides, this one was constructed entirely freestanding, showcasing
          the advanced engineering skills of its builders. What makes this theater particularly distinctive is its black
          basalt construction—a stark contrast to the more common limestone theaters found elsewhere in the region.
        </p>

        <p>
          Though smaller than the grand theater at Jerash, seating approximately 3,000 spectators, the Western Theater
          offers something its more famous counterpart cannot: breathtaking views of the Sea of Galilee and the
          surrounding landscapes. Sitting on the ancient stone seats, you can easily imagine Roman citizens gathering
          here not just for performances, but to enjoy the spectacular natural panorama.
        </p>

        <p>
          The theater's acoustics remain impressive to this day. Stand at the center of the orchestra (the semicircular
          area at the bottom of the theater) and speak in a normal voice—you'll be amazed at how your words carry to the
          upper tiers. This feature allowed ancient performers to be heard clearly by all spectators without the need
          for modern amplification.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="font-medium text-blue-800">
            <span className="font-bold">VISITOR TIP:</span> Visit the theater in the late afternoon when the low sun
            casts a golden glow on the black basalt stones, creating a magical atmosphere and perfect lighting for
            photography.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. The Basilica Terrace</h3>

        <p>
          The Basilica Terrace represents one of the most important Byzantine-era additions to Umm Qais. This large
          complex includes the remains of a 6th-century church built on the foundations of an earlier Roman temple. The
          terrace offers some of the best-preserved examples of Byzantine architecture in northern Jordan.
        </p>

        <p>
          As you explore the terrace, look for the octagonal structure that once formed the base of the baptistery. The
          eight-sided design was symbolically significant in early Christianity, representing the "eighth day" of
          creation and new beginnings through baptism. Nearby, you'll find the remains of a colonnaded atrium where
          worshippers would gather before services.
        </p>

        <p>
          The basilica's floor was once covered with intricate mosaics, fragments of which can still be seen today.
          These decorative elements featured geometric patterns and Christian symbols common in Byzantine religious art.
          The eastern end of the basilica terminates in a semicircular apse where the altar would have stood, oriented
          toward Jerusalem.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. The Black Basalt Colonnade</h3>

        <p>
          Perhaps the most photographed feature of Umm Qais is its striking black basalt colonnade that once lined the
          ancient city's main street (cardo maximus). The use of local black basalt stone gives Umm Qais a distinctive
          appearance that sets it apart from other Roman ruins in the region, which typically used lighter limestone.
        </p>

        <p>
          Walking along this ancient thoroughfare, you're following in the footsteps of merchants, philosophers, and
          ordinary citizens who strolled beneath these same columns nearly two millennia ago. The colonnade would have
          sheltered an array of shops and businesses, creating a bustling commercial center for the ancient city.
        </p>

        <p>
          Many of the columns remain remarkably intact, with some still supporting their original capitals. The contrast
          between the dark basalt columns and the bright blue sky creates a dramatic visual effect that photographers
          will particularly appreciate. Early morning or late afternoon visits provide the best lighting conditions for
          capturing this iconic feature of Umm Qais.
        </p>

        <div className="relative w-full h-[350px] my-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=350&width=800"
            alt="The panoramic view from Umm Qais"
            fill
            className="object-cover"
          />
          <div className="text-sm text-gray-500 mt-2">
            The breathtaking tri-country view from the western edge of Umm Qais
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">4. The Tri-Country Panoramic Viewpoint</h3>

        <p>
          Without question, one of the most compelling reasons to visit Umm Qais is for its extraordinary viewpoint at
          the western edge of the archaeological site. This vantage point offers what might be the most spectacular
          panorama in all of Jordan—a sweeping vista that encompasses three countries and landscapes of profound
          historical and religious significance.
        </p>

        <p>
          From this single spot, you can see the shimmering blue waters of the Sea of Galilee (Lake Tiberias) in Israel,
          the rolling hills of the Golan Heights in Syria, and the lush Yarmouk River valley that forms part of the
          border between Jordan and Syria. On clear days, you can even make out the snow-capped peak of Mount Hermon in
          the distance, straddling the border between Syria and Lebanon.
        </p>

        <p>
          This viewpoint helps visitors understand why Gadara was such a strategically important city in ancient times.
          Controlling this high ground meant overseeing vital trade routes and maintaining military advantage in the
          region. Today, it offers a peaceful perspective on a region rich in shared history and natural beauty that
          transcends modern political boundaries.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="font-medium text-blue-800">
            <span className="font-bold">PHOTOGRAPHY TIP:</span> Bring a wide-angle lens to capture the expansive
            panorama, and consider visiting at sunset when the golden light illuminates the landscape and creates
            spectacular reflections on the Sea of Galilee.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">5. The Ottoman Village</h3>

        <p>
          Unlike many archaeological sites that showcase a single historical period, Umm Qais offers visitors a unique
          opportunity to explore a more recent layer of history through its well-preserved Ottoman village. Built in the
          late 19th and early 20th centuries, these stone structures were constructed directly atop and using materials
          from the ancient Greco-Roman city.
        </p>

        <p>
          The village consists of several dozen buildings that once housed a thriving community until the 1980s, when
          residents were relocated to make way for archaeological excavations. The two-story houses feature the
          distinctive black basalt construction that characterizes Umm Qais, with arched doorways, interior courtyards,
          and traditional architectural elements that reflect the Ottoman influence in the region.
        </p>

        <p>
          Today, several of these buildings have been thoughtfully restored and repurposed. The former Ottoman
          governor's residence now houses a small but informative archaeological museum displaying artifacts discovered
          at the site. Another building has been converted into Beit Al Rousan, a restaurant offering traditional
          Jordanian cuisine with spectacular views of the Sea of Galilee—a perfect spot for lunch during your visit.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">6. The Nymphaeum</h3>

        <p>
          The Nymphaeum at Umm Qais represents one of the site's most important public monuments from the Roman period.
          This ornate fountain complex was dedicated to the nymphs—minor female deities associated with natural features
          like springs, rivers, and mountains in Greco-Roman mythology.
        </p>

        <p>
          Built in the 2nd century AD, the Nymphaeum served both practical and ceremonial functions. As a public
          fountain, it provided fresh water to citizens and visitors, while its elaborate architectural
          decoration—including statues, columns, and ornamental facades—demonstrated the city's prosperity and cultural
          sophistication.
        </p>

        <p>
          Though time has diminished much of its original grandeur, you can still discern the semicircular basin where
          water once flowed, as well as niches that would have held statues of nymphs and other deities. The Nymphaeum's
          location near the center of the ancient city highlights the importance of public water features in Roman urban
          planning, serving as both practical infrastructure and social gathering spaces.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">7. The Underground Mausoleum</h3>

        <p>
          One of the more unusual features at Umm Qais is its underground mausoleum, a fascinating example of Roman
          funerary architecture. Located on the eastern side of the site, this tomb complex consists of several chambers
          cut into the bedrock, accessed by a staircase that descends below ground level.
        </p>

        <p>
          The mausoleum features multiple burial niches (loculi) arranged along the walls where the deceased would have
          been placed. What makes this tomb particularly interesting is its well-preserved decorative elements,
          including carved stone doors that mimic wooden ones, complete with knockers and panels—a common feature in
          Roman tombs that symbolized the passage between the worlds of the living and the dead.
        </p>

        <p>
          The cool, quiet atmosphere of the underground chambers offers a moment of reflection during your visit,
          connecting you to ancient attitudes toward death and remembrance. The tomb's location outside the city walls
          follows Roman custom, as burial within city limits was generally prohibited for health and religious reasons.
        </p>

        <div className="relative w-full h-[350px] my-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=350&width=800"
            alt="The restored Ottoman houses at Umm Qais"
            fill
            className="object-cover"
          />
          <div className="text-sm text-gray-500 mt-2">
            The beautifully restored Ottoman village buildings now house a museum and restaurant
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">Beyond the Ruins: Other Activities in Umm Qais</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. Dining at Beit Al Rousan</h3>

        <p>
          No visit to Umm Qais is complete without experiencing a meal at Beit Al Rousan, the on-site restaurant housed
          in a beautifully restored Ottoman-era building. The restaurant specializes in traditional Jordanian cuisine,
          offering dishes prepared with locally-sourced ingredients that reflect the culinary heritage of northern
          Jordan.
        </p>

        <p>
          The restaurant's terrace provides what might be the most spectacular dining view in all of Jordan, overlooking
          the Sea of Galilee and the surrounding countryside. Time your meal to coincide with sunset for an
          unforgettable experience as the landscape is bathed in golden light and the waters of the lake reflect the
          changing colors of the sky.
        </p>

        <p>
          Popular dishes include mensaf (Jordan's national dish of lamb cooked in fermented dried yogurt served over
          rice), maqluba (an "upside-down" dish of rice, vegetables, and meat), and freshly-baked taboon bread. The
          restaurant also serves a selection of mezze (small dishes) that allow you to sample a variety of local
          flavors.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="font-medium text-green-800">
            <span className="font-bold">LOCAL RECOMMENDATION:</span> Try the limonana (mint lemonade) or the traditional
            Arabic coffee infused with cardamom for an authentic taste of Jordanian hospitality.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. Hiking the Yarmouk Nature Reserve</h3>

        <p>
          For visitors who want to complement their historical exploration with natural beauty, the nearby Yarmouk
          Nature Reserve offers excellent hiking opportunities. Established in 2010, this protected area covers
          approximately 20 square kilometers of diverse terrain including woodlands, grasslands, and the dramatic
          Yarmouk River gorge.
        </p>

        <p>
          Several marked trails of varying difficulty wind through the reserve, offering hikers the chance to observe
          local flora and fauna while enjoying spectacular views of the surrounding landscape. The Mediterranean climate
          supports a variety of plant species, including oak and pistachio trees, while lucky visitors might spot
          gazelles, hyenas, and numerous bird species.
        </p>

        <p>
          The most popular trail is the 3-kilometer Yarmouk River Trail, which follows part of the ancient trade route
          that once connected Damascus to the Mediterranean Sea. This moderately challenging path takes approximately 2
          hours to complete and rewards hikers with stunning views of the river valley and opportunities to observe the
          rich biodiversity of the region.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. Visiting the Archaeological Museum</h3>

        <p>
          Housed in one of the restored Ottoman buildings, the small but informative Archaeological Museum at Umm Qais
          provides valuable context for understanding the site's historical significance. The museum displays a
          carefully curated collection of artifacts discovered during excavations, spanning from the Hellenistic period
          through the Byzantine and Ottoman eras.
        </p>

        <p>
          Highlights of the collection include finely carved basalt sculptures, intricate mosaics, pottery, jewelry, and
          coins that offer glimpses into daily life in ancient Gadara. Particularly noteworthy are the Roman-era glass
          artifacts, as Gadara was known for its glass production in antiquity, with pieces exported throughout the
          Roman Empire.
        </p>

        <p>
          The museum's displays are organized chronologically, allowing visitors to trace the development of the city
          through different historical periods. Informative panels in both Arabic and English provide context for the
          artifacts and explain their significance in the broader historical narrative of the region.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">4. Photography Opportunities</h3>

        <p>
          Umm Qais offers photographers—both amateur and professional—an abundance of captivating subjects. The
          combination of ancient ruins, dramatic landscapes, and unique lighting conditions creates endless
          possibilities for memorable images that capture the essence of this remarkable site.
        </p>

        <p>
          The black basalt architecture provides striking contrast against blue skies, while the panoramic views offer
          sweeping landscapes that showcase the natural beauty of northern Jordan. The late afternoon golden hour is
          particularly magical, as the low sun casts long shadows across the ruins and bathes the stone in warm light.
        </p>

        <p>
          For the most atmospheric shots, consider visiting in spring (March-May) when the surrounding countryside is
          carpeted with wildflowers, or in winter (December-February) when occasional mists create ethereal scenes as
          they drift across the valley below. Early morning visits often reward photographers with dramatic lighting and
          fewer visitors in their shots.
        </p>

        <div className="relative w-full h-[350px] my-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=350&width=800"
            alt="Sunset over the Sea of Galilee from Umm Qais"
            fill
            className="object-cover"
          />
          <div className="text-sm text-gray-500 mt-2">
            The magical sunset view from Umm Qais, with the Sea of Galilee glowing in the distance
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">Practical Information for Visitors</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">How to Get to Umm Qais</h3>

        <p>
          Umm Qais is located approximately 110 kilometers north of Amman, near Jordan's borders with Syria and Israel.
          Here are the main transportation options for reaching the site:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>By Car:</strong> The most convenient way to reach Umm Qais is by private vehicle or taxi. From
            Amman, take the Jordan Valley Highway (Route 65) north, then follow signs for Irbid and later Umm Qais. The
            drive takes approximately 2 hours, depending on traffic conditions.
          </li>
          <li>
            <strong>By Public Transport:</strong> Regular buses run from Amman's North Bus Station (Tabarbour) to Irbid.
            From Irbid, you can take a minibus or taxi to Umm Qais. This option takes longer (3-4 hours total) but is
            more economical.
          </li>
          <li>
            <strong>Organized Tours:</strong> Many tour companies in Amman offer day trips to Umm Qais, often combined
            with visits to other northern sites like Jerash and Ajloun Castle. These tours typically include
            transportation, guide services, and sometimes meals.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Opening Hours and Admission</h3>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Summer Hours (April-October):</strong> 8:00 AM to 6:30 PM
          </li>
          <li>
            <strong>Winter Hours (November-March):</strong> 8:00 AM to 4:00 PM
          </li>
          <li>
            <strong>Admission Fee:</strong> 3 JD per person (included in the Jordan Pass)
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Best Time to Visit</h3>

        <p>Umm Qais can be visited year-round, but each season offers a different experience:</p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Spring (March-May):</strong> Perhaps the most pleasant time to visit, with mild temperatures, clear
            skies, and wildflowers blooming across the landscape. The countryside is at its most verdant during this
            season.
          </li>
          <li>
            <strong>Summer (June-September):</strong> Temperatures can be quite hot, often exceeding 35°C (95°F). If
            visiting in summer, come early in the morning or late in the afternoon to avoid the midday heat.
          </li>
          <li>
            <strong>Autumn (October-November):</strong> Another excellent time to visit, with comfortable temperatures
            and fewer tourists. The light takes on a golden quality that's particularly beautiful for photography.
          </li>
          <li>
            <strong>Winter (December-February):</strong> The coolest and sometimes rainy season, but with the advantage
            of very few other visitors. On clear winter days, the visibility can be exceptional, offering the most
            dramatic views of the surrounding countries.
          </li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
          <p className="font-medium text-amber-800">
            <span className="font-bold">VISITOR TIP:</span> Regardless of the season, aim to visit Umm Qais in the late
            afternoon if possible. This timing allows you to explore the ruins in softer light and stay for the
            spectacular sunset over the Sea of Galilee—a truly magical experience that shouldn't be missed.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">What to Bring</h3>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Sun Protection:</strong> Hat, sunglasses, and sunscreen are essential, especially in summer months.
          </li>
          <li>
            <strong>Water:</strong> Bring plenty of drinking water, particularly during hot weather.
          </li>
          <li>
            <strong>Comfortable Shoes:</strong> The site is extensive and the terrain can be uneven in places.
          </li>
          <li>
            <strong>Camera:</strong> You'll want to capture the spectacular views and unique architecture.
          </li>
          <li>
            <strong>Light Jacket:</strong> Even in summer, evenings can be cool due to the elevated location.
          </li>
          <li>
            <strong>Binoculars:</strong> Useful for appreciating the distant views of the Sea of Galilee and surrounding
            countries.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">The Historical Significance of Umm Qais</h2>

        <p>
          To truly appreciate Umm Qais, it helps to understand its rich historical context. Founded as Gadara in the 4th
          century BC during the Hellenistic period, the city rose to prominence as a cultural and intellectual center,
          sometimes called "the Athens of the East." It was home to several notable philosophers, poets, and
          mathematicians whose works influenced the ancient world.
        </p>

        <p>
          In 63 BC, Gadara came under Roman control when Pompey conquered the region. As one of the cities of the
          Decapolis—a league of ten semi-autonomous Greco-Roman cities in the eastern Roman Empire—Gadara flourished,
          developing the impressive urban infrastructure whose remains we see today. The city's strategic location on
          major trade routes contributed to its prosperity.
        </p>

        <p>
          For Biblical scholars, Umm Qais holds special interest as it is believed to be the setting for the miracle of
          the Gadarene swine, described in the Gospels (Matthew 8:28-34), where Jesus is said to have cast demons out of
          two men into a herd of pigs, which then ran down the steep hillside into the Sea of Galilee.
        </p>

        <p>
          The Byzantine period saw the city's conversion to Christianity and the construction of several churches.
          Later, during the Islamic era, Gadara's importance gradually declined. The Ottoman period brought new
          construction, with a village established among the ancient ruins. This layering of historical
          periods—Hellenistic, Roman, Byzantine, Islamic, and Ottoman—makes Umm Qais a fascinating palimpsest of Middle
          Eastern history.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">Conclusion: Why Umm Qais Deserves Your Time</h2>

        <p>
          While it may not have the international fame of Petra or the grandeur of Jerash, Umm Qais offers visitors
          something equally valuable: an authentic encounter with Jordan's rich history in a setting of extraordinary
          natural beauty. The relative lack of crowds allows for a more contemplative experience, where you can truly
          connect with the past and appreciate the strategic importance of this hilltop city that has witnessed
          thousands of years of human history.
        </p>

        <p>
          The combination of well-preserved ruins, breathtaking views across three countries, delicious local cuisine,
          and the unique black basalt architecture makes Umm Qais a standout destination that rewards those who venture
          to Jordan's northern reaches. Whether you're a history enthusiast, a photography lover, or simply seeking to
          experience the less-traveled paths of Jordan, Umm Qais promises a memorable addition to your itinerary.
        </p>

        <p>
          As you stand at the panoramic viewpoint watching the sun set over the Sea of Galilee, with the ancient columns
          silhouetted against the golden sky, you'll understand why this remarkable place has captivated visitors for
          centuries—and why it deserves a prominent place on your Jordan travel itinerary.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Explore More of Northern Jordan</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/destinations/jerash/jerash-blog/top-things-to-do-jerash"
                className="text-blue-600 hover:underline"
              >
                Top Things to See and Do in Jerash
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/ajloun/ajloun-blog/ajloun-castle-complete-guide"
                className="text-blue-600 hover:underline"
              >
                Exploring Ajloun Castle: A Complete Guide
              </Link>
            </li>
            <li>
              <Link href="/travel-tips/northern-jordan-itinerary" className="text-blue-600 hover:underline">
                Northern Jordan Itinerary: Jerash, Ajloun, and Umm Qais
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
