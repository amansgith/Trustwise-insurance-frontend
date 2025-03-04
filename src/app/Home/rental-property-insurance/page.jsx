import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const RentalPropertyInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Rental Property Insurance"
        description={
          <>
            <p>
              Rental Property Insurance | Protect Your Investment with Trustwise Insurance
            </p>
            <p>
              Owning a rental property is a valuable investment—but managing it comes with risks. At Trustwise Insurance, we offer Rental Property Insurance designed to protect property owners and landlords from unexpected challenges, including property damage, liability claims, and loss of rental income. Our comprehensive coverage ensures your investment remains secure, allowing you to focus on managing your property with confidence.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/jacques-bopp-Hh18POSx5qk-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Coverage for Landlords and Property Owners</h2>
          <p>We provide customizable Rental Property Insurance policies tailored to your unique needs, offering protection for:</p>
          <ul className="list-inside ml-4 mt-2">
            <li>🏡 Property damage from fire, storms, vandalism, and more</li>
            <li>🛡️ Liability claims in case of accidents or injuries on your rental property</li>
            <li>💰 Loss of rental income if your property becomes uninhabitable due to a covered loss</li>
          </ul>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Focus on Your Rental—We’ll Handle the Rest</h2>
          <p>
            At Trustwise Insurance, we understand that every rental property is different. Our team of experts works closely with you to craft insurance solutions that provide comprehensive protection and peace of mind. With our Rental Property Insurance, you can rest assured that your investment is safeguarded against unforeseen risks and financial losses.
          </p>
          <p className="mt-4">
            Safeguard your rental property with confidence.
          </p>
          <p className="mt-4">
            📞 Contact Trustwise Insurance today to learn more about our Rental Property Insurance options and secure the protection your investment deserves.
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

export default RentalPropertyInsurance;