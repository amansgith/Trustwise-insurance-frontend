import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CorporateInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Corporate Insurance"
        description={
          <>
            <b>Comprehensive Corporate Insurance Solutions by Trustwise Insurance</b>
            <br /><br />
            At Trustwise Insurance, we understand that running a corporation—regardless of its size or industry—comes with complex risks. From property damage and lawsuits to cyber threats, unforeseen events can disrupt your operations and impact your bottom line. That’s why our Corporate Insurance solutions are designed to provide robust protection, so you can focus on growing your business with confidence.
            <br />
            <br />
            <b>Why Corporate Insurance from Trustwise Insurance?</b>
            <br />
            Corporate Insurance is essential for safeguarding your business against financial losses, ensuring compliance with legal requirements, and strengthening your risk management strategy. Our expert brokers work closely with you to customize coverage that aligns with the unique needs of your corporation.
            <br />
            <br />
            <b>Our Corporate Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ General Liability Insurance: Protection against claims of bodily injury, property damage, and more.</li>
              <li>🏢 Property Insurance: Covers your physical assets, including buildings, equipment, and inventory.</li>
              <li>👩‍💼 Directors and Officers (D&O) Liability Insurance: Shields executives from personal losses due to management decisions.</li>
              <li>🔒 Cyber Liability Insurance: Protects your business against data breaches, cyberattacks, and related risks.</li>
              <li>🏛 Employment Practices Liability Insurance: Covers claims related to employment issues such as wrongful termination, harassment, or discrimination.</li>
            </ul>
            <br />
            At Trustwise Insurance, we tailor each policy based on the size, industry, and scope of your operations—ensuring you only pay for the coverage you truly need.
            <br />
            <br />
            <b>Stay protected. Stay confident.</b>
            <br />
            📞 Call Trustwise Insurance today at 780-255-5151 and discover how we can protect your corporation against tomorrow’s uncertainties.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/christina-wocintechchat-com-2JDDn7iSGH8-unsplash.jpg"
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

export default CorporateInsurance;