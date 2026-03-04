import codeofylogo from "../assets/codeofylogo.png";
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={codeofylogo}
              alt="Codeofy"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-semibold">Codeofy</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            <a href="#" className="hover:text-black transition">Features</a>
            <a href="#" className="hover:text-black transition">Pricing</a>
            <a href="#" className="hover:text-black transition">Blog</a>
            <a href="#" className="hover:text-black transition">Docs</a>
            <a href="#" className="hover:text-black transition">Career</a>
            <a href="#" className="hover:text-black transition">Terms</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-black transition">
              <FaGithub />
            </a>
            <a href="https://wa.me/916377385333?text=Hi%20Codeofy%2C%20I%20am%20interested%20in%20your%20services." className="hover:text-black transition">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/codeofy-tech/" className="hover:text-black transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/codeofy.in?igsh=Y2c5dGEwaHRqY2hm" className="hover:text-black transition">
              <FaInstagram />
            </a>
          </div>

        </div>

        <div className="border-t border-white/20 my-6"></div>

        <p className="text-center text-sm text-white">
          © 2024 Codeofy. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}