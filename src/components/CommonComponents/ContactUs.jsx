import {FaUsers, FaPlus} from "react-icons/fa"

const ContactUs = () => {
    return (
      <div className="my-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10 leading-relaxed">
          Want to get in touch? We make it our priority to respond as soon as possible. 
          However, please allow us at least <span className="font-semibold">24 hours</span> to get back to you.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Talk to Us */}
          <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
            <FaUsers className="text-cyan-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Talk to Us</h3>
            <p className="text-gray-600 text-center my-4">
              Insurance inquiries, general questions, bundle insurance, auto insurance, or any other issues.
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-700 hover:scale-110 duration-300 text-white font-semibold py-3 px-6 rounded-full transition-all">
              Get in Touch
            </button>
          </div>
  
          {/* Bundle Insurance */}
          <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
            <FaPlus className="text-cyan-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Bundle Insurance</h3>
            <p className="text-gray-600 text-center my-4">
              Bundle insurance helps you to get everything in one place from your car to home insurance.
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-700 hover:scale-110 duration-300 text-white font-semibold py-3 px-6 rounded-full transition-all">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ContactUs;