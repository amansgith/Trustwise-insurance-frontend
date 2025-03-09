import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Navlogo from "../../../public/Navlogo.jpg";  
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Zap, MapPin, Phone, Mail, Search, Paperclip } from "lucide-react";
import Values from "@/components/CommonComponents/Values";
import advertman from "../../../public/advert2.jpg"
import advertwoman from "../../../public/advert1.jpg"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[url('https://www.hashtagmotion.co.uk/wp-content/uploads/2018/06/about_us_background.jpg')] bg-cover text-white md:py-16 pt-32 pb-4  text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 uppercase">About Us</h1>
            <p className="text-lg md:text-xl font-semibold text-gray-400 md:mb-4">
              Well Insured, Well Lived...
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-2 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-4">Our Story</h2>
                <p className="text-base md:text-lg mb-4">
                  Founded in 1994, Trustwise Insurance is a leading independent insurance broker serving clients across Canada. Our mission is to provide comprehensive and innovative insurance solutions tailored to meet the unique needs of our clients.
                </p>
                <p className="text-base md:text-lg mb-4">
                  At Trustwise Insurance, we believe in building lasting relationships with our clients. Our team of experienced professionals is dedicated to delivering exceptional customer service and support. We work with a wide range of trusted insurance partners to offer the best coverage options for home, auto, life, and business insurance.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full md:pt-16 h-[300px] md:w-[600px] md:h-[600px]">
                  <Image
                    src={Navlogo}
                    alt="logo"
                    layout="responsive"
                    width={450}
                    height={450}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center items-center">
                <Image
                  src={advertman}
                  alt="Advertisement Man"
                  layout="responsive"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={advertwoman}
                  alt="Advertisement Woman"
                  layout="responsive"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <Values/>
        {/* Contact Us Section */}
        <section className="pb-16 bg-muted">
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
                    <span>+1 (780) 255-5151</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-primary" />
                    <span>info@trustwiseinsurance.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-primary" />
                    <span>#106 5305 Magasin Ave Beaumont, AB T4X 1V8, Canada</span>
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