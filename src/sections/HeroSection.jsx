import img1 from "../assets/img1.jpg"; // apni image ka naam yaha likho

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-white to-blue-400/70 text-white py-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl text-black md:text-7xl font-bold mb-6">
                        Turn Your Ideas Into Code in Minutes
                    </h1>

                    <p className="text-black mb-12">
                        Codeofy uses intelligent AI to seamlessly translate concepts,
                        diagrams, and requirements into functional, scalable software.
                        Empower your development team today.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">

                        <a
                            href="#pricing"
                            className="bg-blue-950 text-white px-6 py-3 rounded-lg 
    transform transition-all duration-300 ease-in-out 
    hover:-translate-y-1 hover:shadow-xl hover:scale-105 inline-block"
                        >
                            Start Building
                        </a>

                        <a
                            href="#demo"
                            className="border border-black text-black px-6 py-3 rounded-lg 
    transform transition-all duration-300 ease-in-out 
    hover:bg-blue-950 hover:text-white hover:-translate-y-1 hover:shadow-lg inline-block"
                        >
                            Watch Demo
                        </a>

                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={img1}
                        alt="Hero"
                        className="w-full max-w-md"
                    />
                </div>

            </div>
        </section>
    );
}