"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const LegalExpenseInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Legal Expense Insurance"
        description={
          <>
            <b>Comprehensive Legal Expense Insurance from Trustwise Insurance</b>
            <br />
            Legal Expense Insurance is a type of insurance that provides coverage for businesses and individuals against the costs of legal proceedings. This type of insurance is essential for businesses and individuals who may face legal disputes or litigation, as legal expenses can be significant and unexpected.
            <br />
            <br />
            <b>Why Legal Expense Insurance Matters?</b>
            <br />
            Legal Expense Insurance is essential for businesses and individuals who may face legal disputes or litigation. It offers crucial protection against financial losses resulting from legal proceedings, helping you comply with legal requirements and enhancing your risk management strategy. With Trustwise Insurance, you get the peace of mind you need to focus on your business or personal affairs.
            <br />
            <br />
            <b>What Our Legal Expense Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Legal Fees: Covers costs associated with hiring legal representation.</li>
              <li>⚖️ Court Costs: Covers expenses related to court proceedings.</li>
              <li>💼 Expert Witness Fees: Covers costs associated with hiring expert witnesses.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your legal risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Legal Expense Insurance provides access to legal advice and support, helping you navigate complex legal issues more effectively.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect legal expense coverage for your needs.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/alexander-grey-tn57JI3CewI-unsplash.jpg"
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

export default LegalExpenseInsurance;