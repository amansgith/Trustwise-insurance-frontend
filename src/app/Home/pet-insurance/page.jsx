"use client"
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";

const PetInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Pet Insurance"
        description={
          <>
            <p>
              Pet Insurance | Flexible Coverage for Your Furry Family with Trustwise Insurance
            </p>
            <p>
              At Trustwise Insurance, we understand that every pet is unique—and so are their healthcare needs. That’s why we offer fully customizable Pet Insurance plans, giving you the flexibility to choose the coverage that best suits your pet and your budget. From routine wellness visits to unexpected emergencies, we ensure you’re prepared for every stage of your pet’s life.
            </p>
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/06/Pet-Insurance.webp"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Tailor Your Pet Insurance Plan</h2>
          <p>With Trustwise Pet Insurance, you can personalize your coverage to include:</p>
          <ul className="list-inside ml-4 mt-2">
            <li>🏥 Veterinary Expense Coverage: Choose reimbursement options for up to 80% of veterinary bills, including accidents, illnesses, and emergency care.</li>
            <li>🦷 Dental & Specialized Care: Add protection for dental treatments, alternative therapies (such as physiotherapy or acupuncture), surgeries, and prescription medications.</li>
            <li>🐾 Routine & Preventative Care: Select wellness coverage options for routine check-ups, vaccinations, flea and heartworm prevention, and more.</li>
            <li>♾️ Lifetime Coverage: Enjoy lifetime protection with adjustable annual limits that renew every year, ensuring ongoing care as your pet ages.</li>
            <li>💡 Custom Deductibles & Limits: Decide how much you want to pay out of pocket with flexible deductible and limit options to match your financial needs.</li>
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Coverage That Cares—And Gives Back</h2>
          <p>
            Every time you request a quote, Trustwise Insurance donates $1 (up to $2,000) to a local animal shelter—helping pets in need while you protect your own.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Customize Your Coverage Today</h2>
          <p>
            Your pet deserves the best care—and you deserve a plan that works for you.
          </p>
          <p className="mt-4">
            📞 Contact Trustwise Insurance today to explore our customizable Pet Insurance options and build the perfect plan for your furry friend.
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

export default PetInsurance;