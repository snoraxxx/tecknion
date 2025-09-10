import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Minimalist Table Lamp",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Lighting",
  },
  {
    id: 2,
    name: "Concrete Planter Set",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Architectural Print Series",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Art",
  },
  {
    id: 4,
    name: "Modern Bookends",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Designer Vase Collection",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Geometric Wall Art",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Art",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-wide mb-6">SHOP</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of design objects, furniture, and architectural accessories.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <Button variant="outline" className="px-6 bg-transparent">
              ALL
            </Button>
            <Button variant="ghost" className="px-6">
              LIGHTING
            </Button>
            <Button variant="ghost" className="px-6">
              ACCESSORIES
            </Button>
            <Button variant="ghost" className="px-6">
              ART
            </Button>
            <Button variant="ghost" className="px-6">
              FURNITURE
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-none">
              <CardContent className="p-0">
                <div className="relative h-80 mb-4 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
                  <p className="text-xl font-semibold">{product.price}</p>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    ADD TO CART
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            VIEW MORE PRODUCTS
          </Button>
        </div>
      </div>
    </div>
  )
}
