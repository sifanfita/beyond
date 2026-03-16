import React from "react";
import { motion } from "framer-motion";
import headerBg from "../assets/warehouse.jpg";

const Service = () => {
  const coreServices = [
    {
      title: "Freight Transportation",
      description:
        "Global multi-modal shipping via road, air, and sea with real-time visibility.",
    },
    {
      title: "Cargo Delivery",
      description:
        "Fast and secure door-to-door delivery for all cargo sizes.",
    },
    {
      title: "Logistics Planning",
      description:
        "Strategic optimization to minimize lead times and maximize efficiency.",
    },
    {
      title: "Warehousing",
      description:
        "Secure, climate-controlled storage with inventory management systems.",
    },
    {
      title: "Supply Chain Solutions",
      description:
        "End-to-end consultancy and management services.",
    },
  ];

  const stats = [
    { value: "99.8%", label: "ON-TIME DELIVERY" },
    { value: "24/7", label: "REAL-TIME TRACKING" },
    { value: "150+", label: "COUNTRIES SERVED" },
    { value: "0%", label: "CARGO LOSS RATE" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/80 to-blue-950/70"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Comprehensive Logistics Solutions
          </h1>
          <p className="mt-6 text-gray-200 text-lg">
            End-to-end services designed for efficiency, safety, and global reach.
          </p>
        </div>
      </motion.div>

      {/* CORE SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Core Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Beyond Transport?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-green-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-700 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;