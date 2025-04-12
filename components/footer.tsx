import Link from "next/link"
import NewsletterFormClient from "./newsletter-form-client"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Hotels Jordan</h3>
            <p className="text-gray-600 mb-4">
              Your comprehensive guide to exploring the wonders of Jordan, from ancient Petra to the Dead Sea.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/petra" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Petra
                </Link>
              </li>
              <li>
                <Link href="/destinations/wadi-rum" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Wadi Rum
                </Link>
              </li>
              <li>
                <Link href="/destinations/dead-sea" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Dead Sea
                </Link>
              </li>
              <li>
                <Link href="/destinations/amman" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Amman
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-teal-600 transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Travel Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/travel-tips/best-time-to-visit"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  Best Time to Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-tips/getting-around"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  Getting Around
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/travel-tips/food" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Food & Cuisine
                </Link>
              </li>
              <li>
                <Link href="/travel-tips/safety" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Get the latest travel tips and destination guides for Jordan in your inbox.
            </p>
            <NewsletterFormClient />
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Hotels Jordan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
