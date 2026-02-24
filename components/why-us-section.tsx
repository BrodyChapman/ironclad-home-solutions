import { ShieldCheck, Compass, DollarSign, Hammer, Clock } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "We\u2019re straightforward.",
    description:
      "Our offers are based on real data \u2014 local comps, property condition, and honest evaluation. No bait-and-switch numbers.",
  },
  {
    icon: Compass,
    title: "We guide you through every step.",
    description:
      "Especially if you\u2019re navigating something difficult, we make sure you always know where things stand.",
  },
  {
    icon: DollarSign,
    title: "We cover closing costs.",
    description:
      "No fees, no commissions, nothing hidden. The number we give you is the number you get.",
  },
  {
    icon: Hammer,
    title: "We\u2019ve handled complicated situations before.",
    description:
      "Tenant issues, inherited properties, title delays \u2014 we\u2019ve worked through all of it and know how to keep things moving.",
  },
  {
    icon: Clock,
    title: "Your timeline, not ours.",
    description: "We close when it works for you.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-secondary/60" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/trust-bg.jpg')] bg-cover bg-center opacity-8"
          role="img"
          aria-label="Handshake of trust"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Why Ironclad
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why homeowners choose Ironclad over the traditional process.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"We\u2019re not a big corporation with a call center. We\u2019re a local team that genuinely cares about how things turn out for the people we work with."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <r.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-bold text-card-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
