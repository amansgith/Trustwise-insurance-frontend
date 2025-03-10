import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function OurLocation() {
  return (
    <div className="flex flex-col min-h-screen mt-16 md:my-12">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[url('https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/3/2018/06/07134748/2018-06-11-business-location-ThinkstockPhotos-614503922.jpg')] bg-cover text-white pt-20 pb-10 md:py-24 text-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">Our Locations</h1>
            <p className="text-lg md:text-3xl mb-4 font-semibold text-gray-300">Find us around the world</p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
              <p className="text-xl font-bold uppercase text-center">📍 Find us on the Map 📍</p>
            <div className="mt-8 w-full h-64 md:h-96">
              <iframe
                title="Trustwise Insurance Location"
                className="w-full h-full border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.354424927402!2d-79.62579512351845!3d43.636101055939634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39ad6a6367ff%3A0xe293bb4235b760b6!2sAaxel%20Insurance%20Brokers%20Ltd!5e0!3m2!1sen!2sca!4v1708500000000"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  city: "New York",
                  address: "#106 5305 Magasin Ave Beaumont, AB T4X 1V8, Canada",
                  phone: "+1 (780) 255-5151",
                  email: "info@trustwiseinsurance.com",
                  hours: "Mon-Fri: 9am-6pm",
                },
                {
                  city: "Canada",
                  address: "#106 5305 Magasin Ave Beaumont, AB T4X 1V8, Canada",
                  phone: "+1 (780) 255-5252",
                  email: "info@trustwiseinsurance.com",
                  hours: "Mon-Fri: 8am-5pm",
                },
                {
                  city: "London",
                  address: "#106 5305 Magasin Ave Beaumont, AB T4X 1V8, Canada",
                  phone: "+1 (780) 255-5353",
                  email: "info@trustwiseinsurance.com",
                  hours: "Mon-Fri: 9am-5:30pm",
                },
              ].map((location, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{location.city}</CardTitle>
                    <CardDescription>Office Location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        <span>{location.address}</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-primary" />
                        <span>{location.phone}</span>
                      </li>
                      <li className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-primary" />
                        <span>{location.email}</span>
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-primary" />
                        <span>{location.hours}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}