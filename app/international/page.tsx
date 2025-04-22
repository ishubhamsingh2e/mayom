import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function InternationalPatientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1 text-blue-100 hover:text-white transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span className="text-blue-200">International Patients</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              International Patients
            </h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Comprehensive healthcare services for patients from around the
              world, with personalized assistance to make your medical journey
              comfortable and hassle-free.
            </p>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Welcome to Mayom Hospital
                </h2>
                <p className="mb-4 text-gray-600">
                  At Mayom Hospital, we understand that seeking medical
                  treatment abroad can be a challenging experience. Our
                  International Patient Services department is dedicated to
                  making your healthcare journey as smooth and comfortable as
                  possible.
                </p>
                <p className="mb-4 text-gray-600">
                  We provide world-class medical care combined with personalized
                  assistance for international patients, including help with
                  travel arrangements, accommodation, language interpretation,
                  and cultural support.
                </p>
                <p className="text-gray-600">
                  With state-of-the-art facilities, internationally trained
                  doctors, and a patient-centered approach, we are committed to
                  delivering exceptional healthcare services to patients from
                  around the globe.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=International+Patients"
                  alt="International Patients"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
