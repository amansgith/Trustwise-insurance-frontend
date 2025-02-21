import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const LifeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Life Insurance"
        description={
          <>
            At AAXEL Insurance, we understand that planning for the future is
            essential, and Life Insurance is an essential part of that planning.
            We offer customizable Life Insurance policies that provide our
            clients with financial security and peace of mind for themselves and
            their loved ones.
            <br />
            <br />
            Our Life Insurance policies provide our clients with the flexibility
            to choose the amount of coverage they need, the length of coverage,
            and the beneficiaries who will receive the benefits. We offer both
            term life and permanent life insurance options, each designed to
            meet our clients' unique needs and budgets.
            <br />
            <br />
            Our team of experts works closely with our clients to understand
            their specific needs and help them make informed decisions about
            their Life Insurance coverage. We offer competitive rates and a
            range of options to ensure that our clients get the coverage they
            need at a price they can afford.
            <br />
            <br />
            With AAXEL Insurance, our clients can have peace of mind knowing
            that they and their loved ones are protected in the event of an
            unexpected tragedy. Contact us today to learn more about our Life
            Insurance policies and how we can help you plan for the future.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/name_-gravity-_AdUs32i0jc-unsplash.jpg"
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

export default LifeInsurance;
