import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
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
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/spencer-davis-_Wmr8-Qu2PQ-unsplash.jpg"
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