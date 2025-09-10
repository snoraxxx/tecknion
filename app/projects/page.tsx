"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface ProjectImage {
  src: string
  title: string
  description: string
}

interface Project {
  id: number
  title: string
  location: string
  year: string
  category: string
  description: string
  coverImage: string
  images: ProjectImage[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "APARTMENTS",
    location: "Hyderabad, India",
    year: "2023",
    category: "Residential",
    description: "Modern apartment complexes with contemporary design",
    coverImage: "/images/Apartments/Commercial view.jpg",
    images: [
      {
        src: "/images/Apartments/Commercial view.jpg",
        title: "Commercial View",
        description: "Commercial perspective of the apartment complex"
      },
      {
        src: "/images/Apartments/kondapur .jpg",
        title: "Kondapur",
        description: "Apartment project in Kondapur"
      },
      {
        src: "/images/Apartments/View 04.jpg",
        title: "View 04",
        description: "Alternative view of the complex"
      }
    ]
  },
  {
    id: 2,
    title: "FARM HOUSE",
    location: "Outskirts, India",
    year: "2022",
    category: "Residential",
    description: "Peaceful farmhouse design blending with natural surroundings",
    coverImage: "/images/Farm house/CAM_04.jpg",
    images: [
      {
        src: "/images/Farm house/CAM_04.jpg",
        title: "Cam 04",
        description: "Farmhouse exterior view"
      }
    ]
  },
  {
    id: 3,
    title: "OFFICES IT",
    location: "Hyderabad, India",
    year: "2024",
    category: "Commercial",
    description: "Modern IT office spaces designed for productivity",
    coverImage: "/images/Offices IT/view 1.jpg",
    images: [
      {
        src: "/images/Offices IT/view 1.jpg",
        title: "View 1",
        description: "Primary office facade"
      },
      {
        src: "/images/Offices IT/view 2.jpg",
        title: "View 2",
        description: "Secondary office perspective"
      }
    ]
  },
  {
    id: 4,
    title: "RESIDENCE",
    location: "Hyderabad, India",
    year: "2023",
    category: "Residential",
    description: "Luxury residential projects with elegant architecture",
    coverImage: "/images/Residence/CAM_01_DAY.jpg",
    images: [
      {
        src: "/images/Residence/CAM_01_DAY.jpg",
        title: "Cam 01 Day",
        description: "Daytime view of the residence"
      },
      {
        src: "/images/Residence/FRONT_NIGHT.jpg",
        title: "Front Night",
        description: "Nighttime facade illumination"
      },
      {
        src: "/images/Residence/Sumanth uppal.jpg",
        title: "Sumanth Uppal",
        description: "Residence in Uppal area"
      }
    ]
  },
  {
    id: 5,
    title: "RETAIL",
    location: "Hyderabad, India",
    year: "2024",
    category: "Retail",
    description: "Contemporary retail spaces and commercial showrooms",
    coverImage: "/images/Retail/CSM NZMBD - ELEVATION 01 (2).jpg",
    images: [
      {
        src: "/images/Retail/CSM NZMBD - ELEVATION 01 (2).jpg",
        title: "CSM NZMBD Elevation 01",
        description: "Retail complex elevation design"
      },
      {
        src: "/images/Retail/H GANGARAM .jpg",
        title: "H Gangaram",
        description: "Commercial showroom design"
      },
      {
        src: "/images/Retail/Visista jewellery.jpg",
        title: "Visista Jewellery",
        description: "Luxury jewellery showroom"
      }
    ]
  }
]

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "RETAIL"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const headerRef = useRef(null)
  const projectsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category.toUpperCase() === selectedCategory)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [selectedProject, currentImageIndex])

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
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                {/* Image count indicator */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {project.images.length} images
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-light tracking-[0.1em] uppercase group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-light text-gray-500 tracking-[0.05em]">
                  {project.location} — {project.year}
                </p>
                <p className="text-xs font-light text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  disabled={currentImageIndex === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  disabled={currentImageIndex === selectedProject.images.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-5xl" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={selectedProject.images[currentImageIndex].src}
                  alt={selectedProject.images[currentImageIndex].title}
                  fill
                  className="object-contain"
                  quality={95}
                  sizes="90vw"
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-6 text-center text-white max-w-2xl">
                <h3 className="text-xl font-light tracking-[0.1em] uppercase mb-2">
                  {selectedProject.title}
                </h3>
                <h4 className="text-lg font-light mb-2">
                  {selectedProject.images[currentImageIndex].title}
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  {selectedProject.images[currentImageIndex].description}
                </p>
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center space-x-2 mt-4">
                    {selectedProject.images.map((_: ProjectImage, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-4">
                  Image {currentImageIndex + 1} of {selectedProject.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
