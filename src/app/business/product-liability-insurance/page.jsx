import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const ProductLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Product Liability Insurance"
        description={
          <>
            Product Liability Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for businesses against claims for
            bodily injury or property damage caused by their products. This type
            of insurance is essential for businesses that manufacture or sell
            products, as it provides financial protection in the event of
            lawsuits resulting from product defects or malfunctions.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Product
            Liability Insurance, including coverage for legal defense costs,
            settlements, and judgments. These policies can be customized to meet
            the unique needs of individual businesses, with coverage limits
            based on the type and number of products sold.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from product-related claims, Product Liability Insurance
            can also help businesses improve their risk management strategies
            and enhance their reputation for quality and safety. AAXEL Insurance
            is a reputable insurance provider that offers Product Liability
            Insurance policies to help businesses protect themselves against
            potential liability risks and to provide them with peace of mind
            while conducting their operations.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/austin-distel-wD1LRb9OeEo-unsplash.jpg"
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

export default ProductLiabilityInsurance;
