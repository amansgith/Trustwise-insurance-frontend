"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CyberLiabilityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Cyber Liability Insurance"
        description={
          <>
            <b>Comprehensive Cyber Liability Insurance from Trustwise Insurance</b>
            <br />
            At Trustwise Insurance, we understand that in today's digital age, businesses of all sizes and industries face significant cyber risks. From data breaches to cyberattacks, these threats can lead to substantial financial losses and reputational damage. Our Cyber Liability Insurance provides the protection you need to navigate these challenges confidently.
            <br />
            <br />
            <b>Why Cyber Liability Insurance Matters?</b>
            <br />
            Cyber Liability Insurance is essential for businesses that handle sensitive data or rely on digital operations. It offers crucial protection against financial losses resulting from cyber incidents, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Cyber Liability Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Data Breach Response: Covers costs associated with responding to a data breach, including notification, credit monitoring, and public relations efforts.</li>
              <li>💼 Business Interruption: Covers loss of income and extra expenses incurred due to a cyber incident that disrupts your operations.</li>
              <li>⚖️ Legal Defense Costs: Covers legal expenses related to defending against claims resulting from a cyber incident.</li>
              <li>🔒 Regulatory Fines and Penalties: Covers fines and penalties imposed by regulatory bodies due to non-compliance with data protection laws.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Cyber Liability Insurance helps businesses enhance their cybersecurity posture and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect cyber liability coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/markus-spiske-iar-afB0QQw-unsplash.jpg"
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

export default CyberLiabilityInsurance;