import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const SnowmobileInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Snowmobile Insurance"
        description={
          <>
            <p>
              At Trustwise Insurance, we understand the excitement and adventure that comes with snowmobiling. Our Snowmobile Insurance provides comprehensive coverage to protect you and your snowmobile against unexpected events. Whether you're exploring trails or enjoying the snowy outdoors, we have you covered.
            </p>
            <p>
              Our policies include a range of coverage options such as liability coverage, collision coverage, comprehensive coverage, and more. Each policy can be customized to meet your specific needs, ensuring you have the right protection based on your riding habits and the type of snowmobile you own.
            </p>
            <p>
              In addition to protecting you against financial losses resulting from accidents, theft, or damage to your snowmobile, our snowmobile insurance helps you comply with legal requirements for insurance coverage. Trustwise Insurance is committed to providing you with peace of mind while on the trails, so you can focus on enjoying your ride.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1548978196-bacaf580eaf7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default SnowmobileInsurance;