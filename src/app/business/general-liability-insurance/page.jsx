import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const GeneralLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Commercial General Liability Insurance"
        description={
          <>
            Commercial General Liability Insurance (CGL) is a type of insurance
            offered by AAXEL Insurance that provides coverage for businesses
            against third-party claims for bodily injury or property damage.
            This type of insurance is essential for businesses that may face
            potential liability risks in the course of their operations, such as
            slip-and-fall accidents or damage to property.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for CGL
            insurance, including bodily injury and property damage coverage,
            personal and advertising injury coverage, and more. These policies
            can be customized to meet the unique needs of individual businesses,
            with coverage limits based on the type of business and the level of
            risk exposure.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from third-party claims, CGL insurance can also help
            businesses comply with legal requirements for insurance coverage.
            AAXEL Insurance is a reputable insurance provider that offers CGL
            insurance policies to help businesses protect themselves against
            potential liability risks and to provide them with peace of mind
            while conducting their operations.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/sean-pollock-PhYq704ffdA-unsplash.jpg"
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

export default GeneralLiabilityInsurance;
