export default function History({ images }) {
  if (images.length === 0) return null

  return (
    <div className="w-full px-10 py-6">
      <h2 className="text-white font-bold text-lg mb-4">
        History ({images.length})
      </h2>
      <div className="flex gap-4 flex-wrap">
        {images.map((url, index) => (
          <a
            key={index}
            href={url}
            download={`removed-bg-${index + 1}.png`}
            className="block"
          >
            <img
              src={url}
              alt={`processed ${index + 1}`}
              className="w-[120px] h-[120px] object-contain rounded-xl border border-gray-600 hover:border-gray-400 transition-all cursor-pointer bg-[#292c31]"
            />
          </a>
        ))}
      </div>
    </div>
  )
}