import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CottageInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Cottage Insurance"
        description={
          <>
            Cottage Insurance is an essential type of coverage offered by AAXEL
            Insurance that provides protection to cottage owners against various
            risks, including property damage, liability claims, and theft. This
            type of insurance is essential for cottage owners who want to ensure
            that their investment is adequately covered and protected in the
            event of unforeseen circumstances.
            <br /><br/>
            At AAXEL Insurance, we offer customizable Cottage Insurance options
            that provide our clients with comprehensive coverage, including
            coverage for property damage, liability claims, and theft. Our team
            of experts works closely with cottage owners to understand their
            unique needs and tailor policies that provide them with the
            protection and peace of mind they need.
            <br /><br/>
            With our Cottage Insurance policies, cottage owners can be sure that
            their investment is adequately protected against various risks, and
            they can focus on enjoying their cottage without worrying about
            potential liabilities or financial losses.
            <br /><br/>
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to protect
            their cottage investment. Contact us today to learn more about our
            Cottage Insurance coverage options and how we can help you protect
            your cottage.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Home-Insurance-2.jpg"
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

export default CottageInsurance;
