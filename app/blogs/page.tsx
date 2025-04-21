import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Blog Header */}
        <section className="bg-blue-600 py-12 text-white">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-blue-100 hover:text-white flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>Blogs</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Medical Blogs</h1>
            <p className="mt-4 max-w-2xl text-blue-100">
              Stay informed with the latest medical insights, health tips, and hospital news from our expert doctors and
              healthcare professionals.
            </p>
          </div>
        </section>

        {/* Featured Blog */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>April 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Dr. Rajesh Kumar</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">
                      Understanding Heart Health: Tips for a Healthy Cardiovascular System
                    </CardTitle>
                    <CardDescription>
                      Learn about the importance of heart health and discover practical tips to maintain a healthy
                      cardiovascular system through diet, exercise, and lifestyle changes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Heart disease remains one of the leading causes of death worldwide. However, many heart conditions
                      are preventable through lifestyle modifications and regular check-ups. This comprehensive guide
                      explores evidence-based strategies to maintain optimal heart health and reduce your risk of
                      cardiovascular disease.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Read Full Article</Button>
                  </CardFooter>
                </div>
                <div className="order-1 md:order-2">
                  <div className="h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Heart Health"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">Blog Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {blogCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-40 bg-blue-100">
                    <Image
                      src={category.image || "/placeholder.svg?height=160&width=320"}
                      alt={category.name}
                      width={320}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm">
                      View Articles
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">Recent Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentBlogs.map((blog, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={blog.image || "/placeholder.svg?height=200&width=400"}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg font-bold">{blog.title}</CardTitle>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-600">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-blue-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mt-2 text-muted-foreground">
                Stay updated with the latest medical insights and hospital news delivered to your inbox.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Blog data
const blogCategories = [
  {
    name: "Heart Health",
    description: "Articles about cardiovascular health and heart disease prevention",
    image: "/placeholder.svg?height=160&width=320&text=Heart+Health",
  },
  {
    name: "Pediatric Care",
    description: "Information on children's health and development",
    image: "/placeholder.svg?height=160&width=320&text=Pediatric+Care",
  },
  {
    name: "Mental Wellness",
    description: "Resources for mental health awareness and care",
    image: "/placeholder.svg?height=160&width=320&text=Mental+Wellness",
  },
  {
    name: "Nutrition & Diet",
    description: "Guidance on healthy eating and dietary requirements",
    image: "/placeholder.svg?height=160&width=320&text=Nutrition",
  },
]

const recentBlogs = [
  {
    title: "Understanding Heart Health: Tips for a Healthy Cardiovascular System",
    excerpt:
      "Learn about the importance of heart health and discover practical tips to maintain a healthy cardiovascular system through diet, exercise, and lifestyle changes.",
    image: "/placeholder.svg?height=200&width=400&text=Heart+Health",
    date: "April 15, 2025",
    author: "Dr. Rajesh Kumar",
  },
  {
    title: "The Role of Regular Check-ups in Preventive Healthcare",
    excerpt:
      "Regular medical check-ups play a crucial role in preventive healthcare. Find out how routine examinations can help detect health issues early and improve treatment outcomes.",
    image: "/placeholder.svg?height=200&width=400&text=Checkups",
    date: "April 10, 2025",
    author: "Dr. Priya Sharma",
  },
  {
    title: "Managing Diabetes: A Comprehensive Guide for Patients",
    excerpt:
      "A detailed guide for diabetes patients covering medication management, diet planning, exercise routines, and lifestyle adjustments to effectively control blood sugar levels.",
    image: "/placeholder.svg?height=200&width=400&text=Diabetes",
    date: "April 5, 2025",
    author: "Dr. Anita Desai",
  },
  {
    title: "Advances in Minimally Invasive Surgery Techniques",
    excerpt:
      "Explore the latest innovations in minimally invasive surgical procedures that reduce recovery time and improve patient outcomes across various medical specialties.",
    image: "/placeholder.svg?height=200&width=400&text=Surgery",
    date: "March 28, 2025",
    author: "Dr. Vikram Singh",
  },
  {
    title: "Understanding Allergies: Causes, Symptoms, and Treatments",
    excerpt:
      "An in-depth look at common allergies, their triggers, how to recognize symptoms, and the most effective treatment options available for allergy sufferers.",
    image: "/placeholder.svg?height=200&width=400&text=Allergies",
    date: "March 22, 2025",
    author: "Dr. Meera Patel",
  },
  {
    title: "The Importance of Vaccination: Protecting Individual and Public Health",
    excerpt:
      "Learn about the critical role vaccines play in preventing disease, how they work, and why maintaining vaccination schedules is essential for community health.",
    image: "/placeholder.svg?height=200&width=400&text=Vaccination",
    date: "March 15, 2025",
    author: "Dr. Sanjay Gupta",
  },
]
