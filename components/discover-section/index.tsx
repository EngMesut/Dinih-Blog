import { CategoryIcons } from "./category-icons"
import { ProfileCards } from "./profile-cards"
import { Button } from "@/components/ui/button"

export function DiscoverSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-[#232323] mb-4">
          Discover the
          <br />
          Emerging Masters
        </h2>
        <p className="text-[#414d60]">
          Find the best master for your company and boost
          <br />
          your business 10x!
        </p>
      </div>

      <CategoryIcons />
      <ProfileCards />

      <div className="text-center mt-8">
        <Button variant="outline" className="gap-2">
          View All
          <span className="w-5 h-5 rounded-full bg-[#01aae5] text-white flex items-center justify-center">→</span>
        </Button>
      </div>
    </section>
  )
}

