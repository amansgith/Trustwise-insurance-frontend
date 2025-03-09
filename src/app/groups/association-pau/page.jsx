import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationPAU = () => {
  return (
    <>
      <Associations
        title="PAU Alumni | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is pleased to partner with PAU Alumni to offer exclusive insurance programs designed specifically for PAU Alumni members and their families.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Comprehensive home and auto coverage tailored to the needs of PAU Alumni members.</li>
              <li>🏢 Commercial Insurance: Customized insurance solutions to safeguard your business assets and operations.</li>
              <li>💼 Flexibility: Choose from a range of coverage options, including personal and commercial plans that suit your lifestyle and business needs.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Economical Insurance & Intact Insurance, ensuring reliable and robust protection.</li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            •	Ontario: 866-358-2860
            <br />
            👉 Be sure to mention that you’re a member of PAU Alumni when you call!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/PAU-Alumni.png"
        buttonText="Get a Quote"
        buttonLink="/call-back-request"
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
              <li>✅ Exclusive group rates for PAU Alumni members</li>
              <li>✅ Expert support from our dedicated team</li>
              <li>✅ Quick and easy quote process</li>
            </ul>
            <p>🔗 Protect your home, auto, and business today with Trustwise Insurance—your trusted partner for comprehensive coverage.</p>
          </>
        }
      />

      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default AssociationPAU;