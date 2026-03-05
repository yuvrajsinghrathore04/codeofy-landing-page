export default function ContactInfo({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  );
}