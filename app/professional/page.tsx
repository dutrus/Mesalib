"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProfessionalPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    phoneNumber: "",
    email: "",
    profession: "",
    licenseNumber: "",
    ageGroups: [],
    acceptsInsurance: "",
    problemsHandled: [],
    diagnosesHandled: [],
    therapyTypes: [],
    modality: "",
    officeAddress: "",
    theoreticalApproach: "",
    specialization: "",
    additionalInfo: "",
  })

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMultiSelect = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item: string) => item !== value)
        : [...prev[field], value],
    }))
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-primary">Perfil del Profesional de Salud Mental</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Paso {step} de 5</CardTitle>
          <CardDescription>Por favor, complete la siguiente información</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="age">Edad</Label>
                <Input id="age" value={formData.age} onChange={(e) => handleInputChange("age", e.target.value)} />
              </div>
              <div>
                <Label>Género</Label>
                <RadioGroup onValueChange={(value) => handleInputChange("gender", value)} value={formData.gender}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mujer" id="gender-female" />
                    <Label htmlFor="gender-female">Mujer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Varón" id="gender-male" />
                    <Label htmlFor="gender-male">Varón</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Otro" id="gender-other" />
                    <Label htmlFor="gender-other">Otro</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="phoneNumber">Número de teléfono</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="profession">¿Cuál es su profesión?</Label>
                <Input
                  id="profession"
                  value={formData.profession}
                  onChange={(e) => handleInputChange("profession", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="licenseNumber">Número de matrícula</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label>¿Qué rango etario atiende? (puede seleccionar más de una opción)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Niños y niñas", "Adolescentes", "Adultos"].map((ageGroup) => (
                    <div key={ageGroup} className="flex items-center space-x-2">
                      <Checkbox
                        id={`ageGroup-${ageGroup}`}
                        checked={formData.ageGroups.includes(ageGroup)}
                        onCheckedChange={() => handleMultiSelect("ageGroups", ageGroup)}
                      />
                      <label htmlFor={`ageGroup-${ageGroup}`}>{ageGroup}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label>¿Recibe obra social?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("acceptsInsurance", value)}
                  value={formData.acceptsInsurance}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Si" id="insurance-yes" />
                    <Label htmlFor="insurance-yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="insurance-no" />
                    <Label htmlFor="insurance-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label>¿Qué problemáticas atiende?</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Violencia familiar",
                    "Violencia de género",
                    "Duelo",
                    "Temáticas ligadas al género",
                    "Temáticas ligadas al consumo de sustancias",
                    "Tiene problemas con su pareja",
                    "Orientación vocacional",
                    "Autolesiones",
                    "Riesgo suicida",
                    "Estrés",
                    "Ansiedad",
                    "Otro",
                  ].map((problem) => (
                    <div key={problem} className="flex items-center space-x-2">
                      <Checkbox
                        id={`problem-${problem}`}
                        checked={formData.problemsHandled.includes(problem)}
                        onCheckedChange={() => handleMultiSelect("problemsHandled", problem)}
                      />
                      <label htmlFor={`problem-${problem}`}>{problem}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div>
                <Label>¿Qué diagnósticos atiende?</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Trastornos del desarrollo neurológico",
                    "Espectro de la esquizofrenia y otros trastornos psicóticos",
                    "Bipolaridad",
                    "Depresión",
                    "Ataques de pánico",
                    "Diagnóstico de alguna enfermedad física",
                    "TOC (trastorno obsesivo-compulsivo)",
                    "Trastornos relacionados con traumas y factores de estrés",
                    "Trastornos disociativos",
                    "Trastorno de síntomas somáticos y trastornos relacionados",
                    "TCA (trastornos de conducta alimentaria)",
                    "TDAH (trastorno de déficit atencional)",
                    "Disfunciones sexuales",
                    "Trastornos destructivos del control de los impulsos y de la conducta",
                    "Consumo problemático",
                    "Trastornos neurocognitivos",
                    "Trastornos de la personalidad",
                    "Otros trastornos mentales o problemas que pueden ser objeto de atención clínica",
                    "Ninguna",
                  ].map((diagnosis) => (
                    <div key={diagnosis} className="flex items-center space-x-2">
                      <Checkbox
                        id={`diagnosis-${diagnosis}`}
                        checked={formData.diagnosesHandled.includes(diagnosis)}
                        onCheckedChange={() => handleMultiSelect("diagnosesHandled", diagnosis)}
                      />
                      <label htmlFor={`diagnosis-${diagnosis}`}>{diagnosis}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <div>
                <Label>¿Qué tipo de terapia lleva adelante?</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Individual", "Grupal", "Pareja", "Familiar"].map((therapyType) => (
                    <div key={therapyType} className="flex items-center space-x-2">
                      <Checkbox
                        id={`therapyType-${therapyType}`}
                        checked={formData.therapyTypes.includes(therapyType)}
                        onCheckedChange={() => handleMultiSelect("therapyTypes", therapyType)}
                      />
                      <label htmlFor={`therapyType-${therapyType}`}>{therapyType}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label>¿Con qué modalidad atiende?</Label>
                <RadioGroup onValueChange={(value) => handleInputChange("modality", value)} value={formData.modality}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Presencial" id="modality-presencial" />
                    <Label htmlFor="modality-presencial">Presencial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Virtual" id="modality-virtual" />
                    <Label htmlFor="modality-virtual">Virtual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Presencial o virtual" id="modality-both" />
                    <Label htmlFor="modality-both">Presencial o virtual</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="officeAddress">
                  En caso de que atienda de manera presencial o mixta, ¿dónde atiende? Indique la dirección del lugar en
                  el que trabaja
                </Label>
                <Textarea
                  id="officeAddress"
                  value={formData.officeAddress}
                  onChange={(e) => handleInputChange("officeAddress", e.target.value)}
                />
              </div>
              <div>
                <Label>¿A qué corriente pertenece?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("theoreticalApproach", value)}
                  value={formData.theoreticalApproach}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Cognitivo-conductual" id="approach-cbt" />
                    <Label htmlFor="approach-cbt">Cognitivo-conductual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Psicoanálisis" id="approach-psychoanalysis" />
                    <Label htmlFor="approach-psychoanalysis">Psicoanálisis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sistémica" id="approach-systemic" />
                    <Label htmlFor="approach-systemic">Sistémica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Gestáltica" id="approach-gestalt" />
                    <Label htmlFor="approach-gestalt">Gestáltica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Otra" id="approach-other" />
                    <Label htmlFor="approach-other">Otra</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="specialization">¿Cuenta con algún tipo de especialización?</Label>
                <Input
                  id="specialization"
                  value={formData.specialization}
                  onChange={(e) => handleInputChange("specialization", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="additionalInfo">Información y comentarios adicionales (opcional)</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              Anterior
            </Button>
          )}
          {step < 5 ? (
            <Button onClick={nextStep}>Siguiente</Button>
          ) : (
            <Button onClick={() => console.log(formData)}>Guardar Perfil</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

