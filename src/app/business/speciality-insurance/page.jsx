import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const SpecialityInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Speciality Insurance"
        description={
          <>
            Specialty Insurance is a unique type of coverage offered by AAXEL
            Insurance that provides specialized protection against niche and
            unique risks that are not covered by standard insurance policies.
            This type of insurance is crucial for businesses and individuals who
            operate in specialized industries or engage in unique activities
            that require specialized coverage.
            <br />
            <br />
            At AAXEL Insurance, we offer a range of customized Specialty
            Insurance coverage options, including coverage for events,
            entertainment, sports, and other unique risks. Our team of experts
            works closely with clients to understand their unique needs and
            tailor policies that provide them with the protection and peace of
            mind they need to operate with confidence.
            <br />
            <br />
            With our Specialty Insurance policies, clients can be sure that they
            are protected against financial losses resulting from niche risks
            and can focus on pursuing their specialized activities without
            worrying about potential liabilities or legal disputes.
            <br />
            <br />
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to succeed in
            their specialized fields. Contact us today to learn more about our
            Specialty Insurance coverage options and how we can help protect you
            and your business.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/linkedin-sales-solutions-7wyEG321GS0-unsplash.jpg"
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

export default SpecialityInsurance;
