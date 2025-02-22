import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const EmployeeLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Legal Expense Insurance"
        description={
          <>
            Legal Expense Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for businesses and individuals
            against the costs of legal proceedings. This type of insurance is
            essential for businesses and individuals who may face legal disputes
            or litigation, as legal expenses can be significant and unexpected.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Legal Expense
            Insurance, including coverage for legal fees, court costs, expert
            witness fees, and other related expenses. These policies can be
            customized to meet the unique needs of individual businesses and
            individuals, with coverage limits based on the level of legal risk
            exposure.
            <br />
            <br />
            In addition to protecting businesses and individuals against
            financial losses resulting from legal disputes, Legal Expense
            Insurance can also provide them with access to legal advice and
            support, helping them navigate complex legal issues more
            effectively. AAXEL Insurance is a reputable insurance provider that
            offers Legal Expense Insurance policies to help businesses and
            individuals protect themselves against potential legal risks and to
            provide them with peace of mind while conducting their affairs.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/alexander-grey-tn57JI3CewI-unsplash.jpg"
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

export default EmployeeLiabilityInsurance;
