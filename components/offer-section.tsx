import { Button } from "@/components/ui/button"
import { Phone, Check } from "lucide-react"

const benefits = [
  "We buy your home exactly as it is \u2014 no repairs, no cleaning, no prep work",
  "No agent fees or commissions \u2014 what we offer is what you get",
  "No open houses or strangers walking through your home",
  "You pick the closing date \u2014 we work around your timeline",
  "Close in as little as 30 days \u2014 sometimes faster",
]

export function OfferSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-primary" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/offer-bg.jpg')] bg-cover bg-center opacity-20"
          role="img"
          aria-label="Family moving into a new home"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            The Ironclad Offer
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Sell your home as-is. Walk away with cash. Move forward.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            {"Here\u2019s what working with Ironclad Home Solutions actually looks like:"}
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-xl flex-col gap-4">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                <Check className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <span className="text-sm leading-relaxed text-primary-foreground/90 md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-xl text-center text-base text-primary-foreground/80">
          We take the burden off your plate so you can focus on what comes next.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="tel:8584329364" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now: (858) 432-9364
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
