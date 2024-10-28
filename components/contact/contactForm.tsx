"use client";
import React, { useState } from "react";

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    hearAboutUs: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg mb-10 pt-10">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-semibold text-gray-900">
            Let&apos;s Connect
          </h2>
          <hr className="h-1 mt-8" />
          {/* <p className="mt-4 text-gray-500">
            We&apos;re excited to connect with you and learn more about your
            real estate goals. Use the form below to get in touch with Estatein.
            Whether you&apos;re a prospective client, partner, or simply curious
            about our services, we&apos;re here to answer your questions and
            provide the assistance you need.
          </p> */}
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm font-medium text-gray-700"
              >
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                id="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              >
                <option value="">Select Inquiry Type</option>
                <option value="General">General Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="hearAboutUs"
                className="block text-sm font-medium text-gray-700"
              >
                How Did You Hear About Us?
              </label>
              <select
                name="hearAboutUs"
                id="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-black bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              >
                <option value="">Select</option>
                <option value="SocialMedia">Social Media</option>
                <option value="Friend">Friend/Colleague</option>
                <option value="Ad">Advertisement</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your Message here..."
              required
            ></textarea>
          </div>

          <div className="flex  items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center h-5 justify-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-black rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm ">
                <div>
                  <label
                    htmlFor="agreeToTerms"
                    className="font-medium text-gray-700"
                  >
                    I agree with the{" "}
                    <a
                      href="/terms"
                      className="text-orange-600 hover:text-orange-500"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-orange-600 hover:text-orange-500"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-b from-[#141446] to-[#3F4279] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Your Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
