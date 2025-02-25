"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Users, Video, MapPin, DollarSign, Calendar, Heart } from "lucide-react"
import { motion } from "framer-motion"

// Simulated data for professionals
const professionals = [
  {
    id: 1,
    name: "Dra. Ana García",
    specialty: "Terapia Cognitivo-Conductual",
    age: "Adultos",
    mode: "Virtual",
    price: 80,
    nextAvailable: "Mañana",
  },
  {
    id: 2,
    name: "Lic. Carlos Rodríguez",
    specialty: "Terapia Familiar",
    age: "Todas las edades",
    mode: "Presencial",
    price: 100,
    nextAvailable: "En 2 días",
  },
  {
    id: 3,
    name: "Dra. Laura Martínez",
    specialty: "Psicoanálisis",
    age: "Adultos",
    mode: "Virtual",
    price: 120,
    nextAvailable: "Hoy",
  },
  {
    id: 4,
    name: "Dr. Miguel Sánchez",
    specialty: "Terapia Infantil",
    age: "Niños",
    mode: "Presencial",
    price: 90,
    nextAvailable: "En 3 días",
  },
  {
    id: 5,
    name: "Lic. Sofia Torres",
    specialty: "Terapia de Pareja",
    age: "Adultos",
    mode: "Virtual",
    price: 110,
    nextAvailable: "Mañana",
  },
]

export default function MentalHealthProfessionalFinder() {
  const [age, setAge] = useState("")
  const [therapyType, setTherapyType] = useState("")
  const [mode, setMode] = useState("")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [results, setResults] = useState(professionals)
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    handleSearch()
  }, [age, therapyType, mode, priceRange])

  const handleSearch = () => {
    const filteredResults = professionals.filter(
      (pro) =>
        (age === "" || pro.age.includes(age)) &&
        (therapyType === "" || pro.specialty === therapyType) &&
        (mode === "" || pro.mode === mode) &&
        pro.price >= priceRange[0] &&
        pro.price <= priceRange[1],
    )
    setResults(filteredResults)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Encuentra tu Profesional de Salud Mental Ideal</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Criterios de Búsqueda</CardTitle>
            <CardDescription>Selecciona tus preferencias para encontrar el profesional adecuado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="age">Edad del Paciente</Label>
              <Select onValueChange={setAge}>
                <SelectTrigger id="age">
                  <SelectValue placeholder="Selecciona un rango de edad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Niños">Niños</SelectItem>
                  <SelectItem value="Adolescentes">Adolescentes</SelectItem>
                  <SelectItem value="Adultos">Adultos</SelectItem>
                  <SelectItem value="Adultos Mayores">Adultos Mayores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="therapyType">Tipo de Terapia</Label>
              <Select onValueChange={setTherapyType}>
                <SelectTrigger id="therapyType">
                  <SelectValue placeholder="Selecciona un tipo de terapia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Terapia Cognitivo-Conductual">Terapia Cognitivo-Conductual</SelectItem>
                  <SelectItem value="Terapia Familiar">Terapia Familiar</SelectItem>
                  <SelectItem value="Psicoanálisis">Psicoanálisis</SelectItem>
                  <SelectItem value="Terapia Infantil">Terapia Infantil</SelectItem>
                  <SelectItem value="Terapia de Pareja">Terapia de Pareja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Modalidad</Label>
              <RadioGroup onValueChange={setMode} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Virtual" id="virtual" />
                  <Label htmlFor="virtual">Virtual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Presencial" id="presencial" />
                  <Label htmlFor="presencial">Presencial</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label>Rango de Precios (por sesión)</Label>
              <Slider min={0} max={200} step={10} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
              <div className="flex justify-between mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
            <CardDescription>Profesionales que se ajustan a tus criterios</CardDescription>
          </CardHeader>
          <CardContent>
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map((pro) => (
                  <motion.li
                    key={pro.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow relative"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xl font-semibold">{pro.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{pro.name}</h3>
                        <p className="text-sm text-gray-600">{pro.specialty}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => toggleFavorite(pro.id)}
                      >
                        <Heart
                          className={`w-5 h-5 ${favorites.includes(pro.id) ? "fill-red-500 text-red-500" : "text-gray-500"}`}
                        />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Users className="w-4 h-4" /> {pro.age}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        {pro.mode === "Virtual" ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}{" "}
                        {pro.mode}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> ${pro.price} por sesión
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> Próxima disponibilidad: {pro.nextAvailable}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Ver perfil completo
                    </Button>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">
                No se encontraron resultados. Por favor, ajusta tus criterios de búsqueda.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

