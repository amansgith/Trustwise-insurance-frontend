import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const DisabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Disability Insurance"
        description={
          <>
            At AAXEL Insurance, we understand that unexpected accidents and
            illnesses can happen at any time, and they can have a significant
            impact on a person's life and livelihood. That's why we offer
            customizable Disability Insurance policies designed to provide our
            clients with financial protection in the event of a disability that
            prevents them from working.
            <br />
            <br />
            Our Disability Insurance policies provide our clients with the
            flexibility to choose the level of coverage they need, and we offer
            both short-term and long-term disability options. Our team of
            experts works closely with our clients to understand their specific
            needs and help them make informed decisions about their Disability
            Insurance coverage.
            <br />
            <br />
            With AAXEL Insurance, our clients can have peace of mind knowing
            that they are protected in the event of an unexpected disability
            that prevents them from working. We offer competitive rates and a
            range of options to ensure that our clients get the coverage they
            need at a price they can afford.
            <br />
            <br />
            Contact us today to learn more about our Disability Insurance
            policies and how we can help you protect yourself and your family
            from the financial impact of a disability.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/yomex-owo-gRTzhQsiVG0-unsplash.jpg"
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

export default DisabilityInsurance;
