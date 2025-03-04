import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const CottageInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Cottage Insurance"
        description={
          <>
            <p>
              Cottage Insurance for Worry-Free Getaways | Trustwise Insurance
            </p>
            <p>
              Your cottage is more than just a property—it’s a place for relaxation, memories, and escape. At Trustwise Insurance, we offer Cottage Insurance designed to protect your retreat from unexpected risks such as property damage, liability claims, and theft. Our comprehensive coverage ensures that your investment is safeguarded, so you can enjoy your time away without worries.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/Home-Insurance-2.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Coverage Designed for Cottage Living</h2>
          <p>Every cottage is unique, and so are your insurance needs. That’s why we provide customizable Cottage Insurance policies, offering protection for:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>🏡 Property damage caused by fire, storms, or vandalism</li>
            <li>🔐 Theft protection for your cottage and its contents</li>
            <li>🛡️ Liability coverage in case of accidents on your property</li>
          </ul>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Enjoy Your Cottage—We’ll Handle the Rest</h2>
          <p>
            With Trustwise Insurance, you can fully embrace cottage life, knowing your getaway is backed by reliable protection. Our dedicated team works with you to create coverage that fits your needs, allowing you to focus on what matters most—making memories in your home away from home.
          </p>
          <p className="mt-4">
            Protect your peaceful retreat today.
          </p>
          <p className="mt-4">
            📞 Contact Trustwise Insurance to explore our Cottage Insurance options and secure the protection your cottage deserves.
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

export default CottageInsurance;