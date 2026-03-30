function NewsCard({ news }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden m-4 hover:shadow-xl transition duration-300">
      
      {/* Image */}
      {news.image && (
        <img
          src={news.image}
          alt="news"
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {news.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {news.description}
        </p>

        {/* Source */}
        <p className="text-xs text-gray-500 mt-2">
          {news.source?.name}
        </p>

        {/* Read More */}
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm mt-2 inline-block"
        >
          Read More →
        </a>

      </div>
    </div>
  );
}

export default NewsCard;