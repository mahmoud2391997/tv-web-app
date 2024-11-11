"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import fetchWatchList from "../api/watchlist";

export default function Watchlist() {
  const [searchItem, setSearchItem] = useState("");
  const [itemsPerPage] = useState(4); // Items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const router = useRouter();
  const genre = router.query.genre as string | undefined; // Handle as `string | undefined`
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);

  useEffect(() => {
    // Only update filteredCategory when genre is defined
    if (genre) {
      setFilteredCategory([genre]);
    }
  }, [genre]);
  console.log(genre);

  interface category {
    name: string;
    genres: string[];
  }
  const categoreis: category[] = [
    {
      name: "Movies",
      genres: ["Action", "Drama", "Comedy"],
    },
    {
      name: "Shows",
      genres: ["Reality", "Documentary", "Talk Show"],
    },
    {
      name: "Series",
      genres: ["Sci-Fi", "Fantasy", "Mystery"],
    },
  ];
  interface WatchItem {
    category: "Movies" | "Series" | "Shows";
    genre:
      | "Action"
      | "Drama"
      | "Comedy"
      | "Reality"
      | "Documentary"
      | "Talk Show"
      | "Sci-Fi"
      | "Fantasy"
      | "Mystery";
    title: string;
    image: string;
    actors: string[];
    story: string;
    video: string;
    releaseDate?: string; // Optional for series and shows
    seasons?: string; // Optional for items with multiple seasons
    rating: string;
  }

  const [items, setItems] = useState<WatchItem[]>([]);
  const [filteredItems , setFilteredItems] = useState<WatchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state to manage loading status
  const [error, setError] = useState<string | null>(null); // Error state
  useEffect(() => {
    const getWatchList = async () => {
      try {
        // Fetch the watchlist and set the state with the response
        const watchList = await fetchWatchList();
        setItems(watchList);
      } catch (err) {
        // Handle any errors during the fetch
        setError('Failed to fetch watchlist.');
      } finally {
        setLoading(false);
      }
    };

    getWatchList(); // Invoke the async function
  }, []);



  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setCurrentPage(1);
    // Check if the checkbox is checked or unchecked
    if (e.target.checked) {
      setFilteredCategory((prev) => [...prev, value]); // Add genre to selected list
    } else {
      setFilteredCategory((prev) => prev.filter((genre) => genre !== value)); // Remove genre from selected list
    }
  };
  useEffect(() => {
    const results = [...items].filter(
      (item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase()) &&
        (filteredCategory.length === 0 || filteredCategory.includes(item.genre))
    );
    setFilteredItems(results);
  }, [searchItem, filteredCategory,items]); // Re-run when either searchItem or filteredCategory changes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...filteredItems].slice(indexOfFirstItem, indexOfLastItem);

  // Handle page number click
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Total pages calculation

  // Calculate the range of page numbers to show
  const pageNumbersToShow = 3;
  const startPage = Math.max(
    1,
    currentPage - Math.floor(pageNumbersToShow / 2)
  );
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const [isLargeScreen, setIsLargeScreen] = useState(false); // Initially set to `false`

  useEffect(() => {
    // Update the state only if `window` is defined (i.e., on the client)
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);

    handleResize(); // Call it initially to set the correct value on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  
  const style = isLargeScreen ? { width: "calc(100% - 320px)" } : {};

  // Previous and Next button handlers
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  if (loading) return <div className="w-full
   h-screen text-center text-2xl">Loading...</div>; // Show loading message while data is fetching
  if (error) return <div>{error}</div>; // 
  return (
    <div className="pt-32 px-[2.5%] min-h-screen">
      <div className="flex items-center space-x-4 p-4 bg-black rounded-lg mb-4">
        <input
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          type="text"
          placeholder="Search What To Watch..."
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
      </div>
      <main className="w-full  relative h-full flex flex-col-reverse lg:flex-row">
        {/* <section className="w-[150px] min-h-10 bg-black absolute h-auto rounded-lg py-3">
          <h2 className="text-white text-center font-bold text-2xl">
            CATEGORIES
          </h2>
          <div className="flex flex-col text-white items-start ml-5 my-2">
            {categoreis.map((category) => (
              <label
                className="text-white  font-bold text-xl w-20 text-left "
                key={category.name}
              >
                <input type="checkbox" value={category.name} className="mr-2" />
                {category.name}
              </label>
            ))}
          </div>
        </section> */}
        <section className="w-full lg:mt-0 md:mx-auto lg:mx-0 mt-5" style={style}>
          {currentItems.map((item) => ( 
            <div
              key={item.title}
              className="w-full mb-7 lg:h-[250px] h-auto flex flex-col lg:flex-row p-2 bg-black rounded-lg text-white"
            >
              <div className="lg:w-[350px] w-full">
                <img
                  src={item.image}
                  alt="My Image"
                  className="w-full h-full"
                />
              </div>
              <div className="relative w-full h-auto">
                <div className="px-4 h-full flex flex-col justify-between">
                  <div className="text-2xl font-bold">{item.title}</div>

                  <p className="text-lg">Category : {item.category}</p>
                  <p className="text-lg">Genre : {item.genre}</p>
                  <p className="text-lg">Actors : {...item.actors}</p>
                  <p className="text-lg">Rating : {item.rating}</p>
                  <p className="text-lg">
                    Link :
                    <Link href={item.video} className="ml-1">
                      <span className="underline">{item.video}</span>
                    </Link>
                  </p>

                  <p>Story : {item.story}</p>
                </div>
                <div className="px-4 flex flex-col justify-between static lg:absolute right-0 top-0">
                  {item.releaseDate ? (
                    <p className="text-lg">Release Date : {item.releaseDate}</p>
                  ) : null}
                  {item.seasons ? (
                    <p className="text-lg">Seasons : {item.seasons}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="lg:absolute static right-0 flex flex-col lg:items-end items-center">
          <section className="lg:w-[310px] w-full min-h-10 bg-black  h-auto rounded-lg  py-3">
            <h2 className="text-white text-left ml-5 font-bold text-2xl">
              GENRES
            </h2>
            <div className="flex flex-col text-white items-start ml-5 my-2">
              {categoreis.map((category) =>
                category.genres.map((genre) => (
                  <label
                    className="text-white  font-bold text-xl w-52 text-left"
                    key={genre}
                  >
                    <input
                      type="checkbox"
                      value={genre}
                      className="mr-2"
                      checked={filteredCategory.includes(genre)} // Set checked state based on selectedGenres
                      onChange={handleCheckboxChange}
                    />
                    {category.name} - {genre}
                  </label>
                ))
              )}
            </div>
          </section>
          <div className=" justify-center mt-6 hidden lg:flex">
            <ul className="flex space-x-3 items-center">
              {/* Previous Button */}
              <li
                onClick={prevPage}
                className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
            ${
              currentPage === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-700"
            }`}
              >
                Previous
              </li>

              {/* Page Numbers */}
              {pages.map((page) => (
                <li
                  key={page}
                  onClick={() => paginate(page)}
                  className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
                ${
                  currentPage === page
                    ? "bg-gray-600"
                    : "bg-black hover:bg-gray-700"
                }`}
                >
                  {page}
                </li>
              ))}

              {/* Next Button */}
              <li
                onClick={nextPage}
                className={`
            cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
            ${
              currentPage === totalPages
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-700"
            }
            `}
              >
                Next
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div className=" justify-center my-6 flex  lg:hidden">
            <ul className="flex space-x-3 items-center">
              {/* Previous Button */}
              <li
                onClick={prevPage}
                className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
            ${
              currentPage === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-700"
            }`}
              >
                Previous
              </li>

              {/* Page Numbers */}
              {pages.map((page) => (
                <li
                  key={page}
                  onClick={() => paginate(page)}
                  className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
                ${
                  currentPage === page
                    ? "bg-gray-600"
                    : "bg-black hover:bg-gray-700"
                }`}
                >
                  {page}
                </li>
              ))}

              {/* Next Button */}
              <li
                onClick={nextPage}
                className={`
            cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
            ${
              currentPage === totalPages
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-700"
            }
            `}
              >
                Next
              </li>
            </ul>
          </div>
    </div>
  );
}
