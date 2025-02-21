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
        title="RV Insurance"
        description={`Aaxel Insurance will offer you very comparative quotes for your RV Insurance/ Motorhome insurance as you travel to Canada’s best RV destinations. We know that Canada has some of the best RV & Motorhome travel destinations in the world. Our goal is to provide you with peace of mind, so you can travel freely. ${<br/>} At Aaxel, our brokers understand your insurance requirements, whether your needs are RV Insurance/ motorhome Insurance, fifth wheel, travel trailer, tent trailer, truck camper or park model. We will offer you the best RV Insurance/ Motorhome Insurance solutions.`}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/hanson-lu-Avc2AiE1_Q-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <QuoteForm/>
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default ClassicCarInsurance;
