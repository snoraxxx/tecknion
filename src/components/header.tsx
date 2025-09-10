"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="text-sm font-light tracking-[0.2em] font-display">
              SUNCITY
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { name: "PROJECTS", href: "/projects" },
              { name: "CONTACT", href: "/contact" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }}>
                <Link href={item.href} className="text-xs font-light tracking-[0.1em] uppercase">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xs font-light tracking-[0.1em] uppercase"
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
              className="md:hidden border-t border-gray-200 overflow-hidden"
            >
              <nav className="py-8 space-y-6">
                {[
                  { name: "PROJECTS", href: "/projects" },
                  { name: "CONTACT", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-xs font-light tracking-[0.1em] uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
