import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const ClassicCarInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Classsic Car Insurance"
        description={<>If you own a Classic Car, you want to ensure your pride and joy is properly insured and protected. After all, there’s nothing better than taking your prize possession out for an afternoon cruise, on a beautiful sunny day. At Aaxel Insurance, we will review your needs, no matter how specific they are and then provide you with coverage to meet those needs. We are all about tailor-made policies, that ensure you, the client, can have peace of mind, knowing we are here to help around the clock. <br/><br/>Your regular auto insurance policy does not always cover Classic Cars, so let Aaxel guide you, to ensure your classic car, vintage car, antique car, or collector car is properly protected.</>}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/car_Store.jpg"
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

export default ClassicCarInsurance;
