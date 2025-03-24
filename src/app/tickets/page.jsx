"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/wings.jpg'; // Adjust the path to your logo

const TravelBookingForm = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [isAbroad, setIsAbroad] = useState(false);

  const handleTripTypeChange = (e) => {
    setIsOneWay(e.target.value === 'one-way');
  };

  const handleLocationChange = (e) => {
    setIsAbroad(e.target.value === 'abroad');
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-16 bg-gray-100">
      {/* Fancy Heading */}
      <h1 className="text-5xl font-bold text-primary mb-8">Plan Your Dream Vacation with Trustwise Insurance</h1>

      {/* Content, Logo, and Form */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        {/* Content and Logo */}
        <div className="md:w-1/2 p-4">
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Wings Travels Logo" width={300} height={300} className="mb-4" />
            <p className="text-lg text-gray-700 mb-4">
              At Trustwise Insurance, we partner with Wings Travels to provide comprehensive travel planning services. Whether you're traveling within Canada or exploring international destinations, Wings Travels ensures your vacation is stress-free and enjoyable.
            </p>
            <p className="text-lg text-gray-700">
              Our team of experts will help you book your travel tickets, arrange accommodations, and provide travel insurance for a worry-free experience. Let's make your dream vacation a reality with the help of Wings Travels!
            </p>
          </div>
        </div>

        {/* Travel Booking Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-center mb-6">Travel Ticket Booking Form</h2>
          <form className="space-y-4">
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">Trip Details</legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Departure Date</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700">Trip Type</label>
                  <select onChange={handleTripTypeChange} className="w-full p-2 border rounded">
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                  </select>
                </div>
                {!isOneWay && (
                  <div>
                    <label className="block text-gray-700">Return Date</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                )}
              </div>
            </fieldset>

            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">Location Details</legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Location</label>
                  <select onChange={handleLocationChange} className="w-full p-2 border rounded">
                    <option value="canada">Within Canada</option>
                    <option value="abroad">Abroad</option>
                  </select>
                </div>
                {isAbroad ? (
                  <div>
                    <label className="block text-gray-700">Country</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter country" />
                    <label className="block text-gray-700 mt-4">Region</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter region" />
                  </div>
                ) : (
                  <div>
                    <label className="block text-gray-700">Region in Canada</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter region" />
                  </div>
                )}
              </div>
            </fieldset>

            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">Traveller Details</legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Number of Travellers</label>
                  <input type="number" className="w-full p-2 border rounded" min="1" placeholder="Enter number of travellers" />
                </div>
              </div>
            </fieldset>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelBookingForm;