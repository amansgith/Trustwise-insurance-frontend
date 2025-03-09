import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import Features from "@/components/homepage/Features";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const BoatInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Boat Insurance"
        description={
          <>
            Enjoy the freedom of the open water with peace of mind. At Trustwise Insurance, we offer comprehensive boat insurance coverage to protect your vessel against unexpected events. Whether you're cruising on a lake or navigating coastal waters, our tailored policies ensure you have the right protection.
            <br/><br/>
            Our boat insurance includes coverage for physical damage, liability, medical payments, and more. Trustwise Insurance is committed to providing you with the best service and support, so you can focus on enjoying your time on the water.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/nikldn-t-6GW8T6Jsc-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default BoatInsurance;