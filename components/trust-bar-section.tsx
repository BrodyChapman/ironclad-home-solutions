const stats = [
  { value: "100+", label: "Homes Purchased" },
  { value: "24 hrs", label: "Cash Offer Turnaround" },
  { value: "7 Days", label: "Fastest Close Available" },
  { value: "$0", label: "Fees or Commissions" },
]

export function TrustBarSection() {
  return (
    <section className="border-b border-border bg-accent/10 py-6">
      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <dt className="text-2xl font-bold text-accent md:text-3xl">{stat.value}</dt>
              <dd className="text-sm font-medium text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
