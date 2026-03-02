import Step from "../components/Step";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 bg-gradient-to-b from-white to-blue-400/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How It Works
        </h2>

        <p className="text-gray-500 mb-20">
          Describe your concept ideas on a modern browser
        </p>

        {/* Top 3 Steps */}
        <div className="relative grid md:grid-cols-3 gap-16 mb-24">

          <Step
            number="1"
            title="Describe Your Concept (Text/Diagram)"
            desc=""
            image={img4}
          />

          <Step
            number="2"
            title="Codeofy Generates Structure & Logic"
            desc=""
            image={img5}
          />

          <Step
            number="3"
            title="Refine & Deploy (AI-assisted)"
            desc=""
            image={img6}
          />

          {/* Horizontal Arrow Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2">
            <svg className="w-full" height="100">
              <line
                x1="5%"
                y1="50"
                x2="95%"
                y2="50"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}