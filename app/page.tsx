'use client'
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

// app/page.tsx
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image is displayed
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
interface obj  {
  image:string,video:string,type:string
}
interface genre{
  name:string,image:string
}
interface Category  {
  name:string,genres:genre[]
}

const categories: Category[] = [
  {
    name: "Movies",
    genres: [
      { name: "Action", image: "action-movie.jpg" },
      { name: "Drama", image: "drama-movie.jpg" },
      { name: "Comedy", image: "comedy-movie.jpg" },
    ],
  },
  {
    name: "Shows",
    genres: [
      { name: "Reality", image: "reality-show.jpg" },
      { name: "Documentary", image: "documentary-show.jpg" },
      { name: "Talk Show", image: "talk-show.jpg" },
    ],
  },
  {
    name: "Series",
    genres: [
      { name: "Sci-Fi", image: "sci-fi-series.jpg" },
      { name: "Fantasy", image: "fantasy-series.jpg" },
      { name: "Mystery", image: "mystery-series.jpg" },
    ],
  },
];


  const images_videos : obj[] = [
    {
      image:"team.jpg",
      video:"grad project video.mp4",
      type:"MOVIE"
    },
    {
      image:"portfolio image.jpg",
      video:"video.mp4",
      type:"SHOW"

    }, {
      image:"team.jpg",
      video:"grad project video.mp4",
      type:"SERIES"

    }
  ];

  useEffect(() => {
    setShowVideo(false);

    const imageTimeout = setTimeout(() => {
  
        setShowVideo(true); // After the last image, show the video
      
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(imageTimeout); // Cleanup timeout on unmount
  }, [currentImage]);
  return (
    <div  className="w-screen pt-32 ">
<div className="flex relative">
        <svg className="absolute top-[50%] left-[2%] z-50" width="50px" height="50px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>

<section className=" w-5/6 h-[80vh] m-auto relative border-black border-8 bg-black">
        
{!showVideo && (
  <img src={images_videos[currentImage].image}  className={`absolute z-40 w-full h-full `}/>)}
 <video id="video" src={images_videos[currentImage].video} className="absolute z-0 w-full h-full" autoPlay muted></video>
    <div className="absolute right-0 bottom-0 bg-white z-50 ">
      <h3>TRAILER OF<br/> MOST WATCHED {images_videos[currentImage].type} </h3></div> 
      </section>   
 <svg onClick={()=>{
  
  if (currentImage < images_videos.length -1) {
    
    setCurrentImage(prev=> prev + 1)
  } else{
    setCurrentImage(0)

  }
  setTimeout(() => setShowVideo(false), 10);

 }} width="50px" height="50px" className="absolute  top-[50%] right-[2%]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" /></svg> 
       </div>
       <hr className="w-full h-4 bg-black border-0  mt-40" />
       <h1 className="text-center my-16 font-extrabold text-5xl">CATEGORIES</h1>
       <hr className="w-full h-1 bg-black border-0  " />

  {categories.map((category) => (
    <div  key={category.name}>
      <section key={category.name} className="w-full h-auto  mb-10 py-10 ">
      <h2 className="ml-[5%] mb-6 font-extrabold text-3xl">
        {category.name.toUpperCase()} GENRES
      </h2>
      <div className="ml-[5%] flex w-[90%] justify-between h-96 overflow-x-hidden mt-10">
        {category.genres.map((genre) => (
          <div key={genre.name} className="w-1/4 h-full border-2 border-black">
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full h-80 border-b-2 border-black"
            />
            <h3 className="text-center font-bold text-2xl mt-4">{genre.name}</h3>
          </div>
        ))}
      </div>
</section>
<hr className="w-full h-[2px] bg-black border-0  " />

        </div>
  ))}

<Footer/>
</div>
  )}
