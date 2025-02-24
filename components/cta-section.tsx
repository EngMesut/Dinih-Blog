import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CtaSection() {
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
          Join ambitious professionals and unlock your dream career today
        </h2>
        <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and
          aspirations
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <Input type="email" placeholder="Your mail address" className="bg-white" />
          <Button className="bg-primary hover:bg-primary/90 text-white w-48">Join Us</Button>
        </div>
      </div>
    </section>
  )
}

