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

        <h1 className="text-4xl font-bold mb-4">How to Spend 48 Hours in Amman: The Perfect Itinerary</h1>

        <div className="text-gray-500 mb-6">January 22, 2025 • by Jordan Explorer Team</div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=800&text=Amman+Itinerary"
            alt="Amman Itinerary"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            With only 48 hours to explore Jordan's vibrant capital, you'll want to make every moment count. This
            carefully crafted itinerary will help you experience the best of Amman in just two days, balancing ancient
            history, local culture, and culinary delights. From the majestic Citadel to bustling souks and trendy
            neighborhoods, this guide ensures you'll leave with a true taste of what makes Amman special.
          </p>

          <h2>Day 1: Ancient History and Downtown Exploration</h2>

          <h3>8:00 AM - Breakfast at Hashem Restaurant</h3>
          <p>
            Start your Amman adventure with a traditional Jordanian breakfast at the legendary Hashem Restaurant in
            Downtown. This no-frills eatery is a local institution that has served everyone from locals to royalty. Try
            their famous falafel, hummus, and foul (fava bean stew), all served with fresh bread and mint tea. It's an
            authentic and affordable way to begin your day.
          </p>

          <h3>9:30 AM - Amman Citadel (Jabal al-Qal'a)</h3>
          <p>
            Head to the Citadel, perched on the highest hill in Amman, for panoramic views of the city and a journey
            through Jordan's ancient history. This archaeological site has been occupied since the Bronze Age and
            features ruins from multiple civilizations, including:
          </p>
          <ul>
            <li>The Temple of Hercules from the Roman period</li>
            <li>The Umayyad Palace complex from the 8th century</li>
            <li>A Byzantine church</li>
            <li>The Jordan Archaeological Museum with artifacts dating back thousands of years</li>
          </ul>
          <p>
            Spend about 2 hours exploring this remarkable site. Consider hiring a local guide at the entrance to enrich
            your understanding of the historical significance of the ruins.
          </p>

          <h3>12:00 PM - Roman Theater and Nymphaeum</h3>
          <p>
            Walk downhill from the Citadel to the impressive Roman Theater, a 6,000-seat amphitheater built during the
            2nd century CE. Climb to the top tier for excellent views and to appreciate the remarkable acoustics of this
            ancient venue. Afterward, visit the nearby Nymphaeum, a partially restored Roman public fountain complex
            that once served as a social gathering place.
          </p>

          <h3>1:30 PM - Lunch at Sufra Restaurant</h3>
          <p>
            Take a short taxi ride to Rainbow Street and enjoy lunch at Sufra, a restaurant housed in a beautiful
            heritage building with a lovely outdoor terrace. Their menu offers traditional Jordanian dishes with a
            refined touch. Try the mansaf (Jordan's national dish of lamb cooked in yogurt sauce) or the musakhan
            (roasted chicken with sumac and onions on taboon bread).
          </p>

          <h3>3:00 PM - Downtown Souk Exploration</h3>
          <p>
            Return to Downtown to explore the vibrant souks (markets). Wander through the gold souk to admire the
            craftsmanship, browse spice vendors with their colorful pyramids of aromatic spices, and shop for souvenirs
            in the various handicraft stores. Don't miss Al-Bukhariya Souk for traditional Jordanian items like
            embroidered dresses, keffiyeh scarves, and Dead Sea products.
          </p>

          <h3>5:00 PM - King Abdullah I Mosque</h3>
          <p>
            Visit the magnificent King Abdullah I Mosque with its stunning blue dome. This mosque welcomes non-Muslim
            visitors outside prayer times (modest dress required, and women should cover their hair). The interior can
            accommodate up to 7,000 worshippers and features beautiful Islamic calligraphy and architectural details.
          </p>

          <h3>6:30 PM - Sunset at Wild Jordan Center</h3>
          <p>
            Head to the Wild Jordan Center in time for sunset. This eco-friendly building offers spectacular views over
            Downtown Amman and the Citadel as the city begins to light up. Enjoy a coffee or fresh juice at their café,
            which supports Jordan's nature reserves, and browse their selection of handmade products from local
            communities.
          </p>

          <h3>8:00 PM - Dinner on Rainbow Street</h3>
          <p>
            Spend your evening on Rainbow Street, one of Amman's most charming thoroughfares. For dinner, try Rakwet
            Arab for traditional Arabic cuisine in a cozy setting, or Cantaloupe for more international fare with
            stunning city views. After dinner, take a leisurely stroll along the street, popping into art galleries,
            boutiques, and perhaps ending with dessert at one of the many cafés.
          </p>

          <h2>Day 2: Cultural Immersion and Modern Amman</h2>

          <h3>8:30 AM - Breakfast at Shams El Balad</h3>
          <p>
            Begin your second day at Shams El Balad, a farm-to-table café in Jabal Amman serving organic, locally
            sourced breakfast dishes. Try their makhlama (eggs with tomato and herbs), manakish (flatbread with za'atar
            or cheese), and fresh fruit juices. The café's beautiful courtyard setting makes for a peaceful start to the
            day.
          </p>

          <h3>10:00 AM - Jordan Museum</h3>
          <p>
            Visit the Jordan Museum, the largest museum in the country, housing an impressive collection of artifacts
            that tell the story of Jordan's history from prehistoric times to the present. Highlights include:
          </p>
          <ul>
            <li>Some of the Dead Sea Scrolls</li>
            <li>The 'Ain Ghazal statues (some of the oldest human figures ever discovered)</li>
            <li>Interactive exhibits on Jordanian culture and heritage</li>
          </ul>
          <p>
            The museum provides an excellent overview of Jordan's rich cultural heritage and is a perfect introduction
            before visiting other archaeological sites in the country.
          </p>

          <h3>12:30 PM - Jabal Al-Weibdeh Art Tour</h3>
          <p>
            Take a taxi to Jabal Al-Weibdeh, Amman's artistic and cultural hub. This charming neighborhood is home to
            numerous art galleries, cultural centers, and bohemian cafés. Visit the Jordan National Gallery of Fine Arts
            to see works by contemporary Arab and Islamic artists, then explore smaller galleries like Darat al Funun,
            housed in beautiful historic buildings with garden terraces.
          </p>

          <h3>2:00 PM - Lunch at Beit Sitti</h3>
          <p>
            For a unique lunch experience, head to Beit Sitti ("My Grandmother's House") in Jabal Al-Weibdeh. This
            culinary experience takes place in a traditional Jordanian home where you can learn to cook authentic local
            dishes under the guidance of local women. After preparing the meal together, enjoy the fruits of your labor
            on the lovely terrace. Advance booking is required.
          </p>
          <p>
            Alternatively, try Fakhreldin Restaurant for upscale Lebanese cuisine in a beautiful historic villa, or Joz
            Hind for creative, locally-inspired dishes in a cozy setting.
          </p>

          <h3>4:00 PM - Royal Automobile Museum</h3>
          <p>
            Take a taxi to the Royal Automobile Museum in the King Hussein Park. This fascinating museum houses the
            impressive collection of the late King Hussein, featuring vintage and classic cars as well as motorcycles
            that tell the story of Jordan's modern history through the royal family's vehicles. Even if you're not a car
            enthusiast, the collection offers interesting insights into Jordan's 20th-century history.
          </p>

          <h3>6:00 PM - Shopping at Abdali Boulevard</h3>
          <p>
            Experience modern Amman at Abdali Boulevard, an upscale open-air complex with shops, restaurants, and cafés.
            This pedestrian-friendly area represents the new face of Amman and is perfect for some leisurely shopping or
            people-watching at one of the outdoor cafés. The boulevard comes alive in the evening as locals come out to
            socialize and enjoy the cooler temperatures.
          </p>

          <h3>8:00 PM - Dinner at Fakhr El-Din</h3>
          <p>
            For your final dinner in Amman, treat yourself to a meal at Fakhr El-Din, one of the city's finest
            restaurants housed in a beautiful converted villa. Their menu features exquisite Levantine cuisine with an
            emphasis on Lebanese dishes. The extensive mezze selection allows you to sample a wide variety of flavors,
            and their grilled meats and seafood are exceptional. Make a reservation in advance, and request a table in
            the garden during warmer months.
          </p>

          <h3>10:00 PM - Nightcap with a View</h3>
          <p>
            End your 48 hours in Amman with a nightcap at one of the city's rooftop venues. The W Amman's Aura Lounge
            offers spectacular panoramic views of the twinkling city lights, as does the rooftop bar at the Amman Rotana
            Hotel. For a more local experience, try District or Copas Central on Rainbow Street, where you can reflect
            on your Amman adventure while enjoying the night breeze and city vistas.
          </p>

          <h2>Practical Tips for Your 48 Hours in Amman</h2>

          <h3>Getting Around</h3>
          <ul>
            <li>
              <strong>Taxis</strong>: Yellow taxis are abundant and affordable. Ensure the driver uses the meter or
              agree on a price beforehand.
            </li>
            <li>
              <strong>Ride-sharing apps</strong>: Uber and Careem operate in Amman and are often more convenient than
              traditional taxis.
            </li>
            <li>
              <strong>Walking</strong>: Some neighborhoods like Rainbow Street and parts of Downtown are best explored
              on foot, but be prepared for Amman's hilly terrain.
            </li>
          </ul>

          <h3>Money-Saving Tips</h3>
          <ul>
            <li>
              <strong>Jordan Pass</strong>: If you're continuing to other destinations in Jordan (like Petra), purchase
              a Jordan Pass before arrival, which includes your tourist visa and entry to many attractions.
            </li>
            <li>
              <strong>Meal timing</strong>: Lunch menus are often less expensive than dinner at the same restaurants.
            </li>
            <li>
              <strong>Bargaining</strong>: Gentle negotiation is expected in souks and with taxi drivers (if not using
              the meter).
            </li>
          </ul>

          <h3>Cultural Considerations</h3>
          <ul>
            <li>
              <strong>Dress modestly</strong>: Especially when visiting religious sites or more conservative areas like
              Downtown.
            </li>
            <li>
              <strong>Ramadan</strong>: If visiting during the holy month, be respectful by not eating, drinking, or
              smoking in public during daylight hours.
            </li>
            <li>
              <strong>Photography</strong>: Ask permission before photographing people, especially women.
            </li>
          </ul>

          <p>
            With this 48-hour itinerary, you'll experience the highlights of Amman while gaining insight into both its
            ancient history and contemporary culture. The city serves as an excellent introduction to Jordan before
            exploring other destinations like Petra, Wadi Rum, or the Dead Sea. Even with just two days, you'll discover
            why Amman is much more than just a gateway city—it's a fascinating destination in its own right.
          </p>
        </div>
      </div>
    </div>
  )
}
