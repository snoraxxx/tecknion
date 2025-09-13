"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

// R2 Bucket URL
const R2_BASE_URL = "https://imagesv2-tecknion.similix.in"

// Helper function to generate R2 URLs
const getR2Image = (path: string) => `${R2_BASE_URL}/${path}`

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
  // ARCHITECTURE PROJECTS
  {
    id: 1,
    title: "APARTMENTS",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Modern apartment complexes with contemporary design",
    coverImage: getR2Image("architects/Apartments/Commercial view.jpg"),
    images: [
      {
        src: getR2Image("architects/Apartments/Commercial view.jpg"),
        title: "Commercial View",
        description: "Commercial perspective of the apartment complex"
      },
      {
        src: getR2Image("architects/Apartments/kondapur .jpg"),
        title: "Kondapur",
        description: "Apartment project in Kondapur"
      },
      {
        src: getR2Image("architects/Apartments/View 04.jpg"),
        title: "View 04",
        description: "Alternative view of the complex"
      }
    ]
  },
  {
    id: 2,
    title: "LACASA GATED COMMUNITY",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Premium gated community with modern amenities and elegant design",
    coverImage: getR2Image("architects/LACASA/A2 SIZE .jpg"),
    images: [
      {
        src: getR2Image("architects/LACASA/A2 SIZE .jpg"),
        title: "A2 Size",
        description: "Master plan layout"
      },
      {
        src: getR2Image("architects/LACASA/club 03 night.jpg"),
        title: "Club Night View",
        description: "Clubhouse nighttime perspective"
      },
      {
        src: getR2Image("architects/LACASA/E & W Street.jpg"),
        title: "East & West Street",
        description: "Street view perspective"
      },
      {
        src: getR2Image("architects/LACASA/East.jpg"),
        title: "East View",
        description: "Eastern elevation"
      },
      {
        src: getR2Image("architects/LACASA/ENTRANCE GATEWAY copy.jpg"),
        title: "Entrance Gateway",
        description: "Main entrance design"
      },
      {
        src: getR2Image("architects/LACASA/North view.jpg"),
        title: "North View",
        description: "Northern perspective"
      },
      {
        src: getR2Image("architects/LACASA/West.jpg"),
        title: "West View",
        description: "Western elevation"
      }
    ]
  },
  {
    id: 3,
    title: "HOUSING DEVELOPMENT",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Modern housing development with contemporary design",
    coverImage: getR2Image("architects/Housing/1.jpg"),
    images: [
      {
        src: getR2Image("architects/Housing/1.jpg"),
        title: "View 1",
        description: "Primary housing view"
      },
      {
        src: getR2Image("architects/Housing/2.jpg"),
        title: "View 2",
        description: "Secondary perspective"
      },
      {
        src: getR2Image("architects/Housing/3.jpg"),
        title: "View 3",
        description: "Third angle view"
      },
      {
        src: getR2Image("architects/Housing/4.jpg"),
        title: "View 4",
        description: "Fourth perspective"
      },
      {
        src: getR2Image("architects/Housing/5.jpg"),
        title: "View 5",
        description: "Final view"
      }
    ]
  },
  {
    id: 4,
    title: "MEGHA DEVELOPERS",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Large scale residential development project",
    coverImage: getR2Image("architects/MEGHA_DEVELOPERS/MEGHA street.jpg"),
    images: [
      {
        src: getR2Image("architects/MEGHA_DEVELOPERS/MEGHA street.jpg"),
        title: "Megha Street",
        description: "Street view of the development"
      },
      {
        src: getR2Image("architects/MEGHA_DEVELOPERS/SINGLE VIEW.jpg"),
        title: "Single View",
        description: "Individual unit perspective"
      },
      {
        src: getR2Image("architects/MEGHA_DEVELOPERS/STREET VIEW_REV_01.jpg"),
        title: "Street View Rev 01",
        description: "Revised street perspective"
      },
      {
        src: getR2Image("architects/MEGHA_DEVELOPERS/WEST FACING.jpg"),
        title: "West Facing",
        description: "Western elevation view"
      }
    ]
  },
  {
    id: 5,
    title: "ISSARA RESIDENCES",
    location: "Hyderabad, India",
    year: "2022",
    category: "Architecture",
    description: "Luxury residential project with modern amenities",
    coverImage: getR2Image("architects/Issara/2 (1).jpg"),
    images: [
      {
        src: getR2Image("architects/Issara/2 (1).jpg"),
        title: "View 2",
        description: "Main perspective"
      },
      {
        src: getR2Image("architects/Issara/2.jpg"),
        title: "View 2 Alt",
        description: "Alternative angle"
      },
      {
        src: getR2Image("architects/Issara/3 (1).jpg"),
        title: "View 3",
        description: "Third perspective"
      },
      {
        src: getR2Image("architects/Issara/3.jpg"),
        title: "View 3 Alt",
        description: "Alternative third angle"
      }
    ]
  },
  {
    id: 6,
    title: "RAYA BUILDERS PROJECT",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Contemporary residential development by Raya Builders",
    coverImage: getR2Image("architects/RAYA_BUILDERS/03 (1).jpg"),
    images: [
      {
        src: getR2Image("architects/RAYA_BUILDERS/03 (1).jpg"),
        title: "View 03",
        description: "Third perspective"
      },
      {
        src: getR2Image("architects/RAYA_BUILDERS/04 (1).jpg"),
        title: "View 04",
        description: "Fourth perspective"
      },
      {
        src: getR2Image("architects/RAYA_BUILDERS/east view.jpg"),
        title: "East View",
        description: "Eastern elevation"
      },
      {
        src: getR2Image("architects/RAYA_BUILDERS/street view.jpg"),
        title: "Street View",
        description: "Street perspective"
      },
      {
        src: getR2Image("architects/RAYA_BUILDERS/west view.jpg"),
        title: "West View",
        description: "Western elevation"
      }
    ]
  },
  {
    id: 7,
    title: "RAM BHOPAL BUILDERS",
    location: "Hyderabad, India",
    year: "2024",
    category: "Architecture",
    description: "Residential project by Ram Bhopal Builders",
    coverImage: getR2Image("architects/RAM_BHOPAL_BUILDERS/2.jpg"),
    images: [
      {
        src: getR2Image("architects/RAM_BHOPAL_BUILDERS/2.jpg"),
        title: "Main View",
        description: "Primary building perspective"
      },
      {
        src: getR2Image("architects/RAM_BHOPAL_BUILDERS/East street view.jpg"),
        title: "East Street View",
        description: "Eastern street perspective"
      },
      {
        src: getR2Image("architects/RAM_BHOPAL_BUILDERS/East view 1.jpg"),
        title: "East View 1",
        description: "Eastern elevation view"
      },
      {
        src: getR2Image("architects/RAM_BHOPAL_BUILDERS/West view.jpg"),
        title: "West View",
        description: "Western elevation"
      }
    ]
  },
  {
    id: 8,
    title: "ELEGANT HOMES LLP",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Elegant residential community development",
    coverImage: getR2Image("architects/Elegant_Homes_LLP/1.jpg"),
    images: [
      {
        src: getR2Image("architects/Elegant_Homes_LLP/1.jpg"),
        title: "View 1",
        description: "Primary perspective"
      },
      {
        src: getR2Image("architects/Elegant_Homes_LLP/2.jpg"),
        title: "View 2",
        description: "Secondary perspective"
      }
    ]
  },
  {
    id: 9,
    title: "MALL & MULTIPLEX",
    location: "Hyderabad, India",
    year: "2024",
    category: "Architecture",
    description: "Large scale commercial mall and multiplex development",
    coverImage: getR2Image("architects/Mall_Multiplex/1.jpg"),
    images: [
      {
        src: getR2Image("architects/Mall_Multiplex/1.jpg"),
        title: "View 1",
        description: "Main mall perspective"
      },
      {
        src: getR2Image("architects/Mall_Multiplex/2.jpg"),
        title: "View 2",
        description: "Secondary perspective"
      },
      {
        src: getR2Image("architects/Mall_Multiplex/cam01-New.jpg"),
        title: "Cam 01 New",
        description: "Updated camera angle"
      },
      {
        src: getR2Image("architects/Mall_Multiplex/cam03.jpg"),
        title: "Cam 03",
        description: "Third camera perspective"
      }
    ]
  },
  {
    id: 10,
    title: "FARM HOUSE",
    location: "Outskirts, India",
    year: "2022",
    category: "Architecture",
    description: "Peaceful farmhouse design blending with natural surroundings",
    coverImage: getR2Image("architects/Farm house/CAM_04.jpg"),
    images: [
      {
        src: getR2Image("architects/Farm house/CAM_04.jpg"),
        title: "Cam 04",
        description: "Farmhouse exterior view"
      }
    ]
  },
  {
    id: 11,
    title: "RESIDENCE",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Luxury residential projects with elegant architecture",
    coverImage: getR2Image("architects/Residence/CAM_01_DAY.jpg"),
    images: [
      {
        src: getR2Image("architects/Residence/CAM_01_DAY.jpg"),
        title: "Cam 01 Day",
        description: "Daytime view of the residence"
      },
      {
        src: getR2Image("architects/Residence/FRONT_NIGHT.jpg"),
        title: "Front Night",
        description: "Nighttime facade illumination"
      },
      {
        src: getR2Image("architects/Residence/Sumanth uppal.jpg"),
        title: "Sumanth Uppal",
        description: "Residence in Uppal area"
      }
    ]
  },
  {
    id: 12,
    title: "SRIKAKULAM PROJECT",
    location: "Srikakulam, India",
    year: "2022",
    category: "Architecture",
    description: "Residential development in Srikakulam",
    coverImage: getR2Image("architects/Srikakulam/gate .jpg"),
    images: [
      {
        src: getR2Image("architects/Srikakulam/gate .jpg"),
        title: "Gate View",
        description: "Main entrance gate"
      },
      {
        src: getR2Image("architects/Srikakulam/North facing 30x60 .jpg"),
        title: "North Facing 30x60",
        description: "North facing plot design"
      },
      {
        src: getR2Image("architects/Srikakulam/south facing .jpg"),
        title: "South Facing",
        description: "South facing elevation"
      }
    ]
  },
  {
    id: 13,
    title: "CADOL PROJECT",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Modern architectural project by Cadol",
    coverImage: getR2Image("architects/Cadol/view 02.jpg"),
    images: [
      {
        src: getR2Image("architects/Cadol/view 02.jpg"),
        title: "View 02",
        description: "Building perspective"
      }
    ]
  },
  {
    id: 14,
    title: "VANABHOMI PROJECT",
    location: "Hyderabad, India",
    year: "2021",
    category: "Architecture",
    description: "Eco-friendly residential development with clubhouse",
    coverImage: getR2Image("architects/Vanabhomi/RA_2021ClubHouse.jpg"),
    images: [
      {
        src: getR2Image("architects/Vanabhomi/1.jpg"),
        title: "View 1",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/Vanabhomi/2.jpg"),
        title: "View 2",
        description: "Second perspective"
      },
      {
        src: getR2Image("architects/Vanabhomi/RA_2021ClubHouse.jpg"),
        title: "RA 2021 ClubHouse",
        description: "Clubhouse design"
      }
    ]
  },
  {
    id: 15,
    title: "MJR ELEVATIONS",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "MJR residential project with multiple elevation studies",
    coverImage: getR2Image("architects/mjr/MJR Elevation  01.jpg"),
    images: [
      {
        src: getR2Image("architects/mjr/MJR Elevation  01.jpg"),
        title: "MJR Elevation 01",
        description: "First elevation study"
      },
      {
        src: getR2Image("architects/mjr/MJR Elevation  02.jpg"),
        title: "MJR Elevation 02",
        description: "Second elevation study"
      },
      {
        src: getR2Image("architects/mjr/MJR Elevation  03 (1).jpg"),
        title: "MJR Elevation 03",
        description: "Third elevation study"
      },
      {
        src: getR2Image("architects/mjr/MJR Elevation  04.jpg"),
        title: "MJR Elevation 04",
        description: "Fourth elevation study"
      }
    ]
  },
  {
    id: 16,
    title: "RAVI VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Contemporary villa design",
    coverImage: getR2Image("architects/ravi/RA_Villa.jpg"),
    images: [
      {
        src: getR2Image("architects/ravi/RA_Villa.jpg"),
        title: "RA Villa",
        description: "Main villa perspective"
      },
      {
        src: getR2Image("architects/ravi/RA_Villa2.jpg"),
        title: "RA Villa 2",
        description: "Alternative villa view"
      }
    ]
  },
  {
    id: 17,
    title: "GR PROJECT",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Residential architecture project",
    coverImage: getR2Image("architects/gr/01 (2).jpg"),
    images: [
      {
        src: getR2Image("architects/gr/01 (2).jpg"),
        title: "View 01",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/gr/02 (3).jpg"),
        title: "View 02",
        description: "Second perspective"
      },
      {
        src: getR2Image("architects/gr/CAM_02.jpg"),
        title: "Cam 02",
        description: "Camera angle 2"
      },
      {
        src: getR2Image("architects/gr/CAM_03.jpg"),
        title: "Cam 03",
        description: "Camera angle 3"
      },
      {
        src: getR2Image("architects/gr/CAM_04.jpg"),
        title: "Cam 04",
        description: "Camera angle 4"
      }
    ]
  },
  {
    id: 18,
    title: "APR VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Private villa design",
    coverImage: getR2Image("architects/apr/22.jpg"),
    images: [
      {
        src: getR2Image("architects/apr/22.jpg"),
        title: "Villa View",
        description: "Main villa perspective"
      }
    ]
  },
  {
    id: 19,
    title: "BS VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Contemporary villa architecture",
    coverImage: getR2Image("architects/bs/28.jpg"),
    images: [
      {
        src: getR2Image("architects/bs/28.jpg"),
        title: "Villa View",
        description: "BS villa design"
      }
    ]
  },
  {
    id: 20,
    title: "BS2 VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "Second BS villa project",
    coverImage: getR2Image("architects/bs2/29.jpg"),
    images: [
      {
        src: getR2Image("architects/bs2/29.jpg"),
        title: "View 29",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/bs2/30.jpg"),
        title: "View 30",
        description: "Second perspective"
      }
    ]
  },
  {
    id: 21,
    title: "DR VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "DR villa architectural design",
    coverImage: getR2Image("architects/d_r/2.jpg"),
    images: [
      {
        src: getR2Image("architects/d_r/2.jpg"),
        title: "Villa View",
        description: "DR villa perspective"
      }
    ]
  },
  {
    id: 22,
    title: "GRR VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "GRR villa design",
    coverImage: getR2Image("architects/grr/12.jpg"),
    images: [
      {
        src: getR2Image("architects/grr/12.jpg"),
        title: "Villa View",
        description: "GRR villa perspective"
      }
    ]
  },
  {
    id: 23,
    title: "KR VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "KR villa architectural project",
    coverImage: getR2Image("architects/kr/32.jpg"),
    images: [
      {
        src: getR2Image("architects/kr/32.jpg"),
        title: "Villa View",
        description: "KR villa design"
      }
    ]
  },
  {
    id: 24,
    title: "KSR VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "KSR villa design project",
    coverImage: getR2Image("architects/ksr/1.jpg"),
    images: [
      {
        src: getR2Image("architects/ksr/1.jpg"),
        title: "View 1",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/ksr/20.jpg"),
        title: "View 20",
        description: "Second perspective"
      }
    ]
  },
  {
    id: 25,
    title: "KSR 1 VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "KSR 1 villa project",
    coverImage: getR2Image("architects/ksr_1/18.jpg"),
    images: [
      {
        src: getR2Image("architects/ksr_1/18.jpg"),
        title: "View 18",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/ksr_1/5.jpg"),
        title: "View 5",
        description: "Second perspective"
      }
    ]
  },
  {
    id: 26,
    title: "KSR2 VILLA",
    location: "Hyderabad, India",
    year: "2023",
    category: "Architecture",
    description: "KSR2 villa design",
    coverImage: getR2Image("architects/ksr2/10.jpg"),
    images: [
      {
        src: getR2Image("architects/ksr2/10.jpg"),
        title: "View 10",
        description: "First perspective"
      },
      {
        src: getR2Image("architects/ksr2/15.jpg"),
        title: "View 15",
        description: "Second perspective"
      }
    ]
  },
  {
    id: 27,
    title: "RETAIL PROJECT",
    location: "Hyderabad, India",
    year: "2024",
    category: "Architecture",
    description: "Commercial retail spaces",
    coverImage: getR2Image("architects/Retail/CSM NZMBD - ELEVATION 01 (2).jpg"),
    images: [
      {
        src: getR2Image("architects/Retail/CSM NZMBD - ELEVATION 01 (2).jpg"),
        title: "CSM NZMBD Elevation",
        description: "Retail complex elevation"
      },
      {
        src: getR2Image("architects/Retail/H GANGARAM .jpg"),
        title: "H Gangaram",
        description: "H Gangaram showroom"
      },
      {
        src: getR2Image("architects/Retail/Visista jewellery.jpg"),
        title: "Visista Jewellery",
        description: "Jewellery showroom design"
      }
    ]
  },

  // Interior projects coming soon
]

const categories = ["ALL", "INTERIOR", "ARCHITECTURE"]

function ProjectsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const headerRef = useRef(null)
  const projectsRef = useRef(null)

  // Set initial category based on URL parameter
  useEffect(() => {
    if (categoryParam) {
      const upperCaseCategory = categoryParam.toUpperCase()
      if (categories.includes(upperCaseCategory)) {
        setSelectedCategory(upperCaseCategory)
      }
    }
  }, [categoryParam])

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
    <div className="min-h-screen pt-20 sm:pt-24 text-black">
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
            A curated selection of our architectural works spanning residential, commercial, and interior spaces.
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
        {selectedCategory === "INTERIOR" ? (
          // Coming Soon Banner for Interior Projects
          <motion.div
            ref={projectsRef}
            className="flex items-center justify-center min-h-[400px]"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.h2
                className="text-2xl sm:text-3xl font-light tracking-[0.05em] mb-4 font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                INTERIOR PROJECTS
              </motion.h2>
              
              <motion.p
                className="text-lg font-light text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                COMING SOON
              </motion.p>
              
              <motion.p
                className="text-sm font-light text-gray-500 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Our interior design portfolio is currently being curated. 
                Check back soon to explore our innovative interior spaces and design solutions.
              </motion.p>
            </div>
          </motion.div>
        ) : (
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
        )}
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
                    {selectedProject.images.map((_, index) => (
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

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 sm:pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm font-light tracking-[0.1em] uppercase">Loading...</div>
      </div>
    </div>}>
      <ProjectsContent />
    </Suspense>
  )
}