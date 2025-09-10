"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/Apartments/Commercial view.jpg",
    title: "APARTMENT LIVING",
    subtitle: "Modern residential complexes",
  },
  {
    id: 2,
    image: "/images/Residence/CAM_01_DAY.jpg",
    title: "LUXURY RESIDENCES",
    subtitle: "Elegant architectural design",
  },
  {
    id: 3,
    image: "/images/Residence/FRONT_NIGHT.jpg",
    title: "EVENING ELEGANCE",
    subtitle: "Sophisticated nighttime aesthetics",
  },
  {
    id: 4,
    image: "/images/Offices IT/view 1.jpg",
    title: "COMMERCIAL SPACES",
    subtitle: "Modern office environments",
  },
  {
    id: 5,
    image: "/images/Retail/CSM NZMBD - ELEVATION 01 (2).jpg",
    title: "RETAIL ARCHITECTURE",
    subtitle: "Contemporary commercial design",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.05em] mb-4 sm:mb-6 font-display leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-base font-light tracking-[0.15em] sm:tracking-[0.2em] mb-8 sm:mb-12 lg:mb-16 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="/projects">
                <motion.button
                  className="border border-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-xs font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm bg-white/5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  EXPLORE PROJECTS
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      {!isMobile && (
        <>
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 p-2 lg:p-3 hover:bg-white/10"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={isMobile ? 16 : 20} />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 p-2 lg:p-3 hover:bg-white/10"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={isMobile ? 16 : 20} />
          </motion.button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 transition-all duration-500 backdrop-blur-sm ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 text-white/70 text-xs font-light tracking-[0.1em] backdrop-blur-sm bg-white/5 px-3 sm:px-4 py-1 sm:py-2">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Mobile Swipe Indicator */}
      {isMobile && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs font-light tracking-[0.1em] animate-pulse">
          SWIPE TO NAVIGATE
        </div>
      )}
    </div>
  )
}
