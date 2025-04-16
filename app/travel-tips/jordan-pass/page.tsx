import Link from "next/link"
import Image from "next/image"

export default function JordanPassPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/travel-tips" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
          ← Back to Travel Tips
        </Link>
        <h1 className="text-4xl font-bold mb-4">Jordan Pass Guide</h1>
        <div className="border-b-2 border-teal-500 w-20 mb-6"></div>
      </div>

      <div className="prose max-w-none">
        <Image
          src="/images/travel-tips/jordan-pass-guide.jpg"
          alt="Jordan Pass Guide"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">What is the Jordan Pass?</h2>
        <p>
          The Jordan Pass is an all-in-one prepaid package designed to enhance your experience in Jordan. It combines
          the visitor entry visa fee and entrance fees to over 40 attractions across Jordan, including the world-famous
          archaeological site of Petra, into one convenient document.
        </p>
        <p>
          Introduced by the Ministry of Tourism and Antiquities in collaboration with the Jordan Tourism Board, the
          Jordan Pass aims to encourage tourists to explore more of Jordan's attractions while saving money and time.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Quick Summary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cost:</strong> JD70-80 ($99-113) depending on package
            </li>
            <li>
              <strong>Includes:</strong> Tourist visa waiver + 40+ attractions
            </li>
            <li>
              <strong>Validity:</strong> 2 weeks from first use
            </li>
            <li>
              <strong>Visa benefit:</strong> Must stay minimum 3 nights (4 days)
            </li>
            <li>
              <strong>Purchase:</strong> Online before arrival in Jordan
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of the Jordan Pass</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Cost Savings</h3>
        <p>The most significant benefit of the Jordan Pass is the potential for substantial cost savings:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Visa fee waiver:</strong> JD40 ($56) saved on entry visa
          </li>
          <li>
            <strong>Petra entrance:</strong> JD50-60 ($70-85) for one-day entry
          </li>
          <li>
            <strong>Other attractions:</strong> JD3-10 ($4-14) per site
          </li>
        </ul>
        <p>
          Even if you only visit Petra and two other attractions, the Jordan Pass already pays for itself. For most
          travelers, the savings can be JD50-100 ($70-140) or more.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Convenience</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Skip ticket lines at major attractions</li>
          <li>No need to carry cash for entrance fees</li>
          <li>Streamlined entry process at sites</li>
          <li>Digital pass can be stored on your smartphone</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Visa Benefits</h3>
        <p>The Jordan Pass waives the tourist entry visa fee (JD40) for non-restricted nationalities, provided you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Purchase the pass before arriving in Jordan</li>
          <li>Stay a minimum of 3 consecutive nights (4 days) in Jordan</li>
          <li>Present your Jordan Pass at immigration upon arrival</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2">Important Note</h3>
          <p>
            If you stay less than 3 nights in Jordan, you will need to pay the visa fee at departure. The visa waiver
            benefit does not apply to restricted nationalities that require a pre-approved visa.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Jordan Pass Packages</h2>
        <p>
          The Jordan Pass comes in three different packages, varying only in the number of days included for visiting
          Petra:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Package</th>
                <th className="border border-gray-300 p-3 text-left">Petra Access</th>
                <th className="border border-gray-300 p-3 text-left">Price</th>
                <th className="border border-gray-300 p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Jordan Wanderer</td>
                <td className="border border-gray-300 p-3">1 day</td>
                <td className="border border-gray-300 p-3">JD70 ($99)</td>
                <td className="border border-gray-300 p-3">Short trips, quick visit to Petra</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Jordan Explorer</td>
                <td className="border border-gray-300 p-3">2 days</td>
                <td className="border border-gray-300 p-3">JD75 ($106)</td>
                <td className="border border-gray-300 p-3">Most travelers, thorough Petra visit</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Jordan Expert</td>
                <td className="border border-gray-300 p-3">3 days</td>
                <td className="border border-gray-300 p-3">JD80 ($113)</td>
                <td className="border border-gray-300 p-3">In-depth exploration of Petra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          All packages include the same benefits for other attractions; they differ only in the number of consecutive
          days you can visit Petra.
        </p>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            For most travelers, the Jordan Explorer (2-day Petra) package offers the best value. Petra is vast, and
            having a second day allows you to explore areas like the Monastery, High Place of Sacrifice, or hike to
            viewpoints that you might miss on a single day.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Attractions Included in the Jordan Pass</h2>
        <p>
          The Jordan Pass covers entry to over 40 attractions across the country. Here are some of the most notable
          sites included:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Major Sites</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Petra:</strong> The iconic ancient city (1, 2, or 3 days depending on your package)
          </li>
          <li>
            <strong>Jerash:</strong> One of the best-preserved Roman cities in the world
          </li>
          <li>
            <strong>Wadi Rum:</strong> Protected desert wilderness (entry only, activities not included)
          </li>
          <li>
            <strong>Amman Citadel:</strong> Historical site in the capital with panoramic views
          </li>
          <li>
            <strong>Roman Theater:</strong> Well-preserved ancient theater in downtown Amman
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Religious and Historical Sites</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mount Nebo:</strong> Where Moses viewed the Promised Land
          </li>
          <li>
            <strong>Madaba:</strong> Famous for its Byzantine mosaics
          </li>
          <li>
            <strong>Bethany Beyond the Jordan:</strong> Jesus' baptism site (partial discount only)
          </li>
          <li>
            <strong>Ajloun Castle:</strong> 12th-century Muslim castle
          </li>
          <li>
            <strong>Karak Castle:</strong> Impressive Crusader fortress
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desert Castles and Nature Reserves</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Qasr Amra, Qasr Kharana, Qasr al-Hallabat:</strong> Umayyad desert castles
          </li>
          <li>
            <strong>Azraq Wetland Reserve:</strong> Oasis in the eastern desert
          </li>
          <li>
            <strong>Shobak Castle:</strong> Remote Crusader fortress
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Museums</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Jordan Museum:</strong> National museum in Amman
          </li>
          <li>
            <strong>Jordan Archaeological Museum:</strong> Located at the Amman Citadel
          </li>
          <li>
            <strong>Folklore Museum:</strong> In downtown Amman
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What's NOT Included</h2>
        <p>While the Jordan Pass covers many attractions, there are some notable exclusions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dead Sea beaches:</strong> Public and private beach access fees
          </li>
          <li>
            <strong>Petra by Night:</strong> Evening show at Petra (JD17)
          </li>
          <li>
            <strong>Wadi Rum tours:</strong> Only the entry fee is covered, not jeep tours or camping
          </li>
          <li>
            <strong>Transportation:</strong> The pass does not include any transportation
          </li>
          <li>
            <strong>Guide services:</strong> Professional guides at sites are not included
          </li>
          <li>
            <strong>Aqaba Marine Park:</strong> Snorkeling and diving areas
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to Purchase the Jordan Pass</h2>
        <p>The Jordan Pass must be purchased online before arriving in Jordan to benefit from the visa waiver:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Visit the official website:{" "}
            <a
              href="https://www.jordanpass.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800"
            >
              www.jordanpass.jo
            </a>
          </li>
          <li>Select your preferred package (Wanderer, Explorer, or Expert)</li>
          <li>Create an account and provide your passport information</li>
          <li>Pay by credit card (Visa or MasterCard)</li>
          <li>Download your digital pass or save the confirmation email</li>
          <li>Print a copy or keep the digital version on your smartphone</li>
        </ol>

        <div className="bg-teal-50 p-6 rounded-lg my-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>
            Purchase your Jordan Pass at least 3 days before your arrival to ensure processing time. After purchase,
            you'll receive a PDF with a QR code that will be scanned at each attraction.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Using Your Jordan Pass</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">At Immigration</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Present your passport and Jordan Pass (digital or printed)</li>
          <li>The immigration officer will stamp your passport with a tourist visa</li>
          <li>No payment is required if you meet the minimum stay requirement</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">At Attractions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Present your Jordan Pass at the ticket office or entrance</li>
          <li>Staff will scan the QR code or check the pass details</li>
          <li>Each site can only be visited once with the pass</li>
          <li>For Petra, your consecutive days must be used together</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Validity Period</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>The Jordan Pass is valid for 12 months from the date of purchase</li>
          <li>Once activated at the first attraction, it remains valid for 2 weeks</li>
          <li>The Petra component must be used on consecutive days</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Is the Jordan Pass Worth It?</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">When the Jordan Pass IS Worth It</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>You're staying 3+ nights in Jordan</li>
          <li>You're planning to visit Petra</li>
          <li>You'll visit at least 2-3 other attractions</li>
          <li>You need a tourist visa on arrival</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">When the Jordan Pass May NOT Be Worth It</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>You're staying less than 3 nights in Jordan</li>
          <li>You're not visiting Petra</li>
          <li>You're a Jordanian resident or citizen</li>
          <li>You're from a nationality that requires a pre-approved visa</li>
          <li>You're under 12 years old (children enter most sites for free)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Cost Comparison Example</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Expense</th>
                <th className="border border-gray-300 p-3 text-left">Without Jordan Pass</th>
                <th className="border border-gray-300 p-3 text-left">With Jordan Pass (Explorer)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Tourist Visa</td>
                <td className="border border-gray-300 p-3">JD40 ($56)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Petra (2 days)</td>
                <td className="border border-gray-300 p-3">JD55 + JD5 = JD60 ($85)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Jerash</td>
                <td className="border border-gray-300 p-3">JD10 ($14)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Wadi Rum (entry)</td>
                <td className="border border-gray-300 p-3">JD5 ($7)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Amman Citadel</td>
                <td className="border border-gray-300 p-3">JD3 ($4)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Karak Castle</td>
                <td className="border border-gray-300 p-3">JD2 ($3)</td>
                <td className="border border-gray-300 p-3">Included</td>
              </tr>
              <tr className="font-bold">
                <td className="border border-gray-300 p-3">Total</td>
                <td className="border border-gray-300 p-3">JD120 ($169)</td>
                <td className="border border-gray-300 p-3">JD75 ($106)</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 p-3">Savings</td>
                <td className="border border-gray-300 p-3">-</td>
                <td className="border border-gray-300 p-3">JD45 ($63)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Can I buy the Jordan Pass upon arrival?</h3>
        <p>
          No, the Jordan Pass must be purchased online before arriving in Jordan to benefit from the visa waiver. It
          cannot be purchased at the airport or border crossings.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">How do I use the Jordan Pass for the visa waiver?</h3>
        <p>
          Present your Jordan Pass (printed or digital) along with your passport at immigration upon arrival. The
          officer will stamp your passport with a tourist visa at no additional cost.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Do children need a Jordan Pass?</h3>
        <p>
          Children under 12 years old can enter most tourist sites for free and typically receive a free visa when
          traveling with parents. Therefore, they usually don't need a Jordan Pass.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Can I visit Petra multiple times with the Jordan Pass?</h3>
        <p>
          Yes, but only on consecutive days according to your package (1, 2, or 3 days). You cannot split these days
          throughout your trip.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">What if I stay less than 3 nights in Jordan?</h3>
        <p>
          If you stay less than 3 consecutive nights (4 days), you will need to pay the visa fee (JD40) at the airport
          or border when departing. The Jordan Pass will still cover your attraction entries.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Can I share my Jordan Pass with someone else?</h3>
        <p>
          No, the Jordan Pass is personal and non-transferable. It's linked to your passport number and cannot be shared
          or transferred to another person.
        </p>

        <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold mb-2">Final Tip</h3>
          <p>
            For the vast majority of visitors planning to see Petra and staying at least 3 nights in Jordan, the Jordan
            Pass offers excellent value and convenience. It simplifies your travel experience while providing
            significant cost savings.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/travel-tips/getting-around"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Getting Around Jordan</h3>
            <p className="text-sm text-gray-600">Transportation options for your journey</p>
          </Link>
          <Link
            href="/travel-tips/best-time-to-visit"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Best Time to Visit</h3>
            <p className="text-sm text-gray-600">Plan your trip during the ideal season</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
