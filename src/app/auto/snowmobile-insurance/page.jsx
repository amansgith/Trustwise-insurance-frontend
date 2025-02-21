import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const SnowmobileInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Snowmobile Insurance"
        description={
          <>
            Snowmobile insurance is a type of insurance that provides coverage
            for snowmobiles in the event of accidents, theft, or damage. AAXEL
            Insurance is a reputable insurance provider that offers snowmobile
            insurance policies to protect snowmobile owners against financial
            losses that may result from unexpected incidents.
            <br />
            <br />
            With AAXEL Insurance, snowmobile owners can customize their policies
            to suit their needs and budgets, with options for liability
            coverage, collision coverage, comprehensive coverage, and more.
            These policies can provide financial protection in the event of
            accidents that result in bodily injury or property damage.
            <br />
            <br />
            If you own a snowmobile, it's important to invest in the right
            insurance policy to protect your investment and your financial
            well-being. AAXEL Insurance can help you find the right policy to
            meet your needs and provide peace of mind while enjoying the snowy
            outdoors.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/spencer-davis-_Wmr8-Qu2PQ-unsplash.jpg"
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

export default SnowmobileInsurance;
