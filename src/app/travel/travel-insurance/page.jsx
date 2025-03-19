import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import Image from "next/image";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const quotes = [
  {
    title: "SINGLE OR MULTI TRIP PLAN",
    imageSrc:
      "https://www.aaxel.ca/wp-content/uploads/2023/04/Auto-Insurance.jpg",
    link: "#",
  },
  {
    title: "SUPER VISA / VISITORS TO CANADA",
    imageSrc:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/dylan-gillis-KdeqA3aTnBY-unsplash.jpg",
    link: "#",
  },
  {
    title: "HEALTH INSURANCE",
    imageSrc:
      "https://www.aaxel.ca/wp-content/uploads/2023/03/20200114b62bf4b2-54e2-9767-1438-86275178d5ec.jpg",
    link: "#",
  },
];

const TravelInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Travel Insurance"
        description={
          <p className="text-sm md:text-base lg:text-lg">
            Travel Insurance is an essential investment for anyone planning a trip abroad, as it provides financial protection against unexpected events that could disrupt your travel plans. At Trustwise Insurance, we offer a range of comprehensive travel insurance products designed to meet the unique needs of our clients.
            <br />
            <br />
            Our Travel Insurance products include coverage for trip cancellation and interruption, medical expenses, emergency medical evacuation, and travel accidents. We also offer coverage for lost or stolen baggage and personal items, as well as rental car coverage.
            <br />
            <br />
            Our team of experienced professionals works closely with clients to develop customized insurance solutions that meet their specific needs and budget. We prioritize transparency and keep our clients informed about their coverage and options, providing regular updates and reports.
          </p>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/jeshoots-com-mSESwdMZr-A-unsplash.jpg"
        buttonText="Get a Quote"
      />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900">Get A Quote</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {quotes.map((quote, index) => (
              <a
                key={index}
                href={quote.link}
                className="block bg-white shadow-md rounded-lg p-5 transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <h3 className="text-md font-bold text-gray-800 mb-3">
                  {quote.title}
                </h3>
                <div className="w-full h-40 relative rounded-md overflow-hidden border-b-2 border-secondary">
                  <Image
                    src={quote.imageSrc}
                    alt={quote.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <TrustBanner />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default TravelInsurance;