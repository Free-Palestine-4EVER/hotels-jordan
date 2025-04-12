import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Jordan Explorer</h1>

        <div className="prose prose-lg max-w-none">
          <Image
            src="/images/about/about-us-team.jpg"
            alt="About Us"
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p>
            Welcome to Jordan Explorer, your comprehensive guide to exploring the wonders of Jordan. Our mission is to
            provide travelers with detailed, accurate, and inspiring information about this remarkable country in the
            heart of the Middle East.
          </p>

          <h2>Our Story</h2>
          <p>
            Jordan Explorer was created by a team of travel enthusiasts who fell in love with Jordan's rich history,
            stunning landscapes, and warm hospitality. After multiple trips exploring every corner of this beautiful
            country, we decided to share our knowledge and experiences to help other travelers plan their perfect Jordan
            adventure.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>Detailed guides to Jordan's most iconic destinations</li>
            <li>Practical travel tips and advice</li>
            <li>Suggested itineraries for different trip durations</li>
            <li>Cultural insights and historical context</li>
            <li>Accommodation recommendations for all budgets</li>
            <li>Transportation information and guidance</li>
          </ul>

          <h2>Why Jordan?</h2>
          <p>
            Jordan offers a remarkable travel experience that combines ancient wonders, breathtaking natural landscapes,
            and rich cultural heritage. From the rose-red city of Petra to the otherworldly deserts of Wadi Rum, the
            healing waters of the Dead Sea, and the vibrant streets of Amman, Jordan captivates visitors with its
            diversity and beauty.
          </p>
          <p>
            Despite being in a region often misunderstood by travelers, Jordan stands out as a safe, welcoming
            destination where visitors can experience authentic Middle Eastern culture and hospitality. We believe more
            people should discover the wonders of Jordan, and we're here to help make that happen.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us at
            <a href="mailto:info@jordanexplorer.com" className="text-teal-600 hover:text-teal-700 ml-1">
              info@jordanexplorer.com
            </a>
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/destinations"
              className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block"
            >
              Start Exploring Jordan
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
