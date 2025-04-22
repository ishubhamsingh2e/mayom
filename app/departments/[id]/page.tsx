import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DepartmentDetailPage({ params }: { params: { id: string } }) {
  // Find the department based on the ID from the URL
  const department = departmentsList.find((dept) => dept.id === params.id) || departmentsList[0]

  // Find doctors in this department
  const departmentDoctors = doctors.filter((doctor) => doctor.department === department.id)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Department Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <Link href="/departments" className="text-blue-100 hover:text-white">
                Departments
              </Link>
              <span>/</span>
              <span>{department.name}</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{department.name} Department</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{department.description}</p>
          </div>
        </section>

        {/* Department Overview */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">About {department.name}</h2>
                <p className="mb-4 text-gray-600">{department.longDescription || department.description}</p>
                <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">Key Services</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {department.services?.map((service, index) => <li key={index}>{service}</li>) || (
                    <>
                      <li>Comprehensive diagnosis and treatment</li>
                      <li>Advanced medical procedures</li>
                      <li>Preventive care and patient education</li>
                      <li>Follow-up care and rehabilitation</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={department.detailImage || department.image || "/placeholder.svg?height=400&width=600"}
                  alt={department.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Department Tabs */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <Tabs defaultValue="facilities" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="facilities">Facilities & Equipment</TabsTrigger>
                <TabsTrigger value="procedures">Common Procedures</TabsTrigger>
                <TabsTrigger value="conditions">Conditions Treated</TabsTrigger>
              </TabsList>
              <TabsContent value="facilities" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(department.facilities || defaultFacilities).map((facility, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-bold">{facility.name}</h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="procedures" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(department.procedures || defaultProcedures).map((procedure, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-bold">{procedure.name}</h3>
                        <p className="text-gray-600">{procedure.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="conditions" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(department.conditions || defaultConditions).map((condition, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-bold">{condition.name}</h3>
                        <p className="text-gray-600">{condition.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Department Doctors */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Meet Our {department.name} Specialists</h2>
              <p className="mt-2 text-gray-600">Experienced doctors dedicated to providing exceptional care</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departmentDoctors.length > 0 ? (
                departmentDoctors.map((doctor, index) => (
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
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-gray-600">No specialists currently listed for this department.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Need a Consultation?</h2>
              <p className="mt-4 text-blue-100">
                Schedule an appointment with our {department.name} specialists for expert medical advice and treatment.
              </p>
              <div className="mt-6">
                <Link href={`/appointment?department=${department.id}`}>
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
const departmentsList = [
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Our Cardiology department specializes in diagnosing and treating heart conditions with advanced technology and expert cardiologists.",
    image: "/placeholder.svg?height=200&width=400&text=Cardiology",
    longDescription:
      "The Cardiology Department at Mayom Hospital is dedicated to the prevention, diagnosis, and treatment of cardiovascular diseases. Our team of experienced cardiologists utilizes state-of-the-art technology to provide comprehensive care for heart conditions. From routine check-ups to complex cardiac procedures, we are committed to delivering the highest standard of cardiac care to our patients.",
    services: [
      "Comprehensive cardiac evaluation",
      "Electrocardiogram (ECG/EKG)",
      "Echocardiography",
      "Stress testing",
      "Holter monitoring",
      "Cardiac catheterization",
      "Angioplasty and stent placement",
      "Pacemaker implantation",
      "Cardiac rehabilitation",
    ],
    facilities: [
      {
        name: "Cardiac Catheterization Lab",
        description:
          "Advanced facility for diagnostic and interventional cardiac procedures, equipped with the latest imaging technology.",
      },
      {
        name: "Non-invasive Cardiac Testing",
        description:
          "Comprehensive suite for ECG, echocardiography, stress testing, and other non-invasive cardiac diagnostics.",
      },
      {
        name: "Cardiac Intensive Care Unit",
        description:
          "Specialized unit for monitoring and treating patients with acute cardiac conditions, staffed by experienced cardiac nurses.",
      },
    ],
    procedures: [
      {
        name: "Coronary Angiography",
        description:
          "Diagnostic procedure to visualize the coronary arteries and identify blockages or narrowing that may require treatment.",
      },
      {
        name: "Angioplasty and Stenting",
        description:
          "Minimally invasive procedure to open blocked or narrowed coronary arteries and improve blood flow to the heart.",
      },
      {
        name: "Pacemaker Implantation",
        description: "Surgical procedure to implant a small device that helps regulate abnormal heart rhythms.",
      },
    ],
    conditions: [
      {
        name: "Coronary Artery Disease",
        description:
          "Narrowing or blockage of the coronary arteries that supply blood to the heart, often leading to chest pain or heart attack.",
      },
      {
        name: "Heart Failure",
        description:
          "Condition where the heart cannot pump enough blood to meet the body's needs, causing symptoms like fatigue and shortness of breath.",
      },
      {
        name: "Arrhythmias",
        description: "Abnormal heart rhythms that can cause the heart to beat too fast, too slow, or irregularly.",
      },
    ],
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

const doctors = [
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
]

// Default data for tabs when department-specific data is not available
const defaultFacilities = [
  {
    name: "Diagnostic Equipment",
    description: "State-of-the-art diagnostic tools for accurate assessment and diagnosis.",
  },
  {
    name: "Treatment Rooms",
    description: "Comfortable, private spaces for consultations and outpatient procedures.",
  },
  {
    name: "Specialized Ward",
    description: "Dedicated inpatient area with specialized care for department-specific conditions.",
  },
]

const defaultProcedures = [
  {
    name: "Diagnostic Procedures",
    description: "Comprehensive tests and examinations to accurately diagnose conditions.",
  },
  {
    name: "Minimally Invasive Treatments",
    description: "Advanced procedures that minimize recovery time and patient discomfort.",
  },
  {
    name: "Surgical Interventions",
    description: "When necessary, surgical options performed by experienced specialists.",
  },
]

const defaultConditions = [
  {
    name: "Acute Conditions",
    description: "Sudden onset conditions requiring immediate medical attention.",
  },
  {
    name: "Chronic Conditions",
    description: "Long-term conditions requiring ongoing management and care.",
  },
  {
    name: "Preventive Care",
    description: "Services aimed at preventing the development or progression of medical conditions.",
  },
]
