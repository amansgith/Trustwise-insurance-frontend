import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCHPTA = () => {
  return (
    <>
      <Associations
        title="MobileLive | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is excited to offer exclusive insurance solutions for MobileLive members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Get affordable, tailored home and auto insurance designed to meet the needs of MobileLive employees and their families.</li>
              <li>🏢 Commercial Insurance: Specialized coverage options for your business, protecting what matters most.</li>
              <li>💼 Custom Coverage Options: Flexible insurance solutions for personal and commercial needs.</li>
              <li>🔒 Dependable Underwriting: The program is underwritten by Economical Insurance & Intact Insurance, providing reliable coverage.</li>
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
            👉 Be sure to mention that you are a member of MobileLive when you call to receive your exclusive group rates!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/MobileLive.jpeg"
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
              <li>✅ Custom-designed insurance programs for MobileLive members</li>
              <li>✅ Personalized service with expert guidance</li>
              <li>✅ Quick and easy quote process</li>
            </ul>
            <p>🔗 Ensure that you have the coverage you need for home, auto, and business with Trustwise Insurance—your trusted partner for comprehensive insurance solutions.</p>
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

export default AssociationCHPTA;
