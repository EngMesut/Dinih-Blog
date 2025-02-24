import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image
          src="/img/img-03.jpg" // Change this to your actual logo path
          alt="Somali Skill Hub Logo"
          width={38}
          height={38}
          className="rounded-md"
        />
        <span className="text-primary font-bold text-2xl">Dinih.</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
        <a href="#" className="hover:text-[#01aae5]">
          Create Resume
        </a>
        <a href="#" className="hover:text-[#01aae5]">
          Skillset
        </a>
        <a href="#" className="hover:text-[#01aae5]">
          Partnered Job Board
        </a>
        <a href="#" className="hover:text-[#01aae5]">
          Contact Us
        </a>
      </nav>
      <Button className="bg-[#01aae5] hover:bg-[#01aae5]/90">
        Register Now
      </Button>
    </header>
  );
}
