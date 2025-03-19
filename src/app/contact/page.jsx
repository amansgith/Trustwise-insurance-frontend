import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import QuoteForm from "@/components/CommonComponents/GetQuote"
import Link from "next/link";

const page = () => {
  return (
    <div className="py-16 md:py-6">
      <div className="px-4 md:px-10 flex flex-col gap-3">
        <h2 className="text-3xl md:text-5xl font-bold pt-14">Contact Us</h2>
        <p className="text-base md:text-lg">
          At Trustwise Insurance, we believe in building lasting relationships with our clients. Our team of experienced professionals is dedicated to delivering exceptional customer service and support. We work with a wide range of trusted insurance partners to offer the best coverage options for home, auto, life, and business insurance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-10">
        {[
          {
            icon: Mail,
            title: "Get in Touch",
            description: "info@trustwiseinsurance.com",
          },
          {
            icon: Phone,
            title: "Phone Numbers",
            description: "+1 (780) 255-5151",
          },
          {
            icon: Clock,
            title: "Working Hours",
            description: "Mon-Fri 9am-5pm",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <item.icon className="w-10 h-10 mb-2 text-secondary" />
              <CardTitle className="text-primary text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg">
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Call Back Request
          </h2>
          <QuoteForm/>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
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
                title="Trustwise Insurance Location"
                className="w-full h-full border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.9247583074823!2d-113.41893!3d53.3387699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0032cf6acd34b%3A0x3b5a34d098897d17!2s5305%20Magasin%20Ave%20%23106%2C%20Beaumont%2C%20AB%20T4X%201V8%2C%20Canada!5e0!3m2!1sen!2sca!4v1710100000000"
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