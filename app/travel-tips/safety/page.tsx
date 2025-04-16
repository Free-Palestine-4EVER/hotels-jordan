import { redirect } from "next/navigation"

export default function SafetyRedirectPage() {
  redirect("/travel-tips/safety-tips")
}
