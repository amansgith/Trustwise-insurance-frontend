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
        imageSrc="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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