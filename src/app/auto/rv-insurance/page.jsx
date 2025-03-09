import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const RVInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="RV Insurance"
        description={
          <>
            <p>
              At Trustwise Insurance, we offer competitive quotes for your RV Insurance and Motorhome Insurance as you travel to Canada’s best RV destinations. We know that Canada has some of the best RV and Motorhome travel destinations in the world. Our goal is to provide you with peace of mind, so you can travel freely.
            </p>
            <p>
              Our brokers understand your insurance requirements, whether your needs are RV Insurance, Motorhome Insurance, fifth wheel, travel trailer, tent trailer, truck camper, or park model. We will offer you the best RV Insurance and Motorhome Insurance solutions.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default RVInsurance;