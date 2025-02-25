"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Simulated data for matched professionals
const matchedProfessionals = [
  {
    id: 1,
    name: "Dra. Ana García",
    specialty: "Psicóloga Clínica",
    matchPercentage: 95,
    availableSlots: [
      { date: "2023-06-15", time: "10:00" },
      { date: "2023-06-15", time: "14:00" },
      { date: "2023-06-16", time: "11:00" },
    ],
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Terapeuta Familiar",
    matchPercentage: 88,
    availableSlots: [
      { date: "2023-06-15", time: "16:00" },
      { date: "2023-06-17", time: "09:00" },
      { date: "2023-06-17", time: "15:00" },
    ],
  },
  // Add more professionals as needed
]

export default function ResultsPage() {
  const [selectedProfessional, setSelectedProfessional] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profesionales Recomendados</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {matchedProfessionals.map((professional) => (
          <Card key={professional.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${professional.name}`} />
                  <AvatarFallback>
                    {professional.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{professional.name}</CardTitle>
                  <CardDescription>{professional.specialty}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-2">
                {professional.matchPercentage}% de coincidencia
              </Badge>
              <p className="text-sm text-muted-foreground mb-4">Horarios disponibles:</p>
              <div className="grid grid-cols-2 gap-2">
                {professional.availableSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedProfessional(professional)
                      setSelectedSlot(slot)
                    }}
                  >
                    {new Date(slot.date).toLocaleDateString()} {slot.time}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={!selectedSlot || selectedProfessional?.id !== professional.id}>
                <Link
                  href={`/patient/payment?professionalId=${professional.id}&date=${selectedSlot?.date}&time=${selectedSlot?.time}`}
                >
                  Seleccionar y Pagar
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

