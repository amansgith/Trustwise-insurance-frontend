import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const ClassicCarInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Classic Car Insurance"
        description={
          <>
            <p>
              If you own a Classic Car, you want to ensure your pride and joy is properly insured and protected. After all, there’s nothing better than taking your prized possession out for an afternoon cruise on a beautiful sunny day. At Trustwise Insurance, we will review your needs, no matter how specific they are, and then provide you with coverage to meet those needs.
            </p>
            <p>
              We are all about tailor-made policies that ensure you, the client, can have peace of mind, knowing we are here to help around the clock. Your regular auto insurance policy does not always cover Classic Cars, so let Trustwise guide you to ensure your classic car, vintage car, antique car, or collector car is properly protected.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default ClassicCarInsurance;