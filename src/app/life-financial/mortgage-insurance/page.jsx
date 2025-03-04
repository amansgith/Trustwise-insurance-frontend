import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const MortgageInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Mortgage Insurance"
        description={
          <>
            Mortgage Insurance provides financial protection to mortgage lenders in the event of a borrower's default. At Trustwise Insurance, we understand the importance of securing mortgage insurance to protect both lenders and borrowers.
            <br />
            <br />
            We offer comprehensive Mortgage Insurance services designed to meet the unique needs of each client. Our team of experienced professionals works closely with mortgage lenders to develop customized insurance solutions that mitigate risk and ensure the financial stability of their portfolio.
            <br />
            <br />
            Our Mortgage Insurance products include Mortgage Life Insurance, Mortgage Disability Insurance, and Mortgage Critical Illness Insurance. These products provide coverage for the borrower in case of unexpected life events that could impact their ability to pay their mortgage.
            <br />
            <br />
            At Trustwise Insurance, we prioritize transparency and keep our clients informed about their insurance coverage through regular updates and reports. We are committed to providing the highest level of service and support to our clients to ensure their financial security and success.
            <br />
            <br />
            Contact us today to learn more about our Mortgage Insurance products and how we can help you protect your investments and financial future.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/dillon-kydd-2keCPb73aQY-unsplash.jpg"
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

export default MortgageInsurance;