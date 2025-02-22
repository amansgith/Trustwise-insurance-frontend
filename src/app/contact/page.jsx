import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-6">
      <div className="px-4 md:px-10 flex flex-col gap-3">
        <h2 className="text-3xl md:text-5xl font-bold pt-14">Contact Us</h2>
        <p className="text-base md:text-lg">
          At Aaxel Insurance, we pride ourselves on providing exceptional
          insurance coverage and service. Our knowledgeable agents are available
          to answer your questions and help you navigate your insurance options.
          Contact us anytime for personalized insurance coverage and service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-10">
        {[
          {
            icon: MapPin,
            title: "Collaborative Environment",
            description: "Work with a diverse team of passionate individuals",
          },
          {
            icon: Phone,
            title: "Career Growth",
            description: "Opportunities for learning and advancement",
          },
          {
            icon: Clock,
            title: "Work-Life Balance",
            description: "Flexible hours and remote work options",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <item.icon className="w-10 h-10 mb-2 text-[#9ecb75]" />
              <CardTitle className="text-[#9ecb75]">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Call Back Request
          </h2>
          <Card>
            <CardHeader />
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" aria-label="First Name" />
                  <Input placeholder="Last Name" aria-label="Last Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" aria-label="Email" />
                  <Input type="phone" placeholder="Phone" aria-label="Phone" />
                </div>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your experience and why you'd be a great fit"
                  aria-label="Cover Letter"
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Locations</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  <span>New York, NY</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  <span>London, UK</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/our-location">View Detailed Map</Link>
              </Button>
            </div>
            <div className="mt-8 w-full h-96">
              <iframe
                title="Aaxel Insurance Location"
                className="w-full h-full border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.354424927402!2d-79.62579512351845!3d43.636101055939634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39ad6a6367ff%3A0xe293bb4235b760b6!2sAaxel%20Insurance%20Brokers%20Ltd!5e0!3m2!1sen!2sca!4v1708500000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;