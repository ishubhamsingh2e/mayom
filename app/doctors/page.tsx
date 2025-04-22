import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Doctors Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>Doctors</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Our Doctors</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Meet our team of experienced medical professionals dedicated to providing exceptional healthcare.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="border-b py-6">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1 space-y-2">
                <label htmlFor="search-doctors" className="text-sm font-medium text-gray-700">
                  Search Doctors
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input id="search-doctors" placeholder="Search by name or specialty" className="pl-10" />
                </div>
              </div>
              <div className="w-full md:w-48">
                <label htmlFor="filter-department" className="text-sm font-medium text-gray-700">
                  Department
                </label>
                <Select>
                  <SelectTrigger id="filter-department">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="md:mb-0">Search</Button>
            </div>
          </div>
        </section>

        {/* Doctors List */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {doctorsList.map((doctor, index) => (
                <Link href={`/doctors/${doctor.id}`} key={index}>
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={doctor.image || "/placeholder.svg?height=300&width=300"}
                        alt={doctor.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold">{doctor.name}</h3>
                      <p className="text-blue-600">{doctor.specialty}</p>
                      <p className="mt-1 text-xs text-gray-500">{doctor.qualification}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Doctors */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Why Choose Our Doctors</h2>
              <p className="mt-2 text-gray-600">What sets our medical team apart</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {doctorFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Need Medical Consultation?</h2>
              <p className="mt-4 text-blue-100">
                Schedule an appointment with our expert doctors for personalized medical advice and treatment.
              </p>
              <div className="mt-6">
                <Link href="/appointment">
                  <Button size="lg" variant="secondary">
                    Book an Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Data
const doctorsList = [
  {
    id: "dr-manish-prakash",
    name: "Dr. Manish Prakash",
    specialty: "ENT & Head Neck Cancer Surgeon",
    qualification: "MS(AIIMS), DNB, Gold Medalist & Mukut Saharia Awardee, DOHNS(Royal College of Surgeons, England)",
    image: "/docs/drmanish.webp",
    department: "ent",
  },
  {
    id: "dr-saurav-prakash",
    name: "Dr. Saurav Prakash",
    specialty: "Radiologist",
    qualification: "MBBS, MD - Radio Diagnosis/Radiology & Imaging",
    image: "/docs/drsaurav.webp",
    department: "radiology",
  },
  {
    id: "dr-arti-gupta",
    name: "Dr. Arti Gupta",
    specialty: "Pediatrician",
    qualification: "MD (Obst. Gynae), Kem Hospital, Mumbai. Infertility Specialist & Laparoscopic Surgeon",
    image: "/docs/drarti.webp",
    department: "pediatrics",
  },
  {
    id: "dr-deepa-aggarwal",
    name: "Dr. Deepa Aggarwal",
    specialty: "Consultant Pediatrician & Neonatologist",
    qualification: "MD, DNB, MNAMS, LHMC & Kalawati Saran Children's Hospital, New Delhi",
    image: "/docs/drdeepa.webp",
    department: "pediatrics",
  },
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    qualification: "MD, DM Cardiology, FACC",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Kumar",
    department: "cardiology",
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    qualification: "MD, DM Neurology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Sharma",
    department: "neurology",
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic Surgeon",
    qualification: "MS Orthopedics, Fellowship in Joint Replacement",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Singh",
    department: "orthopedics",
  },
  {
    id: "dr-anita-desai",
    name: "Dr. Anita Desai",
    specialty: "Oncologist",
    qualification: "MD, DM Medical Oncology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Desai",
    department: "oncology",
  },
  {
    id: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    specialty: "Gastroenterologist",
    qualification: "MD, DM Gastroenterology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Gupta",
    department: "gastroenterology",
  },
]

const doctorFeatures = [
  {
    title: "Experienced Specialists",
    description: "Our doctors are highly qualified specialists with years of experience in their respective fields.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Patient-Centered Care",
    description: "We prioritize personalized care that addresses each patient's unique needs and concerns.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    title: "Continuous Education",
    description: "Our doctors regularly update their knowledge and skills through continuing medical education.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Collaborative Approach",
    description: "Our doctors work together across specialties to provide comprehensive, coordinated care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
]
