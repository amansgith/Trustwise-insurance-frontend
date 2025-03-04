import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CondoInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Condo Insurance"
        description={
          <>
            <p>
              Condo Insurance Tailored for Your Peace of Mind | Trustwise Insurance
            </p>
            <p>
              At Trustwise Insurance, we know that owning a condo is a valuable investment and a reflection of your lifestyle. Our Condo Insurance plans are designed to protect condo owners from a variety of risks, including property damage, liability claims, and loss of personal belongings. With our reliable coverage, you can rest assured that your condo and everything in it are secure—no matter what life brings.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/herry-sutanto-vTZPm6NSxQU-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Coverage for Complete Confidence</h2>
          <p>We offer customizable Condo Insurance solutions that are tailored to your unique needs, including protection for:</p>
          <ul className="list-inside ml-4 mt-2">
            <li>Property damage caused by fire, water, or other unexpected events ✅</li>
            <li>Personal belongings, including furniture, electronics, and valuables ✅</li>
            <li>Liability claims if someone is injured while visiting your condo ✅</li>
          </ul>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Coverage You Can Trust</h2>
          <p>
            At Trustwise Insurance, our team of experts works closely with you to design a policy that offers the protection and peace of mind you deserve. Whether you live in your condo full-time or use it as a vacation home, our flexible plans ensure that you are covered against unforeseen risks and financial setbacks.
          </p>
          <p className="mt-4">
            Protect your condo and everything you love in it.
          </p>
          <p className="mt-4">
            📞 Contact Trustwise Insurance today to explore our Condo Insurance options and secure the coverage you need for a worry-free condo living experience.
          </p>
        </div>
      </section>

      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default CondoInsurance;