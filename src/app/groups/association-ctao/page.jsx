import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCTAO = () => {
  return (
    <>
      <Associations
        title="Container Trucking Association of Ontario (CTAO) | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br />
            Trustwise Insurance is proud to partner with CTAO to offer exclusive insurance programs designed for CTAO members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Comprehensive home and auto coverage tailored to meet the needs of CTAO members and their families.</li>
              <li>🏢 Commercial Insurance: Customized solutions for protecting your business operations, assets, and employees.</li>
              <li>💼 Flexible Options: Choose from a range of coverage options that meet your personal and commercial insurance needs.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Economical Insurance & Intact Insurance, providing reliable and robust protection.</li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            • Ontario: 866-358-2860
            <br />
            • Quebec: 888-542-4811
            <br />
            • Rest of Canada: 866-247-7700
            <br />
            👉 Be sure to mention that you are a member of CTAO when you call to receive your exclusive group rates!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/CTAO-Container-Trucking-Association-of-Ontario.jpg"
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
              <li>✅ Specialized rates for CTAO members</li>
              <li>✅ Dedicated support from our experienced team</li>
              <li>✅ Fast and easy quote process</li>
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

export default AssociationCTAO;