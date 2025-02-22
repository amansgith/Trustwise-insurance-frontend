import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import Image from "next/image";
import Link from "next/link";


const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const logos = [
    { href: "/groups/association-chpta", src: "https://www.aaxel.ca/wp-content/uploads/2023/03/CHPTA.jpg", alt: "CHPTA" },
    { href: "/groups/association-copa", src: "https://www.aaxel.ca/wp-content/uploads/2023/03/copa_logo_vector.png", alt: "COPA" },
    { href: "/groups/association-emergitel", src: "https://www.aaxel.ca/wp-content/uploads/2023/05/Emergitel.png", alt: "EmergiTel" },
    { href: "/groups/association-sbpa", src: "https://www.aaxel.ca/wp-content/uploads/2023/05/SBOAPA-Logo-2017.png", alt: "SBPA" },
    { href: "/groups/association-pau", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/PAU-Alumni.png", alt: "Punjab Agricultural University" },
    { href: "/groups/association-iim", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/IIM-Indian-Institute-of-Management-Society.jpg", alt: "IIM Society" },
    { href: "/groups/association-ctao", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/CTAO-Container-Trucking-Association-of-Ontario.jpg", alt: "CTAO" },
    { href: "/groups/association-casal", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/CASAL.jpeg", alt: "CASAL img" },
    { href: "/groups/association-pao", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/Prosecutors-Association-of-Ontario.jpg", alt: "Prosecutors Association" },
    { href: "/groups/charger-logistics", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/Charger-Logistics-Inc.jpg", alt: "Charger Logistics" },
    { href: "/cheerleadingclubs", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/Cheerleading-Clubs.webp", alt: "Heart Hands" },
    { href: "/groups/hrai", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/HRAI.jpg", alt: "HRAI" },
    { href: "/groups/mobilelive", src: "https://www.aaxel.ca/wp-content/uploads/2023/07/MobileLive.jpeg", alt: "MobileLive" },
    { href: "/groups/association-pakmen", src: "https://www.aaxel.ca/wp-content/uploads/2024/01/pakmen-vollyball.jpg", alt: "Pakmen Volleyball" },
  ];

const GroupInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Group Insurance"
        description={
          <>
            Aaxel insurance has the expertise in designing programs for
            associations, employers or class based programs to meet the needs of
            its clients. The advantages of a customized group insurance plan
            include various payment options, including, for no charge, monthly
            payment plans, 24 hours claims assistance, quick quote processing,
            ongoing training and support. We will administer the program and
            there is no additional cost to the employer to offer these services
            to their employees.
            <br />
            <br />
            We will meet you to do the analysis of your needs and then will
            custom design an insurance program for all your insurance needs.
            <br />
            <br />
            Call us today to discuss your needs at 1-855-380-3666. We will
            provide you with unmatchable solutions for all your group insurance
            needs.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Group-Insurance.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        Our Groups
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center overflow-hidden">
        {logos.map((logo, index) => (
          <Link key={index} href={logo.href} passHref>
            <div className="relative w-36 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src={logo.src}
                alt={logo.alt}
                // width={140}
                // height={90}
                fill
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default GroupInsurance;
