import codeofylogo from "../assets/codeofylogo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-blue-400/70 to-white bg-white/30 backdrop-blur-lg border-b border-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="/" className="flex items-center gap-3">
          <img
            src={codeofylogo}
            alt="Codeofy Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl font-bold text-black">
            Codeofy
          </h1>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-black">
          <a href="#features" className="hover:text-teal-500 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-teal-500 transition">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-teal-500 transition">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-teal-500 transition">
            Testimonials
          </a>
        </div>

        {/* Button */}
        <button className="bg-blue-950 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}