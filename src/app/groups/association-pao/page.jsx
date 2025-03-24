"use client"
import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationPAO = () => {
  return (
    <>
      <Associations
        title="Prosecutors’ Association of Ontario | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is proud to partner with the Prosecutors’ Association of Ontario (PAO) to offer exclusive insurance programs designed for PAO members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Comprehensive home and auto coverage designed to meet the needs of PAO members and their families.</li>
              <li>🏢 Commercial Insurance: Tailored insurance solutions to protect your business, assets, and employees.</li>
              <li>💼 Flexible Coverage Options: Choose from a range of customizable insurance options to fit your personal and professional needs.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Economical Insurance & Intact Insurance, ensuring strong protection and reliability.</li>
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
            👉 Be sure to mention that you are a member of PAO when you call to receive your exclusive group rates!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/Prosecutors-Association-of-Ontario.jpg"
        buttonText="Get a Quote"
        buttonLink="#"
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
              <li>✅ Specialized coverage options for PAO members</li>
              <li>✅ Experienced support from our dedicated team</li>
              <li>✅ Quick and easy quote process</li>
            </ul>
            <p>🔗 Get the right coverage for your home, auto, and business with Trustwise Insurance—your partner in comprehensive protection.</p>
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

export default AssociationPAO;