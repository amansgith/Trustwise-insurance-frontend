"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const TenantInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Tenant Insurance"
        description={
          <>
            <p>
              Tenant Insurance That Has You Covered | Trustwise Insurance
            </p>
            <p>
              Renting a home comes with its own set of responsibilities—and protecting your personal belongings should be one of them. At Trustwise Insurance, our Tenant Insurance plans provide reliable protection against theft, property damage, and liability claims, ensuring you’re covered when the unexpected happens.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/kara-eads-L7EwHkq1B2s-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Coverage for Peace of Mind</h2>
          <p>Our customizable Tenant Insurance policies are designed to fit your lifestyle and provide complete protection, including:</p>
          <ul className="list-inside ml-4 mt-2">
            <li>🏡 Personal belongings coverage: Protect your furniture, electronics, and valuables from theft, fire, and more.</li>
            <li>🛡️ Liability protection: Stay protected if you’re held responsible for injury or property damage.</li>
            <li>🏠 Additional living expenses: Get coverage for temporary housing if your rental becomes uninhabitable due to a covered loss.</li>
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Rent with Confidence</h2>
          <p>
            At Trustwise Insurance, we work closely with you to create policies that safeguard your belongings and protect you from potential liabilities. With our Tenant Insurance, you can relax and enjoy your rental home, knowing you’re covered against life’s uncertainties.
          </p>
          <p className="mt-4">
            Protect what matters most—your belongings and peace of mind.
          </p>
          <p className="mt-4">
            📞 Contact Trustwise Insurance today to learn more about our Tenant Insurance options and secure the coverage you need.
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

export default TenantInsurance;