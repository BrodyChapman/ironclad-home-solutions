import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-primary" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"
          role="img"
          aria-label="Happy homeowner"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to see what your home is worth?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          {"There\u2019s no cost, no obligation, and no pressure. Just fill out the form and we\u2019ll get back to you with a cash offer within 24 hours."}
        </p>
        <p className="mt-2 text-sm text-primary-foreground/60">
          It takes 60 seconds — and it could be the easiest decision you make
          all year.
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
