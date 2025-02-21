import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function OurLocation() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[url('https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/3/2018/06/07134748/2018-06-11-business-location-ThinkstockPhotos-614503922.jpg')] bg-cover text-white py-40 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl font-bold mb-4">Our Locations</h1>
            <p className="text-3xl mb-8 font-semibold text-gray-900">Find us around the world</p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
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
        </section>

        {/* Location Details Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "New York",
                  address: "123 Broadway, New York, NY 10001",
                  phone: "+1 (212) 555-1234",
                  email: "nyc@ourcompany.com",
                  hours: "Mon-Fri: 9am-6pm",
                },
                {
                  city: "San Francisco",
                  address: "456 Market St, San Francisco, CA 94105",
                  phone: "+1 (415) 555-5678",
                  email: "sf@ourcompany.com",
                  hours: "Mon-Fri: 8am-5pm",
                },
                {
                  city: "London",
                  address: "789 Oxford St, London W1D 1LL, UK",
                  phone: "+44 20 7123 4567",
                  email: "london@ourcompany.com",
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

