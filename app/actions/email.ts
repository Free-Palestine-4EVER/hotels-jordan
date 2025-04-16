"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// In production, this would come from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Email address to receive all form submissions
const RECIPIENT_EMAIL = "infohotelsjordan@gmail.com"

// Contact form submission email
export async function sendContactFormEmail(formData: {
  name: string
  email: string
  phoneNumber: string
  guestNumber: string
  daysToStay: string
  travelPreference: string
  message: string
}) {
  try {
    const { name, email, phoneNumber, guestNumber, daysToStay, travelPreference, message } = formData

    const { data, error } = await resend.emails.send({
      from: "Jordan Travel <onboarding@resend.dev>", // Using Resend's default domain
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phoneNumber}
Number of Guests: ${guestNumber}
Days to Stay: ${daysToStay}
Travel Preference: ${travelPreference}
Message:
${message}
      `,
      // You could also use HTML for a nicer email
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber}</p>
<p><strong>Number of Guests:</strong> ${guestNumber}</p>
<p><strong>Days to Stay:</strong> ${daysToStay}</p>
<p><strong>Travel Preference:</strong> ${travelPreference}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactFormEmail:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

// Newsletter subscription email
export async function subscribeToNewsletter(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Jordan Travel <onboarding@resend.dev>", // Using Resend's default domain
      to: RECIPIENT_EMAIL,
      subject: "New Newsletter Subscription",
      text: `New newsletter subscription from: ${email}`,
      html: `
<h2>New Newsletter Subscription</h2>
<p>A new user has subscribed to your newsletter:</p>
<p><strong>Email:</strong> ${email}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in subscribeToNewsletter:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
