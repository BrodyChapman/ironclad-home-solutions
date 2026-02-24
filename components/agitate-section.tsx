import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, X, Check } from "lucide-react"

const traditionalProblems = [
  "Months of waiting for showings",
  "Expensive repair requests from buyers",
  "Agent commissions eating into your payout",
  "Endless paperwork and negotiations",
]

const comparison = [
  { label: "Time to Close",       traditional: "60–90 days",       ironclad: "As fast as 7 days" },
  { label: "Repairs Required",    traditional: "Usually required",  ironclad: "None — sell as-is" },
  { label: "Agent Commissions",   traditional: "5–6% of sale",      ironclad: "Zero fees" },
  { label: "Certainty of Close",  traditional: "Uncertain",         ironclad: "Guaranteed cash offer" },
  { label: "Closing Date",        traditional: "Buyer's schedule",  ironclad: "You choose" },
  { label: "Home Showings",       traditional: "Multiple required", ironclad: "None" },
]

export function AgitateSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left — image placeholder */}
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl bg-muted lg:flex-1">
            <div
              className="absolute inset-0 bg-[url('/images/agitate-bg.jpg')] bg-cover bg-center"
              role="img"
              aria-label="Stressful home-selling experience"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/60">
              <p className="text-sm font-medium text-background">Background Image Placeholder</p>
            </div>
          </div>

          {/* Right — copy */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why Not the Traditional Route?
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"The traditional route isn\u2019t built for situations like yours."}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {"Listing with an agent means months of waiting, endless showings, repair requests from buyers, and commissions cutting into what you actually walk away with. When you\u2019re already under pressure, that process adds stress \u2014 not relief."}
            </p>

            <ul className="flex flex-col gap-3">
              {traditionalProblems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-card-foreground">
                  <X className="h-4 w-4 shrink-0 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-foreground">
              {"There\u2019s a better way."}
            </p>

            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:8584329364" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="sms:8584329364" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-16">
          <h3 className="mb-6 text-center font-serif text-xl font-bold text-foreground md:text-2xl">
            See the Difference at a Glance
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground"></th>
                  <th className="px-4 py-3 text-center font-semibold text-destructive">Traditional Agent</th>
                  <th className="px-4 py-3 text-center font-semibold text-accent">Ironclad Home Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 odd:bg-card even:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">
                      <span className="flex items-center justify-center gap-1.5">
                        <X className="h-3.5 w-3.5 shrink-0 text-destructive" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-foreground">
                      <span className="flex items-center justify-center gap-1.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                        {row.ironclad}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
