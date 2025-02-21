import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const AccountReceivableInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Account Receivable Insurance"
        description={
          <>
            Account Receivable Insurance (ARI) is a type of insurance offered by
            AAXEL Insurance that provides protection to businesses against the
            risks of non-payment of invoices or bad debts. This type of
            insurance is particularly beneficial for businesses that sell goods
            or services on credit terms, as it provides financial protection and
            peace of mind.
            <br />
            <br />
            ARI policies can be customized to meet the unique needs of
            individual businesses, with coverage limits based on the amount of
            credit offered to customers and tailored to specific industry risks.
            ARI can also help businesses secure financing from banks and other
            lenders, as it provides a level of assurance that outstanding
            invoices will be paid. AAXEL Insurance is a reputable insurance
            provider that offers ARI policies to help businesses protect
            themselves against financial losses resulting from unpaid invoices
            or bad debts, and to provide them with financial stability and cash
            flow protection.
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
