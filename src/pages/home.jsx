import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  BarChart,
  Warehouse,
  MapPin,
  Globe,
  Shield,
} from "lucide-react";
import Sino from "../assets/sino.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const coreServices = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Freight Shipping",
      description:
        "Comprehensive global sea and air freight solutions tailored to your needs.",
    },
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      title: "Cargo Handling",
      description:
        "Specialized equipment and expert handling for secure and efficient cargo transfer.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-600" />,
      title: "Logistics Strategy",
      description:
        "Strategic consulting to optimize your end-to-end supply chain efficiency.",
    },
    {
      icon: <Warehouse className="w-8 h-8 text-green-600" />,
      title: "Warehousing",
      description:
        "Secure, climate-controlled storage with advanced inventory management systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center text-white py-20 px-4 md:px-8 lg:px-16"
        style={{ backgroundImage: `url(${Sino})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/80 to-blue-950/70"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reliable Transport and Logistics Solutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
            Moving your business forward with precision, safety, and a global reach.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Contact Us
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-8 py-3 rounded-lg font-semibold transition"
              >
                Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* CORE SERVICES */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Beyond Transport
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We've built our reputation on reliability, transparency, and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-10 h-10 text-green-600 mx-auto" />,
                title: "Real-time Tracking",
              },
              {
                icon: <Globe className="w-10 h-10 text-green-600 mx-auto" />,
                title: "Global Network",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600 mx-auto" />,
                title: "Secure Delivery",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
