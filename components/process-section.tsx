import { ClipboardList, Clock, CalendarCheck, Banknote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Tell us about your property",
    description:
      "Fill out a quick form or give us a call. No commitment, no pressure.",
  },
  {
    icon: Clock,
    step: "Step 2",
    title: "Get your cash offer within 24 hours",
    description:
      "We look at the property, the local market, and the real numbers \u2014 then come back to you fast with a fair offer.",
  },
  {
    icon: CalendarCheck,
    step: "Step 3",
    title: "Pick your closing date",
    description:
      "If the offer works for you, Ironclad handles everything \u2014 paperwork, logistics, all of it. You choose when you want to close.",
  },
  {
    icon: Banknote,
    step: "Step 4",
    title: "Get paid and move on",
    description:
      "No surprises. No hidden fees. Just a smooth close and cash in your hands.",
  },
]

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Seriously, it\u2019s this simple."}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Card key={i} className="border-border/60 bg-card shadow-sm">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {s.step}
                </p>
                <h3 className="text-lg font-bold text-card-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
