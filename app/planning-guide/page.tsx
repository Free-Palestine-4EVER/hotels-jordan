import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export const metadata = {
  title: "Jordan Travel Planning Guide | Plan Your Perfect Trip",
  description:
    "Get personalized help planning your Jordan trip. Our travel experts can help you create the perfect itinerary based on your interests and budget.",
}

export default function PlanningGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Jordan Travel Planning Guide</h1>

        <Image
          src="/images/planning/jordan-planning-guide.jpg"
          alt="Jordan Planning Guide"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8"
        />

        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-4">
            Planning a trip to Jordan can be overwhelming with so many incredible places to visit and experiences to
            have. Let our travel experts help you create the perfect itinerary tailored to your interests, time
            constraints, and budget.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Plan Your Jordan Trip With Us?</h2>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Personalized itineraries based on your interests (history, adventure, culture, or relaxation)</li>
            <li>Expert advice on the best time to visit each destination</li>
            <li>Insider tips on hidden gems and authentic experiences</li>
            <li>Recommendations for accommodations that fit your budget</li>
            <li>Transportation guidance and logistics planning</li>
            <li>Assistance with booking tours and activities</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Jordan Itineraries</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">Classic Jordan (7 Days)</h3>
              <p>
                Perfect for first-time visitors who want to see the highlights: Amman, Jerash, Dead Sea, Petra, and Wadi
                Rum.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">Adventure Jordan (10 Days)</h3>
              <p>
                For active travelers: hiking in Dana Biosphere Reserve, canyoning in Wadi Mujib, camping in Wadi Rum,
                and diving in Aqaba.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">Historic Jordan (5 Days)</h3>
              <p>
                Focus on Jordan's rich history with visits to ancient Roman cities, biblical sites, and the legendary
                city of Petra.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">Jordan & Beyond (14 Days)</h3>
              <p>
                Comprehensive itinerary that includes Jordan's highlights plus connections to neighboring countries like
                Israel or Egypt.
              </p>
            </div>
          </div>

          <p className="text-lg">
            Ready to start planning your dream trip to Jordan? Fill out the form below with your travel preferences, and
            one of our travel specialists will get back to you with a customized itinerary suggestion.
          </p>
        </div>

        <div className="mb-12">
          <ContactForm
            title="Plan Your Jordan Adventure"
            subtitle="Tell us about your travel plans, preferences, and any special interests. We'll help you create the perfect Jordan itinerary."
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Travel Planning FAQs</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">How far in advance should I plan my trip to Jordan?</h3>
              <p className="text-gray-700">
                We recommend planning at least 3-6 months in advance, especially if you're traveling during peak season
                (March-May or September-November).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">How many days do I need in Jordan?</h3>
              <p className="text-gray-700">
                A minimum of 5-7 days is recommended to see the main highlights. For a more comprehensive experience,
                10-14 days is ideal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">Is it expensive to travel in Jordan?</h3>
              <p className="text-gray-700">
                Jordan can be explored on various budgets. While some attractions have high entrance fees (especially
                Petra), there are many ways to manage costs with proper planning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">Do I need a visa to visit Jordan?</h3>
              <p className="text-gray-700">
                Most nationalities require a visa, which can be obtained on arrival or in advance. The Jordan Pass
                includes your visa fee and entrance to many attractions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
