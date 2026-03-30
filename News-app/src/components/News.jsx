import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("tesla");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  function fetchdata() {
    setLoading(true);

    fetch(
      `https://gnews.io/api/v4/search?q=${search}&lang=en&country=in&max=10&apikey=d9230df4413a31248a064b5d9cad7499`
    )
      .then((res) => res.json())
      .then((data) => {

       
        if (!data.articles) {
          throw new Error("API Error");
        }

        setNews(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not available");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchdata();
  }, [currentPage]);

  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(news.length / itemPerPage);

  if (loading) return <h1 className="text-center text-xl mt-10">Loading....</h1>;
  if (error) return <h1 className="text-center text-red-500 mt-10">{error}</h1>;
  if (news.length === 0) return <h2 className="text-center mt-10">No News Found</h2>;

  return (
    <div className="p-5">
      
      <h3 className="text-2xl font-bold text-center mb-5">
        Latest News
      </h3>

      <div className="flex justify-center mb-6 gap-2">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={fetchdata}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentNews.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
      <div className="flex justify-center mt-8 gap-4">
  
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="bg-amber-500 text-white px-4 py-2 rounded disabled:opacity-50"
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, i) => (     //agar yaha pr hm without spread operator array use krenge then aaray ke andar bydefault null hoga and map iterate nhi kr payega array pr thats why we use spread operator so that we can itrate
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

  <span className="text-xl font-semibold">
    Page {currentPage}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="bg-amber-500 text-white px-4 py-2 rounded disabled:opacity-50"
  >
    Next
  </button>

</div>
      </div>

    </div>
  );
}