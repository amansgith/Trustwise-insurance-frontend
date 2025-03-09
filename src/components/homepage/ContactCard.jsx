"use client";

export default function ContactUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT US</h2>
        <div className="w-16 border-b-2 border-blue-500 mx-auto mb-6"></div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Trustwise Insurance Brokers Ltd.
          </h3>
          <p className="text-lg">
            <strong>Address:</strong> 1550 South Gateway Road Suite 220,
            Mississauga, ON L4W 5G6
          </p>
          <p className="text-lg mt-2">
            <strong>Monday - Friday:</strong> 09:00 am - 05:00 pm
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold">CALL US TODAY:</p>
            <p className="text-xl font-bold text-gray-800">+1 905-362-8080</p>
            <p className="text-xl font-bold text-gray-800">+1 866-358-2860</p>
          </div>
          <p className="mt-4 text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@aaxelinsurance.com" className="text-blue-500">
              Get in Touch
            </a>
          </p>
        </div>

        {/* Google Map */}
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
  );
}