import FeatureCard from "@/components/feature-card";
import Image from "next/image";

export function WhyChooseSection() {
  return (
    <section className="responsive-padding">
      <div className="responsive-container px-4">
        <div className="text-center mb-12">
          <h2 className="responsive-heading mb-4">
            Why Choose
            <br />
            Masters in Me?
          </h2>
          <p className="text-muted responsive-text">
            Unlock your true potential and discover a world of opportunities
            <br />
            that align with your skills, interests, and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-black">
          <FeatureCard
            title="Showcase Work"
            description="Showcase your project to stand out among all"
            icon="portfolio"
          />
          <div className="lg:col-span-2 aspect-[3/2] rounded-lg overflow-hidden relative">
            <Image
              src="/img/img-07.jpg"
              alt="Video Resume"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-white"></h3>
            </div> */}
          </div>
          <div className="space-y-6 text-black">
            <FeatureCard
              title="Networking Opportunities"
              description="Connect with industry professionals"
              icon="network"
            />
            <FeatureCard
              title="Resume Builder"
              description="Create a professional resume using our built-in resume builder"
              icon="resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
