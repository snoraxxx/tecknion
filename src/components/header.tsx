"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isProjectsHovered, setIsProjectsHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClasses = (path: string) => {
    const isActive = pathname.startsWith(path)
    return `text-xs font-light tracking-[0.1em] uppercase transition-colors ${
      isActive
        ? "text-black"
        : pathname === "/"
        ? "text-white hover:opacity-80"
        : "text-gray-700 hover:text-black"
    }`
  }

  const logoColor = pathname === "/" ? "text-white" : "text-black"

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <motion.div whileHover={{ opacity: 0.85 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex flex-col leading-tight">
              <span
                className={`font-display font-medium tracking-[0.25em] text-3xl sm:text-4xl ${logoColor}`}
              >
                TECKNION
              </span>
              <span
                className={`font-display tracking-[0.2em] font-light text-lg sm:text-xl mt-1 ${logoColor}`}
              >
                INTERIOR & ARCHITECTURE
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {/* Projects Dropdown */}
            <div className="relative">
              <motion.div 
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
                whileHover={{ opacity: 0.7 }} 
                transition={{ duration: 0.2 }}
              >
                <Link href="/projects" className={linkClasses("/projects")}>
                  PROJECTS
                </Link>
                <motion.div
                  animate={{ rotate: isProjectsHovered ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={12} className={pathname === "/" ? "text-white" : "text-gray-700"} />
                </motion.div>
              </motion.div>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProjectsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-sm py-2 min-w-[140px] z-50"
                    onMouseEnter={() => setIsProjectsHovered(true)}
                    onMouseLeave={() => setIsProjectsHovered(false)}
                  >
                    <Link
                      href="/projects?category=interior"
                      className="block px-4 py-2 text-xs font-light tracking-[0.1em] uppercase text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      INTERIOR
                    </Link>
                    <Link
                      href="/projects?category=architecture"
                      className="block px-4 py-2 text-xs font-light tracking-[0.1em] uppercase text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      ARCHITECTURE
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" className={linkClasses("/contact")}>
                CONTACT
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-xs font-light tracking-[0.1em] uppercase ${
              pathname === "/" ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 overflow-hidden bg-white"
            >
              <nav className="py-8 space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-light tracking-[0.1em] uppercase text-gray-400">
                    PROJECTS
                  </div>
                  <div className="pl-4 space-y-3">
                    <Link
                      href="/projects?category=interior"
                      className="block text-xs font-light tracking-[0.1em] uppercase"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      INTERIOR
                    </Link>
                    <Link
                      href="/projects?category=architecture"
                      className="block text-xs font-light tracking-[0.1em] uppercase"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ARCHITECTURE
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block text-xs font-light tracking-[0.1em] uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
