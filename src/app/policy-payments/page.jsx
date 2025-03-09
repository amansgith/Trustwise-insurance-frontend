import { FaCreditCard, FaMoneyCheck, FaExchangeAlt } from 'react-icons/fa';
import ContactUs from "@/components/CommonComponents/ContactUs";


export default function PolicyPayments() {
  return (
    <div className="min-h-screen bg-gray-100 mt-24 md:mt-6 md:pt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-blue-600 text-white pt-8 pb-4 md:py-16 text-center">
        <h1 className="text-4xl font-bold uppercase">Policy Payments</h1>
        <p className="text-lg mt-2">Your Coverage, Your Way!</p>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto mt-8 px-4 text-center text-gray-700">
        <p>
          All insurance premiums are due on the date the policy becomes effective when purchased through Trustwise Insurance Brokers Ltd.
          You have a variety of options for paying your premium.
        </p>
        <p className="mt-4">
          Please do not make any payments through our website if you have received a cancellation or payment notification from an
          insurance carrier; instead, pay your insurer directly.
        </p>
      </div>

      {/* Payment Options Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-center">Payment Options</h2>
        <div className="border-b-2 border-gray-300 w-16 mx-auto mt-2 mb-8"></div>

        {/* Payment Options Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Credit Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaCreditCard className="mx-auto w-12 h-12 mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold">Payment By Credit Card</h3>
            <p className="text-sm text-gray-600 mt-2">
              Not available unless you pay an insurance company directly.
            </p>
          </div>

          {/* Cheque */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaMoneyCheck className="mx-auto w-12 h-12 mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold">Payment with a Cheque</h3>
            <p className="text-sm text-gray-600 mt-2">
              - Ensure Trustwise Insurance Brokers Ltd is listed as the payee. <br />
              - Use a certified cheque or Bank Draft. <br />
              - A $50 fee applies for NSF (insufficient funds).
            </p>
          </div>

          {/* E-Transfer */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaExchangeAlt className="mx-auto w-12 h-12 mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold">Payment with E-Transfer</h3>
            <p className="text-sm text-gray-600 mt-2">
              Only for down-payments on policies billed to you or premium finance agreements signed through our office.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Process Section */}
      <div className="mt-12 bg-primary text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Payment Process */}
          <div>
            <h3 className="text-xl font-bold mb-4">PAYMENT PROCESS</h3>
            <p className="text-gray-300">
              Make payment as instructed by your servicing broker.
            </p>
            <p className="text-gray-300 mt-4">
              Email us at <span className="font-semibold">info@trustwiseinsurance.com</span> the following payment details:
            </p>
            <ul className="list-disc text-gray-300 mt-4 pl-5 space-y-1">
              <li>Policy Holder Name</li>
              <li>Customer Code</li>
              <li>Policy #</li>
              <li>Invoice #</li>
              <li>Servicing broker name</li>
              <li>Reason for payment</li>
            </ul>
            <p className="text-yellow-400 mt-4">
              Payment transfer does not guarantee coverage changes until confirmed.
            </p>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-black">DO NOT MAKE THE PAYMENT</h3>
            <p className="text-black mt-2">Do not proceed with payment if:</p>
            <ul className="list-disc text-black mt-4 pl-5 space-y-1">
              <li>NSF replacement is needed.</li>
              <li>You received an invoice from an insurer.</li>
            </ul>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}