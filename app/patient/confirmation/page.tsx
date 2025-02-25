"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()

  const professionalId = searchParams.get("professionalId")
  const date = searchParams.get("date")
  const time = searchParams.get("time")

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-center">¡Cita Confirmada!</CardTitle>
          <CardDescription className="text-center">Su cita ha sido programada exitosamente</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Detalles de la Cita:</p>
            <p>Fecha: {new Date(date).toLocaleDateString()}</p>
            <p>Hora: {time}</p>
            <p>ID del Profesional: {professionalId}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Recibirá un correo electrónico con más detalles y instrucciones para su cita.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/patient/dashboard" passHref>
            <Button className="w-full">Volver al Dashboard</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

