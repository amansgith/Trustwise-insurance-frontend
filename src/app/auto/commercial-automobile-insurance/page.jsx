import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CommercialAutomobileInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Commercial Automobile Insurance"
        description={
          <>
            <p>
              At Trustwise Insurance, we understand the importance of keeping your business moving. Our Commercial Automobile Insurance provides comprehensive coverage for businesses that use vehicles for work-related purposes. Whether you rely on vehicles to transport goods, equipment, or employees, we have you covered.
            </p>
            <p>
              Our policies include a range of coverage options such as liability coverage, collision coverage, comprehensive coverage, and more. Each policy can be customized to meet the unique needs of your business, ensuring you have the right protection based on the type and number of vehicles you use.
            </p>
            <p>
              In addition to protecting your business against financial losses resulting from accidents, theft, or damage to your vehicles, our commercial automobile insurance helps you comply with legal requirements for insurance coverage. Trustwise Insurance is committed to providing you with peace of mind while on the road, so you can focus on running your business.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/zetong-li-mVqTumQH-c0-unsplash.jpg"
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

export default CommercialAutomobileInsurance;