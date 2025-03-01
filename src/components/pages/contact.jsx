import React, { useState } from "react";
import Layout from "../../layout/Layout";
import GlobeRotate from "./contact/Globe";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"; // Import styles for ToastContainer

const Contact = () => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    message: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4500/api/v1/message/save-message",
        formData // Send formData directly
      );

      if (data.success) {
        toast.success(data.message, {
          position: "top-right",
        });

        // Reset the form
        setFormData({
          names: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!", {
        position: "top-right",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-[300px] mt-20">
        <div className="text-white text-center max-w-2xl">
          <h1 className="font-serif text-4xl font-bold mb-4">Let's Talk Your Goals</h1>
          <p className="text-lg">
            Our Mission: Have a project in mind? Connect directly with our team to see
            how we can turn your vision into reality. Reach out today and take the
            first step towards transforming your business with tailored solutions.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl py-8">
        <div className="flex justify-center items-center">
          {/* Left Side: Globe */}
          <div className="w-1/2 flex justify-center">
            <GlobeRotate />
          </div>

          {/* Right Side: Form */}
          <div className="w-1/2">
            <form className="bg-[#101828] p-8 rounded-lg shadow-md" onSubmit={handleContactForm}>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-2" htmlFor="names">
                  Name
                </label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names} // Controlled component
                  onChange={setData}
                  className="w-full px-4 py-2 border rounded-lg text-white bg-transparent placeholder-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email} // Controlled component
                  onChange={setData}
                  className="w-full px-4 py-2 border rounded-lg text-white bg-transparent placeholder-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // Controlled component
                  onChange={setData}
                  className="w-full px-4 py-2 border rounded-lg text-white bg-transparent placeholder-white focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </Layout>
  );
};

export default Contact;
