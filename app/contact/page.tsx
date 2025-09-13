"use client"

import { motion, useInView } from "framer-motion"
import { useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ContactContent() {
  const searchParams = useSearchParams()
  const textColorParam = searchParams.get('textColor')
  const headerRef = useRef(null)
  const formRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  // Determine text color based on URL parameter
  const textColorClass = textColorParam === 'black' ? 'text-black' : ''

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="container py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.05em] mb-6 sm:mb-8 font-display ${textColorClass}`}>
            CONTACT
          </h1>
          <p className={`text-sm font-light max-w-xl mx-auto leading-relaxed px-4 ${textColorClass || 'text-gray-600'}`}>
            We would love to hear about your project. Get in touch to discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-gray-200 pb-2 text-sm font-light focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-gray-200 pb-2 text-sm font-light focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-200 pb-2 text-sm font-light focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full border-b border-gray-200 pb-2 text-sm font-light focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full border-b border-gray-200 pb-2 text-sm font-light focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="border border-black px-6 sm:px-8 py-3 text-xs font-light tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className={`text-sm font-light tracking-[0.1em] uppercase mb-4 ${textColorClass}`}>STUDIO</h3>
              <p className={`text-sm font-light leading-relaxed ${textColorClass || 'text-gray-600'}`}>
                123 Architecture Street
                <br />
                Design District
                <br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className={`text-sm font-light tracking-[0.1em] uppercase mb-4 ${textColorClass}`}>CONTACT</h3>
              <p className={`text-sm font-light leading-relaxed ${textColorClass || 'text-gray-600'}`}>
                +1 (555) 123-4567
                <br />
                hello@tecknionarchitects.com
              </p>
            </div>
            <div>
              <h3 className={`text-sm font-light tracking-[0.1em] uppercase mb-4 ${textColorClass}`}>HOURS</h3>
              <p className={`text-sm font-light leading-relaxed ${textColorClass || 'text-gray-600'}`}>
                Monday — Friday
                <br />
                9:00 AM — 6:00 PM
              </p>
            </div>
            <div>
              <h3 className={`text-sm font-light tracking-[0.1em] uppercase mb-4 ${textColorClass}`}>FOLLOW US</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/tecknionarchitects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColorClass || 'text-gray-600'} hover:text-black transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com/tecknionarchitects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColorClass || 'text-gray-600'} hover:text-black transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 sm:pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm font-light tracking-[0.1em] uppercase">Loading...</div>
      </div>
    </div>}>
      <ContactContent />
    </Suspense>
  )
}
