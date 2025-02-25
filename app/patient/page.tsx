"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function PatientPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    preferredProfessionalAge: "",
    preferredProfessionalGender: "",
    preferredProfessionalInsurance: "",
    consultationReason: [],
    diagnosis: [],
    familyHistory: "",
    personalHistory: "",
    therapyType: "",
    preferredModality: "",
    preferredTheoreticalApproach: "",
    preferredProfessionalGenderFinal: "",
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
      <h1 className="text-2xl font-bold mb-6 text-primary">Encuentra tu Profesional de Salud Mental Ideal</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Paso {step} de 5</CardTitle>
          <CardDescription>Por favor, completa la siguiente información</CardDescription>
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
                <Label>Prefiere que el profesional tenga:</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredProfessionalAge", value)}
                  value={formData.preferredProfessionalAge}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="22-35" id="prof-age-22-35" />
                    <Label htmlFor="prof-age-22-35">Entre 22 y 35 años</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="36-50" id="prof-age-36-50" />
                    <Label htmlFor="prof-age-36-50">Entre 36 y 50 años</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="51+" id="prof-age-51+" />
                    <Label htmlFor="prof-age-51+">51 años o más</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Indistinto" id="prof-age-indistinto" />
                    <Label htmlFor="prof-age-indistinto">Indistinto</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label>Prefiere que el profesional sea:</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredProfessionalGender", value)}
                  value={formData.preferredProfessionalGender}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mujer" id="prof-gender-female" />
                    <Label htmlFor="prof-gender-female">Mujer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Varón" id="prof-gender-male" />
                    <Label htmlFor="prof-gender-male">Varón</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Otro" id="prof-gender-other" />
                    <Label htmlFor="prof-gender-other">Otro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Indistinto" id="prof-gender-indistinto" />
                    <Label htmlFor="prof-gender-indistinto">Indistinto</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>¿Prefiere que el profesional cuente con obra social?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredProfessionalInsurance", value)}
                  value={formData.preferredProfessionalInsurance}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Si" id="prof-insurance-yes" />
                    <Label htmlFor="prof-insurance-yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="prof-insurance-no" />
                    <Label htmlFor="prof-insurance-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Indistinto" id="prof-insurance-indistinto" />
                    <Label htmlFor="prof-insurance-indistinto">Indistinto</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label>¿Cuál es su motivo de consulta?</Label>
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
                  ].map((reason) => (
                    <div key={reason} className="flex items-center space-x-2">
                      <Checkbox
                        id={`reason-${reason}`}
                        checked={formData.consultationReason.includes(reason)}
                        onCheckedChange={() => handleMultiSelect("consultationReason", reason)}
                      />
                      <label htmlFor={`reason-${reason}`}>{reason}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div>
                <Label>Ha sido diagnosticado con:</Label>
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
                        checked={formData.diagnosis.includes(diagnosis)}
                        onCheckedChange={() => handleMultiSelect("diagnosis", diagnosis)}
                      />
                      <label htmlFor={`diagnosis-${diagnosis}`}>{diagnosis}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="familyHistory">¿Cuenta con antecedentes familiares?</Label>
                <Textarea
                  id="familyHistory"
                  value={formData.familyHistory}
                  onChange={(e) => handleInputChange("familyHistory", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="personalHistory">¿Cuenta con antecedentes personales?</Label>
                <Textarea
                  id="personalHistory"
                  value={formData.personalHistory}
                  onChange={(e) => handleInputChange("personalHistory", e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <div>
                <Label>¿Qué tipo de terapia desea realizar?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("therapyType", value)}
                  value={formData.therapyType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Individual" id="therapy-individual" />
                    <Label htmlFor="therapy-individual">Individual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Grupal" id="therapy-group" />
                    <Label htmlFor="therapy-group">Grupal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pareja" id="therapy-couple" />
                    <Label htmlFor="therapy-couple">Pareja</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Familiar" id="therapy-family" />
                    <Label htmlFor="therapy-family">Familiar</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>¿Qué modalidad prefiere?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredModality", value)}
                  value={formData.preferredModality}
                >
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
                <Label>¿Desea que su profesional sea de alguna corriente teórica en específico?</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredTheoreticalApproach", value)}
                  value={formData.preferredTheoreticalApproach}
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
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Indistinto" id="approach-indistinct" />
                    <Label htmlFor="approach-indistinct">Indistinto</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>Prefiere que su profesional sea:</Label>
                <RadioGroup
                  onValueChange={(value) => handleInputChange("preferredProfessionalGenderFinal", value)}
                  value={formData.preferredProfessionalGenderFinal}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Varón" id="prof-gender-final-male" />
                    <Label htmlFor="prof-gender-final-male">Varón</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mujer" id="prof-gender-final-female" />
                    <Label htmlFor="prof-gender-final-female">Mujer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Otro" id="prof-gender-final-other" />
                    <Label htmlFor="prof-gender-final-other">Otro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Indistinto" id="prof-gender-final-indistinct" />
                    <Label htmlFor="prof-gender-final-indistinct">Indistinto</Label>
                  </div>
                </RadioGroup>
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
            <Button onClick={() => console.log(formData)}>Buscar Profesionales</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

