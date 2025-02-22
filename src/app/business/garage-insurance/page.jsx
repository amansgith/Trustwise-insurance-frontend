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
        title="Garage Insurance"
        description={
          <>
            Garage Insurance is an important type of coverage offered by AAXEL
            Insurance that provides protection to automotive repair and service
            businesses against various risks, including property damage,
            liability claims, and theft. This type of insurance is essential for
            garage owners who want to ensure that their business and assets are
            adequately covered and protected in the event of unforeseen
            circumstances.
            <br />
            <br />
            At AAXEL Insurance, we offer customizable Garage Insurance options
            that provide our clients with comprehensive coverage, including
            coverage for property damage, liability claims, and theft. Our team
            of experts works closely with garage owners to understand their
            unique needs and tailor policies that provide them with the
            protection and peace of mind they need.
            <br />
            <br />
            With our Garage Insurance policies, garage owners can be sure that
            their business and assets are adequately protected against various
            risks, and they can focus on providing quality service to their
            clients without worrying about potential liabilities or financial
            losses.
            <br />
            <br />
            At AAXEL Insurance, we are committed to providing our clients with
            the best possible coverage and peace of mind they need to protect
            their garage business. Contact us today to learn more about our
            Garage Insurance coverage options and how we can help you protect
            your business and assets.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/edgar-EW5tFsF6e4g-unsplash.jpg"
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
