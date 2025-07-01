import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <form action="">
          <div className="mb-4">
            <label htmlFor="" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              name=""
              id=""
              placeholder="Enter your name.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              name=""
              id=""
              placeholder="Enter your email.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              name=""
              id=""
              placeholder="Your message.."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
