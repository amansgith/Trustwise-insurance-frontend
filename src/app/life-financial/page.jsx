"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const LifeInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Life Insurance"
        description={
          <>
            At Trustwise Insurance, we understand that planning for the future is essential. Our customizable Life Insurance policies provide financial security and peace of mind for you and your loved ones.
            <br />
            <br />
            We offer both term life and permanent life insurance options, allowing you to choose the coverage amount, length, and beneficiaries that best meet your needs and budget.
            <br />
            <br />
            Our team of experts works closely with you to understand your specific needs and help you make informed decisions about your Life Insurance coverage. We offer competitive rates and a range of options to ensure you get the coverage you need at a price you can afford.
            <br />
            <br />
            With Trustwise Insurance, you can have peace of mind knowing that you and your loved ones are protected. Contact us today to learn more about our Life Insurance policies and how we can help you plan for the future.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/name_-gravity-_AdUs32i0jc-unsplash.jpg"
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

export default LifeInsurance;