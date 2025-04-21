import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ArrowRight,
  Menu,
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Top Info Bar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="bg-blue-50 py-2">
          <div className="container flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-blue-600" />
                <span>+011-2222-3333</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3 text-blue-600" />
                <span>info@mayomhospital.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="border-b bg-white">
          <div className="container flex flex-col py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Mayom Hospital"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>

            <nav className="mt-4 hidden md:mt-0 md:flex md:items-center md:space-x-6 lg:space-x-8">
              <Link href="/about" className="text-xs text-gray-600 hover:text-blue-600">
                ABOUT
              </Link>
              <Link href="/departments" className="text-xs text-gray-600 hover:text-blue-600">
                DEPARTMENTS
              </Link>
              <Link href="/doctors" className="text-xs text-gray-600 hover:text-blue-600">
                DOCTORS
              </Link>
              <Link href="/services" className="text-xs text-gray-600 hover:text-blue-600">
                SERVICES
              </Link>
              <Link href="/international" className="text-xs text-gray-600 hover:text-blue-600">
                INTERNATIONAL PATIENTS
              </Link>
              <Link href="/blogs" className="text-xs text-gray-600 hover:text-blue-600">
                BLOGS
              </Link>
              <Button variant="default" size="sm" className="text-white">
                BOOK APPOINTMENT
              </Button>
            </nav>
          </div>
        </header>
      </div>

      {/* <QuickActions /> */}

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
                        <h1 className="text-2xl font-bold md:text-5xl">
                          Excellence in Healthcare
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                          Providing quality healthcare services with advanced medical technology and experienced professionals.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant={"secondary"} size={"lg"}>Learn More</Button>
                          <Button size={"lg"}>Book Appointment</Button>
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
                        <h1 className="text-2xl font-bold md:text-5xl">
                          Advanced Medical Care
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                          State-of-the-art facilities and cutting-edge treatments for optimal patient outcomes.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant={"secondary"} size={"lg"}>Learn More</Button>
                          <Button size={"lg"}>Book Appointment</Button>
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
        <section className="py-8 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {quickServiceButtons.map((service, index) => (
                <Link href={"/"}>
                  <Card key={index} className="py-4">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="mb-3 rounded-full bg-blue-100 p-3 text-blue-600">{service.icon}</div>
                      <h3 className="text-sm font-medium">{service.name}</h3>
                      <Button variant="link" size="sm" className="text-blue-600 h-auto p-0">
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
                <Card key={index} className="border-none bg-white shadow-sm transition-all hover:shadow-md">
                  <CardContent className="flex flex-col items-center p-4 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium md:text-base">{service.name}</h3>
                  </CardContent>
                </Card>
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
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={doctor.image}
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
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Doctors <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                    <Button size="sm">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
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

      {/* Departments and Services */}
      <section className="border-t bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-600">OUR DEPARTMENTS</h3>
              <ul className="space-y-2 text-sm">
                {departments.map((dept, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                      {dept}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-600">OUR SERVICES</h3>
              <ul className="space-y-2 text-sm">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-600">INTERNATIONAL PATIENTS</h3>
              <ul className="space-y-2 text-sm">
                {internationalServices.map((service, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-600">CONTACT US</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-4 w-4 text-blue-600" />
                  <span>123 Hospital Street, Medical District, City - 110001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-blue-600" />
                  <span>+011-2222-3333</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-blue-600" />
                  <span>info@mayomhospital.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="border-t bg-gray-50 py-8">
        <div className="container">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-900">ABOUT US</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-blue-600">OUR MISSION</h3>
              <p className="text-sm text-gray-600">
                To provide exceptional healthcare services with compassion and integrity, ensuring the well-being of our
                patients and community.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-blue-600">OUR VISION</h3>
              <p className="text-sm text-gray-600">
                To be the leading healthcare provider known for excellence in patient care, medical innovation, and
                community service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-blue-600">OUR VALUES</h3>
              <p className="text-sm text-gray-600">
                Compassion, Excellence, Integrity, Respect, and Innovation guide our approach to healthcare delivery and
                patient relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-8 text-white">
        <div className="container">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Mayom Hospital"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold">RECENT POSTS</h3>
              <ul className="space-y-3 text-sm">
                {recentPosts.map((post, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="mr-1 mt-0.5 h-3 w-3 text-blue-300" />
                    <Link href="#" className="text-blue-100 hover:text-white">
                      {post}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">OUR SERVICES</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <Link href="#" className="text-blue-100 hover:text-white">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">REACH US</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-4 w-4 text-blue-300" />
                  <span>123 Hospital Street, Medical District, City - 110001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-blue-300" />
                  <span>+011-2222-3333</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-blue-300" />
                  <span>info@mayomhospital.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-blue-300" />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6 bg-blue-800" />

          <div className="mt-6 mb-6">
            <h3 className="mb-3 text-lg font-semibold">PAYMENT METHODS</h3>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-blue-800 px-3 py-1 rounded text-xs text-blue-100">
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-blue-200">
            <p>© {new Date().getFullYear()} Mayom Hospital. All Rights Reserved. Designed by Mayom Hospital.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Add the quickServiceButtons array before the specializedServices array
const quickServiceButtons = [
  {
    name: "Appointment Booking",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Lab Reports",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Doctor Schedule",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    name: "Emergency Care",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    name: "Online Consultation",
    icon: <Video className="h-5 w-5" />,
  },
  {
    name: "Health Packages",
    icon: <Package className="h-5 w-5" />,
  },
]

// Data
const specializedServices = [
  {
    name: "Cardiology",
    icon: (
      <Heart className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Neurology",
    icon: (
      <Brain className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Orthopedics",
    icon: (
      <Bone className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Gastroenterology",
    icon: (
      <ChefHat className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Oncology",
    icon: (
      <Ribbon className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Pediatrics",
    icon: (
      <Apple className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Dermatology",
    icon: (
      <User className="h-6 w-6 text-blue-600" />
    ),
  },
  {
    name: "Ophthalmology",
    icon: (
      <Eye className="h-6 w-6 text-blue-600" />
    ),
  },
]

const doctors = [
  {
    name: "Dr. Manish Prakash",
    specialty: "ENT & Head Neck Cancer Surgeon",
    qualification: "MS(AIIMS), DNB, Gold Medalist & Mukut Saharia Awardee, DOHNS(Royal College of Surgeons, England)",
    image: "/docs/drmanish.webp",
  },
  {
    name: "Dr. Saurav Prakash",
    specialty: "Radiologist",
    qualification: "MBBS, MD - Radio Diagnosis/Radiology & Imaging",
    image: "/docs/drsaurav.webp",
  },
  {
    name: "Dr. Arti Gupta",
    specialty: "Pediatrician",
    qualification: "MD (Obst. Gynae), Kem Hospital, Mumbai. Infertility Specialist & Laparoscopic Surgeon",
    image: "/docs/drarti.webp",
  },
  {
    name: "Dr. Deepa Aggarwal",
    specialty: "Consultant Pediatrician & Neonatologist",
    qualification: "MD, DNB, MNAMS, LHMC & Kalawati Saran Children's Hospital, New Delhi",
    image: "/docs/drdeepa.webp",
  },
]

const blogs = [
  {
    title: "Understanding Heart Health: Tips for a Healthy Cardiovascular System",
    excerpt:
      "Learn about the importance of heart health and discover practical tips to maintain a healthy cardiovascular system through diet, exercise, and lifestyle changes.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Role of Regular Check-ups in Preventive Healthcare",
    excerpt:
      "Regular medical check-ups play a crucial role in preventive healthcare. Find out how routine examinations can help detect health issues early and improve treatment outcomes.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Managing Diabetes: A Comprehensive Guide for Patients",
    excerpt:
      "A detailed guide for diabetes patients covering medication management, diet planning, exercise routines, and lifestyle adjustments to effectively control blood sugar levels.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "UPI",
  "PayTM",
  "Google Pay",
  "PhonePe",
  "Amazon Pay",
]

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Gastroenterology",
  "Oncology",
  "Pediatrics",
  "Dermatology",
  "Ophthalmology",
]

const services = [
  "Emergency Services",
  "Laboratory Services",
  "Radiology",
  "Pharmacy",
  "Physiotherapy",
  "Ambulance Services",
  "Health Check-ups",
  "Vaccination",
]

const internationalServices = [
  "Medical Visa Assistance",
  "Airport Pickup",
  "Language Interpreters",
  "Accommodation",
  "Currency Exchange",
  "Travel Arrangements",
  "Telemedicine",
  "Follow-up Care",
]

const recentPosts = [
  "New Advanced MRI Machine Installed at Mayom Hospital",
  "Mayom Hospital Celebrates World Health Day with Free Health Check-ups",
  "Dr. Rajesh Kumar Receives International Recognition for Cardiac Research",
  "Mayom Hospital Launches New Telemedicine Services for Remote Consultations",
  "Health Tips: Managing Stress in Today's Fast-Paced World",
]

const footerServices = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "Dermatology",
  "Ophthalmology",
  "Physiotherapy",
]


const stats = [
  { id: 1, name: 'Treated Over Patients', value: '100,000+' },
  { id: 2, name: 'Expert Doctors', value: '50+' },
  { id: 3, name: 'Years of Experience', value: '20+' },
]