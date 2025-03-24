"use client"
import Image from "next/image";

const claimsData = [
  {
    name: "AVIVA",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Aviva-Elite.jpg",
  },
  {
    name: "CHUBB",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Chubb-Insurance.jpg",
  },
  {
    name: "Echelon",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Echelon-Insurance.jpg",
  },
  {
    name: "Pembridge",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Pembridge-Insurance.jpg",
  },
  {
    name: "Intact",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Intact-insurance.jpg",
  },
  {
    name: "Economical",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Economical-Insurance.jpg",
  },
  {
    name: "Travelers",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Travelers-Insurance.jpg",
  },
  {
    name: "Unica",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Unica-Insurance.jpg",
  },
  {
    name: "Ivari",
    logo: "/companies/ivari.jpeg",
  },
  {
    name: "Equitable",
    logo: "/companies/equi.jpeg",
  },
  {
    name: "IA Financial Group",
    logo: "/companies/iafinancial.png",
  },
  {
    name: "Forester",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Forester-Insurance.jpg",
  },
  {
    name: "Travelance",
    logo: "/companies/travelance.jpeg",
  },
  {
    name: "Rimi Insurance",
    logo: "/companies/rimi.avif",
  },
  {
    name: "GMS",
    logo: "/companies/gms.png",
  },
  {
    name: "RBC Insurance",
    logo: "/companies/rbc.png",
  },
  {
    name: "Destination",
    logo: "https://www.aaxel.ca/wp-content/uploads/2023/05/Destination-Insurance.jpg",
  },
  {
    name: "21st Century",
    logo: "/companies/twenty.png",
  },
];

const Claims = () => {
  return (
    <>
      <section className="relative bg-cover text-white md:py-16 pt-32 pb-4 text-center">
        <Image
          src="/claimsbg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-[-1]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 uppercase">
            Claims
          </h1>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-snug pt-2">
              Hassle-Free Claims
            </h1>
            <div className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
              We provide claims support 24-hours, around-the-clock. After
              regular business hours, if you need immediate assistance or would
              want to report a claim, our knowledgeable claims support team can
              help. They may also arrange for the emergency response services
              you require. At Trustwise Insurance, we’re here to make sure your
              claims inquiries are addressed and your claim is handled fairly
              and promptly.
              <br />
              <br />
              If this an afterhours claims emergency, Contact Trustwise Insurance’s
              24-Hour claims assistance service by calling 1-780-255-5151. You
              will be connected with our claims partner DSB claims, our
              after-hours claims service provider.
              <br />
              <br />
              We strongly recommend speak to your broker before reporting a
              claim to an insurer.
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[350px] md:h-[500px] shadow-lg rounded-lg overflow-hidden">
              <Image
                src="https://www.aaxel.ca/wp-content/uploads/2023/05/Hastle-Free-Claims.webp"
                alt="claims alt image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            After Hours Emergency Property Claims:<br />
            <span className="text-secondary ml-2"> 1-780-255-5252</span>
          </h2>
        </div>

        {/* Grid of Companies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
          {claimsData.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border hover:shadow-lg transition"
            >
              {/* Company Logo */}
              <div className="h-24 w-40 relative">
                <Image
                  src={company.logo}
                  alt={company.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Phone Number */}
              <p className="mt-4 text-lg font-semibold text-gray-900">
                {company.name}
              </p>

              {/* Email Link */}
              {company.email && (
                <a
                  href="mailto:support@company.com"
                  className="text-blue-600 mt-2 hover:underline"
                >
                  Email
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Claims;