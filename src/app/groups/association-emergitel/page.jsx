import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationemergiTEL = () => {
  return (
    <>
      <Associations
        title="emergiTEL | Group Home & Auto Insurance"
        description={
          <p>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            Trustwise Insurance is proud to partner with emergiTEL to offer exclusive Group Home and Auto Insurance programs for emergiTEL members and their employees.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Comprehensive Home & Auto Coverage: Tailored insurance options designed to meet the specific needs of emergiTEL members and their families.</li>
              <li>👨‍👩‍👧 Coverage for the Whole Family: Available to employees of emergiTEL member companies, their spouses, and dependent children, whether residing at home or attending school away.</li>
              <li>💡 Flexible Options: Choose the coverage that best fits your needs, with competitive rates that offer value and protection.</li>
              <li>🔒 Trusted Underwriting: The group program is underwritten by Intact Insurance, ensuring reliable and comprehensive protection for your home and auto.</li>
            </ul>
            <br />
            <b>Get Your Instant Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151
            <br />
            👉 Be sure to mention you’re a member of emergiTEL when you call!
          </p>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/05/Emergitel.png"
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
              <li>✅ Exclusive group rates for emergiTEL members</li>
              <li>✅ Expert support from our dedicated sales team</li>
              <li>✅ Quick and seamless quote process</li>
            </ul>
            <p>🔗 Protect your home, auto, and family today with Trustwise Insurance—your partner in comprehensive coverage.</p>
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

export default AssociationemergiTEL;
