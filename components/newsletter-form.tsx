"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions/email"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        setErrorMessage(result.error || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <div>
      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-700">Thank you for subscribing to our newsletter!</p>
          <Button onClick={() => setStatus("idle")} className="mt-2 bg-green-600 hover:bg-green-700">
            Subscribe Another Email
          </Button>
        </div>
      ) : (
        <>
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-700">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="flex">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
