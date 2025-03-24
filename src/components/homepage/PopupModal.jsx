"use client"
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import modalimage from '../../../public/modalimage.png';
import Link from "next/link";

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
      className="fixed inset-0 flex items-center justify-center z-[999999]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-[999998]"
      ariaHideApp={false} // 🔴 FIX: Disable setAppElement since it's not needed in App Router
    >
      <div className="relative bg-white max-w-lg w-full rounded-lg shadow-lg mt-20 p-4">
        {/* Close Button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h2 className="text-lg font-bold">Save More with Trustwise Insurance</h2>

          {/* Image Section */}
          <div className="relative w-full h-80 mx-auto mt-4">
            <Image
              src={modalimage}
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
              {[ "Home", "Business", "Life", "Investments", "Travel"].map((item, index) => (
                <Link href='/Home' key={index}>
                <span
                  key={index}
                  className="bg-primary text-white px-4 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <p className="mt-3 font-bold text-lg">+1 (780) 255-5252</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModal;