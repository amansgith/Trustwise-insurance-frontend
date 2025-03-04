import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const MotorcycleInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Motorcycle Insurance"
        description={
          <>
            <p>
              At Trustwise Insurance, we understand the thrill and freedom that comes with riding a motorcycle. Our Motorcycle Insurance provides comprehensive coverage to protect you and your bike against unexpected events. Whether you're cruising down the highway or navigating city streets, we have you covered.
            </p>
            <p>
              Our policies include a range of coverage options such as liability coverage, collision coverage, comprehensive coverage, and more. Each policy can be customized to meet your specific needs, ensuring you have the right protection based on your riding habits and the type of motorcycle you own.
            </p>
            <p>
              In addition to protecting you against financial losses resulting from accidents, theft, or damage to your motorcycle, our motorcycle insurance helps you comply with legal requirements for insurance coverage. Trustwise Insurance is committed to providing you with peace of mind while on the road, so you can focus on enjoying your ride.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/tim-meyer-2LTMNCN4nEg-unsplash.jpg"
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

export default MotorcycleInsurance;