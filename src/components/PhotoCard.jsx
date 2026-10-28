const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col">
      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={photo.author}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 flex items-center justify-between gap-2 mt-auto">
        <div className="truncate">
          <p className="text-xs text-gray-400">Author</p>
          <h2 className="text-sm font-semibold text-gray-800 truncate">
            {photo.author}
          </h2>
        </div>

        <button
          onClick={() => onToggleFavourite(photo.id)}
          className={`p-2 rounded-full transition ${
            isFavourite ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={isFavourite ? "0" : "2"}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
