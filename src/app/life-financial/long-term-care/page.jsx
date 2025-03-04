import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const LongTermCare = () => {
  return (
    <>
      <InsuranceIntro
        title="Long Term Care"
        description={
          <>
            At Trustwise Insurance, we understand the importance of planning for long-term care expenses. Long-term care insurance can provide peace of mind and financial security for individuals who may need extended care due to illness, injury, or aging.
            <br />
            <br />
            Our Long-Term Care Insurance policies offer customizable coverage options designed to meet the unique needs of each client. We work closely with our clients to understand their specific needs and provide them with the best possible coverage options for their long-term care needs.
            <br />
            <br />
            Our team of experts is dedicated to helping our clients navigate the complexities of long-term care insurance and providing them with the support they need to make informed decisions about their coverage. We are committed to delivering the highest level of service and support to our clients.
            <br />
            <br />
            With Trustwise Insurance, our clients can have peace of mind knowing that they are prepared for the future and have a plan in place to protect their assets and provide for their long-term care needs. Contact us today to learn more about our customizable Long-Term Care Insurance policies and how we can help you plan for your long-term care needs.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/zac-gudakov-wwqZ8CM21gg-unsplash.jpg"
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

export default LongTermCare;