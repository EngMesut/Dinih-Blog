export interface Testimonial {
  id: number
  author: string
  role: string
  company: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Manuel Rikob",
    role: "CEO",
    company: "Intel",
    quote:
      "Working with Master in me has been an incredibly painless and enjoyable experience.",
    image: "/img/img-01.jpg",
  },
  {
    id: 2,
    author: "Sarah Chen",
    role: "Head of HR",
    company: "TechCorp",
    quote:
      "The platform has revolutionized our hiring process. We've found exceptional talent in record time.",
    image: "/img/img-05.jpg?height=300&width=400",
  },
  {
    id: 3,
    author: "James Wilson",
    role: "CTO",
    company: "StartupX",
    quote:
      "The quality of candidates we've connected with through Masters Hub has been consistently outstanding.",
    image: "/img/img-02.jpg?height=300&width=400",
  },
  {
    id: 4,
    author: "Elena Rodriguez",
    role: "VP of Operations",
    company: "Global Solutions",
    quote:
      "Masters Hub has transformed how we approach recruitment. Their platform is intuitive and powerful.",
    image: "/img/img-07.jpg?height=300&width=400",
  },
];

