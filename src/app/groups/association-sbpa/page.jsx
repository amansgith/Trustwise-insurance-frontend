import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationSBPA = () => {
  return (
    <>
      <Associations
        title="Small Business Owners and Professionals Association (SBPA) | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is proud to partner with SBPA to offer exclusive insurance programs for SBPA members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Comprehensive coverage designed for the unique needs of small business owners and their families.</li>
              <li>🏢 Commercial Insurance: Tailored coverage solutions to protect your business assets, employees, and operations.</li>
              <li>💼 Multiple Insurance Options: Flexibility to choose the coverage you need, including both personal and commercial plans.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Economical Insurance & Intact Insurance, ensuring you get the most reliable protection available.</li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            •	Ontario: 866-358-2860
            <br />
            👉 Be sure to mention you’re a member of SBPA when you call!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/05/SBOAPA-Logo-2017.png"
        buttonText="Get a Quote"
        buttonLink="/call-back-request"
        sectionTitle="Why Choose Trustwise Insurance?"
        sectionDescription={
          <>
            <p className="text-lg font-semibold">
              We recommend member companies communicate the availability of this program to their employees.
            </p>
            <p className="text-balance">
              Please note this program is offered on behalf of the association to all employees and in no way it may hold member companies responsible for the administration of the program.
            </p>
            <p className="mt-4">The key advantages of the program include:</p>
            <ul className="list-disc list-inside mt-2">
              <li>✅ Exclusive rates for SBPA members</li>
              <li>✅ Dedicated, support from our experienced team</li>
              <li>✅ Fast, hassle-free quote process</li>
            </ul>
            <p>🔗 Secure your personal and business coverage today with Trustwise Insurance—your partner in comprehensive protection.</p>
          </>
        }
        sectionImage="https://www.aaxel.ca/wp-content/uploads/2023/04/20210709304edc72-cb57-4c63-eb5b-9ad3a439fe84.jpg"
      />

      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default AssociationSBPA;