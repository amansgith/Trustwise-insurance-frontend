import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const HomeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Home Insurance"
        description={`Home Insurance is an essential type of coverage offered by AAXEL Insurance that protects homeowners against various risks, including property damage, theft, and liability claims. This type of insurance is crucial for homeowners who want to protect their investment and ensure that their home is adequately covered in the event of unforeseen circumstances.

At AAXEL Insurance, we offer a range of customizable Homeowner Insurance options that provide our clients with the protection and peace of mind they need. Our team of experts works closely with clients to understand their unique needs and tailor policies that provide them with comprehensive coverage, including coverage for property damage, personal belongings, and liability claims.

With our Homeowner Insurance policies, clients can be sure that their home is adequately protected against various risks, and they can focus on enjoying their home without worrying about potential liabilities or financial losses.

At AAXEL Insurance, we are committed to providing our clients with the best possible coverage and peace of mind they need to protect their home and investment. Contact us today to learn more about our Homeowner Insurance coverage options and how we can help you protect your home.`}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Home-Insurance.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      {/* get quote form  */}
      <QuoteForm/>
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default HomeInsurance;
