import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const RentalInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Rental Property Insurance"
        description={<>Rental Insurance is a crucial type of coverage offered by AAXEL Insurance that provides protection to property owners and landlords against various risks, including property damage, liability claims, and lost rental income. This type of insurance is essential for property owners who want to ensure that their investment is adequately covered and protected in the event of unforeseen circumstances.

At AAXEL Insurance, we offer customizable Rental Insurance options that provide our clients with comprehensive coverage, including coverage for property damage, liability claims, and lost rental income. Our team of experts works closely with clients to understand their unique needs and tailor policies that provide them with the protection and peace of mind they need.

With our Rental Insurance policies, property owners can be sure that their investment is adequately protected against various risks, and they can focus on managing their property without worrying about potential liabilities or financial losses.

At AAXEL Insurance, we are committed to providing our clients with the best possible coverage and peace of mind they need to protect their rental property. Contact us today to learn more about our Rental Insurance coverage options and how we can help you protect your investment.</>}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/jacques-bopp-Hh18POSx5qk-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm/>
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default RentalInsurance;
