"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    address: Yup.string().required("Address is required"),
    interest: Yup.string().required("Please select an interest"),
    message: Yup.string().required("Message is required"),
    subscribe: Yup.boolean(),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      interest: "",
      message: "",
      subscribe: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // In a real app, this would be an API call
      console.log("Form data submitted:", values);
      setSubmitted(true);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    },
  });

  return (
    <section className="bg-[#f5f5f5] text-black page-padding py-24 md:py-32">
      <div className="w-full flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-200/80 rounded-full text-xs font-semibold tracking-widest text-gray-500 uppercase self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
            Ready to build something that lasts?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-2 max-w-md">
            Whether it's a residential project, commercial space, or renovation, we're here to bring your vision to life—with quality, clarity, and on-time delivery.
          </p>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full md:w-7/12">
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Let's talk about your goals</h3>
              <p className="text-gray-500 text-sm">
                Fill out the form below and our nearest regional office will get back to you within 24 hours.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded border border-green-200 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
              
              {/* Row 1: Name & Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className={`w-full bg-[#f4f4f5] px-4 py-3 rounded text-sm outline-none transition-colors border ${
                      formik.touched.name && formik.errors.name 
                        ? "border-red-500 focus:border-red-500 bg-red-50" 
                        : "border-transparent focus:border-gray-300"
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="text-red-500 text-xs">{formik.errors.name}</span>
                  )}
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className={`w-full bg-[#f4f4f5] px-4 py-3 rounded text-sm outline-none transition-colors border ${
                      formik.touched.email && formik.errors.email 
                        ? "border-red-500 focus:border-red-500 bg-red-50" 
                        : "border-transparent focus:border-gray-300"
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-500 text-xs">{formik.errors.email}</span>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Your address"
                  className={`w-full bg-[#f4f4f5] px-4 py-3 rounded text-sm outline-none transition-colors border ${
                    formik.touched.address && formik.errors.address 
                      ? "border-red-500 focus:border-red-500 bg-red-50" 
                      : "border-transparent focus:border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <span className="text-red-500 text-xs">{formik.errors.address}</span>
                )}
              </div>

              {/* Interest */}
              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                  You are interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className={`w-full bg-[#f4f4f5] px-4 py-3 rounded text-sm outline-none transition-colors border appearance-none ${
                    formik.touched.interest && formik.errors.interest 
                      ? "border-red-500 focus:border-red-500 bg-red-50" 
                      : "border-transparent focus:border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.interest}
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Residential Project">Residential Project</option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Other">Other</option>
                </select>
                {formik.touched.interest && formik.errors.interest && (
                  <span className="text-red-500 text-xs">{formik.errors.interest}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={4}
                  className={`w-full bg-[#f4f4f5] px-4 py-3 rounded text-sm outline-none transition-colors border resize-none ${
                    formik.touched.message && formik.errors.message 
                      ? "border-red-500 focus:border-red-500 bg-red-50" 
                      : "border-transparent focus:border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <span className="text-red-500 text-xs">{formik.errors.message}</span>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <div className="pt-1">
                  <input
                    id="subscribe"
                    name="subscribe"
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.subscribe}
                  />
                </div>
                <label htmlFor="subscribe" className="text-sm text-gray-500 leading-relaxed cursor-pointer select-none">
                  Yes, I'd like to receive product updates and insights from Construa. Unsubscribe anytime.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-[#111111] hover:bg-black text-white font-medium py-3.5 rounded mt-4 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>
              
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
