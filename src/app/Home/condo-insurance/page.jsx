import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CondoInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Condo Insurance"
        description={
          <>
            Condo Insurance is an important type of coverage offered by AAXEL
            Insurance that provides protection to condo owners against various
            risks, including property damage, liability claims, and loss of
            personal belongings. This type of insurance is crucial for condo
            owners who want to ensure that their investment and personal
            belongings are adequately covered and protected in the event of
            unforeseen circumstances.
            <br />
            <br />
            At AAXEL Insurance, we offer customizable Condo Insurance options
            that provide our clients with comprehensive coverage, including
            coverage for property damage, liability claims, and personal
            belongings. Our team of experts works closely with clients to
            understand their unique needs and tailor policies that provide them
            with the protection and peace of mind they need.
            <br />
            <br />
            With our Condo Insurance policies, condo owners can be sure that
            their investment and personal belongings are adequately protected
            against various risks, and they can focus on enjoying their condo
            without worrying about potential liabilities or financial losses.
            <br />
            <br />
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to protect
            their investment and personal belongings. Contact us today to learn
            more about our Condo Insurance coverage options and how we can help
            you protect your condo.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/herry-sutanto-vTZPm6NSxQU-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default CondoInsurance;
