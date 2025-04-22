import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  // Find the doctor based on the ID from the URL
  const doctor = doctorsList.find((doc) => doc.id === params.id) || doctorsList[0]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Doctor Profile Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-blue-100 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <Link href="/doctors" className="text-blue-100 hover:text-white">
                Doctors
              </Link>
              <span>/</span>
              <span>{doctor.name}</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Dr. {doctor.name.split(" ")[1]}'s Profile</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{doctor.specialty}</p>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={doctor.image || "/placeholder.svg?height=400&width=300"}
                    alt={doctor.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold">Contact Information</h3>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+011-2222-3333 (Ext. {Math.floor(Math.random() * 900) + 100})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Mayom Hospital, Medical District</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-4">
                    <Link href={`/appointment?doctor=${doctor.id}`}>
                      <Button className="w-full">Book Appointment</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">{doctor.name}</h2>
                    <p className="text-blue-600">{doctor.specialty}</p>
                    <p className="mt-1 text-sm text-gray-500">{doctor.qualification}</p>
                    <div className="mt-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">4.0 (120 reviews)</span>
                    </div>
                  </div>

                  <Tabs defaultValue="about" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="education">Education & Experience</TabsTrigger>
                      <TabsTrigger value="specializations">Specializations</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="mt-6">
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {doctor.about ||
                            `Dr. ${
                              doctor.name.split(" ")[1]
                            } is a highly skilled and compassionate medical professional with extensive experience in ${
                              doctor.specialty
                            }. With a patient-centered approach to healthcare, ${
                              doctor.gender === "female" ? "she" : "he"
                            } is dedicated to providing exceptional care and improving patient outcomes.`}
                        </p>
                        <p className="text-gray-600">
                          {`${
                            doctor.gender === "female" ? "She" : "He"
                          } specializes in diagnosing and treating a wide range of conditions, utilizing the latest medical advancements and evidence-based practices. Patients appreciate ${
                            doctor.gender === "female" ? "her" : "his"
                          } thorough approach, clear communication, and commitment to personalized care.`}
                        </p>
                        <p className="text-gray-600">
                          {`In addition to clinical practice, Dr. ${
                            doctor.name.split(" ")[1]
                          } is actively involved in medical research and education, contributing to the advancement of ${
                            doctor.specialty
                          } and mentoring the next generation of healthcare professionals.`}
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="education" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold">Education</h3>
                          <ul className="mt-2 space-y-2">
                            {doctor.education?.map((edu, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="mt-1 text-blue-600">•</span>
                                <div>
                                  <p className="font-medium">{edu.degree}</p>
                                  <p className="text-sm text-gray-600">{edu.institution}</p>
                                  <p className="text-xs text-gray-500">{edu.year}</p>
                                </div>
                              </li>
                            )) || (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="mt-1 text-blue-600">•</span>
                                  <div>
                                    <p className="font-medium">
                                      {doctor.qualification.split(",")[0] || "Medical Degree"}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {doctor.qualification.includes("AIIMS")
                                        ? "All India Institute of Medical Sciences"
                                        : "Prestigious Medical Institution"}
                                    </p>
                                    <p className="text-xs text-gray-500">2005-2010</p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="mt-1 text-blue-600">•</span>
                                  <div>
                                    <p className="font-medium">Specialization in {doctor.specialty}</p>
                                    <p className="text-sm text-gray-600">Leading Medical Center</p>
                                    <p className="text-xs text-gray-500">2010-2013</p>
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">Experience</h3>
                          <ul className="mt-2 space-y-2">
                            {doctor.experience?.map((exp, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="mt-1 text-blue-600">•</span>
                                <div>
                                  <p className="font-medium">{exp.position}</p>
                                  <p className="text-sm text-gray-600">{exp.institution}</p>
                                  <p className="text-xs text-gray-500">{exp.period}</p>
                                </div>
                              </li>
                            )) || (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="mt-1 text-blue-600">•</span>
                                  <div>
                                    <p className="font-medium">Senior {doctor.specialty}</p>
                                    <p className="text-sm text-gray-600">Mayom Hospital</p>
                                    <p className="text-xs text-gray-500">2018-Present</p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="mt-1 text-blue-600">•</span>
                                  <div>
                                    <p className="font-medium">Consultant {doctor.specialty}</p>
                                    <p className="text-sm text-gray-600">City Medical Center</p>
                                    <p className="text-xs text-gray-500">2013-2018</p>
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="specializations" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold">Areas of Expertise</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {doctor.specializations?.map((spec, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <h4 className="font-medium">{spec}</h4>
                              </CardContent>
                            </Card>
                          )) ||
                            Array(6)
                              .fill(0)
                              .map((_, index) => (
                                <Card key={index}>
                                  <CardContent className="p-4">
                                    <h4 className="font-medium">
                                      {getSpecializationByDepartment(doctor.department || "", index)}
                                    </h4>
                                  </CardContent>
                                </Card>
                              ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Schedule */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Consultation Schedule</h2>
              <p className="mt-2 text-gray-600">Available time slots for appointments</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-lg border bg-white shadow">
                <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3 lg:grid-cols-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-bold">{day}</h3>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-blue-600" />
                          <span>9:00 AM - 1:00 PM</span>
                        </p>
                        {index % 2 === 0 && (
                          <p className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-blue-600" />
                            <span>4:00 PM - 7:00 PM</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t bg-gray-50 p-4 text-center">
                  <p className="text-sm text-gray-600">
                    Schedule is subject to change. Please confirm availability when booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Ready to Schedule an Appointment?</h2>
              <p className="mt-4 text-blue-100">
                Book a consultation with Dr. {doctor.name.split(" ")[1]} for expert medical advice and treatment.
              </p>
              <div className="mt-6">
                <Link href={`/appointment?doctor=${doctor.id}`}>
                  <Button size="lg" variant="secondary">
                    <Calendar className="mr-2 h-4 w-4" />
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

// Helper function to generate specializations based on department
function getSpecializationByDepartment(department: string, index: number): string {
  const departmentSpecializations: Record<string, string[]> = {
    cardiology: [
      "Coronary Artery Disease",
      "Heart Failure Management",
      "Cardiac Arrhythmias",
      "Interventional Cardiology",
      "Echocardiography",
      "Preventive Cardiology",
    ],
    neurology: [
      "Stroke Management",
      "Epilepsy Treatment",
      "Headache Disorders",
      "Movement Disorders",
      "Neuromuscular Diseases",
      "Multiple Sclerosis",
    ],
    orthopedics: [
      "Joint Replacement Surgery",
      "Sports Injuries",
      "Spine Disorders",
      "Trauma Care",
      "Pediatric Orthopedics",
      "Hand Surgery",
    ],
    pediatrics: [
      "Newborn Care",
      "Developmental Pediatrics",
      "Pediatric Infectious Diseases",
      "Childhood Immunizations",
      "Adolescent Medicine",
      "Behavioral Pediatrics",
    ],
    oncology: [
      "Breast Cancer Treatment",
      "Lung Cancer Management",
      "Gastrointestinal Oncology",
      "Hematologic Malignancies",
      "Cancer Immunotherapy",
      "Targeted Cancer Therapies",
    ],
    ent: [
      "Ear Infections",
      "Sinus Disorders",
      "Voice Disorders",
      "Head and Neck Cancer",
      "Hearing Loss",
      "Sleep Apnea",
    ],
    radiology: [
      "Diagnostic Imaging",
      "Interventional Radiology",
      "Neuroradiology",
      "Musculoskeletal Imaging",
      "Pediatric Radiology",
      "Breast Imaging",
    ],
  }

  const defaultSpecializations = [
    "General Consultations",
    "Preventive Care",
    "Chronic Disease Management",
    "Acute Care",
    "Health Screenings",
    "Patient Education",
  ]

  const specializations = departmentSpecializations[department] || defaultSpecializations
  return specializations[index % specializations.length]
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
    gender: "male",
  },
  {
    id: "dr-saurav-prakash",
    name: "Dr. Saurav Prakash",
    specialty: "Radiologist",
    qualification: "MBBS, MD - Radio Diagnosis/Radiology & Imaging",
    image: "/docs/drsaurav.webp",
    department: "radiology",
    gender: "male",
  },
  {
    id: "dr-arti-gupta",
    name: "Dr. Arti Gupta",
    specialty: "Pediatrician",
    qualification: "MD (Obst. Gynae), Kem Hospital, Mumbai. Infertility Specialist & Laparoscopic Surgeon",
    image: "/docs/drarti.webp",
    department: "pediatrics",
    gender: "female",
  },
  {
    id: "dr-deepa-aggarwal",
    name: "Dr. Deepa Aggarwal",
    specialty: "Consultant Pediatrician & Neonatologist",
    qualification: "MD, DNB, MNAMS, LHMC & Kalawati Saran Children's Hospital, New Delhi",
    image: "/docs/drdeepa.webp",
    department: "pediatrics",
    gender: "female",
  },
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    qualification: "MD, DM Cardiology, FACC",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Kumar",
    department: "cardiology",
    gender: "male",
    about:
      "Dr. Rajesh Kumar is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions. He specializes in interventional cardiology and has performed more than 5,000 cardiac procedures throughout his career. His expertise includes coronary angioplasty, stent placement, and management of heart failure.",
    education: [
      {
        degree: "DM Cardiology",
        institution: "All India Institute of Medical Sciences (AIIMS)",
        year: "2008-2011",
      },
      {
        degree: "MD Medicine",
        institution: "King George's Medical University",
        year: "2005-2008",
      },
      {
        degree: "MBBS",
        institution: "Maulana Azad Medical College",
        year: "2000-2005",
      },
    ],
    experience: [
      {
        position: "Senior Consultant Cardiologist",
        institution: "Mayom Hospital",
        period: "2018-Present",
      },
      {
        position: "Consultant Cardiologist",
        institution: "Apollo Hospitals",
        period: "2011-2018",
      },
    ],
    specializations: [
      "Interventional Cardiology",
      "Coronary Artery Disease",
      "Heart Failure Management",
      "Cardiac Arrhythmias",
      "Preventive Cardiology",
      "Echocardiography",
    ],
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    qualification: "MD, DM Neurology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Sharma",
    department: "neurology",
    gender: "female",
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic Surgeon",
    qualification: "MS Orthopedics, Fellowship in Joint Replacement",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Singh",
    department: "orthopedics",
    gender: "male",
  },
  {
    id: "dr-anita-desai",
    name: "Dr. Anita Desai",
    specialty: "Oncologist",
    qualification: "MD, DM Medical Oncology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Desai",
    department: "oncology",
    gender: "female",
  },
  {
    id: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    specialty: "Gastroenterologist",
    qualification: "MD, DM Gastroenterology",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Gupta",
    department: "gastroenterology",
    gender: "male",
  },
]
