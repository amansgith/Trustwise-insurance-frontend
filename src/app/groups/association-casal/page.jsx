import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCASAL = () => {
  return (
    <>
      <Associations
        title="Canadian Association of South Asian Lawyers (CASAL) | Group Home & Auto & Commercial Insurance"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br />
            Trustwise Insurance is delighted to partner with CASAL to offer exclusive insurance programs designed for CASAL members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Group Home & Auto Insurance: Comprehensive home and auto coverage tailored to meet the needs of CASAL members and their families.</li>
              <li>🏢 Commercial Insurance: Specialized insurance solutions for protecting your business, employees, and assets.</li>
              <li>💼 Customizable Options: Choose from a variety of coverage options to suit your personal and business insurance needs.</li>
              <li>🔒 Reliable Underwriting: The group program is underwritten by Economical Insurance & Intact Insurance, ensuring you get robust and dependable protection.</li>
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
            👉 Be sure to mention that you are a member of CASAL when you call to receive your exclusive group rates!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/07/CASAL.jpeg"
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
              <li>✅ Specialized insurance solutions for CASAL members</li>
              <li>✅ Dedicated support from our experienced team</li>
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

export default AssociationCASAL;