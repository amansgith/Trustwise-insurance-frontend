import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationCOPA = () => {
  return (
    <>
      <Associations
        title="Canadian Office Products Association (COPA) | Group Home & Auto Insurance"
        description={
          <p>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is proud to partner with the Canadian Office Products Association (COPA) to offer exclusive Group Home and Auto Insurance programs designed for COPA members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Comprehensive Home & Auto Coverage: Tailored insurance solutions that meet the unique needs of COPA members.</li>
              <li>👨‍👩‍👧 Coverage for the Whole Family: Available to employees of COPA member companies, their spouses, and dependent children (whether residing at home or attending school away).</li>
              <li>💡 Flexible Options: Plans designed with your lifestyle in mind, ensuring you get the coverage you need at competitive rates.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Intact Insurance, ensuring reliability and comprehensive protection.</li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            👉 Don’t forget to mention that you’re a COPA member when you call!
          </p>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/copa_logo_vector.png"
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
              <li>✅ Exclusive group rates for COPA members</li>
              <li>✅ Expert support from our dedicated sales team</li>
              <li>✅ Seamless application process with fast quote turnaround</li>
            </ul>
            <p>🔗 Secure your coverage today with Trustwise Insurance—because your protection matters.</p>
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

export default AssociationCOPA;