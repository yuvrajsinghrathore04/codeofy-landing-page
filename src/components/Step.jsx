export default function Step({ number, title, desc, image }) {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Number + Text Row */}
      <div className="flex items-start gap-4 text-left">

        {/* Number */}
        <div className="bg-gray-800 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold shrink-0">
          {number}
        </div>

        {/* Title + Description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="text-xl font-bold text-gray-900 mt-2">
            {desc}
          </p>
        </div>

      </div>

      {/* Bigger Image Card */}
      <div className="mt-8 w-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300">
        <div className="h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-sm">UI Preview</span>
          )}
        </div>
      </div>

    </div>
  );
}