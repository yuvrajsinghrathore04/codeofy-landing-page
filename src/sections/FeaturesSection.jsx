import FeatureCard from "../components/FeatureCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg.webp";
import img3 from "../assets/img3.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-blue-400/70 to-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                    Revolutionize Your Workflow
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="AI-Powered Code Generation"
                        desc="Generate intelligent code, automate workflows and accelerate development."
                        logo={logo1}
                        image={img1}
                    />

                    <FeatureCard
                        title="Visual IDE"
                        desc="Connect cloud APIs, design visually and deploy scalable software."
                        logo={logo2}
                        image={img2}
                    />

                    <FeatureCard
                        title="Real-Time Collaboration"
                        desc="Collaborate with your team instantly and build together."
                        logo={logo3}
                        image={img3}
                    />
                </div>

            </div>
        </section>
    );
}