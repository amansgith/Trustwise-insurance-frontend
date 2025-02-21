import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const BusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Business Insurance"
        description={
          <>
            <em>Your Coverage, Your Way...</em>
            <br />
            <br />
            Business insurance protects your business from potential claims and
            or legal issues. Every business faces unique risks. All Canadian
            businesses take some risks, but taking too many risks or failing to
            take protective measures can lead to business losses. Business
            insurance is important because it can help protect your business
            from financial loss in the event of a catastrophic event, such as a
            fire, flood, or natural disaster.
            <br />
            <br />
            Business owners often get frustrated with the process of getting
            quote, understanding coverage needs, and who to trust.
            <br />
            <br />
            Join thousands of Canadian businesses that are already protected!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Business-Insuranc.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <h2>insurance types cards to be added here!!</h2>
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default BusinessInsurance;
