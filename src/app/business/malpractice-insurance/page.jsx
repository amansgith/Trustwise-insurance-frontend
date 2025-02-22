import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const MalpracticeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Malpractice Insurance"
        description={
          <>
            Malpractice Insurance is a type of insurance offered by AAXEL
            Insurance that provides coverage for professionals, such as doctors,
            lawyers, and accountants, against claims of professional negligence
            or malpractice. This type of insurance is essential for
            professionals whose work involves providing services to clients, as
            it provides financial protection in the event of lawsuits or claims
            for damages resulting from alleged professional errors or omissions.
            <br />
            <br />
            AAXEL Insurance offers a range of coverage options for Malpractice
            Insurance, including coverage for legal defense costs, damages or
            settlements, and regulatory fines and penalties. These policies can
            be customized to meet the unique needs of individual professionals,
            with coverage limits based on the level of risk exposure and the
            nature of their professional services.
            <br />
            <br />
            In addition to protecting professionals against financial losses
            resulting from claims of malpractice, Malpractice Insurance can also
            enhance their professional reputation and provide peace of mind
            while performing their duties. AAXEL Insurance is a reputable
            insurance provider that offers Malpractice Insurance policies to
            help professionals protect themselves against potential professional
            risks and to provide them with the confidence and security to focus
            on their work.
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
