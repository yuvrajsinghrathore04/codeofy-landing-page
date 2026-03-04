import CommunityCard from "../components/CommunityCard";
import blog1 from "../assets/blog1.jpg.webp";
import blog2 from "../assets/blog2.jpg";

export default function CommunitySection() {
    return (
        <section id="community" className="py-24 bg-gradient-to-b from-blue-400/70 to-white text-center">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                    Stay Ahead with Our Community
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <CommunityCard
                            image={blog1}
                            title="Blog Add In for Codeofy and Your Community"
                            time="16 hours ago"
                        />

                        <CommunityCard
                            image={blog2}
                            title="The room building the contents also and user comments"
                            time="25 mins ago"
                        />
                    </div>
                    <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-xl text-left">
                        <h3 className="text-lg font-semibold mb-4">
                            Forum
                        </h3>

                        <p className="text-sm text-gray-300 mb-6">
                            Discuss features, share feedback, and collaborate with
                            other developers in our growing community.
                        </p>

                        <div className="bg-white/10 p-3 rounded-lg text-sm text-gray-200">
                            Send a message...
                        </div>
                    </div>

                </div>
                <div className="mt-16">
                    <button className="bg-blue-950 text-white px-8 py-3 rounded-lg hover:scale-105 transition">
                        Join Our Discord
                    </button>
                </div>

            </div>
        </section>
    );
}