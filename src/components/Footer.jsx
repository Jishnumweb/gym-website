import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-wider">
              BEFIT<span className="text-red-500">ZONE</span>
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              BEFITZONE is more than a gym. It’s a fitness community built on
              discipline, consistency, and real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Home",
                "About",
                "Programs",
                "Trainers",
                "Membership",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4">
              Programs
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Strength Training",
                "Weight Loss",
                "Cardio Fitness",
                "Personal Training",
                "Functional Training",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500" />
                <span>
                  Kollam -Theni Hwy, Chunakkara, Chunakara, Alappuzha-690534,
                  Kerala
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <span>befitzone@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} BEFITZONE. All rights
            reserved.Developed by <a href="https://jishnum.in">Jishnu M</a>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
