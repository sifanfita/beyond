import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
    }, 3000);
  };

  return (
    <div className="w-full font-sans">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-72 bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/80 to-blue-950/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="max-w-lg text-gray-200">
            We are ready to support your logistics needs.
          </p>
        </div>
      </motion.div>

      {/* CONTACT SECTION */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Get in Touch
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">

              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  text: "+251 11 123 4567",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "info@beyondtransport.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Office",
                  text: "Addis Ababa, Ethiopia",
                },
                {
                  icon: <FaClock />,
                  title: "Hours",
                  text: "Mon - Sat: 8AM - 6PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <div className="text-green-700 text-xl mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* MAP */}
            <div className="mt-8 rounded-lg overflow-hidden shadow">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=addis%20ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">
              Send us a Message
            </h3>

            <form
             action={import.meta.env.VITE_FORMSPREE_URL}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="border rounded-md p-3 w-full focus:ring-2 focus:ring-green-600 outline-none"
                  required
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="border rounded-md p-3 w-full focus:ring-2 focus:ring-green-600 outline-none"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="border rounded-md p-3 w-full focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="How can we help you?"
                className="border rounded-md p-3 w-full focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md font-medium transition disabled:bg-gray-400"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;