import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Animated About Page
 */
const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2070&q=80"
            alt="Logistics container ship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/80 to-blue-950/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-28">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Beyond Boundaries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl"
          >
            Empowering global trade through innovative transport and sustainable logistics solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <Link to="/services">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                Explore Our Services
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-2">
              Our Story
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leading the Way in Modern Logistics
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond Transport and Logistics S.C. provides end-to-end supply chain solutions with precision and reliability.
            </p>
          </motion.div>

          {/* STATS */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-center">
            {["15+ Years Experience", "500+ Modern Fleet", "24/7 Global Support"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-lg font-semibold text-green-800">
                    {item}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">

          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Reliability",
              "Sustainability",
              "Innovation",
              "Client-Centric",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <h5 className="font-bold text-xl mb-3 text-gray-800 hover:text-green-600 transition">
                  {value}
                </h5>
                <p className="text-gray-600 text-sm">
                  Committed to excellence in every operation.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;