"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "VILLA SERENITY",
    location: "Bali, Indonesia",
    year: "2023",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "URBAN LOFT",
    location: "New York, USA",
    year: "2023",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "COASTAL RETREAT",
    location: "Malibu, USA",
    year: "2022",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "CORPORATE HQ",
    location: "Singapore",
    year: "2022",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "ART GALLERY",
    location: "London, UK",
    year: "2021",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "BOUTIQUE HOTEL",
    location: "Tokyo, Japan",
    year: "2021",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "MODERN RESIDENCE",
    location: "Los Angeles, USA",
    year: "2024",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "OFFICE COMPLEX",
    location: "Berlin, Germany",
    year: "2024",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
]

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "CULTURAL", "HOSPITALITY"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const headerRef = useRef(null)
  const projectsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category.toUpperCase() === selectedCategory)

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
            PROJECTS
          </h1>
          <p className="text-sm font-light text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
            A curated selection of our architectural works spanning residential, commercial, and cultural spaces.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`text-xs font-light tracking-[0.1em] uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-black border-b border-black pb-1"
                    : "text-gray-400 hover:text-black"
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-light tracking-[0.1em] uppercase group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-light text-gray-500 tracking-[0.05em]">
                  {project.location} — {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
