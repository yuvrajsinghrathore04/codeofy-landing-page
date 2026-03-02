export default function CommunityCard({ title, time, image }) {
    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img
                src={image}
                alt={title}
                className="w-20 h-16 object-cover rounded-lg"
            />

            <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                    {title}
                </h4>
                <p className="text-gray-500 text-xs mt-1">
                    {time}
                </p>
            </div>

        </div>
    );
}