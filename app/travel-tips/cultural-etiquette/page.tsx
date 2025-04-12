import Link from "next/link"
import Image from "next/image"

export default function CulturalEtiquettePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Cultural Etiquette in Jordan</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/cultural-etiquette-jordan.jpg"
          alt="Cultural Etiquette in Jordan"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Jordanian Culture</h2>
        <p>
          Jordan is a country where traditional values and modern influences coexist harmoniously. Jordanian society is
          built on strong family ties, religious traditions, and a deep sense of hospitality. Understanding and
          respecting local customs will not only help you avoid unintentional offense but will also enrich your travel
          experience and open doors to meaningful cultural exchanges.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Greetings:</strong> Handshakes, "As-salamu alaykum" (Peace be upon you)
            </li>
            <li>
              <strong>Dress code:</strong> Conservative, covering shoulders and knees
            </li>
            <li>
              <strong>Religious respect:</strong> Modest dress at religious sites, remove shoes at mosques
            </li>
            <li>
              <strong>Hospitality:</strong> Accept offered food/drink, remove shoes in homes
            </li>
            <li>
              <strong>Photography:</strong> Ask permission before photographing people
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Greetings and Social Interactions</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Common Greetings</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>As-salamu alaykum</strong> (Peace be upon you) - A common greeting
          </li>
          <li>
            <strong>Wa alaykum as-salam</strong> (And upon you be peace) - The response
          </li>
          <li>
            <strong>Marhaba</strong> (Hello) - A casual greeting
          </li>
          <li>
            <strong>Ahlan wa sahlan</strong> (Welcome) - Often used to greet visitors
          </li>
          <li>
            <strong>Sabah al-khayr</strong> (Good morning) - Used until noon
          </li>
          <li>
            <strong>Masa al-khayr</strong> (Good evening) - Used after noon
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Physical Greetings</h3>
        <p>Jordanians typically greet each other with a handshake, though there are some gender considerations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Men shake hands with other men</li>
          <li>Women shake hands with other women</li>
          <li>Between genders, wait for the woman to extend her hand first</li>
          <li>Some conservative Muslim women may not shake hands with men</li>
          <li>Close friends may greet with kisses on the cheek (usually right-left-right)</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            If someone places their hand over their heart after greeting you instead of extending it for a handshake,
            respond in kind. This is a respectful alternative to physical contact.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Conversation Etiquette</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Jordanians often ask about your family, health, and journey as a sign of care</li>
          <li>It's polite to inquire about their family and well-being in return</li>
          <li>Avoid rushing straight to business or practical matters</li>
          <li>Small talk is an important social lubricant</li>
          <li>Maintain eye contact during conversation as a sign of sincerity</li>
          <li>Speaking a few words of Arabic is greatly appreciated</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Space and Physical Contact</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Same-gender friends may stand or sit closer than in Western cultures</li>
          <li>Men may hold hands or walk arm in arm as a sign of friendship (not romantic)</li>
          <li>Public displays of affection between couples are inappropriate</li>
          <li>Maintain more distance between genders in conservative areas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dress Code and Modesty</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">General Guidelines</h3>
        <p>
          Jordan is relatively moderate compared to some neighboring countries, but modest dress is still appreciated,
          especially outside tourist areas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cover shoulders and knees (both men and women)</li>
          <li>Avoid tight-fitting or revealing clothing</li>
          <li>Loose, lightweight fabrics are practical and culturally appropriate</li>
          <li>Long pants for men are preferable to shorts in most settings</li>
          <li>Women should avoid low-cut tops and very short skirts/shorts</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Regional Variations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Amman:</strong> More relaxed in upscale areas like Abdoun and Sweifieh
          </li>
          <li>
            <strong>Tourist sites:</strong> Standards are more relaxed but still conservative
          </li>
          <li>
            <strong>Rural areas:</strong> More conservative dress is expected
          </li>
          <li>
            <strong>Dead Sea/Aqaba resorts:</strong> Western swimwear is acceptable at pools and private beaches
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Religious Sites</h3>
        <p>When visiting mosques or religious sites, stricter dress codes apply:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Women should cover their hair with a scarf</li>
          <li>Both men and women should cover arms and legs completely</li>
          <li>Remove shoes before entering prayer areas</li>
          <li>Some mosques provide robes or scarves for visitors</li>
          <li>Avoid visiting during prayer times unless participating</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dining Etiquette</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">General Table Manners</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use your right hand for eating and passing food</li>
          <li>The left hand is traditionally considered unclean</li>
          <li>Wait for the host or eldest person to begin eating</li>
          <li>It's polite to try everything offered</li>
          <li>Compliment the food and thank the host</li>
          <li>Leave a small amount of food on your plate to show you're satisfied</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Traditional Meals</h3>
        <p>When invited to a Jordanian home or participating in a traditional meal:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may be seated on floor cushions around a communal platter</li>
          <li>For mansaf (the national dish), eat from the portion directly in front of you</li>
          <li>Expect to be offered seconds (and thirds) - a polite refusal may require several attempts</li>
          <li>Bringing a small gift (sweets, fruit) is appreciated when visiting homes</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Coffee and Tea Customs</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Arabic coffee (qahwa) is a symbol of hospitality</li>
          <li>It's polite to accept at least one cup</li>
          <li>Hold the cup with your right hand</li>
          <li>When finished, wiggle the cup slightly when returning it</li>
          <li>Tea is also commonly offered and is typically very sweet</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Religious Customs</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Respecting Islam</h3>
        <p>Islam is the predominant religion in Jordan, and respecting religious customs is important:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be aware of the five daily prayer times</li>
          <li>Avoid eating, drinking, or smoking in public during Ramadan daylight hours</li>
          <li>Speak quietly near mosques, especially during prayer times</li>
          <li>Avoid religious debates or criticism</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Visiting Mosques</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Many mosques welcome non-Muslim visitors outside prayer times</li>
          <li>Remove shoes before entering prayer areas</li>
          <li>Women should cover their hair, arms, and legs</li>
          <li>Men should wear long pants and sleeved shirts</li>
          <li>Ask permission before taking photographs</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ramadan Etiquette</h3>
        <p>If visiting during the holy month of Ramadan:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Avoid eating, drinking, or smoking in public during daylight hours</li>
          <li>Dress more conservatively than usual</li>
          <li>Be aware that business hours may be shortened</li>
          <li>Restaurants in tourist areas may remain open during the day</li>
          <li>Expect increased activity and festive atmosphere after sunset</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Photography and Public Behavior</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Photography Etiquette</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always ask permission before photographing people, especially women and children</li>
          <li>Avoid photographing military installations or government buildings</li>
          <li>Some religious sites restrict photography or charge a fee</li>
          <li>In Bedouin communities, some people may request a small payment for photographs</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Public Behavior</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Public displays of affection are inappropriate</li>
          <li>Avoid loud or boisterous behavior in public</li>
          <li>Drinking alcohol in public places is not acceptable</li>
          <li>Public intoxication is strongly frowned upon</li>
          <li>Respect quiet hours, especially in residential areas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Business Etiquette</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Meeting Customs</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Relationships are important in Jordanian business culture</li>
          <li>Meetings often begin with small talk and refreshments</li>
          <li>Business cards should be presented and received with the right hand</li>
          <li>Punctuality is appreciated but not always strictly observed</li>
          <li>Decisions may take longer than in Western business cultures</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Business Attire</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Conservative business attire is expected</li>
          <li>Men typically wear suits or dress shirts with slacks</li>
          <li>Women should choose modest business attire</li>
          <li>Avoid revealing clothing in professional settings</li>
        </ul>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Final Advice</h3>
          <p>
            Jordanians are generally understanding of cultural differences and forgiving of minor faux pas by visitors.
            When in doubt, observe local behavior and follow suit. A respectful attitude and willingness to learn about
            local customs will be appreciated and enhance your experience in Jordan.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link href="/travel-tips/food" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-semibold mb-1">Food & Cuisine</h3>
            <p className="text-sm text-gray-600">Jordanian dining customs and traditional dishes</p>
          </Link>
          <Link
            href="/travel-tips/packing-guide"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Packing Guide</h3>
            <p className="text-sm text-gray-600">What to wear in different settings</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
