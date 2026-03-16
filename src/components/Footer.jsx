import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1B34] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-900 p-2 rounded">
              <Truck className="text-white" size={20} />
            </div>
            <h2 className="text-white text-lg font-semibold">
              Beyond Transport and Logistics
            </h2>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Providing world-class logistics and transportation services for
            over 15 years with a focus on reliability and innovation.
          </p>

          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-white">🏅</span>
            <span className="cursor-pointer hover:text-white">🔗</span>
            <span className="cursor-pointer hover:text-white">🌐</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Our Company</Link></li>
            <li><Link to="/fleet">Our Fleet</Link></li>
            <li><Link to="/careers">Career Opportunities</Link></li>
            <li><Link to="/network">Global Network</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Road Transport</li>
            <li>Warehousing</li>
            <li>Supply Chain</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>

          <div className="flex items-start gap-2 text-sm mb-3">
            <MapPin size={18} className="text-green-900 mt-1" />
            <p>
              123 Logistics Way, Transport Hub <br />
              Dubai, United Arab Emirates
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm mb-3">
            <Mail size={18} className="text-green-900" />
            contact@beyondtransport.sc
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={18} className="text-green-900" />
            +971 4 123 4567
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © 2024 Beyond Transport and Logistics S.C. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;