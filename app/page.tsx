"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md shadow-lg border-2 border-primary/20 rounded-[2rem] overflow-hidden">
          <CardHeader className="text-center">
            <motion.div
              className="mx-auto w-40 h-40 mb-4 p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20mesalib%20version%20mejorada.jpg-69vwF8WQNTHbq0HD1hdCsqLXbTouqG.jpeg"
                alt="MESALIB Logo"
                className="w-full h-full object-contain rounded-3xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold text-primary">Bienvenido a MESALIB</CardTitle>
              <CardDescription className="text-lg mt-2 text-muted-foreground">
                Tu espacio de apoyo y crecimiento emocional
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <motion.p
              className="text-center text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Elige cómo deseas conectarte con nuestra comunidad:
            </motion.p>
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="/patient" passHref>
                  <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Busco Apoyo
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href="/professional" passHref>
                  <Button
                    variant="outline"
                    className="w-full text-lg py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Soy Profesional
                  </Button>
                </Link>
              </motion.div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              ¿Necesitas ayuda? Contáctanos en{" "}
              <a
                href="mailto:soporte@mesalib.com"
                className="text-primary hover:underline transition-all duration-300 hover:text-primary/80"
              >
                soporte@mesalib.com
              </a>
            </motion.p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

