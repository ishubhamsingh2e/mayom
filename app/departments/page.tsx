import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function DepartmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Departments Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>Departments</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Our Departments</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Specialized medical departments equipped with advanced technology and staffed by experienced
              professionals.
            </p>
          </div>
        </section>

        {/* Departments List */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departmentsList.map((department, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100">
                    <Image
                      src={department.image || "/placeholder.svg?height=200&width=400"}
                      alt={department.name}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-xl font-bold">{department.name}</h2>
                    <p className="text-gray-600">{department.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Link href={`/departments/${department.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Departments */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Why Choose Our Departments</h2>
              <p className="mt-2 text-gray-600">What sets our medical departments apart</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {departmentFeatures.map((feature, index) => (
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

        {/* Department Facilities */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Facilities</h2>
              <p className="mt-2 text-gray-600">State-of-the-art equipment and comfortable environments</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {facilities.map((facility, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={facility.image || "/placeholder.svg?height=200&width=400"}
                    alt={facility.name}
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover"
                  />
                  <div className="bg-white p-4">
                    <h3 className="text-lg font-bold">{facility.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Need Medical Assistance?</h2>
              <p className="mt-4 text-blue-100">
                Our departments are staffed with expert doctors ready to provide you with the best medical care.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/appointment">
                  <Button size="lg" variant="secondary">
                    Book an Appointment
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button size="lg" variant="outline" className="bg-blue-700 text-white hover:bg-blue-800">
                    Find a Doctor
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
const departmentsList = [
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Our Cardiology department specializes in diagnosing and treating heart conditions with advanced technology and expert cardiologists.",
    image: "/placeholder.svg?height=200&width=400&text=Cardiology",
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "The Neurology department focuses on disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
    image: "/placeholder.svg?height=200&width=400&text=Neurology",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Our Orthopedics department provides comprehensive care for musculoskeletal conditions, injuries, and disorders.",
    image: "/placeholder.svg?height=200&width=400&text=Orthopedics",
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description:
      "The Gastroenterology department specializes in diagnosing and treating disorders of the digestive system and related organs.",
    image: "/placeholder.svg?height=200&width=400&text=Gastroenterology",
  },
  {
    id: "oncology",
    name: "Oncology",
    description:
      "Our Oncology department offers comprehensive cancer care, including diagnosis, treatment, and supportive services.",
    image: "/placeholder.svg?height=200&width=400&text=Oncology",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "The Pediatrics department provides specialized healthcare for infants, children, and adolescents up to 18 years of age.",
    image: "/placeholder.svg?height=200&width=400&text=Pediatrics",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description:
      "Our Dermatology department focuses on diagnosing and treating conditions related to the skin, hair, and nails.",
    image: "/placeholder.svg?height=200&width=400&text=Dermatology",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description:
      "The Ophthalmology department specializes in eye care, including diagnosis and treatment of eye disorders and vision problems.",
    image: "/placeholder.svg?height=200&width=400&text=Ophthalmology",
  },
]

const departmentFeatures = [
  {
    title: "Expert Specialists",
    description: "Each department is led by experienced specialists who are leaders in their respective fields.",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    description:
      "We utilize the latest medical technology and equipment for accurate diagnosis and effective treatment.",
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
        <rect width="18" height="12" x="3" y="6" rx="2"></rect>
        <path d="M5 12h14"></path>
        <path d="M12 6v12"></path>
      </svg>
    ),
  },
  {
    title: "Collaborative Care",
    description: "Our departments work together to provide comprehensive, coordinated care for complex conditions.",
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
  {
    title: "Patient-Centered Approach",
    description: "We prioritize patient comfort, education, and involvement in treatment decisions.",
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
]

const facilities = [
  {
    name: "Advanced Imaging Center",
    image: "/placeholder.svg?height=200&width=400&text=Imaging+Center",
  },
  {
    name: "Modern Operating Theaters",
    image: "/placeholder.svg?height=200&width=400&text=Operating+Theaters",
  },
  {
    name: "Intensive Care Units",
    image: "/placeholder.svg?height=200&width=400&text=ICU",
  },
  {
    name: "Rehabilitation Center",
    image: "/placeholder.svg?height=200&width=400&text=Rehabilitation",
  },
  {
    name: "Laboratory Services",
    image: "/placeholder.svg?height=200&width=400&text=Laboratory",
  },
  {
    name: "Outpatient Clinics",
    image: "/placeholder.svg?height=200&width=400&text=Outpatient+Clinics",
  },
]
