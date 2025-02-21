import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const HomeBusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Corporate Insurance"
        description={
          <>
            Corporate Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for corporations against a range of
            risks associated with their operations. This type of insurance is
            essential for corporations of all sizes and industries, as it
            provides financial protection in the event of accidents, property
            damage, lawsuits, and other unforeseen events.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Corporate
            Insurance, including General Liability Insurance, Property
            Insurance, Directors and Officers (D&O) Liability Insurance, Cyber
            Liability Insurance, and Employment Practices Liability Insurance.
            These policies can be customized to meet the unique needs of
            individual corporations, with coverage limits based on the size and
            scope of their operations.
            <br />
            <br />
            In addition to protecting corporations against financial losses
            resulting from a range of risks, Corporate Insurance can also help
            them comply with legal requirements for insurance coverage and
            enhance their risk management strategies. AAXEL Insurance is a
            reputable insurance provider that offers Corporate Insurance
            policies to help corporations protect themselves against potential
            risks and to provide them with peace of mind while conducting their
            operations.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/christina-wocintechchat-com-2JDDn7iSGH8-unsplash.jpg"
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

export default HomeBusinessInsurance;
