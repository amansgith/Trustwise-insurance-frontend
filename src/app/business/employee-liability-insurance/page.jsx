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
        title="Employee Liability Insurance"
        description={
          <>
            Employee Liability Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for businesses against
            employee-related claims for wrongful termination, discrimination,
            harassment, and other employment-related issues. This type of
            insurance is essential for businesses of all sizes, as it provides
            financial protection in the event of costly legal proceedings.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Employee
            Liability Insurance, including coverage for defense costs,
            settlements, and judgments. These policies can be customized to meet
            the unique needs of individual businesses, with coverage limits
            based on the number of employees and the level of risk exposure.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from employee-related claims, Employee Liability Insurance
            can also help businesses attract and retain talented employees by
            providing them with peace of mind that their rights are protected.
            AAXEL Insurance is a reputable insurance provider that offers
            Employee Liability Insurance policies to help businesses protect
            themselves against potential liability risks and to provide them
            with peace of mind while conducting their operations.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
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
