import Image from "next/image"
import { PlanningForm } from "@/components/planning-form"

export const metadata = {
  title: "Planning Guide | Hotels Jordan",
  description: "Plan your perfect Jordan trip with our comprehensive planning guide and personalized assistance.",
}

export default function PlanningGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tailor Your Perfect Jordan Experience</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Hotels Jordan, we specialize in creating customized itineraries that match your interests, budget, and
            travel style. Let us help you discover the best of Jordan your way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">How We Tailor Your Experience</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-teal-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Personalized Itineraries</h3>
                  <p className="text-gray-600">
                    We create custom travel plans based on your specific interests, whether it's history, adventure,
                    relaxation, or cultural experiences. No generic tours - just experiences tailored to you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-700"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Handpicked Accommodations</h3>
                  <p className="text-gray-600">
                    We select the perfect hotels and accommodations that match your preferences and budget, from luxury
                    resorts to authentic boutique experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-700"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Optimized Budgeting</h3>
                  <p className="text-gray-600">
                    We help you make the most of your budget, suggesting the best value options and insider tips to
                    maximize your experience without unnecessary expenses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-700"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Time-Optimized Routes</h3>
                  <p className="text-gray-600">
                    We plan logical routes that minimize travel time and maximize your experiences, ensuring you don't
                    waste precious vacation days on unnecessary travel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Experiences We Can Arrange</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Private Tours",
                  description: "Exclusive guided experiences with knowledgeable local experts",
                  image: "/placeholder.svg?height=200&width=300&text=Private+Tours",
                },
                {
                  title: "Desert Camping",
                  description: "Authentic Bedouin experiences under the stars in Wadi Rum",
                  image: "/placeholder.svg?height=200&width=300&text=Desert+Camping",
                },
                {
                  title: "Luxury Stays",
                  description: "Premium accommodations with exceptional service and amenities",
                  image: "/placeholder.svg?height=200&width=300&text=Luxury+Stays",
                },
                {
                  title: "Cultural Immersion",
                  description: "Authentic local experiences from cooking classes to village visits",
                  image: "/placeholder.svg?height=200&width=300&text=Cultural+Immersion",
                },
              ].map((theme, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{theme.title}</h3>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Start Planning Your Tailored Jordan Experience</h2>
          <p className="text-center mb-8 text-gray-600">
            Fill out the form below with your travel preferences, and our team will create a personalized itinerary just
            for you. We'll contact you within 24 hours to discuss your dream Jordan trip.
          </p>
          <PlanningForm />
        </div>
      </div>
    </div>
  )
}
