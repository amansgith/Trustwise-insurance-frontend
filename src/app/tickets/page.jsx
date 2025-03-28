"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/wings.jpg"; // Adjust the path to your logo

const TravelBookingForm = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [isAbroad, setIsAbroad] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [formData, setFormData] = useState({
    contactName: "",
    contactMobile: "",
    contactEmail: "",
    departureDate: "",
    tripType: "one-way",
    returnDate: "",
    location: "canada",
    country: "",
    region: "",
    numberOfTravellers: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTripTypeChange = (e) => {
    const tripType = e.target.value;
    setIsOneWay(tripType === "one-way");
    setFormData({ ...formData, tripType, returnDate: "" });
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setIsAbroad(location === "abroad");
    setFormData({ ...formData, location, country: "", region: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loader
    setSuccessMessage(""); // Clear previous success message
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await fetch("/api/send-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Booking request sent successfully!");
        setFormData({
          contactName: "",
          contactMobile: "",
          contactEmail: "",
          departureDate: "",
          tripType: "one-way",
          returnDate: "",
          location: "canada",
          country: "",
          region: "",
          numberOfTravellers: 1,
        });
      } else {
        setErrorMessage("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col items-center min-h-screen py-16 bg-gray-100">
      {/* Fancy Heading */}
      <h1 className="md:text-5xl font-bold text-primary mb-8">
        Plan Your Dream Vacation with Trustwise Insurance
      </h1>

      {/* Content, Logo, and Form */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        {/* Content and Logo */}
        <div className="md:w-1/2 p-4">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={logo}
              alt="Wings Travels Logo"
              width={300}
              height={300}
              className="mb-4"
            />
            <p className="text-lg text-gray-700 mb-4">
              At Trustwise Insurance, we partner with Wings Travels to provide
              comprehensive travel planning services. Whether you're traveling
              within Canada or exploring international destinations, Wings
              Travels ensures your vacation is stress-free and enjoyable.
            </p>
            <p className="text-lg text-gray-700">
              Our team of experts will help you book your travel tickets,
              arrange accommodations, and provide travel insurance for a
              worry-free experience. Let's make your dream vacation a reality
              with the help of Wings Travels!
            </p>
          </div>
        </div>

        {/* Travel Booking Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Travel Ticket Booking Form
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Contact Details Section */}
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">
                Contact Details
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    name="contactMobile"
                    value={formData.contactMobile}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email (Optional)</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </fieldset>

            {/* Trip Details Section */}
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">
                Trip Details
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Departure Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    min={today} // Set the minimum date to today
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Trip Type</label>
                  <select
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleTripTypeChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                  </select>
                </div>
                {!isOneWay && (
                  <div>
                    <label className="block text-gray-700">Return Date</label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      min={formData.departureDate || today}
                    />
                  </div>
                )}
              </div>
            </fieldset>

            {/* Location Details Section */}
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">
                Location Details
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Location</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleLocationChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="canada">Within Canada</option>
                    <option value="abroad">Abroad</option>
                  </select>
                </div>
                {isAbroad ? (
                  <div>
                    <label className="block text-gray-700">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter country"
                    />
                    <label className="block text-gray-700 mt-4">Region</label>
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter region"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-gray-700">Region in Canada</label>
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter region"
                    />
                  </div>
                )}
              </div>
            </fieldset>

            {/* Traveller Details Section */}
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-medium text-gray-700">
                Traveller Details
              </legend>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Number of Travellers</label>
                  <input
                    type="number"
                    name="numberOfTravellers"
                    value={formData.numberOfTravellers}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    min="1"
                    placeholder="Enter number of travellers"
                  />
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelBookingForm;