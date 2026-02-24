import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustBarSection } from "@/components/trust-bar-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { UrgencyBanner } from "@/components/urgency-banner"
import { AgitateSection } from "@/components/agitate-section"
import { OfferSection } from "@/components/offer-section"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { MissionSection } from "@/components/mission-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBarSection />
        <TestimonialsSection />
        <PainPointsSection />
        <UrgencyBanner />
        <AgitateSection />
        <OfferSection />
        <ProcessSection />
        <WhyUsSection />
        <MissionSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
