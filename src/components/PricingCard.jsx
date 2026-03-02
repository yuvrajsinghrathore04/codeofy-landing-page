export default function PricingCard({
  title,
  price,
  features,
  highlight,
  dark
}) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl ${
        highlight
          ? "bg-blue-950 text-white scale-105"
          : dark
          ? "bg-blue-500/10 border-b-blue-900 text-black"
          : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-xl text-center font-semibold mb-4">
        {title}
      </h3>

      <p className="text-3xl text-center font-bold mb-6">
        {price}
      </p>

      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold ${
          highlight
            ? "bg-white text-blue-950"
            : dark
            ? "bg-white text-blue-950"
            : "bg-blue-950 text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}