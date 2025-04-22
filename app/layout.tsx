import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mayom Hospital - Excellence in Healthcare",
  description: "Providing quality healthcare services with advanced medical technology and experienced professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            {/* Sticky Top Info Bar */}
            <div className="sticky top-0 z-50 bg-white shadow-sm">
              <div className="bg-blue-50 py-2">
                <div className="container flex items-center justify-between text-sm">
                  <div className="md:flex items-center md:space-x-4">
                    <Link className="flex items-center space-x-1" href="tel:+011-2222-3333">
                      <Phone className="h-3 w-3 text-blue-600" />
                      <span>+011-2222-3333</span>
                    </Link>
                    <Link className="flex items-center space-x-1" href="mailto:info@mayomhospital.com">
                      <Mail className="h-3 w-3 text-blue-600" />
                      <span>info@mayomhospital.com</span>
                    </Link>
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
                      <Image src="/logo.jpg" alt="Mayom Hospital" width={180} height={60} className="h-12 w-auto" />
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
                    <Link href="/appointment">
                      <Button variant="default" size="sm" className="text-white">
                        BOOK APPOINTMENT
                      </Button>
                    </Link>
                  </nav>
                </div>
              </header>
            </div>

            {children}

            {/* Departments and Services */}
            <section className="border-t bg-white py-12">
              <div className="container">
                <div className="grid gap-8 md:grid-cols-4">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-blue-600">OUR DEPARTMENTS</h3>
                    <ul className="space-y-2 text-sm">
                      {departments.map((dept, index) => (
                        <li key={index}>
                          <Link
                            href={`/departments/${dept.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-blue-600"
                          >
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
                          <Link
                            href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-blue-600"
                          >
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
                          <Link
                            href={`/international/${service.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-blue-600"
                          >
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
                        <span className="mr-2 mt-0.5 text-blue-600">📍</span>
                        <span>123 Hospital Street, Medical District, City - 110001</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">📞</span>
                        <span>+011-2222-3333</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">✉️</span>
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
                      To provide exceptional healthcare services with compassion and integrity, ensuring the well-being
                      of our patients and community.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-lg font-semibold text-blue-600">OUR VISION</h3>
                    <p className="text-sm text-gray-600">
                      To be the leading healthcare provider known for excellence in patient care, medical innovation,
                      and community service.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-lg font-semibold text-blue-600">OUR VALUES</h3>
                    <p className="text-sm text-gray-600">
                      Compassion, Excellence, Integrity, Respect, and Innovation guide our approach to healthcare
                      delivery and patient relationships.
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
                          <span className="mr-1 mt-0.5 text-blue-300">›</span>
                          <Link href="/blogs" className="text-blue-100 hover:text-white">
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
                          <Link
                            href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-blue-100 hover:text-white"
                          >
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
                        <span className="mr-2 mt-0.5 text-blue-300">📍</span>
                        <span>123 Hospital Street, Medical District, City - 110001</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-300">📞</span>
                        <span>+011-2222-3333</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-300">✉️</span>
                        <span>info@mayomhospital.com</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-300">🕒</span>
                        <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-6 h-px bg-blue-800" />

                <div className="mt-6 mb-6">
                  <h3 className="mb-3 text-lg font-semibold">PAYMENT METHODS</h3>
                  <div className="flex flex-wrap gap-3">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="rounded bg-blue-800 px-3 py-1 text-xs text-blue-100">
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
        </ThemeProvider>
      </body>
    </html>
  )
}

// Data for footer and other sections
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
