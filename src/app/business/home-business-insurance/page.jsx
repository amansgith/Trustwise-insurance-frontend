import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const HomeBusinessInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Home based Business Insurance"
        description={
          <>
            Many people in Canada now work from home, and some have even moved
            their businesses there since Covid-19 reached the country. You
            should start thinking about home-based business insurance right now.
            <br />
            <br />
            Aaxel Insurance Brokers support business owners and appreciate that
            everyone begins with a dream and one or more desks in their homes.
            Make sure you feel as though your dream is secured, regardless of
            what transpires in the future, while you pursue your passion of
            introducing the world’s newest/best-performing solution.
            <br />
            <br />
            Even if you run a part-time home business, you should think about
            getting insurance for your home office to protect both you and your
            assets. Our knowledgeable brokers will assist you in determining
            whether your home insurance will cover you, if you need
            comprehensive business insurance, or if you need some alternative
            custom business insurance solutions.
            <br />
            <br />
            Join thousands of Canadian businesses that are already protected!
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Business-Insurance-1.jpg"
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

export default HomeBusinessInsurance;
