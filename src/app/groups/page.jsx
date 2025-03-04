import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import Image from "next/image";
import Link from "next/link";

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
            <p>
              Group Insurance | Tailored Solutions for Businesses and Associations with Trustwise Insurance
            </p>
            <p>
              At Trustwise Insurance, we specialize in designing customized Group Insurance programs that meet the unique needs of associations, employers, and class-based groups. Our flexible and comprehensive plans are tailored to provide exceptional value, making it easier for employers to offer essential coverage to their employees—with no additional administrative costs.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Group-Insurance.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why Choose Trustwise Group Insurance?</h2>
          <p>Our fully customizable group insurance plans offer a range of benefits, including:</p>
          <ul className="list-inside ml-4 mt-2 leading-8">
            <li>💳 Flexible Payment Options: Choose from convenient payment plans, including no-charge monthly options to suit your cash flow needs.</li>
            <li>⏱️ 24/7 Claims Assistance: Access around-the-clock support to handle claims quickly and efficiently.</li>
            <li>⚡ Fast Quote Processing: Get quick and accurate quotes, ensuring minimal delays in coverage.</li>
            <li>📚 Ongoing Training & Support: We provide continuous support and training, ensuring your team fully understands their coverage.</li>
            <li>🏢 Hassle-Free Administration: Trustwise Insurance manages the entire program at no extra cost to the employer—letting you focus on your business.</li>
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Custom Insurance Solutions—Built for You</h2>
          <p>
            We take the time to understand your organization’s unique needs. Our experts will meet with you for a comprehensive needs analysis and then design a tailored insurance program that covers all aspects of your requirements.
          </p>
          <p className="mt-4">
            Let’s Build the Right Plan for You
          </p>
          <p className="mt-4">
            📞 Call Trustwise Insurance today at 1-855-380-3666 to discuss your group insurance needs.
          </p>
          <p className="mt-4">
            ✅ Flexible. Comprehensive. Unmatched Solutions.
          </p>
          <p className="mt-4">
            Your team deserves the best—let Trustwise Insurance deliver it.
          </p>
        </div>
      </section>

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