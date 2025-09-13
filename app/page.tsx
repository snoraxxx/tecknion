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
    image: "https://imagesv2-tecknion.similix.in/architects/Apartments/Commercial view.jpg",
    title: "APARTMENT LIVING",
    subtitle: "Modern residential complexes",
    projectName: "Kondapur Apartments",
    location: "Hyderabad, India",
  },
  {
    id: 2,
    image: "https://imagesv2-tecknion.similix.in/architects/Residence/CAM_01_DAY.jpg",
    title: "LUXURY RESIDENCES",
    subtitle: "Elegant architectural design",
    projectName: "Premium Residence",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    image: "https://imagesv2-tecknion.similix.in/architects/Residence/FRONT_NIGHT.jpg",
    title: "EVENING ELEGANCE",
    subtitle: "Sophisticated nighttime aesthetics",
    projectName: "Night Villa",
    location: "Uppal, India",
  },
  {
    id: 4,
    image: "https://imagesv2-tecknion.similix.in/architects/8.Mall &Multiplex/1.jpg",
    title: "COMMERCIAL SPACES",
    subtitle: "Modern commercial environments",
    projectName: "Mall & Multiplex",
    location: "Hyderabad, India",
  },
  {
    id: 5,
    image: "https://imagesv2-tecknion.similix.in/architects/LACASA/club 03 night.jpg",
    title: "LACASA CLUBHOUSE",
    subtitle: "Premium community amenities",
    projectName: "LACASA Gated Community",
    location: "Hyderabad, India",
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
      <div className="absolute inset-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ 
                duration: 8, 
                ease: "easeOut",
                repeat: 0
              }}
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
            </motion.div>
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
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

      {/* Project Information Overlay */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          key={`project-info-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-normal tracking-[0.05em] font-display mb-1">
            {slides[currentSlide].projectName}
          </h3>
          <p className="text-sm sm:text-base font-light tracking-[0.05em] opacity-90">
            {slides[currentSlide].location}
          </p>
        </motion.div>
      </motion.div>

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
