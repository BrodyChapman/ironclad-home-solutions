import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UrgencyBanner() {
  return (
    <section className="bg-destructive/10 border-y border-destructive/20 py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-destructive">
              Facing a Deadline?
            </p>
            <p className="mt-1 text-base font-medium text-foreground">
              Foreclosure, tax liens, code violations, or any time-sensitive situation — we can close in as little as 7 days.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="tel:8584329364" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="font-semibold">
              <a href="sms:8584329364" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Text Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
