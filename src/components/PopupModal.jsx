import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const PopupModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalIsOpen(true);
    }, 2000); // Show popup after 2 seconds
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false} // 🔴 FIX: Disable setAppElement since it's not needed in App Router
    >
      <div className="relative -z-50 bg-white max-w-lg w-full rounded-lg shadow-lg mt-20 p-6">
        {/* Close Button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h2 className="text-lg font-bold">Save More with Aaxel Insurance</h2>

          {/* Image Section */}
          <div className="relative w-full h-64 mx-auto mt-4">
            <Image
              src="https://www.aaxel.ca/wp-content/uploads/2023/06/Untitled-4.jpg"
              alt="Insurance Offer"
              fill
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4">
            <p className="text-gray-700 text-lg font-bold">
              Save Up To 30% on Auto, Home, and Business Insurance
            </p>

            {/* Popular Products */}
            <div className="flex flex-wrap justify-center mt-3 gap-2">
              {["Auto", "Home", "Business", "Life", "Travel"].map((item, index) => (
                <span
                  key={index}
                  className="bg-green-500 text-white px-4 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Contact Info */}
            <p className="mt-3 font-bold text-lg">905 362 8080</p>
            <p className="text-blue-600 font-semibold">aaxel.ca</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModal;
