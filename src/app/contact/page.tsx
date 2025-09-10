"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ContactPage() {
  const headerRef = useRef(null)
  const formRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.05em] mb-6 sm:mb-8 font-display">
            CONTACT
          </h1>
          <p className="text-sm font-light text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
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
              <h3 className="text-sm font-light tracking-[0.1em] uppercase mb-4">STUDIO</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                123 Architecture Street
                <br />
                Design District
                <br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-[0.1em] uppercase mb-4">CONTACT</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                +1 (555) 123-4567
                <br />
                hello@suncityarchitects.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-[0.1em] uppercase mb-4">HOURS</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Monday — Friday
                <br />
                9:00 AM — 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
