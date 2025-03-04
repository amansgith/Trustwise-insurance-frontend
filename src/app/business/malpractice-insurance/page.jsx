import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const MalpracticeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Malpractice Insurance"
        description={
          <>
            <b>Comprehensive Malpractice Insurance from Trustwise Insurance</b>
            <br /><br />
            Malpractice Insurance provides coverage for professionals, such as doctors, lawyers, and accountants, against claims of professional negligence or malpractice. This type of insurance is essential for professionals whose work involves providing services to clients, as it provides financial protection in the event of lawsuits or claims for damages resulting from alleged professional errors or omissions.
            <br />
            <br />
            <b>Why Malpractice Insurance Matters?</b>
            <br />
            Malpractice Insurance is essential for professionals who provide specialized services. It offers crucial protection against financial losses resulting from claims of professional negligence or errors, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on providing quality services.
            <br />
            <br />
            <b>What Our Malpractice Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Legal Defense Costs: Covers legal expenses related to defending against claims of professional negligence or errors.</li>
              <li>💼 Settlements and Judgments: Covers costs associated with settlements and judgments resulting from claims of professional negligence or errors.</li>
              <li>⚖️ Regulatory Fines and Penalties: Covers fines and penalties imposed by regulatory bodies due to professional errors or omissions.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your profession and risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Malpractice Insurance helps professionals enhance their risk management strategies and build trust with clients and partners.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect malpractice coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/mailchimp-Vc2dD4l57og-unsplash.jpg"
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

export default MalpracticeInsurance;