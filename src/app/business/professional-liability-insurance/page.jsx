import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const ProfessionalLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Professional Liability Insurance"
        description={
          <>
            Professional Liability Insurance, also known as Errors and Omissions
            (E&O) insurance, is a type of insurance offered by AAXEL Insurance
            that provides coverage for businesses and individuals against claims
            for negligence or errors in the services they provide. This type of
            insurance is essential for professionals who provide specialized
            services, such as lawyers, doctors, architects, and consultants.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Professional
            Liability Insurance, including coverage for legal defense costs,
            settlements, and judgments. These policies can be customized to meet
            the unique needs of individual professionals and businesses, with
            coverage limits based on the type of services provided and the level
            of risk exposure.
            <br />
            <br />
            In addition to protecting professionals and businesses against
            financial losses resulting from claims for negligence or errors,
            Professional Liability Insurance can also help them improve their
            risk management strategies and enhance their reputation for quality
            and professionalism. AAXEL Insurance is a reputable insurance
            provider that offers Professional Liability Insurance policies to
            help professionals and businesses protect themselves against
            potential liability risks and to provide them with peace of mind
            while providing their specialized services.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
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

export default ProfessionalLiabilityInsurance;
