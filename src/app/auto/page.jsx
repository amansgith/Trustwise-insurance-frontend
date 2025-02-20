import InsuranceIntro from "@/components/CommonComponents/InsuranceIntro";
import TrustBanner from "@/components/CommonComponents/Banner";
import { FaCar, FaLayerGroup } from "react-icons/fa"; // Example icons
import { MdGavel, MdAssignment } from "react-icons/md";

const AutoInsurance = () => {
  return (
    <div>
      {/* Trust Banner - Used Across All Pages */}

      {/* Insurance Intro with Extra Buttons */}
      <InsuranceIntro
        title="Auto Insurance"
        description="You can buy Auto Insurance through various channels. It is up to you to decide if you want your Automobile Insurance needs met through insurance call centres of multi-nationals, or the option of meeting your Auto Insurance needs through a local independent insurance broker."
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/04/Auto-Insurance.jpg"
        buttonText="Get a Free Quote"
        extraButtons={[
          "CLASSIC CAR", "BOAT", "RV", "MOTORCYCLE",
          "BUNDLE", "COMMERCIAL AUTO", "PRIVATE CLIENT", "SNOWMOBILE", "+ MORE"
        ]}
      />
      <TrustBanner />
      <DiscountsSection
        discounts={[
          {
            icon: <FaCar />,
            title: "Multi-Vehicle Discount",
            description: "By insuring two or more vehicles in your policy, you could pay lower rates."
          },
          {
            icon: <FaLayerGroup />,
            title: "Multi-Policy Discount",
            description: "Bundle your insurance with home. Get up to 20% discount on your insurance rates."
          },
          {
            icon: <MdGavel />,
            title: "Conviction-free Discount",
            description: "Maintaining a clean driving record - no tickets or infractions can help you save."
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description: "Drivers in their first year with a G2 or G license may qualify for a discount."
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description: "Drivers in their first year with a G2 or G license may qualify for a discount."
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description: "Drivers in their first year with a G2 or G license may qualify for a discount."
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description: "Drivers in their first year with a G2 or G license may qualify for a discount."
          },
          {
            icon: <MdAssignment />,
            title: "License Discount",
            description: "Drivers in their first year with a G2 or G license may qualify for a discount."
          }
        ]}
      />
    </div>
  );
};

const DiscountsSection = ({ discounts }) => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">Check out the savings you may qualify for.</h2>
      <p className="text-center text-gray-500 mb-6">
        Discount options eligibility criteria and availability vary by insurer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {discounts.map((discount, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="items-center text-5xl text-gray-700 mb-4">{discount.icon}</div>
            <h3 className="text-xl font-semibold">{discount.title}</h3>
            <p className="text-gray-600">{discount.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoInsurance;
