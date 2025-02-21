import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const EnvironmentLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Environmental Impairment Liability Insurance"
        description={
          <>
            Environmental Impairment Liability Insurance is a type of insurance
            offered by AAXEL Insurance that provides coverage for businesses
            against environmental risks associated with their operations. This
            type of insurance is essential for businesses that handle hazardous
            materials or engage in activities that may pose environmental risks.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Environmental
            Impairment Liability Insurance, including coverage for cleanup
            costs, legal defense costs, and third-party bodily injury or
            property damage resulting from pollution incidents. These policies
            can be customized to meet the unique needs of individual businesses,
            with coverage limits based on the size and scope of their
            operations.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from environmental risks, Environmental Impairment
            Liability Insurance can also help them comply with legal
            requirements for environmental protection and enhance their risk
            management strategies. AAXEL Insurance is a reputable insurance
            provider that offers Environmental Impairment Liability Insurance
            policies to help businesses protect themselves against potential
            environmental risks and to provide them with peace of mind while
            conducting their operations in a responsible and sustainable manner.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/matthew-smith-Rfflri94rs8-unsplash.jpg"
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

export default EnvironmentLiabilityInsurance;
