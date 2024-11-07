'use client'
import { useEffect, useState } from "react";

// app/page.tsx
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image is displayed
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
interface obj  {
  image:string,video:string,type:string
}
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
  ]
  useEffect(() => {
    setShowVideo(false);

    const imageTimeout = setTimeout(() => {
  
        setShowVideo(true); // After the last image, show the video
      
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(imageTimeout); // Cleanup timeout on unmount
  }, [currentImage]);
  return (
    <div  className="w-screen pt-28 ">
<div className="flex relative">
        <svg className="absolute top-[40%] z-50" width="100px" height="100px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>

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

 }} width="100px" height="100px" className="absolute  top-[40%] right-0" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" /></svg> 
       </div>
</div>
  )}
