"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Ironclad Home Solutions logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#how-it-works" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground">
            How It Works
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground">
            Why Us
          </Link>
          <Link href="#faq" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground">
            FAQ
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="tel:8584329364" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              <a href="sms:8584329364" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Text
              </a>
            </Button>
          </div>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#how-it-works" className="text-sm font-medium text-primary-foreground/70" onClick={() => setMobileOpen(false)}>
              How It Works
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-primary-foreground/70" onClick={() => setMobileOpen(false)}>
              Why Us
            </Link>
            <Link href="#faq" className="text-sm font-medium text-primary-foreground/70" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>
            <div className="flex gap-2">
              <Button asChild size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <a href="tel:8584329364" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                <a href="sms:8584329364" className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Text Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
