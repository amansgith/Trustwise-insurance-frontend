import Image from "next/image";
import { FaLink, FaPiggyBank, FaClockRotateLeft } from "react-icons/fa6";

const TrustBanner = () => {
  const trustItems = [
    { icon: <FaLink/>, text: "Join thousands of customers who have trusted Aaxel!" },
    { icon: <FaPiggyBank/>, text: "Get a quote and save up to 30%" },
    { icon: <FaClockRotateLeft/>, text: "You are just moments away from getting covered & saving." },
  ];

  return (
    <div className="bg-blue-50 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-800">
            <div className="text-7xl text-green-700">{item.icon}</div>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default TrustBanner;
