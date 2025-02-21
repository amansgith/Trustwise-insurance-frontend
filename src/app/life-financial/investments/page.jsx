import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const Investments = () => {
  return (
    <>
      <InsuranceIntro
        title="Investments"
        description={
          <>
            At AAXEL Insurance, we understand the importance of making informed
            investment decisions to grow and protect your wealth. That's why we
            offer Investment services designed to help our clients make the best
            investment choices for their financial goals and risk tolerance.
            <br />
            <br />
            Our team of experienced financial professionals provides
            personalized investment planning services tailored to meet the
            unique needs of each client. We work closely with our clients to
            develop customized investment portfolios that align with their
            financial goals, time horizon, and risk tolerance.
            <br />
            <br />
            We provide comprehensive investment solutions that include stocks,
            bonds, mutual funds, ETFs, and alternative investments. Our clients
            can have peace of mind knowing that their investments are being
            managed by a team of experienced professionals committed to
            delivering the highest level of service and support.
            <br />
            <br />
            At AAXEL Insurance, we prioritize transparency and keep our clients
            informed about their investment portfolios through regular reports
            and updates. We are committed to helping our clients achieve their
            financial goals and build a secure future through smart and informed
            investment decisions. Contact us today to learn more about our
            Investment services and how we can help you grow and protect your
            wealth.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/firmbee-com-dAmHWsRYP9c-unsplash.jpg"
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

export default Investments;
