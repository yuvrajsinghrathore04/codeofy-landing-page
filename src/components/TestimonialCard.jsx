export default function TestimonialCard({ image, name, role, text, company }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
      
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{role}</p>

      <p className="text-gray-600 text-sm mb-6 italic">
        "{text}"
      </p>

      <p className="text-blue-950 font-medium text-sm">
        {company}
      </p>

    </div>
  );
}