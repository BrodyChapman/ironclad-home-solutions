import Image from "next/image"
import { Phone, MessageSquare, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Image
              src="/images/logo.png"
              alt="Ironclad Home Solutions logo"
              width={140}
              height={47}
              className="h-10 w-auto"
            />
            <p className="text-xs leading-relaxed text-primary-foreground/60">
              Ironclad Home Solutions buys homes directly from homeowners. We are
              not a real estate agency and we do not list properties. We are a
              cash buyer.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-primary-foreground">Contact Us</p>
            <a
              href="tel:8584329364"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4 shrink-0" />
              (858) 432-9364 — Call
            </a>
            <a
              href="sms:8584329364"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              (858) 432-9364 — Text
            </a>
            <a
              href="mailto:info@ironcladhomesolutions.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" />
              info@ironcladhomesolutions.com
            </a>
          </div>

          {/* Service area */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-primary-foreground">Service Area</p>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              San Diego County and surrounding areas. Not sure if we cover your
              location? Give us a call — we&apos;ll let you know right away.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-primary-foreground/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} Ironclad Home Solutions. All rights reserved.`}
          </p>
          <p className="text-xs text-primary-foreground/50">
            <a href="#" className="underline underline-offset-2 hover:text-primary-foreground/70">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
