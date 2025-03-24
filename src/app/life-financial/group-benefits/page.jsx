"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const GroupBenefits = () => {
  return (
    <>
      <InsuranceIntro
        title="Group Benefits"
        description={
          <>
            At Trustwise Insurance, we understand that providing competitive benefits to employees is a key factor in attracting and retaining top talent. That's why we offer customizable Group Benefits Insurance policies designed to provide our clients with flexible and affordable coverage options for their employees.
            <br />
            <br />
            Our Group Benefits Insurance policies can be tailored to meet the unique needs of each employer and can include options such as health and dental insurance, life insurance, disability insurance, and more. We work closely with our clients to understand their specific needs and provide them with the best possible coverage options for their employees.
            <br />
            <br />
            Our team of experts is dedicated to helping our clients navigate the complexities of group benefits insurance and providing them with the support they need to make informed decisions about their coverage. We are committed to delivering the highest level of service and support to our clients and their employees.
            <br />
            <br />
            With Trustwise Insurance, our clients can have peace of mind knowing that they are providing their employees with competitive and comprehensive group benefits coverage. Contact us today to learn more about our customizable Group Benefits Insurance policies and how we can help you provide the best possible benefits to your employees.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
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

export default GroupBenefits;