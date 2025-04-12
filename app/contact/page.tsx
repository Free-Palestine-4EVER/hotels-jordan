import type { Metadata } from "next"
import { PlanningForm } from "@/components/planning-form"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us | Jordan Travel Guide",
  description: "Get in touch with our travel experts for any questions about traveling in Jordan.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <Image
          src="/images/contact/contact-us-header.jpg"
          alt="Contact Us"
          width={1000}
          height={300}
          className="w-full h-auto rounded-lg mb-8"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Have questions about traveling in Jordan? Our team of local experts is here to help you plan the perfect
              trip.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-600">infohotelsjordan@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>+962 7 7742 4837</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p>Sunday - Thursday: 9:00 AM - 5:00 PM (Jordan Time)</p>
                <p>Friday - Saturday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <PlanningForm />
          </div>
        </div>
      </div>
    </div>
  )
}
