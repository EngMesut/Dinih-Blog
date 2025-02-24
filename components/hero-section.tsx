import { SearchBar } from "./search-bar"
import { ProfileImages } from "./profile-images"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#01aae5]" />
        Your #1 Platform for Skill Sharing
      </div>
      <h1 className="text-4xl md:text-6xl font-medium text-[#232323] mb-4">
        Showcase Your Mastery.
        <br />
        Get Connected
      </h1>
      <p className="text-[#414d60] mb-8 max-w-2xl mx-auto">
        Create your profile, showcase your skills, and let employers find you.
      </p>

      <SearchBar />
      <ProfileImages />
    </section>
  )
}

