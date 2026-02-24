import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is this legitimate? How do I know Ironclad is a real company?",
    a: "Absolutely. Ironclad Home Solutions is a local cash home-buying company serving homeowners in our market. We've purchased 100+ properties and have real sellers who can speak to their experience. You can call or text us anytime at (858) 432-9364 — a real person picks up.",
  },
  {
    q: "Will I get a fair price for my home?",
    a: "Our offers are based on the current market value of your property in its current condition, minus repair costs and holding costs. We're transparent about how we arrive at our number. There's no obligation — if the offer doesn't work for you, you walk away with zero pressure.",
  },
  {
    q: "What if I still have a mortgage or liens on the property?",
    a: "No problem. We deal with mortgages, back taxes, liens, and other title issues regularly. We handle the complexity so you don't have to. Just let us know your situation and we'll work through it with you.",
  },
  {
    q: "How fast can you actually close?",
    a: "In many cases we can close in as little as 7 days. If you need more time to move or sort things out, we can accommodate that too. You pick the closing date that works for you.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy all kinds — single-family homes, multi-family, condos, inherited properties, rentals with difficult tenants, homes with major repairs or code violations, and more. Condition doesn't matter. We buy as-is.",
  },
  {
    q: "Is there any cost or obligation to get an offer?",
    a: "Zero. Getting a cash offer from us is completely free and comes with no obligation whatsoever. If you like the offer, great. If not, no hard feelings — we part as friends.",
  },
  {
    q: "Do I need to clean out or repair the house before selling?",
    a: "Not at all. Leave what you don't want behind. We buy as-is, which means you don't spend a dime on repairs, cleaning, staging, or anything else. Just take what matters to you and go.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Got Questions?
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"If you don\u2019t see your question here, call or text us at "}
            <a href="tel:8584329364" className="font-semibold text-accent">
              (858) 432-9364
            </a>
            {" \u2014 we\u2019re happy to talk through your situation."}
          </p>
        </div>
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
