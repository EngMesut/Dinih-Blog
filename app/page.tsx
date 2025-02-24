import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DiscoverSection } from "@/components/discover-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#fafafa]">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

