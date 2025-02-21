import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CommercialPropertyInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Commercial Property Insurance"
        description={
          <>
            Commercial Property Insurance is a type of insurance offered by
            AAXEL Insurance that provides coverage for businesses against
            property damage, theft, and loss of income resulting from a covered
            event. This type of insurance is essential for businesses that own
            or lease commercial property, such as offices, warehouses, and
            retail spaces.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Commercial
            Property Insurance, including coverage for the building and its
            contents, business interruption, and extra expenses incurred due to
            a covered loss. These policies can be customized to meet the unique
            needs of individual businesses, with coverage limits based on the
            value of the property and the level of risk exposure.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from property damage or loss, Commercial Property
            Insurance can also help businesses comply with legal requirements
            for insurance coverage and enhance their risk management strategies.
            AAXEL Insurance is a reputable insurance provider that offers
            Commercial Property Insurance policies to help businesses protect
            themselves against potential risks and to provide them with peace of
            mind while conducting their operations.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/herry-sutanto-vTZPm6NSxQU-unsplash.jpg"
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

export default CommercialPropertyInsurance;
