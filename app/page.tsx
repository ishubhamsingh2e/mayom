import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Clock,
  ArrowRight,
  Calendar,
  FileText,
  Video,
  Package,
  Heart,
  Brain,
  Bone,
  ChefHat,
  Ribbon,
  Apple,
  User,
  Eye,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section Carousel */}
        <section className="relative">
          <div className="container relative py-8">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Item 1 */}
                <CarouselItem>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                    <Image
                      src="/banner-hospital.webp"
                      alt="Medical Slide 1"
                      width={1200}
                      height={400}
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00367C]/70 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center p-6 md:p-16">
                      <div className="max-w-md text-white">
                        <h1 className="text-2xl font-bold md:text-5xl">Excellence in Healthcare</h1>
                        <p className="mt-2 text-sm md:text-base">
                          Providing quality healthcare services with advanced medical technology and experienced
                          professionals.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link href="/about">
                            <Button variant={"secondary"} size={"lg"}>
                              Learn More
                            </Button>
                          </Link>
                          <Link href="/appointment">
                            <Button size={"lg"}>Book Appointment</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Item 2 */}
                <CarouselItem>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                    <Image
                      src="/banner-team.webp"
                      alt="Medical Slide 2"
                      width={1200}
                      height={400}
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00367C]/70 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center p-6 md:p-16">
                      <div className="max-w-md text-white">
                        <h1 className="text-2xl font-bold md:text-5xl">Advanced Medical Care</h1>
                        <p className="mt-2 text-sm md:text-base">
                          State-of-the-art facilities and cutting-edge treatments for optimal patient outcomes.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link href="/services">
                            <Button variant={"secondary"} size={"lg"}>
                              Learn More
                            </Button>
                          </Link>
                          <Link href="/appointment">
                            <Button size={"lg"}>Book Appointment</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        {/* Quick Service Buttons */}
        <section className="bg-gray-50 py-8">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {quickServiceButtons.map((service, index) => (
                <Link href={service.link} key={index}>
                  <Card className="py-4">
                    <CardContent className="flex flex-col items-center p-4 text-center">
                      <div className="mb-3 rounded-full bg-blue-100 p-3 text-blue-600">{service.icon}</div>
                      <h3 className="text-sm font-medium">{service.name}</h3>
                      <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Specialized Services</h2>
              <p className="mt-2 text-gray-600">Expert care in specialized medical fields</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {specializedServices.map((service, index) => (
                <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                  <Card className="border-none bg-white shadow-sm transition-all hover:shadow-md">
                    <CardContent className="flex flex-col items-center p-4 text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        {service.icon}
                      </div>
                      <h3 className="text-sm font-medium md:text-base">{service.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Doctors */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Meet Our Doctors</h2>
              <p className="mt-2 text-gray-600">Experienced professionals dedicated to your health</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor, index) => (
                <Link href={`/doctors/${doctor.id}`} key={index}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          width={300}
                          height={300}
                          className="h-[300px] w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="text-lg font-bold">{doctor.name}</CardTitle>
                      <p className="text-sm text-blue-600">{doctor.specialty}</p>
                      <p className="mt-1 text-xs text-gray-500">{doctor.qualification}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/doctors">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All Doctors <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Patient Feedback */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Patient Feedback Videos</h2>
              <p className="mt-2 text-gray-600">Hear what our patients have to say about their experience</p>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((item) => (
                  <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="aspect-video bg-gray-200">
                          <div className="flex h-full items-center justify-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-16 w-16 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                            >
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
                                className="h-8 w-8"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              <span className="sr-only">Play Video</span>
                            </Button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">Patient Testimonial {item}</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Patient sharing their experience with our hospital services
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Medical Blogs */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Medical Blogs</h2>
              <p className="mt-2 text-gray-600">Stay informed with the latest medical insights and health tips</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {blogs.map((blog, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="line-clamp-2 text-lg font-bold">{blog.title}</CardTitle>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-600">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blogs/${blog.id}`}>
                      <Button size="sm">Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/blogs">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All Blogs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Find Us</h2>
              <p className="mt-2 text-gray-600">Visit our hospital at a convenient location</p>
            </div>
            <div className="overflow-hidden rounded-lg border shadow-sm">
              <div className="aspect-[16/9] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7122497100054!2d77.06099357633087!3d28.458089375760505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ef46a5e2f1%3A0x544c27cb86824c5f!2sMayom%20Hospital!5e0!3m2!1sen!2sus!4v1745146017602!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Add the quickServiceButtons array before the specializedServices array
const quickServiceButtons = [
  {
    name: "Appointment Booking",
    icon: <Calendar className="h-5 w-5" />,
    link: "/appointment",
  },
  {
    name: "Lab Reports",
    icon: <FileText className="h-5 w-5" />,
    link: "/services/laboratory-services",
  },
  {
    name: "Doctor Schedule",
    icon: <Clock className="h-5 w-5" />,
    link: "/doctors",
  },
  {
    name: "Emergency Care",
    icon: <Phone className="h-5 w-5" />,
    link: "/services/emergency-services",
  },
  {
    name: "Online Consultation",
    icon: <Video className="h-5 w-5" />,
    link: "/appointment?type=online",
  },
  {
    name: "Health Packages",
    icon: <Package className="h-5 w-5" />,
    link: "/services/health-check-ups",
  },
]

// Data
const specializedServices = [
  {
    name: "Cardiology",
    icon: <Heart className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Neurology",
    icon: <Brain className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Gastroenterology",
    icon: <ChefHat className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Oncology",
    icon: <Ribbon className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Pediatrics",
    icon: <Apple className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Dermatology",
    icon: <User className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-6 w-6 text-blue-600" />,
  },
]

const doctors = [
  {
    id: "dr-manish-prakash",
    name: "Dr. Manish Prakash",
    specialty: "ENT & Head Neck Cancer Surgeon",
    qualification: "MS(AIIMS), DNB, Gold Medalist & Mukut Saharia Awardee, DOHNS(Royal College of Surgeons, England)",
    image: "/docs/drmanish.webp",
  },
  {
    id: "dr-saurav-prakash",
    name: "Dr. Saurav Prakash",
    specialty: "Radiologist",
    qualification: "MBBS, MD - Radio Diagnosis/Radiology & Imaging",
    image: "/docs/drsaurav.webp",
  },
  {
    id: "dr-arti-gupta",
    name: "Dr. Arti Gupta",
    specialty: "Pediatrician",
    qualification: "MD (Obst. Gynae), Kem Hospital, Mumbai. Infertility Specialist & Laparoscopic Surgeon",
    image: "/docs/drarti.webp",
  },
  {
    id: "dr-deepa-aggarwal",
    name: "Dr. Deepa Aggarwal",
    specialty: "Consultant Pediatrician & Neonatologist",
    qualification: "MD, DNB, MNAMS, LHMC & Kalawati Saran Children's Hospital, New Delhi",
    image: "/docs/drdeepa.webp",
  },
]

const blogs = [
  {
    id: "heart-health-tips",
    title: "Understanding Heart Health: Tips for a Healthy Cardiovascular System",
    excerpt:
      "Learn about the importance of heart health and discover practical tips to maintain a healthy cardiovascular system through diet, exercise, and lifestyle changes.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "regular-checkups",
    title: "The Role of Regular Check-ups in Preventive Healthcare",
    excerpt:
      "Regular medical check-ups play a crucial role in preventive healthcare. Find out how routine examinations can help detect health issues early and improve treatment outcomes.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "managing-diabetes",
    title: "Managing Diabetes: A Comprehensive Guide for Patients",
    excerpt:
      "A detailed guide for diabetes patients covering medication management, diet planning, exercise routines, and lifestyle adjustments to effectively control blood sugar levels.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const stats = [
  { id: 1, name: "Treated Over Patients", value: "100,000+" },
  { id: 2, name: "Expert Doctors", value: "50+" },
  { id: 3, name: "Years of Experience", value: "20+" },
]
