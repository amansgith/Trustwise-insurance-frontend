"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const GarageInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Garage Insurance"
        description={
          <>
            <b>Comprehensive Garage Insurance from Trustwise Insurance</b>
            <br />
            Garage Insurance provides protection to automotive repair and service businesses against various risks, including property damage, liability claims, and theft. This type of insurance is essential for garage owners who want to ensure that their business and assets are adequately covered and protected in the event of unforeseen circumstances.
            <br />
            <br />
            <b>Why Garage Insurance Matters</b>
            <br />
            Garage Insurance is essential for automotive repair and service businesses. It offers crucial protection against financial losses resulting from property damage, liability claims, and theft, helping you maintain financial stability and focus on delivering quality services. With Trustwise Insurance, you get the peace of mind you need to focus on your business.
            <br />
            <br />
            <b>What Our Garage Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Property Damage Coverage: Protects against damage to the garage and equipment.</li>
              <li>🔒 Liability Coverage: Covers claims related to bodily injury or property damage caused by your business operations.</li>
              <li>🚗 Theft Coverage: Covers losses due to theft of vehicles, parts, and equipment.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Garage Insurance helps automotive repair and service businesses enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect garage insurance coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/edgar-EW5tFsF6e4g-unsplash.jpg"
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

export default GarageInsurance;