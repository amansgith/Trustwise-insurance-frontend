import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const CriticialIllnessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Critical Illness Insurance"
        description={
          <>
            Critical Illness Insurance is a type of coverage that provides
            financial support to individuals who are diagnosed with a critical
            illness such as cancer, heart attack, stroke, or kidney failure. At
            AAXEL Insurance, we understand the emotional and financial stress
            that comes with a critical illness diagnosis, and we are committed
            to providing our clients with the peace of mind they need during
            this challenging time.
            <br />
            <br />
            Our Critical Illness Insurance policies are designed to provide our
            clients with financial support when they need it most. We offer
            customizable options that cover various critical illnesses and
            provide benefits that can be used to cover medical expenses, loss of
            income, or other unforeseen expenses.
            <br />
            <br />
            Our team of experts works closely with our clients to understand
            their unique needs and tailor policies that provide them with the
            protection they need. With AAXEL Insurance, our clients can be sure
            that they are getting the best possible coverage and support during
            a difficult time.
            <br />
            <br />
            Contact us today to learn more about our Critical Illness Insurance
            policies and how we can help you protect yourself and your loved
            ones from the financial burden of a critical illness diagnosis.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/accuray-5sDRGl2PrNM-unsplash.jpg"
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

export default CriticialIllnessInsurance;
