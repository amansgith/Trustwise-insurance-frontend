import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const TenantInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Tenant Insurance"
        description={
          <>
            Tenant Insurance is an essential type of coverage offered by AAXEL
            Insurance that provides protection to tenants against various risks,
            including theft, property damage, and liability claims. This type of
            insurance is crucial for tenants who want to ensure that their
            belongings are adequately covered and protected in the event of
            unforeseen circumstances.
            <br />
            <br />
            At AAXEL Insurance, we offer customizable Tenant Insurance options
            that provide our clients with comprehensive coverage, including
            coverage for personal belongings, liability claims, and additional
            living expenses. Our team of experts works closely with clients to
            understand their unique needs and tailor policies that provide them
            with the protection and peace of mind they need.
            <br />
            <br />
            With our Tenant Insurance policies, clients can be sure that their
            belongings are adequately protected against various risks, and they
            can focus on enjoying their rental property without worrying about
            potential liabilities or financial losses.
            <br />
            <br />
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to protect
            their belongings and rental property. Contact us today to learn more
            about our Tenant Insurance coverage options and how we can help you
            protect your rental property.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/kara-eads-L7EwHkq1B2s-unsplash.jpg"
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

export default TenantInsurance;
