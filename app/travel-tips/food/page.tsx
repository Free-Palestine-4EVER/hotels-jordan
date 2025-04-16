import Link from "next/link"
import Image from "next/image"

export default function FoodCuisinePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Food & Cuisine in Jordan</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/jordanian-cuisine-guide.jpg"
          alt="Jordanian Cuisine"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction to Jordanian Cuisine</h2>
        <p>
          Jordanian cuisine is a delicious reflection of the country's history, geography, and cultural influences.
          Drawing from Bedouin traditions, Palestinian heritage, and broader Levantine culinary practices, Jordanian
          food is characterized by aromatic spices, fresh ingredients, and generous hospitality.
        </p>
        <p>
          Food in Jordan is more than just sustenance—it's a social experience and an expression of the country's famous
          hospitality. Meals are typically shared, with multiple dishes placed in the center of the table for everyone
          to enjoy together.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Must-try dishes:</strong> Mansaf, maqluba, mezze, knafeh
            </li>
            <li>
              <strong>Dining customs:</strong> Communal eating, generous portions
            </li>
            <li>
              <strong>Meal times:</strong> Lunch (main meal) 2-4pm, dinner 8-10pm
            </li>
            <li>
              <strong>Budget:</strong> Street food (JD1-3), mid-range restaurants (JD7-15 per person)
            </li>
            <li>
              <strong>Dietary restrictions:</strong> Vegetarian options widely available, halal standard
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Essential Jordanian Dishes</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">National Dishes</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mansaf</h4>
        <p>
          Jordan's national dish and a symbol of Bedouin hospitality, mansaf consists of lamb cooked in a fermented
          dried yogurt sauce called jameed, served over a bed of aromatic rice and topped with nuts. Traditionally eaten
          communally with the right hand, mansaf is often served at celebrations and special occasions.
        </p>
        <p>
          <strong>Where to try it:</strong> Tawaheen Al-Hawa in Amman, Reem Al-Bawadi, or at a local home invitation
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Maqluba</h4>
        <p>
          Literally meaning "upside-down," maqluba is a layered dish of rice, vegetables (typically eggplant,
          cauliflower, and potatoes), and meat (chicken or lamb). It's cooked in a pot that is flipped upside down when
          served, creating a dramatic presentation. Often garnished with pine nuts and served with yogurt.
        </p>
        <p>
          <strong>Where to try it:</strong> Sufra Restaurant on Rainbow Street in Amman
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Zarb</h4>
        <p>
          A traditional Bedouin barbecue where meat and vegetables are slow-cooked in an underground pit. This ancient
          cooking method is especially popular in Wadi Rum, where many desert camps prepare zarb for their guests.
        </p>
        <p>
          <strong>Where to try it:</strong> Bedouin camps in Wadi Rum
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Mezze</h3>
        <p>
          Mezze refers to a selection of small dishes served as appetizers or as a meal in itself. Jordanian meals often
          begin with an assortment of mezze, which might include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Hummus:</strong> Creamy chickpea and tahini dip
          </li>
          <li>
            <strong>Moutabel:</strong> Smoky eggplant dip with tahini
          </li>
          <li>
            <strong>Tabbouleh:</strong> Parsley salad with bulgur, tomatoes, and mint
          </li>
          <li>
            <strong>Fattoush:</strong> Fresh vegetable salad with toasted pita bread
          </li>
          <li>
            <strong>Labneh:</strong> Strained yogurt, often served with olive oil and za'atar
          </li>
          <li>
            <strong>Falafel:</strong> Deep-fried chickpea patties
          </li>
          <li>
            <strong>Kibbeh: </strong> Bulgur shells stuffed with spiced meat and pine nuts
          </li>
          <li>
            <strong>Warak Enab:</strong> Stuffed vine leaves with rice and herbs
          </li>
        </ul>

        <p>
          <strong>Where to try it:</strong> Hashem Restaurant in downtown Amman (a local institution), Sufra, or Fakhr
          El-Din
        </p>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            When ordering mezze, start with a few dishes and order more as needed. Jordanians tend to order generously,
            and you might be surprised by the portion sizes!
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Main Dishes</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Musakhan</h4>
        <p>
          Roasted chicken served on taboon bread that has been topped with sumac, sautéed onions, and pine nuts. The
          bread absorbs the flavorful chicken juices, creating a delicious combination.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Kofta</h4>
        <p>
          Grilled skewers of ground meat (usually lamb or beef) mixed with herbs and spices. Often served with rice,
          salad, and tahini sauce.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Shish Tawook</h4>
        <p>
          Marinated chicken skewers grilled to perfection. The marinade typically includes yogurt, lemon, and garlic,
          resulting in tender and flavorful meat.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Sayadieh</h4>
        <p>
          A coastal dish of fish (typically sea bass) served on a bed of spiced rice with caramelized onions and tahini
          sauce. More common in Aqaba.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Freekeh</h4>
        <p>
          A nutritious grain dish made from young green wheat that has been roasted. Often prepared with chicken or meat
          and flavored with cinnamon, allspice, and other aromatic spices.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Street Food</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Shawarma</h4>
        <p>
          Thinly sliced meat (chicken or beef) that has been roasted on a vertical spit, served in bread with tahini
          sauce, pickles, and vegetables. A popular quick meal throughout Jordan.
        </p>
        <p>
          <strong>Where to try it:</strong> Reem Shawarma in Amman's 2nd Circle or Shawarma Reem in downtown
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Falafel</h4>
        <p>
          Deep-fried patties made from ground chickpeas, herbs, and spices. Usually served in pita bread with tahini
          sauce, tomatoes, and pickles.
        </p>
        <p>
          <strong>Where to try it:</strong> Al-Quds or Hashem Restaurant in downtown Amman
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Manakish</h4>
        <p>
          A flatbread topped with za'atar (a blend of thyme, sesame seeds, and sumac), cheese, or ground meat. Often
          eaten for breakfast or as a snack.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Arayes</h4>
        <p>Pita bread stuffed with seasoned ground meat and grilled until crispy. A delicious handheld meal.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desserts</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Knafeh</h4>
        <p>
          A beloved dessert made of shredded phyllo dough or semolina, layered with cheese, soaked in sweet syrup, and
          topped with crushed pistachios. The contrast between the sweet syrup and slightly salty cheese creates a
          unique flavor profile.
        </p>
        <p>
          <strong>Where to try it:</strong> Habibah Sweets in downtown Amman
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Baklava</h4>
        <p>
          Layers of phyllo dough filled with chopped nuts and sweetened with syrup or honey. Available in various shapes
          and variations.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Qatayef</h4>
        <p>
          Sweet dumplings filled with cheese or nuts, then fried or baked and soaked in syrup. Especially popular during
          Ramadan.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Meghli</h4>
        <p>A spiced rice pudding topped with nuts, traditionally served to celebrate a new baby.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Beverages</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Arabic Coffee (Qahwa)</h4>
        <p>
          A symbol of Bedouin hospitality, Arabic coffee is lightly roasted and flavored with cardamom. Served in small
          cups without handles, often accompanied by dates.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Mint Tea</h4>
        <p>Fresh mint leaves steeped with tea and sweetened with sugar. Commonly offered as a welcome drink.</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Fresh Juices</h4>
        <p>
          Jordan offers excellent fresh fruit juices, including sugar cane juice, pomegranate, orange, and lemon with
          mint (limonana).
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Arak</h4>
        <p>
          An anise-flavored spirit similar to ouzo or raki. When mixed with water, it turns cloudy white. The most
          common alcoholic beverage in Jordan.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Regional Specialties</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Amman and Northern Jordan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mansaf:</strong> Most authentic in the northern regions
          </li>
          <li>
            <strong>Kousa Mahshi:</strong> Stuffed zucchini with rice and meat
          </li>
          <li>
            <strong>Shish Barak:</strong> Meat dumplings in yogurt sauce
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Petra and Central Jordan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Galayet Bandora:</strong> Tomato stew with olive oil and garlic
          </li>
          <li>
            <strong>Zarb:</strong> Underground barbecue
          </li>
          <li>
            <strong>Maqluba:</strong> Popular throughout central Jordan
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Wadi Rum and Southern Desert</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Zarb:</strong> The traditional Bedouin barbecue
          </li>
          <li>
            <strong>Arbood:</strong> Bedouin bread baked in ashes
          </li>
          <li>
            <strong>Jameed soup:</strong> Made from the same fermented yogurt used in mansaf
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Aqaba (Red Sea)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Sayadieh:</strong> Fish with spiced rice
          </li>
          <li>
            <strong>Grilled fish:</strong> Fresh catches from the Red Sea
          </li>
          <li>
            <strong>Seafood platters:</strong> Influenced by coastal cuisine
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dining Customs and Etiquette</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Meal Times</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Breakfast (Iftar):</strong> 7-10am, often includes hummus, falafel, labneh, olives, and flatbread
          </li>
          <li>
            <strong>Lunch (Ghada):</strong> The main meal of the day, typically between 2-4pm
          </li>
          <li>
            <strong>Dinner (Asha):</strong> Usually lighter than lunch, served between 8-10pm
          </li>
          <li>
            <strong>Restaurants:</strong> Often open late, with peak dinner hours around 9pm
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Hospitality Customs</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refusing food or drink can be considered impolite; it's better to accept at least a small amount</li>
          <li>Hosts will often insist you take more food ("Tfaddal/i" - "Please help yourself")</li>
          <li>It's customary to leave a little food on your plate to show you've had enough</li>
          <li>Complimenting the food is appreciated ("Sahtain" - "Two healths" is a way to say "enjoy your meal")</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Eating Etiquette</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>If eating with hands (as with mansaf), use only your right hand</li>
          <li>When sharing communal dishes, take from the portion closest to you</li>
          <li>Wait for elders or hosts to begin eating before you start</li>
          <li>It's polite to try a bit of everything offered</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            If invited to a Jordanian home for a meal, bringing a small gift like sweets or fruit is appreciated. Avoid
            bringing alcohol unless you're certain your hosts drink.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dietary Considerations</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Vegetarian and Vegan Options</h3>
        <p>Jordan is quite vegetarian-friendly, with many mezze dishes naturally meat-free:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hummus, moutabel, tabbouleh, fattoush, and many salads are vegan</li>
          <li>Falafel and foul (fava beans) provide protein-rich options</li>
          <li>Specify "bidoon lahem" (without meat) when ordering</li>
          <li>Be aware that some rice dishes might be cooked in meat stock</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Halal Food</h3>
        <p>
          As a predominantly Muslim country, most food in Jordan is halal by default. Alcohol is available in
          international hotels, some restaurants, and licensed liquor stores.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Gluten-Free Options</h3>
        <p>Gluten-free dining requires more planning:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Rice-based dishes like maqluba can be good options</li>
          <li>Many mezze like hummus and moutabel are naturally gluten-free</li>
          <li>Be cautious of cross-contamination in kitchens</li>
          <li>Consider carrying translation cards explaining your dietary needs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Where to Eat in Jordan</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Amman</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Traditional Experiences</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Hashem Restaurant:</strong> Iconic eatery serving excellent falafel and hummus
          </li>
          <li>
            <strong>Sufra:</strong> Traditional Jordanian cuisine in a beautiful heritage house on Rainbow Street
          </li>
          <li>
            <strong>Fakhr El-Din:</strong> Upscale Lebanese and Jordanian cuisine in a historic villa
          </li>
          <li>
            <strong>Al Quds:</strong> Famous for its falafel and hummus
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Modern Dining</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Jasmine House:</strong> Contemporary Levantine cuisine
          </li>
          <li>
            <strong>Fakhreldin:</strong> Elegant Lebanese restaurant in a historic setting
          </li>
          <li>
            <strong>Wild Jordan Center:</strong> Eco-friendly café with panoramic views
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Petra (Wadi Musa)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>The Basin Restaurant:</strong> Located inside Petra, good for lunch during sightseeing
          </li>
          <li>
            <strong>My Mom's Recipe Restaurant:</strong> Authentic home-style Jordanian food
          </li>
          <li>
            <strong>Al Qantarah:</strong> Traditional dishes with a view
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Wadi Rum</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Bedouin Camps:</strong> Most camps offer traditional zarb dinners
          </li>
          <li>
            <strong>Captain's Desert Camp:</strong> Known for excellent Bedouin cuisine
          </li>
          <li>
            <strong>Wadi Rum Night Luxury Camp:</strong> Upscale dining in the desert
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Aqaba</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Ali Baba Restaurant:</strong> Fresh seafood with Red Sea views
          </li>
          <li>
            <strong>Royal Yacht Club:</strong> Upscale dining with marina views
          </li>
          <li>
            <strong>Fish Fish:</strong> Local favorite for seafood
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Dead Sea</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Ashur Pizza & Grill:</strong> Casual dining with Dead Sea views
          </li>
          <li>
            <strong>Resort Restaurants:</strong> Most Dead Sea resorts have good restaurants
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Food Experiences and Activities</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Cooking Classes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Beit Sitti:</strong> "Grandmother's House" cooking school in Amman
          </li>
          <li>
            <strong>Petra Kitchen:</strong> Learn to make traditional dishes in Wadi Musa
          </li>
          <li>
            <strong>Feynan Ecolodge:</strong> Bread-making and traditional cooking demonstrations
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Food Tours</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Taste of Amman Food Tour:</strong> Explore downtown eateries
          </li>
          <li>
            <strong>Engaging Cultures Food Tours:</strong> Culinary walks through different neighborhoods
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Markets and Food Shopping</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Amman Souk:</strong> Downtown market for fresh produce and spices
          </li>
          <li>
            <strong>Sweifieh Spice Market:</strong> Excellent selection of local spices
          </li>
          <li>
            <strong>Jordan River Foundation:</strong> High-quality food products supporting local communities
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Food Souvenirs</h2>
        <p>Take home a taste of Jordan with these food souvenirs:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Za'atar:</strong> Thyme and sesame spice blend
          </li>
          <li>
            <strong>Jordanian olive oil:</strong> High-quality and distinctive
          </li>
          <li>
            <strong>Dates:</strong> Especially Medjool varieties
          </li>
          <li>
            <strong>Jameed:</strong> Dried yogurt balls used in mansaf (check import regulations)
          </li>
          <li>
            <strong>Jordanian honey:</strong> Often flavored with herbs
          </li>
          <li>
            <strong>Arabic coffee with cardamom:</strong> Pre-ground and ready to brew
          </li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            The best place to buy food souvenirs is at specialty shops like Jabri or Abu Seit in Amman, where products
            are properly packaged for travel. Avoid buying perishable items if you have a long journey home.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Budget and Costs</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Street Food and Budget Eats</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Falafel sandwich: JD0.5-1 ($0.70-1.40)</li>
          <li>Shawarma sandwich: JD1-2 ($1.40-2.80)</li>
          <li>Hummus plate: JD1-3 ($1.40-4.20)</li>
          <li>Manakish: JD0.5-1.5 ($0.70-2.10)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Mid-Range Restaurants</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mezze selection: JD10-15 ($14-21) for two people</li>
          <li>Main dish: JD5-10 ($7-14)</li>
          <li>Full meal with drinks: JD15-25 ($21-35) per person</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Upscale Dining</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fine dining restaurants: JD25-50+ ($35-70+) per person</li>
          <li>Hotel restaurants: JD20-40 ($28-56) per person</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Beverages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bottled water: JD0.25-1 ($0.35-1.40)</li>
          <li>Fresh juice: JD1-3 ($1.40-4.20)</li>
          <li>Coffee or tea: JD1-2 ($1.40-2.80)</li>
          <li>Local beer: JD3-5 ($4.20-7)</li>
          <li>Imported beer or wine: JD5-10 ($7-14)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Food Safety Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Drink bottled or filtered water</li>
          <li>Eat at busy restaurants with high turnover</li>
          <li>Fresh fruits and vegetables should be washed or peeled</li>
          <li>Street food is generally safe if it's cooked fresh and hot</li>
          <li>Carry hand sanitizer for before meals</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/travel-tips/cultural-etiquette"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Cultural Etiquette</h3>
            <p className="text-sm text-gray-600">Dining customs and social norms</p>
          </Link>
          <Link
            href="/travel-tips/accommodation"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Accommodation Guide</h3>
            <p className="text-sm text-gray-600">Hotels with notable restaurants</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
