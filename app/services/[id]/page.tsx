import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Find the service based on the ID from the URL
  const service = servicesList.find((svc) => svc.id === params.id) || servicesList[0]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Service Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="text-blue-100 hover:text-white">
                Services
              </Link>
              <span>/</span>
              <span>{service.name}</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{service.name}</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{service.description}</p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">About {service.name}</h2>
                <p className="mb-4 text-gray-600">{service.longDescription || service.description}</p>
                <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">Key Features</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {service.features?.map((feature, index) => <li key={index}>{feature}</li>) || (
                    <>
                      <li>State-of-the-art facilities and equipment</li>
                      <li>Experienced medical professionals</li>
                      <li>Patient-centered approach</li>
                      <li>Comprehensive care and follow-up</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={service.detailImage || service.image || "/placeholder.svg?height=400&width=600"}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <Tabs defaultValue="procedures" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="procedures">Procedures</TabsTrigger>
                <TabsTrigger value="facilities">Facilities & Equipment</TabsTrigger>
                <TabsTrigger value="team">Medical Team</TabsTrigger>
              </TabsList>
              <TabsContent value="procedures" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(service.procedures || defaultProcedures).map((procedure, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-bold">{procedure.name}</h3>
                        <p className="text-gray-600">{procedure.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="facilities" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(service.facilities || defaultFacilities).map((facility, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-bold">{facility.name}</h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="team" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(service.team || defaultTeam).map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="mb-4 flex justify-center">
                          <div className="overflow-hidden rounded-full">
                            <Image
                              src={member.image || "/placeholder.svg?height=100&width=100"}
                              alt={member.name}
                              width={100}
                              height={100}
                              className="h-24 w-24 object-cover"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold">{member.name}</h3>
                          <p className="text-blue-600">{member.position}</p>
                          <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Frequently Asked Questions</h2>
              <p className="mt-2 text-gray-600">Common questions about our {service.name}</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-4">
                {(service.faqs || defaultFaqs).map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Need {service.name}?</h2>
              <p className="mt-4 text-blue-100">
                Schedule an appointment with our expert team for high-quality healthcare services.
              </p>
              <div className="mt-6">
                <Link href={`/appointment?service=${service.id}`}>
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
const servicesList = [
  {
    id: "emergency-services",
    name: "Emergency Services",
    description:
      "24/7 emergency care for critical medical conditions, with a team of experienced emergency physicians and nurses.",
    image: "/placeholder.svg?height=200&width=400&text=Emergency+Services",
    longDescription:
      "Our Emergency Services department provides round-the-clock care for patients with acute illnesses, injuries, and life-threatening conditions. Equipped with state-of-the-art medical technology and staffed by a team of experienced emergency physicians, nurses, and support personnel, we are prepared to handle any medical emergency promptly and efficiently. Our emergency room is designed to provide immediate assessment, stabilization, and treatment for patients requiring urgent medical attention.",
    features: [
      "24/7 availability with no appointment necessary",
      "Rapid triage and assessment by experienced medical professionals",
      "Advanced life support capabilities",
      "Dedicated trauma bays for critical cases",
      "Direct access to laboratory and imaging services",
      "Seamless transition to inpatient care when necessary",
      "Follow-up care coordination",
    ],
    procedures: [
      {
        name: "Triage Assessment",
        description:
          "Initial evaluation to determine the severity of the condition and prioritize care based on medical urgency.",
      },
      {
        name: "Emergency Resuscitation",
        description:
          "Immediate life-saving interventions for patients with cardiac arrest, respiratory failure, or severe trauma.",
      },
      {
        name: "Trauma Management",
        description: "Comprehensive care for patients with injuries from accidents, falls, or other traumatic events.",
      },
      {
        name: "Cardiac Emergency Care",
        description: "Rapid response and treatment for heart attacks, arrhythmias, and other cardiac emergencies.",
      },
      {
        name: "Stroke Protocol",
        description: "Time-critical assessment and intervention for patients with symptoms of stroke.",
      },
      {
        name: "Emergency Surgery",
        description: "Immediate surgical intervention for life-threatening conditions requiring operative management.",
      },
    ],
    facilities: [
      {
        name: "Emergency Department",
        description: "Specially designed area with multiple treatment rooms equipped for various emergency situations.",
      },
      {
        name: "Trauma Center",
        description:
          "Dedicated facility for managing severe injuries with specialized equipment and trained personnel.",
      },
      {
        name: "Resuscitation Room",
        description:
          "Fully equipped space for managing cardiac arrests and other critical conditions requiring immediate intervention.",
      },
      {
        name: "Observation Unit",
        description:
          "Area for monitoring patients who require extended observation but not necessarily hospital admission.",
      },
      {
        name: "Point-of-Care Testing",
        description: "Immediate laboratory testing capabilities within the emergency department for rapid results.",
      },
      {
        name: "Dedicated Imaging Suite",
        description: "Direct access to X-ray, CT scan, and ultrasound for prompt diagnostic imaging.",
      },
    ],
    team: [
      {
        name: "Dr. Amit Verma",
        position: "Head of Emergency Medicine",
        description:
          "Board-certified emergency physician with over 15 years of experience in managing critical care and trauma cases.",
        image: "/placeholder.svg?height=100&width=100&text=Dr.+Verma",
      },
      {
        name: "Dr. Sunita Rao",
        position: "Emergency Physician",
        description:
          "Specialized in emergency cardiac care with extensive experience in managing acute coronary syndromes.",
        image: "/placeholder.svg?height=100&width=100&text=Dr.+Rao",
      },
      {
        name: "Nurse Priya Sharma",
        position: "Emergency Nursing Supervisor",
        description: "Certified emergency nurse with advanced training in trauma care and disaster management.",
        image: "/placeholder.svg?height=100&width=100&text=Nurse+Sharma",
      },
    ],
    faqs: [
      {
        question: "When should I go to the Emergency Room versus an Urgent Care Center?",
        answer:
          "You should go to the Emergency Room for life-threatening conditions such as chest pain, severe bleeding, difficulty breathing, severe burns, or major trauma. Urgent Care is more appropriate for non-life-threatening conditions like minor injuries, fever, or mild infections.",
      },
      {
        question: "What should I bring with me to the Emergency Room?",
        answer:
          "If possible, bring your identification, insurance information, a list of current medications, and information about any allergies or medical conditions. However, in a true emergency, don't delay seeking care if these items aren't readily available.",
      },
      {
        question: "How are patients prioritized in the Emergency Room?",
        answer:
          "Patients are seen based on the severity of their condition, not on a first-come, first-served basis. This triage system ensures that those with life-threatening conditions receive immediate attention.",
      },
      {
        question: "Will I be admitted to the hospital after an Emergency Room visit?",
        answer:
          "Not necessarily. Many patients are treated and released from the Emergency Room. Hospital admission depends on the severity of your condition and the need for ongoing care or monitoring.",
      },
    ],
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

// Default data for tabs when service-specific data is not available
const defaultProcedures = [
  {
    name: "Diagnostic Procedures",
    description: "Comprehensive tests and examinations for accurate assessment and diagnosis.",
  },
  {
    name: "Treatment Procedures",
    description: "Effective interventions tailored to address specific medical conditions.",
  },
  {
    name: "Preventive Services",
    description: "Proactive measures to maintain health and prevent disease development.",
  },
  {
    name: "Follow-up Care",
    description: "Ongoing monitoring and support to ensure optimal recovery and health maintenance.",
  },
  {
    name: "Emergency Response",
    description: "Immediate intervention for urgent medical situations requiring prompt attention.",
  },
  {
    name: "Specialized Consultations",
    description: "Expert advice and guidance from specialists in relevant medical fields.",
  },
]

const defaultFacilities = [
  {
    name: "Modern Equipment",
    description: "State-of-the-art technology and tools for accurate diagnosis and effective treatment.",
  },
  {
    name: "Dedicated Service Area",
    description: "Specially designed spaces optimized for specific medical services and procedures.",
  },
  {
    name: "Patient Comfort Amenities",
    description: "Features designed to enhance patient comfort and reduce anxiety during medical visits.",
  },
  {
    name: "Sterile Environment",
    description: "Maintained to the highest standards of cleanliness and infection control.",
  },
  {
    name: "Accessible Design",
    description: "Facilities designed to accommodate patients with various mobility needs and disabilities.",
  },
  {
    name: "Digital Integration",
    description: "Electronic systems for efficient record-keeping, communication, and service delivery.",
  },
]

const defaultTeam = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Department Head",
    description: "Experienced specialist with extensive training and expertise in the field.",
    image: "/placeholder.svg?height=100&width=100&text=Dr.+Kumar",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Senior Specialist",
    description: "Highly qualified professional dedicated to providing exceptional patient care.",
    image: "/placeholder.svg?height=100&width=100&text=Dr.+Sharma",
  },
  {
    name: "Nurse Anita Desai",
    position: "Head Nurse",
    description: "Certified nursing professional with specialized training in patient care and support.",
    image: "/placeholder.svg?height=100&width=100&text=Nurse+Desai",
  },
]

const defaultFaqs = [
  {
    question: "What are the operating hours for this service?",
    answer:
      "Our service is available Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. For emergencies outside these hours, please contact our 24/7 emergency department.",
  },
  {
    question: "Do I need an appointment for this service?",
    answer:
      "Yes, most services require an appointment to ensure you receive prompt attention and to minimize waiting time. However, emergency services are available without prior appointment.",
  },
  {
    question: "What insurance plans are accepted?",
    answer:
      "We accept most major insurance plans. Please contact our billing department or check with your insurance provider to confirm coverage for specific services.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Preparation varies depending on the specific service. You will receive detailed instructions when scheduling your appointment. Generally, bring your identification, insurance information, and a list of current medications.",
  },
]
