"use client"
import Associations from "@/components/CommonComponents/Associations";
import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import Features from "@/components/homepage/Features";
import QuoteForm from "@/components/CommonComponents/GetQuote";

const AssociationPakmen = () => {
  return (
    <>
      <Associations
        title="Pakmen Volleyball Club | Home & Auto Insurance Program"
        description={
          <>
            <b>Your Coverage, Your Way with Trustwise Insurance</b>
            <br /><br />
            As a Pakmen Volleyball Club member, you can now enjoy exclusive discounts on your Home and Auto Insurance premiums through the Pakmen Home & Auto Insurance Program.
            <br />
            <br />
            <b>Program Highlights:</b>
            <br />
            <ul className="list-inside mt-2 leading-8">
              <li>🚗🏡 Home & Auto Insurance Discounts: Pakmen members can save on insurance premiums while securing comprehensive coverage for their homes and vehicles.</li>
              <li>💰 Group Discounted Rates: Get access to special rates available only to Pakmen members. A portion of the premiums also supports The Community Fund, helping strengthen the club.</li>
              <li>🛡️ 1 Million Third-Party Liability Coverage: Standard coverage for many car insurance policies, crucial for families carpooling to and from events. Ensure your coverage matches your risks.</li>
            </ul>
            <br />
            <b>Get Your Free Quote Today</b>
            <br />
            📞 Call Trustwise Insurance at 780-255-5151 Or 647-925-5050 for Pakmen-specific quotes!
            <br />
            👉 Be sure to mention that you are a Pakmen member when you call to receive your group discounted rates.
          </>
        }
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2024/01/pakmen-vollyball.jpg"
        buttonText="Get a Quote"
        buttonLink="/call-back-request"
        sectionDescription={
          <>
            <p className="text-lg font-semibold">
              We recommend member companies communicate the availability of this program to their employees.
            </p>
            <p className="text-balance">
              Please note this program is offered on behalf of the association to all employees and in no way it may hold member companies responsible for the administration of the program.
            </p>
            <p className="mt-4">The key advantages of the program include:</p>
            <ul className="list-disc list-inside mt-2">
              <li>✅ Exclusive group discounts for Pakmen members</li>
              <li>✅ Support your club with every premium paid—help fund The Community Fund</li>
              <li>✅ Reliable, comprehensive coverage to meet your home and auto insurance needs</li>
            </ul>
            <p>🔗 Get the right coverage today, protect your assets, and continue supporting your Pakmen community!</p>
          </>
        }
      />

      <TrustBanner />
      <QuoteForm />
      <Features />
      <ContactUs />
      <FAQSection />
    </>
  );
};

export default AssociationPakmen;