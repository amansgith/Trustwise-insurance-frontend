import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const SmallMediumBusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Small Medium Business Insurance"
        description={
          <>
            As a small- or medium-sized business owner, you must safeguard
            yourself from claims resulting from your business operations.
            Whether you run a small or medium business or are a retailer,
            consultant, or contractor, Aaxel insurance understands the risks you
            may encounter.
            <br />
            <br />
            Since no two businesses are alike, our expert insurance brokers at
            Aaxel insurance tailor our insurance solutions to meet the needs of
            small and medium-sized businesses.
            <br />
            <br />
            You will require small/medium business insurance if your company
            delivers professional or creative services, advice, or suggestions.
            <br />
            <br />
            If you sell your products from a store, internet, or home, Make sure
            you have the insurance to cover your small or medium business
            insurance needs. Running a retail operation requires work,
            commitment, and enthusiasm. By failing to obtain the required
            insurance, you run the risk of endangering your inventory, business,
            and clients.
            <br />
            <br />
            If you, as a small- or medium-sized business owner, provide contract
            services, Protect your tools and equipment against loss that is
            insurable by obtaining contractor’s insurance. For small- or
            medium-sized business owners, recovering from an uninsured loss can
            be devastating for small or medium business owners and negatively
            affect their reputation in the industry.
            <br />
            <br />
            Join thousands of Canadian businesses that are already protected!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/cowomen-7Zy2KV76Mts-unsplash.jpg"
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

export default SmallMediumBusinessInsurance;
