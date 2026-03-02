import TestimonialCard from "../components/TestimonialCard";
import test1 from "../assets/test1.jpeg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpeg";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-400/70">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Trusted by Innovators World-Wide
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <TestimonialCard
            image={test1}
            name="Alex Chen"
            role="Helix, CanDo"
            text="The concept board is unlike anything I’ve used before."
            company="Company"
          />

          <TestimonialCard
            image={test2}
            name="Sarah Johnson"
            role="Campaigns, Compass"
            text="Codeofy made our workflow incredibly smooth."
            company="Company"
          />

          <TestimonialCard
            image={test3}
            name="Alex Sohon"
            role="Roles, Color"
            text="This platform anchors and simplifies our processes."
            company="Clarify"
          />

        </div>

      </div>
    </section>
  );
}