import PricingCard from "../components/PricingCard";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-blue-400/70 to-white text-black">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Flexible Plans for Every Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="Free"
            features={[
              "1 Project",
              "Full Features",
              "Basic Support"
            ]}
          />

          <PricingCard
            title="Pro"
            price="$29/mo"
            features={[
              "10 Projects",
              "All Features",
              "Priority Support"
            ]}
            highlight
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited Projects",
              "Dedicated Support"
            ]}
            dark
          />
        </div>

      </div>
    </section>
  );
}