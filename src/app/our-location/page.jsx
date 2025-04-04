"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function OurLocation() {
  return (
    <div className="flex flex-col min-h-screen mt-16 md:my-12">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[url('https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/3/2018/06/07134748/2018-06-11-business-location-ThinkstockPhotos-614503922.jpg')] bg-cover text-white pt-20 pb-10 md:py-24 text-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Our Locations
            </h1>
            <p className="text-lg md:text-3xl mb-4 font-semibold text-gray-300">
              Find us around the world
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-xl font-bold uppercase text-center">
              📍 Find us on the Map 📍
            </p>
            <div className="mt-8 w-full h-64 md:h-96">
              <iframe
                title="Trustwise Insurance Location"
                className="w-full h-full border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.9247583074823!2d-113.41893!3d53.3387699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0032cf6acd34b%3A0x3b5a34d098897d17!2s5305%20Magasin%20Ave%20%23106%2C%20Beaumont%2C%20AB%20T4X%201V8%2C%20Canada!5e0!3m2!1sen!2sca!4v1710100000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Card className="w-full max-w-4xl">
                <CardHeader>
                  <CardTitle>Canada</CardTitle>
                  <CardDescription>Office Location</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>#106 5305 Magasin Ave Beaumont, AB T4X 1V8, Canada</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      <span>+1 (780) 255-5252</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-primary" />
                      <span>info@trustwiseinsurance.com</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <span>Mon-Fri: 8am-5pm</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}