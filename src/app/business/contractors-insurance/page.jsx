import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const ContractorsInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Contractors Insurance"
        description={
          <>
            Contractors Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for contractors against risks
            associated with construction projects. This type of insurance is
            essential for contractors who work in the construction industry, as
            it provides financial protection in the event of accidents, property
            damage, and lawsuits resulting from their work.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Contractors
            Insurance, including General Liability Insurance, Workers'
            Compensation Insurance, Commercial Auto Insurance, and Umbrella
            Insurance. These policies can be customized to meet the unique needs
            of individual contractors, with coverage limits based on the size
            and scope of their projects.
            <br />
            <br />
            In addition to protecting contractors against financial losses
            resulting from accidents and lawsuits, Contractors Insurance can
            also help them comply with legal requirements for insurance coverage
            and enhance their reputation for safety and quality. AAXEL Insurance
            is a reputable insurance provider that offers Contractors Insurance
            policies to help contractors protect themselves against potential
            risks and to provide them with peace of mind while conducting their
            projects.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/james-kovin-YQGPSblLPz0-unsplash.jpg"
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

export default ContractorsInsurance;
