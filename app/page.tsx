'use client'
import { useEffect, useState } from "react";

// app/page.tsx
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image is displayed
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
type obj = {
  image:string,video:string
}
  const images_videos : [obj] = [
    {
      image:"team.jpg",
      video:"grad project video.mp4"
    }
  ]
  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      if (currentImage < images_videos.length - 1) {
        setCurrentImage(currentImage + 1); // Show the next image
      } else {
        setShowVideo(true); // After the last image, show the video
      }
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(imageTimeout); // Cleanup timeout on unmount
  }, []);
  return (
    <div  className="w-screen h-auto">

<section className="w-full max-w-screen h-screen bg-cover bg-no-repeat landing flex items-center">
{!showVideo && (
<img src={images_videos[currentImage].image}  className={`absolute z-40 w-full h-full image ${showVideo ? 'vanish' : ''}`}/>)}
 <video id="video" src={images_videos[currentImage].video} className="absolute z-0 w-full h-full" autoPlay muted></video>
      </section>    </div>
  )}
