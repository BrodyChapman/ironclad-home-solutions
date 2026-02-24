"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MessageSquare, Loader2, CheckCircle } from "lucide-react"

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Submission failed")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please call or text us directly at (858) 432-9364.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="get-offer" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"
          role="img"
          aria-label="Suburban home exterior"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:py-28 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: Copy */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:pt-8">
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {"Life doesn\u2019t always give you time to wait."}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            Ironclad Home Solutions buys houses in your market — fast, fair, and
            without the headaches. No listings. No repairs. No agents. Just a
            straightforward cash offer and a team that actually has your back.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="tel:8584329364" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call (858) 432-9364
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              <a href="sms:8584329364" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Send a Text
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Lead capture form */}
        <div className="w-full max-w-md rounded-xl border-t-4 border-accent bg-card p-8 shadow-xl">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <CheckCircle className="h-12 w-12 text-accent" />
              <h2 className="text-xl font-bold text-card-foreground">
                {"We\u2019ve got your request!"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {"We\u2019ll reach out within 24 hours with your cash offer. In a hurry? Call or text us at "}
                <a href="tel:8584329364" className="font-semibold text-accent">
                  (858) 432-9364
                </a>
                .
              </p>
            </div>
          ) : (
            <>
              <h2 className="mb-1 text-xl font-bold text-card-foreground">
                Get Your Free Cash Offer
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                No obligation. Takes 60 seconds.
              </p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="fullName" className="text-sm font-medium text-card-foreground">Full Name</Label>
                  <Input id="fullName" name="fullName" placeholder="John Smith" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(858) 555-0123" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="address" className="text-sm font-medium text-card-foreground">Property Address</Label>
                  <Input id="address" name="address" placeholder="123 Main St, Anytown, USA" required />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Get My Free Cash Offer"
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  {"We\u2019ll get back to you within 24 hours."}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
