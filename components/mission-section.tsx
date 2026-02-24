export function MissionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left — image placeholder */}
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl bg-muted lg:flex-1">
            <div
              className="absolute inset-0 bg-[url('/images/mission-bg.jpg')] bg-cover bg-center"
              role="img"
              aria-label="Ironclad Home Solutions team"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/60">
              <p className="text-sm font-medium text-background">Background Image Placeholder</p>
            </div>
          </div>

          {/* Right — copy */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Mission
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our mission is pretty simple, honestly.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We started Ironclad Home Solutions because we saw how broken and
              stressful the traditional home sale process was for people already
              going through hard times. Nobody should have to navigate months of
              showings and negotiations when they{"\u2019"}re already dealing with
              financial pressure, a difficult property, or a major life change.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              So we built a better way. One that{"\u2019"}s fast, honest, and
              actually supportive — from the first conversation to the day you
              get paid.
            </p>
            <p className="text-base font-medium text-foreground">
              We believe every homeowner deserves a fair offer, clear
              communication, and a team that treats them with respect — no matter
              what the situation looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
