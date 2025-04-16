"use client"

import type React from "react"

import { useState } from "react"

export default function NewsletterFormClient() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const { subscribeToNewsletter } = await import("@/app/actions/email")
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setStatus("success")
        setMessage("Thank you for subscribing!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.error || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      console.error("Error subscribing:", error)
      setStatus("error")
      setMessage("An error occurred. Please try again later.")
    }
  }

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors disabled:opacity-70"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && <p className="text-green-600 text-sm">{message}</p>}
      {status === "error" && <p className="text-red-600 text-sm">{message}</p>}
    </form>
  )
}
