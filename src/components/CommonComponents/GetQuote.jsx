"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import * as yup from "yup";

const timeOptions = [
  { label: "Morning (9 AM - 12 PM)", value: "Morning" },
  { label: "Afternoon (12 PM - 4 PM)", value: "Afternoon" },
  { label: "Evening (4 PM - 8 PM)", value: "Evening" },
];

const groupOptions = [
  { label: "Group A", value: "Group A" },
  { label: "Group B", value: "Group B" },
  { label: "Group C", value: "Group C" },
];

const quoteOptions = {
  "Auto Insurance": [
    "Automobile Insurance",
    "Commercial Automobile Insurance",
    "Motorcycle Insurance",
    "Bundle Insurance (Home+Auto)",
    "Classic Car Insurance",
    "Boat Insurance",
    "RV Insurance",
    "Private Client Insurance",
    "Snowmobile Insurance",
  ],
  "Home Insurance": [
    "Home Insurance",
    "Rental Property Insurance",
    "Tenant Insurance",
    "Condo Insurance",
    "Cottage Insurance",
    "Bundle Insurance (Home+Auto)",
  ],
  "Bundle Insurance (Home+Auto)": [
    "Auto + Home Insurance",
    "Auto + Condo Insurance",
    "Auto + Tenant Insurance",
  ],
  "Business Insurance": [
    "Account Receivable Insurance",
    "Commercial Automobile Insurance",
    "General Liability Insurance",
    "Employee Liability Insurance",
    "Product Liability Insurance",
    "Professional Liability Insurance",
    "Commercial Property Insurance",
    "Contractors Insurance",
    "Corporate Insurance",
    "Cyber Liability Insurance",
    "Environmental Impairment Liability Insurance",
    "Home-Based Business Insurance",
    "Small Medium Business Insurance",
    "Legal Expense Insurance",
    "Malpractice Insurance",
    "Private Client Insurance",
    "Specialty Insurance",
    "Garage Insurance",
    "Builder’s Risk Insurance",
  ],
  "Life & Financial": [
    "Life Insurance",
    "Critical Illness Insurance",
    "Disability Insurance",
    "Mortgage Insurance",
    "Travel Insurance",
    "Long-Term Care Insurance",
    "Group Benefits",
    "Investments",
  ],
};

// Convert quoteOptions to react-select format
const quoteOptionsList = Object.keys(quoteOptions).map((key) => ({
  label: key,
  value: key,
}));

const schema = yup.object().shape({
  quoteFor: yup.string().required("Please select a quote type"),
  subQuote: yup.string().required("Please select an option"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone must be 10 digits").required("Phone is required"),
  businessName: yup.string().required("Business name is required"),
  dateToContact: yup.string().required("Please select a date"),
  timeToContact: yup.string().required("Please select a time"),
});

const QuoteForm = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">Get Your Quote</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Quote Type Dropdown */}
        <div>
          <label className="font-semibold text-gray-700 text-lg">Quote For *</label>
          <Select
            options={quoteOptionsList}
            isSearchable
            onChange={(option) => {
              setSelectedQuote(option.value);
              setValue("quoteFor", option.value);
            }}
            className="w-full"
          />
          {errors.quoteFor && <p className="text-red-500 text-sm">{errors.quoteFor.message}</p>}
        </div>

        {/* Sub-Options Dropdown */}
        {selectedQuote && (
          <div>
            <label className="font-semibold text-gray-700 text-lg">{selectedQuote} *</label>
            <Select
              options={quoteOptions[selectedQuote].map((sub) => ({ label: sub, value: sub }))}
              isSearchable
              onChange={(option) => setValue("subQuote", option.value)}
              className="w-full"
            />
            {errors.subQuote && <p className="text-red-500 text-sm">{errors.subQuote.message}</p>}
          </div>
        )}

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold text-gray-700">First Name *</label>
            <input type="text" {...register("firstName")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="font-semibold text-gray-700">Last Name *</label>
            <input type="text" {...register("lastName")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold text-gray-700">Email *</label>
            <input type="email" {...register("email")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="font-semibold text-gray-700">Phone *</label>
            <input type="tel" {...register("phone")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Business Name */}
        <div>
          <label className="font-semibold text-gray-700">Business Name *</label>
          <input type="text" {...register("businessName")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
        </div>

        {/* Group Name Dropdown */}
        <div>
          <label className="font-semibold text-gray-700">Group Name</label>
          <Select options={groupOptions} isSearchable onChange={(option) => setValue("groupName", option.value)} className="w-full" />
        </div>

        {/* Date to Contact */}
        <div>
          <label className="font-semibold text-gray-700">Date to Contact *</label>
          <input type="date" {...register("dateToContact")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          {errors.dateToContact && <p className="text-red-500 text-sm">{errors.dateToContact.message}</p>}
        </div>

        {/* Time to Contact Dropdown */}
        <div>
          <label className="font-semibold text-gray-700">Time to Contact *</label>
          <Select options={timeOptions} isSearchable onChange={(option) => setValue("timeToContact", option.value)} className="w-full" />
          {errors.timeToContact && <p className="text-red-500 text-sm">{errors.timeToContact.message}</p>}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Notes</label>
          <textarea {...register("notes")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" rows="3"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-cyan-700 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;