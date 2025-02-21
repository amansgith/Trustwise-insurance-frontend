import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CommercialAutomobileInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Commercial Automobile Insurance"
        description={`Commercial Automobile Insurance is a type of insurance offered by AAXEL Insurance that provides coverage for businesses that use vehicles for work-related purposes. This type of insurance is essential for businesses that rely on vehicles to transport goods, equipment, or employees, as it provides financial protection in the event of accidents, theft, or damage to the vehicle.

AAXEL Insurance offers a range of coverage options for commercial automobile insurance, including liability coverage, collision coverage, comprehensive coverage, and more. These policies can be customized to meet the unique needs of individual businesses, with coverage limits based on the type and number of vehicles used.

In addition to protecting businesses against financial losses resulting from accidents or damage to their vehicles, commercial automobile insurance can also help businesses comply with legal requirements for insurance coverage. We are a reputable insurance provider that offers commercial automobile insurance policies to help businesses protect themselves against financial losses resulting from work-related vehicle use, and to provide them with peace of mind while on the road.

`}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/zetong-li-mVqTumQH-c0-unsplash.jpg"
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

export default CommercialAutomobileInsurance;
