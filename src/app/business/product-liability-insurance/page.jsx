import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const ProductLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Product Liability Insurance"
        description={
          <>
            <b>Comprehensive Product Liability Insurance from Trustwise Insurance</b>
            <br /><br />
            At Trustwise Insurance, we understand that businesses that manufacture or sell products face unique risks. From product defects to malfunctions, these risks can lead to substantial financial losses and reputational damage. Our Product Liability Insurance provides the protection you need to navigate these challenges confidently.
            <br />
            <br />
            <b>Why Product Liability Insurance Matters?</b>
            <br />
            Product Liability Insurance is essential for businesses that manufacture or sell products. It offers crucial protection against financial losses resulting from product-related claims, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Product Liability Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Bodily Injury & Property Damage Coverage: Protects against claims arising from injuries or property damage caused by your products.</li>
              <li>⚖️ Legal Defense Costs: Covers legal expenses related to defending against product-related claims.</li>
              <li>💼 Settlements and Judgments: Covers costs associated with settlements and judgments resulting from product-related claims.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Product Liability Insurance helps businesses enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect product liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/austin-distel-wD1LRb9OeEo-unsplash.jpg"
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

export default ProductLiabilityInsurance;