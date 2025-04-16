"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { sendContactFormEmail } from "@/app/actions/email"

export function PlanningForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    guestNumber: "2",
    daysToStay: "7",
    travelPreference: "standard",
    message: "",
    submitted: false,
    error: false,
    errorMessage: "",
    isSubmitting: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState((prev) => ({ ...prev, isSubmitting: true }))

    try {
      const result = await sendContactFormEmail({
        name: formState.name,
        email: formState.email,
        phoneNumber: formState.phoneNumber,
        guestNumber: formState.guestNumber,
        daysToStay: formState.daysToStay,
        travelPreference: formState.travelPreference,
        message: formState.message,
      })

      if (result.success) {
        setFormState({
          name: "",
          email: "",
          phoneNumber: "",
          guestNumber: "2",
          daysToStay: "7",
          travelPreference: "standard",
          message: "",
          submitted: true,
          error: false,
          errorMessage: "",
          isSubmitting: false,
        })
      } else {
        setFormState((prev) => ({
          ...prev,
          error: true,
          errorMessage: result.error || "Failed to send message. Please try again.",
          isSubmitting: false,
        }))
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        error: true,
        errorMessage: "An unexpected error occurred. Please try again.",
        isSubmitting: false,
      }))
    }
  }

  if (formState.submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your travel planning request has been sent successfully. We'll get back to you soon with a personalized
          itinerary.
        </p>
        <Button
          onClick={() =>
            setFormState({
              name: "",
              email: "",
              phoneNumber: "",
              guestNumber: "2",
              daysToStay: "7",
              travelPreference: "standard",
              message: "",
              submitted: false,
              error: false,
              errorMessage: "",
              isSubmitting: false,
            })
          }
          className="mt-4 bg-green-600 hover:bg-green-700"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Plan Your Jordan Trip</h3>
      <p className="text-gray-600 mb-4">
        Fill out this form and our travel experts will help you create the perfect itinerary.
      </p>

      {formState.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-700">{formState.errorMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={formState.phoneNumber}
            onChange={(e) => setFormState({ ...formState, phoneNumber: e.target.value })}
            placeholder="+1 (123) 456-7890"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="guestNumber">Number of Guests</Label>
            <Input
              id="guestNumber"
              type="number"
              min="1"
              max="20"
              value={formState.guestNumber}
              onChange={(e) => setFormState({ ...formState, guestNumber: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="daysToStay">Days to Stay</Label>
            <Input
              id="daysToStay"
              type="number"
              min="1"
              max="30"
              value={formState.daysToStay}
              onChange={(e) => setFormState({ ...formState, daysToStay: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <Label className="block mb-2">Travel Preference</Label>
          <RadioGroup
            value={formState.travelPreference}
            onValueChange={(value) => setFormState({ ...formState, travelPreference: value })}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="planning-standard" />
              <Label htmlFor="planning-standard" className="cursor-pointer">
                Standard
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="luxury" id="planning-luxury" />
              <Label htmlFor="planning-luxury" className="cursor-pointer">
                Luxury
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="message">Message to Host</Label>
          <Textarea
            id="message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            placeholder="Tell us about your travel plans, interests, and any specific places you'd like to visit in Jordan..."
            rows={4}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
          {formState.isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  )
}
