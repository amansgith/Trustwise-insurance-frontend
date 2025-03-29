"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loader
    setSuccessMessage(""); // Clear previous success message
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await fetch("/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  return (
    <div className="py-16 md:py-6">
      <div className="px-4 md:px-10 flex flex-col gap-3">
        <h2 className="text-3xl md:text-5xl font-bold pt-14">Contact Us</h2>
        <p className="text-base md:text-lg">
          At Trustwise Insurance, we believe in building lasting relationships with our clients. Our team of experienced professionals is dedicated to delivering exceptional customer service and support. We work with a wide range of trusted insurance partners to offer the best coverage options for home, auto, life, and business insurance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-10">
        {[
          {
            icon: Mail,
            title: "Get in Touch",
            description: "info@trustwiseinsurance.com",
          },
          {
            icon: Phone,
            title: "Phone Numbers",
            description: "+1 (780) 255-5151",
          },
          {
            icon: Clock,
            title: "Working Hours",
            description: "Mon-Fri 9am-5pm",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <item.icon className="w-10 h-10 mb-2 text-secondary" />
              <CardTitle className="text-primary text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg">
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className={`w-full py-3 rounded-lg text-lg font-semibold ${
                isLoading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-secondary transition duration-300"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
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
      </section>
    </div>
  );
};

export default ContactPage;