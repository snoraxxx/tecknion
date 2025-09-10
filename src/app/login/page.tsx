"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function LoginPage() {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true })

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="container max-w-md py-20">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardTitle className="text-3xl font-light tracking-wide font-montserrat">LOGIN</CardTitle>
                <p className="text-gray-600 mt-2">Welcome back to Suncity Architects</p>
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.form
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-black hover:bg-gray-800 transition-all duration-300" size="lg">
                    SIGN IN
                  </Button>
                </motion.div>
              </motion.form>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Forgot your password?
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Separator />
              </motion.div>

              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-sm text-gray-600">Don't have an account?</p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-black hover:text-white transition-all duration-300"
                    size="lg"
                  >
                    CREATE ACCOUNT
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
