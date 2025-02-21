import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const BuilderRiskInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Builder's Risk Insurance"
        description={
          <>
            Builder's Risk Insurance is an essential type of coverage offered by
            AAXEL Insurance that provides protection to construction projects
            against various risks, including property damage, theft, and other
            unexpected events that can occur during the construction process.
            This type of insurance is essential for builders and contractors who
            want to ensure that their projects are adequately covered and
            protected in the event of unforeseen circumstances.
            <br />
            <br />
            At AAXEL Insurance, we offer customizable Builder's Risk Insurance
            options that provide our clients with comprehensive coverage,
            including coverage for property damage, liability claims, and theft.
            Our team of experts works closely with builders and contractors to
            understand their unique needs and tailor policies that provide them
            with the protection and peace of mind they need.
            <br />
            <br />
            With our Builder's Risk Insurance policies, builders and contractors
            can be sure that their projects are adequately protected against
            various risks, and they can focus on delivering quality construction
            projects without worrying about potential liabilities or financial
            losses.
            <br />
            <br />
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to protect
            their construction projects. Contact us today to learn more about
            our Builder's Risk Insurance coverage options and how we can help
            you protect your construction project.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/2018042103c32dde-3aa6-2784-1197-a124394a9889-1.jpg"
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

export default BuilderRiskInsurance;
