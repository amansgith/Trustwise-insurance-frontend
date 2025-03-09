import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const AccountReceivableInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Account Receivable Insurance"
        description={
          <>
            <b>Comprehensive Account Receivable Insurance from Trustwise Insurance</b>
            <br /><br />
            Account Receivable Insurance (ARI) provides protection to businesses against the risks of non-payment of invoices or bad debts. This type of insurance is particularly beneficial for businesses that sell goods or services on credit terms, as it provides financial protection and peace of mind.
            <br />
            <br />
            <b>Why Account Receivable Insurance Matters?</b>
            <br />
            ARI is essential for businesses that extend credit to their customers. It offers crucial protection against financial losses resulting from unpaid invoices or bad debts, helping you maintain financial stability and cash flow. With Trustwise Insurance, you get the peace of mind you need to focus on growing your business.
            <br />
            <br />
            <b>What Our Account Receivable Insurance Coverage Includes:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>✅ Non-Payment Protection: Covers losses resulting from non-payment of invoices by customers.</li>
              <li>💼 Bad Debt Coverage: Protects against financial losses due to bad debts.</li>
              <li>⚡ Customized Policies: Tailored coverage based on your business type and credit risk exposure, ensuring you only pay for what you need.</li>
            </ul>
            <br />
            Beyond offering financial protection, our Account Receivable Insurance helps businesses secure financing from banks and other lenders by providing assurance that outstanding invoices will be paid.
            <br />
            <br />
            <b>Stay protected from the unexpected with Trustwise Insurance.</b>
            <br />
            📞 Call 780-255-5151 today and let us tailor the perfect account receivable insurance coverage for your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/scott-graham-5fNmWej4tAA-unsplash.jpg"
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

export default AccountReceivableInsurance;