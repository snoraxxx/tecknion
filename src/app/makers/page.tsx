import Image from "next/image"
import { Button } from "@/components/ui/button"

const makers = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Lead Architect",
    bio: "With over 15 years of experience in sustainable architecture, Elena leads our design team with a focus on environmental consciousness and innovative solutions.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    specialties: ["Sustainable Design", "Residential Architecture", "Urban Planning"],
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Senior Designer",
    bio: "Marcus brings a unique perspective to interior design, combining Eastern philosophy with Western aesthetics to create harmonious living spaces.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    specialties: ["Interior Design", "Zen Aesthetics", "Space Planning"],
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Project Manager",
    bio: "Sarah ensures every project runs smoothly from conception to completion, coordinating teams and maintaining our high standards of quality.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    specialties: ["Project Management", "Client Relations", "Quality Control"],
  },
  {
    id: 4,
    name: "David Kim",
    role: "Structural Engineer",
    bio: "David's expertise in structural engineering ensures our ambitious designs are not only beautiful but also safe and structurally sound.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    specialties: ["Structural Engineering", "Building Safety", "Innovation"],
  },
]

export default function MakersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-wide mb-6">MAKERS</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who bring our architectural visions to life through expertise, creativity, and
            dedication.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {makers.map((maker) => (
            <div key={maker.id} className="group">
              <div className="relative h-96 mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={maker.image || "/placeholder.svg"}
                  alt={maker.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-medium mb-1">{maker.name}</h3>
                  <p className="text-gray-600 uppercase tracking-wide text-sm">{maker.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{maker.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {maker.specialties.map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team Section */}
        <div className="mt-20 text-center bg-black text-white py-16 px-8">
          <h2 className="text-3xl font-light mb-6 tracking-wide">JOIN OUR TEAM</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented architects, designers, and engineers who share our passion for innovative
            design.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 text-white border-white hover:bg-white hover:text-black bg-transparent"
          >
            VIEW OPEN POSITIONS
          </Button>
        </div>
      </div>
    </div>
  )
}
