import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I didn\u2019t think selling could be this easy. The Ironclad team walked me through everything, never made me feel rushed, and I had cash in hand faster than I thought possible.",
    author: "Recent Seller",
  },
  {
    quote:
      "I was dealing with a really tough situation and honestly didn\u2019t know where to turn. Ironclad treated me like family, not just a transaction. Couldn\u2019t recommend them more.",
    author: "Recent Seller",
  },
  {
    quote:
      "Tenant problems, behind on payments, and a house that needed serious work \u2014 they handled all of it. I walked away with a fair price and zero stress.",
    author: "Recent Seller",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            What Real Sellers Are Saying
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Don\u2019t take our word for it."}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/60 bg-card shadow-sm">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-card-foreground">
                  {`\u201c${t.quote}\u201d`}
                </blockquote>
                <p className="mt-auto text-sm font-semibold text-muted-foreground">
                  {`\u2014 ${t.author}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
