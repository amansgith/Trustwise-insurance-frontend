import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CommercialPropertyInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Commercial Property Insurance"
        description={
          <>
            <b>Comprehensive Commercial Property Insurance from Trustwise Insurance</b>
            <br />
            At Trustwise Insurance, we understand that protecting your commercial property is crucial for the continuity and success of your business. Whether you own or lease your business space, our Commercial Property Insurance provides robust coverage against property damage, theft, and loss of income resulting from covered events.
            <br />
            <br />
            <b>Why Commercial Property Insurance Matters?</b>
            <br />
            Commercial Property Insurance is essential for businesses that own or lease commercial property, such as offices, warehouses, and retail spaces. It offers vital protection against financial losses that could otherwise disrupt your operations and impact your bottom line. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Commercial Property Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Building and Contents Coverage: Protects your physical assets, including buildings, equipment, and inventory.</li>
              <li>💼 Business Interruption Coverage: Covers loss of income and extra expenses incurred due to a covered loss, ensuring your business can continue operating.</li>
              <li>🔒 Theft and Vandalism Coverage: Protects against losses resulting from theft or vandalism.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Commercial Property Insurance helps businesses comply with legal insurance requirements and enhances their risk management strategies.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect property coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/herry-sutanto-vTZPm6NSxQU-unsplash.jpg"
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

export default CommercialPropertyInsurance;