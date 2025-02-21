import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CyberLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Cyber Liability Insurance"
        description={
          <>
            Cyber Liability Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for businesses against risks
            associated with cyber attacks, data breaches, and other cyber
            threats. This type of insurance is essential for businesses of all
            sizes and industries, as cyber threats have become increasingly
            common and sophisticated in recent years.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Cyber
            Liability Insurance, including coverage for data breach response,
            business interruption, legal defense costs, and regulatory fines and
            penalties. These policies can be customized to meet the unique needs
            of individual businesses, with coverage limits based on the size and
            type of data they handle, as well as their level of risk exposure.
            <br />
            <br />
            In addition to protecting businesses against financial losses
            resulting from cyber attacks and data breaches, Cyber Liability
            Insurance can also help them comply with legal requirements for data
            security and enhance their risk management strategies. AAXEL
            Insurance is a reputable insurance provider that offers Cyber
            Liability Insurance policies to help businesses protect themselves
            against potential cyber risks and to provide them with peace of mind
            while conducting their operations in a digital world.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/markus-spiske-iar-afB0QQw-unsplash.jpg"
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

export default CyberLiabilityInsurance;
