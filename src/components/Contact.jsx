import React, { useState } from "react";
import { Bounce, Flip, Slide, toast } from "react-toastify";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (name || email || message) {
      toast.success(`Hi ${name}, Thanks for messaging!`, {
        hideProgressBar: true,
        autoClose: 3000,
        theme: "dark",
        closeButton: false,
        pauseOnHover: false,
        transition: Slide,
        draggable: true,
        position: "top-center",
        ariaLabel: "Email received",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="bg-black py-16 px-10 md:px-36">
      <h3 className="text-3xl font-bold mb-12 text-yellow-500 text-center">
        Contact Me
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">
            Contact Information
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-400">+977 9840279401</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-400">nepalibikash907@email.com</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-400">Chapagaun, Lalitpur Nepal</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-xl mb-4">
            Send Me a Message
          </h3>
          <form className="space-y-4" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-white text-black px-4 py-2 rounded-lg w-full outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white text-black px-4 py-2 rounded-lg w-full outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              placeholder="Your Message"
              className="bg-white text-black  px-4 py-2 rounded-lg w-full h-32 outline-none"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
