import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* About Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>About</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Mayom Hospital</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Providing exceptional healthcare services with compassion and integrity since 2005.
            </p>
          </div>
        </section>

        {/* Hospital Overview */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Hospital</h2>
                <p className="mb-4 text-gray-600">
                  Mayom Hospital is a premier healthcare institution committed to providing exceptional medical care
                  with compassion and integrity. Established in 2005, we have grown to become one of the leading
                  healthcare providers in the region, serving over 100,000 patients with a wide range of medical
                  services.
                </p>
                <p className="mb-4 text-gray-600">
                  Our state-of-the-art facilities, combined with a team of highly skilled medical professionals, ensure
                  that patients receive the highest standard of care. We continuously invest in advanced medical
                  technology and training to stay at the forefront of healthcare innovation.
                </p>
                <p className="text-gray-600">
                  At Mayom Hospital, we believe in a patient-centered approach, where each individual receives
                  personalized care tailored to their specific needs. Our commitment to excellence in healthcare extends
                  beyond treatment to include preventive care, health education, and community outreach programs.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Hospital+Building"
                  alt="Mayom Hospital Building"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Mission, Vision & Values</h2>
              <p className="mt-2 text-gray-600">The principles that guide our approach to healthcare</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide exceptional healthcare services with compassion and integrity, ensuring the well-being of
                    our patients and community. We strive to deliver accessible, high-quality care that improves health
                    outcomes and enhances quality of life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading healthcare provider known for excellence in patient care, medical innovation, and
                    community service. We aim to set new standards in healthcare delivery, pioneering advancements that
                    benefit patients locally and globally.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Our Values</h3>
                  <p className="text-gray-600">
                    Compassion, Excellence, Integrity, Respect, and Innovation guide our approach to healthcare delivery
                    and patient relationships. These core values are embedded in every aspect of our operations and
                    interactions with patients, families, and the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our History</h2>
              <p className="mt-2 text-gray-600">The journey of Mayom Hospital through the years</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                {historyTimeline.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.year}</h3>
                      <p className="mt-2 text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Leadership Team</h2>
              <p className="mt-2 text-gray-600">Meet the experienced professionals guiding our hospital</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadershipTeam.map((leader, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="overflow-hidden rounded-full">
                        <Image
                          src={leader.image || "/placeholder.svg?height=120&width=120"}
                          alt={leader.name}
                          width={120}
                          height={120}
                          className="h-24 w-24 object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold">{leader.name}</h3>
                      <p className="text-blue-600">{leader.position}</p>
                      <p className="mt-2 text-sm text-gray-600">{leader.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Accreditations</h2>
              <p className="mt-2 text-gray-600">Recognized for excellence in healthcare standards</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {accreditations.map((accreditation, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={accreditation.logo || "/placeholder.svg?height=80&width=200"}
                        alt={accreditation.name}
                        width={200}
                        height={80}
                        className="h-20 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{accreditation.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{accreditation.description}</p>
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
              <h2 className="text-2xl font-bold md:text-3xl">Experience Excellence in Healthcare</h2>
              <p className="mt-4 text-blue-100">
                Schedule an appointment with our expert doctors and experience the highest standard of medical care.
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
const historyTimeline = [
  {
    year: "2005",
    event:
      "Mayom Hospital was founded with a vision to provide quality healthcare services to the community. Starting with just 20 beds and a small team of dedicated doctors.",
  },
  {
    year: "2010",
    event:
      "Expanded facilities to include 50 beds and added specialized departments for Cardiology, Neurology, and Orthopedics. Introduced advanced diagnostic equipment.",
  },
  {
    year: "2015",
    event:
      "Achieved major accreditations for quality healthcare standards. Opened a dedicated research wing to contribute to medical advancements.",
  },
  {
    year: "2020",
    event:
      "Completed a major expansion to 100 beds. Introduced cutting-edge robotic surgery capabilities and telemedicine services to reach more patients.",
  },
  {
    year: "2025",
    event:
      "Celebrating 20 years of excellence in healthcare with the inauguration of a new wing dedicated to advanced treatments and research in emerging medical fields.",
  },
]

const leadershipTeam = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Chief Executive Officer",
    bio: "With over 25 years of experience in healthcare management and medical practice, Dr. Kumar has led Mayom Hospital to new heights of excellence and innovation.",
    image: "/placeholder.svg?height=120&width=120&text=Dr.+Kumar",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Medical Director",
    bio: "A renowned cardiologist with extensive experience in clinical leadership, Dr. Sharma ensures the highest standards of medical care across all departments.",
    image: "/placeholder.svg?height=120&width=120&text=Dr.+Sharma",
  },
  {
    name: "Mr. Vikram Singh",
    position: "Chief Operations Officer",
    bio: "An expert in healthcare operations with a focus on patient experience, Mr. Singh oversees the day-to-day operations of the hospital with efficiency and compassion.",
    image: "/placeholder.svg?height=120&width=120&text=Mr.+Singh",
  },
]

const accreditations = [
  {
    name: "National Accreditation Board for Hospitals & Healthcare Providers (NABH)",
    description: "Recognized for meeting the highest standards in healthcare delivery and patient safety.",
    logo: "/placeholder.svg?height=80&width=200&text=NABH",
  },
  {
    name: "Joint Commission International (JCI)",
    description: "Accredited for excellence in healthcare quality and patient safety at international standards.",
    logo: "/placeholder.svg?height=80&width=200&text=JCI",
  },
  {
    name: "International Organization for Standardization (ISO 9001:2015)",
    description: "Certified for implementing effective quality management systems in healthcare services.",
    logo: "/placeholder.svg?height=80&width=200&text=ISO",
  },
]
