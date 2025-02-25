"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("credit_card")

  const professionalId = searchParams.get("professionalId")
  const date = searchParams.get("date")
  const time = searchParams.get("time")

  const handlePayment = () => {
    // Here you would typically process the payment
    // For this example, we'll just simulate a successful payment
    router.push(`/patient/confirmation?professionalId=${professionalId}&date=${date}&time=${time}`)
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Pago de Cita</CardTitle>
          <CardDescription>Complete los detalles de pago para confirmar su cita</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Detalles de la Cita</Label>
            <p className="text-sm text-muted-foreground">
              Fecha: {new Date(date).toLocaleDateString()}, Hora: {time}
            </p>
          </div>
          <div>
            <Label>Método de Pago</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit_card" id="credit_card" />
                <Label htmlFor="credit_card">Tarjeta de Crédito</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debit_card" id="debit_card" />
                <Label htmlFor="debit_card">Tarjeta de Débito</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </RadioGroup>
          </div>
          {(paymentMethod === "credit_card" || paymentMethod === "debit_card") && (
            <>
              <div>
                <Label htmlFor="card_number">Número de Tarjeta</Label>
                <Input id="card_number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Fecha de Expiración</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handlePayment}>
            Pagar y Confirmar Cita
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

