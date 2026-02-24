import {
  AlertTriangle,
  Home,
  Wrench,
  Users,
  MapPin,
  HeartCrack,
  Weight,
} from "lucide-react"

const painPoints = [
  { icon: AlertTriangle, text: "Pre-foreclosure or falling behind on payments" },
  { icon: Home, text: "An inherited property you don\u2019t know what to do with" },
  { icon: Wrench, text: "Repairs or updates you just can\u2019t afford right now" },
  { icon: Users, text: "Problem tenants and rental headaches" },
  { icon: MapPin, text: "A relocation that doesn\u2019t leave room to wait" },
  { icon: HeartCrack, text: "Divorce or a major life transition" },
  { icon: Weight, text: "A property that\u2019s become more burden than asset" },
]

export function PainPointsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-secondary/60" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/pain-bg.jpg')] bg-cover bg-center opacity-10"
          role="img"
          aria-label="House in need of repair"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Who This Is For
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sound familiar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Most of the homeowners we work with aren\u2019t selling because things are going great. They\u2019re selling because life got complicated \u2014 and a traditional sale would only make things harder."}
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-card-foreground md:text-base">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-muted-foreground">
          {"Whatever the situation \u2014 we\u2019ve seen it, and we know how to help."}
        </p>
      </div>
    </section>
  )
}
