export default function FeatureCard({ title, desc, image, logo }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300">

            <div className="h-12 w-12 rounded-xl mb-6 flex items-center justify-center">
                {logo && (
                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 h-12 object-contain"
                    />
                )}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {title}
            </h3>

            <p className="text-gray-600 mb-6">
                {desc}
            </p>

            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-xl"
            />
        </div>
    );
}