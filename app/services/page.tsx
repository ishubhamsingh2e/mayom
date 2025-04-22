import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Services Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Our Services</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Comprehensive healthcare services designed to meet all your medical needs with excellence and compassion.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesList.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100">
                    <Image
                      src={service.image || "/placeholder.svg?height=200&width=400"}
                      alt={service.name}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-xl font-bold">{service.name}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Link href={`/services/${service.id}`} className="w-full">
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

        {/* Service Benefits */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Why Choose Our Services</h2>
              <p className="mt-2 text-gray-600">The benefits of choosing Mayom Hospital for your healthcare needs</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {benefit.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Health Packages */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Health Packages</h2>
              <p className="mt-2 text-gray-600">Comprehensive health check-up packages for preventive care</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {healthPackages.map((package_, index) => (
                <Card key={index} className={index === 1 ? "border-blue-600 shadow-md" : ""}>
                  {index === 1 && (
                    <div className="bg-blue-600 py-1 text-center text-sm font-medium text-white">Most Popular</div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{package_.name}</h3>
                    <p className="mt-2 text-gray-600">{package_.description}</p>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-blue-600">₹{package_.price}</p>
                      <p className="text-sm text-gray-500">Includes all tests and consultation</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {package_.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="mt-1 text-blue-600">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Link href="/appointment?package=health-package" className="w-full">
                      <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                        Book Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
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
                Our team of healthcare professionals is ready to provide you with the best medical services.
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
const servicesList = [
  {
    id: "emergency-services",
    name: "Emergency Services",
    description:
      "24/7 emergency care for critical medical conditions, with a team of experienced emergency physicians and nurses.",
    image: "/placeholder.svg?height=200&width=400&text=Emergency+Services",
  },
  {
    id: "laboratory-services",
    name: "Laboratory Services",
    description: "Comprehensive diagnostic testing with state-of-the-art equipment for accurate and timely results.",
    image: "/placeholder.svg?height=200&width=400&text=Laboratory+Services",
  },
  {
    id: "radiology",
    name: "Radiology",
    description: "Advanced imaging services including X-ray, CT scan, MRI, and ultrasound for precise diagnosis.",
    image: "/placeholder.svg?height=200&width=400&text=Radiology",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    description:
      "In-house pharmacy providing a wide range of medications and pharmaceutical products for patient convenience.",
    image: "/placeholder.svg?height=200&width=400&text=Pharmacy",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Rehabilitation services to help patients recover from injuries, surgeries, and manage chronic conditions.",
    image: "/placeholder.svg?height=200&width=400&text=Physiotherapy",
  },
  {
    id: "ambulance-services",
    name: "Ambulance Services",
    description: "Prompt and reliable emergency transportation with fully equipped ambulances and trained paramedics.",
    image: "/placeholder.svg?height=200&width=400&text=Ambulance+Services",
  },
  {
    id: "health-check-ups",
    name: "Health Check-ups",
    description:
      "Comprehensive health screening packages for preventive care and early detection of potential health issues.",
    image: "/placeholder.svg?height=200&width=400&text=Health+Check-ups",
  },
  {
    id: "vaccination",
    name: "Vaccination",
    description: "Immunization services for all age groups, including routine vaccinations and travel vaccines.",
    image: "/placeholder.svg?height=200&width=400&text=Vaccination",
  },
]

const serviceBenefits = [
  {
    title: "Expert Medical Team",
    description: "Our services are provided by highly qualified specialists with extensive experience in their fields.",
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
    title: "Comprehensive Care",
    description: "Our integrated approach ensures all your healthcare needs are addressed under one roof.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
]

const healthPackages = [
  {
    name: "Basic Health Check-up",
    description: "Essential health screening for routine check-ups",
    price: "2,999",
    features: [
      "Complete Blood Count",
      "Lipid Profile",
      "Blood Sugar Test",
      "Liver Function Test",
      "Kidney Function Test",
      "Chest X-ray",
      "ECG",
      "Doctor Consultation",
    ],
  },
  {
    name: "Comprehensive Health Check-up",
    description: "Detailed health assessment for thorough evaluation",
    price: "5,999",
    features: [
      "All Basic Health Check-up Tests",
      "Thyroid Profile",
      "Vitamin D, B12 & Folate",
      "Cardiac Risk Markers",
      "Pulmonary Function Test",
      "Abdominal Ultrasound",
      "Treadmill Test (TMT)",
      "Specialist Consultation",
    ],
  },
  {
    name: "Executive Health Check-up",
    description: "Premium health screening for comprehensive assessment",
    price: "9,999",
    features: [
      "All Comprehensive Health Check-up Tests",
      "Tumor Markers",
      "Bone Density Scan",
      "CT Scan (as recommended)",
      "MRI (as recommended)",
      "Stress Management Session",
      "Nutritional Counseling",
      "Follow-up Consultations",
    ],
  },
]
