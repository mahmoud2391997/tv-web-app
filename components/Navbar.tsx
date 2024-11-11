"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [watchlistClicked, setWatchlistClicked] = useState(false);
  return (
    <nav className="w-full bg-transparent flex items-center absolute justify-between mt-9 z-50">
      <div className="flex items-center">
        <Link
          href={"/"}
          onClick={() => {
            setWatchlistClicked(false);
          }}
        >
          <div
            id="logo"
            className=" rounded-full bg-white w-16 h-16  flex justify-center items-center ml-10"
          >
            <span className="text-black font-extrabold text-5xl text-center ">
              TV
            </span>
          </div>
        </Link>

      </div>
        <Link className="mr-10"
          href={"/watchlist"}
          onClick={() => {
            setWatchlistClicked(true);
          }}
        >
          <div
            className={`text-2xl ml-10 cursor-pointer  ${
              watchlistClicked ? "underline" : ""
            }  `}
          >
            WATCH LIST
          </div>
        </Link>
      
    </nav>
  );
}
