import React from "react";

const ContactOptions = () => {
  return (
    <div className="space-y-2">
      <a
        href="mailto:info@trustwiseinsurance.com"
        className="block text-sm font-medium py-2 px-4 rounded hover:bg-green-500"
      >
        📧 Email: info@trustwiseinsurance.com
      </a>
      <a
        href="tel:+17802555151"
        className="block bg-green-500  text-sm font-medium py-2 px-4 rounded hover:bg-green-600"
      >
        📞 Phone: +1 780-255-5151
      </a>
      <a
        href="tel:+17802555252"
        className="block bg-green-500  text-sm font-medium py-2 px-4 rounded hover:bg-green-600"
      >
        📞 Phone: +1 780-255-5252
      </a>
      <a
        href="tel:+17802555353"
        className="block bg-green-500 text-sm font-medium py-2 px-4 rounded hover:bg-green-600"
      >
        📞 Phone: +1 780-255-5353
      </a>
    </div>
  );
};

export default ContactOptions;