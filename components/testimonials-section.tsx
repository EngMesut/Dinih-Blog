"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/app/testimonials-data"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) =>
      newDirection > 0
        ? (prevIndex + 1) % testimonials.length
        : (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#1e242c] mb-6 sm:mb-8 md:mb-12">What our clients say</h2>
      <div className="relative h-[400px] sm:h-[450px] md:h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full"
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              <div className="bg-[#1e242c] rounded-2xl p-6 sm:p-8 md:p-12 max-w-2xl mb-4 md:mb-0">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                    <span>{testimonials[currentIndex].author}</span>
                    <span>•</span>
                    <span className="text-[#aab1ba]">
                      {testimonials[currentIndex].role} of {testimonials[currentIndex].company}
                    </span>
                  </div>
                  <blockquote className="text-white text-lg sm:text-xl md:text-2xl">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                      onClick={() => paginate(-1)}
                      aria-label="Previous testimonial"
                    >
                      ←
                    </Button>
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? "bg-[#01aae5]" : "bg-white/30"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full bg-[#01aae5]"
                      onClick={() => paginate(1)}
                      aria-label="Next testimonial"
                    >
                      →
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={`${testimonials[currentIndex].author} from ${testimonials[currentIndex].company}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

