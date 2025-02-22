import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Zap, MapPin, Phone, Mail, Search, Paperclip } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[url('https://www.hashtagmotion.co.uk/wp-content/uploads/2018/06/about_us_background.jpg')] bg-cover text-white py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 uppercase">About Us</h1>
            <p className="text-lg md:text-xl font-semibold text-gray-400 mb-8">
              Your Coverage, Your Way...
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h2>
                <p className="text-base md:text-lg mb-4">
                  Founded in 2006, Aaxel Insurance is an independent insurance
                  broker serving throughout Ontario and Alberta. Aaxel Insurance
                  provides innovative Personal and Commercial Insurance
                  solutions to its client's Home, Auto, Life and Businesses
                  through our trusted insurance partners.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Aaxel Insurance deliver best-in-class insurance solutions
                  backed by excellent customer service. We have locations across
                  Ontario and Alberta and proudly serving thousands of
                  customers.
                </p>
                <p className="text-base md:text-lg">
                  Aaxel Insurance provides innovative insurance solutions for
                  all your insurance needs at very comparative rates.
                </p>
              </div>
              <div className="w-full h-[300px] md:w-[450px] md:h-[450px]">
                <img
                  src="https://www.aaxel.ca/wp-content/uploads/2023/03/Round-Logo-1.png"
                  alt="logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "https://img.icons8.com/?size=100&id=132&format=png&color=9ECB75",
                  title: "Invent",
                  description:
                    "We're passionate about what we do and it shows in our work.",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=11227&format=png&color=9ECB75",
                  title: "Deliver",
                  description:
                    "We believe in the power of teamwork and diverse perspectives.",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=37897&format=png&color=9ECB75",
                  title: "Include",
                  description:
                    "We constantly push boundaries to create cutting-edge solutions.",
                },
                {
                  icon: "https://img.icons8.com/?size=100&id=2606&format=png&color=9ECB75",
                  title: "Integrity",
                  description:
                    "We constantly push boundaries to create cutting-edge solutions.",
                },
              ].map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <img
                      src={value.icon}
                      className="w-10 h-10 mb-2 text-primary"
                    />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" aria-label="Your Name" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                    />
                    <Textarea
                      placeholder="Your Message"
                      aria-label="Your Message"
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-primary" />
                    <span>info@ourcompany.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-primary" />
                    <span>123 Main St, New York, NY 10001</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}