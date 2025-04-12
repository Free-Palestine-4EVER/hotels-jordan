import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import DestinationSlider from "./destinations-slider"
import BlogPostsSlider from "./blog-posts-slider"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image src="/images/hero/jordan-landscape.jpg" alt="Jordan landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover the Wonders of Jordan</h1>
              <p className="text-xl text-white/90 mb-8">
                From the ancient city of Petra to the otherworldly landscapes of Wadi Rum and the healing waters of the
                Dead Sea
              </p>
              <Link
                href="/destinations"
                className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-block"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Top Destinations in Jordan</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore Jordan's most iconic attractions, from ancient wonders to natural landscapes
          </p>

          {/* Replace grid with slider */}
          <DestinationSlider />

          <div className="text-center mt-8">
            <Link href="/destinations" className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
              View All Destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* Most Read Blog Posts */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Most Read Blog Posts</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover our readers' favorite articles about traveling in Jordan
          </p>

          <BlogPostsSlider />

          <div className="text-center mt-8">
            <Link href="/blog" className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
              View All Blog Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Explore Jordan by Region</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover the diverse landscapes and attractions across different parts of Jordan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jordanData.regions.map((region) => (
              <Link key={region.slug} href={`/regions/${region.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{region.description}</p>
                    <span className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                      Explore Region →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Essential Travel Tips</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Everything you need to know to plan your perfect Jordan adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Time to Visit",
                excerpt: "Learn about Jordan's seasons and when to visit for ideal weather and fewer crowds.",
                image: "/images/travel-tips/seasons-jordan.jpg",
                slug: "best-time-to-visit",
              },
              {
                title: "Getting Around",
                excerpt: "Transportation options in Jordan, from rental cars to public transit and guided tours.",
                image: "/images/travel-tips/transportation-jordan.jpg",
                slug: "getting-around",
              },
              {
                title: "Cultural Etiquette",
                excerpt: "Tips for respectful travel in Jordan, including customs, dress codes, and social norms.",
                image: "/images/travel-tips/cultural-etiquette-jordan.jpg",
                slug: "cultural-etiquette",
              },
            ].map((tip, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src={tip.image || "/placeholder.svg"}
                  alt={tip.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.excerpt}</p>
                  <Link
                    href={`/travel-tips/${tip.slug}`}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jordan Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Visit Jordan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ancient Wonders",
                description: "Explore archaeological treasures spanning thousands of years of human history",
              },
              {
                title: "Natural Beauty",
                description: "Experience diverse landscapes from desert canyons to lush valleys and coastal reefs",
              },
              {
                title: "Warm Hospitality",
                description: "Enjoy the legendary Jordanian welcome and traditional Bedouin culture",
              },
              {
                title: "Culinary Delights",
                description: "Savor authentic Middle Eastern cuisine with unique Jordanian specialties",
              },
            ].map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Jordan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start planning your journey to one of the world's most fascinating destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="bg-white text-teal-700 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              Browse Destinations
            </Link>
            <Link
              href="/planning-guide"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors inline-block"
            >
              Planning Guide
            </Link>
          </div>
        </div>
      </section>

      {/* DiscoverCars.com Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `<a href="https://www.discovercars.com/?a_aid=MMC&amp;a_bid=f29909e9" target="_top"><img src="//discover-car-hire.postaffiliatepro.com/accounts/default1/bunyh71e/f29909e9.jpg" alt="DiscoverCars.com" title="DiscoverCars.com" width="728" height="90" /></a><img style="border:0" src="https://discover-car-hire.postaffiliatepro.com/scripts/iunyh71e?a_aid=MMC&amp;a_bid=f29909e9" width="1" height="1" alt="" />`,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
