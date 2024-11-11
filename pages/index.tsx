"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import fetchWatchList from "./api/watchlist";
import fetchCategories from "./api/categories";
import fetchMostWatched from "./api/mostwatched";

// app/page.tsx
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image is displayed
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
  const [categories, setCategories] = useState<Category[]>([]);
  const [mostWatched, setMostWatched] = useState<obj[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  interface obj {
    image: string;
    video: string;
    type: string;
  }
  interface genre {
    name: string;
    image: string;
  }
  interface Category {
    name: string;
    genres: genre[];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel
        const [mostWatchedData, categoriesData] = await Promise.all([
          fetchMostWatched(),
          fetchCategories() ,       ]);

        setCategories(categoriesData); // Set categories data
        setMostWatched(mostWatchedData); // Set most watched data
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Trigger fetching
  }, []);
  useEffect(() => {
    setShowVideo(false);

    const imageTimeout = setTimeout(() => {
      setShowVideo(true); // After the last image, show the video
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(imageTimeout); // Cleanup timeout on unmount
  }, [currentImage]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="w-full pt-32 ">
      <div className="flex relative">
        <svg
          onClick={() => {
            if (currentImage > 0) {
              setCurrentImage((prev) => prev - 1);
            } else {
              setCurrentImage(mostWatched.length - 1);
            }
            setTimeout(() => setShowVideo(false), 10);
          }}
          className="absolute top-[50%] left-[2%] z-50"
          width="50px"
          height="50px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill="#000000"
          />
        </svg>

        <section className=" max-w-[1232px] w-full lg:h-[71vh] md:h-[60vh] sm:h-[50vh] h-[40vh] m-auto relative bg-black">
          {!showVideo && (
            <img
              src={mostWatched[currentImage].image}
              className={`absolute z-40 w-full h-full `}
            />
          )}
          <video
            id="video"
            src={mostWatched[currentImage].video}
            className="absolute z-0 top-0 w-full h-full border-black border-8 "
            autoPlay
            muted
          ></video>
          <div className="absolute right-0 bottom-0 bg-white z-50 ">
            <h3>
              TRAILER OF
              <br /> MOST WATCHED {mostWatched[currentImage].type}{" "}
            </h3>
          </div>
        </section>
        <svg
          onClick={() => {
            if (currentImage < mostWatched.length - 1) {
              setCurrentImage((prev) => prev + 1);
            } else {
              setCurrentImage(0);
            }
            setTimeout(() => setShowVideo(false), 10);
          }}
          width="50px"
          height="50px"
          className="absolute  top-[50%] right-[2%]"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#000000"
          />
        </svg>
      </div>
      <hr className="w-full h-4 bg-black border-0  mt-40" />
      <h1 className="text-center my-16 font-extrabold text-5xl">CATEGORIES</h1>
      <hr className="w-full h-1 bg-black border-0  " />

      {categories.map((category) => (
        <div key={category.name}>
          <section key={category.name} className="w-full h-auto  mb-10 py-10 ">
            <h2 className="ml-[5%] mb-6 font-extrabold text-3xl">
              {category.name.toUpperCase()} GENRES
            </h2>
            <div className="ml-[5%] flex w-[90%] justify-between items-center min-h-96 overflow-x-hidden mt-10 flex-wrap">
              {category.genres.map((genre) => (
               <Link href={`/watchlist?genre=${genre.name}`} key={genre.name}
               className="lg:w-1/3 xl:w-1/4 w-full sm:min-w-[300px] h-full border-2 border-black m-10 ">
               <div
                  key={genre.name}
                  className="w-full"
                >
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="w-full h-80 border-b-2 border-black"
                  />
                  <h3 className="text-center font-bold text-2xl my-4">
                    {genre.name}
                  </h3>
                </div>
              </Link>
              ))}
            </div>
          </section>
          <hr className="w-full h-[2px] bg-black border-0  " />
          </div>
        ))}
    </div>
  );
}
