import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const MotorcycleInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Motorcycle Insurance"
        description={`For years, Aaxel Insurance has been helping out clients who have motorcycles. Our sound knowledge and expertise, combined with our exceptional service, allows you to get the best coverage at the best possible price. The right coverage is definitely a must, because although riding a motorcycle is fun, exciting and exhilarating, there are always some risks involved. You can become seriously injured in a motorcycle accident, so let Aaxel Insurance ensure you and your bike are properly protected.`}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/tim-meyer-2LTMNCN4nEg-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm/>
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default MotorcycleInsurance;
