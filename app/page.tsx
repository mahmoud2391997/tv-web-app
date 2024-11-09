"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

// app/page.tsx
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0); // State to track which image is displayed
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility
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

  const categories: Category[] = [
    {
      name: "Movies",
      genres: [
        {
          name: "Action",
          image:
            "https://heights-photos.s3.amazonaws.com/wp-content/uploads/2017/04/04191317/isabella-column-online.jpg",
        },
        {
          name: "Drama",
          image:
            "https://nofilmschool.com/media-library/downton-abbey-drama-tvgenre.jpg?id=34065351&width=1362&quality=90",
        },
        {
          name: "Comedy",
          image:
            "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/06/list-13-comedy-movies-that-are-perfect-from-start-to-finish-1.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
        },
      ],
    },
    {
      name: "Shows",
      genres: [
        {
          name: "Reality",
          image:
            "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-15-greatest-reality-shows-of-all-time.jpg",
        },
        {
          name: "Documentary",
          image:
            "https://voice123.com/blog/wp-content/uploads/2023/08/shutterstock_159404171_720.jpg",
        },
        {
          name: "Talk Show",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/President_Barack_Obama_with_David_Letterman_09-21-09.jpg/440px-President_Barack_Obama_with_David_Letterman_09-21-09.jpg",
        },
      ],
    },
    {
      name: "Series",
      genres: [
        {
          name: "Sci-Fi",
          image: "https://i.insider.com/5ea5f347698525546e3f4d45?width=700",
        },
        {
          name: "Fantasy",
          image:
            "https://nathanbweller.com/wp-content/uploads/2013/01/essential-fantasy-series-featured-image.jpg",
        },
        {
          name: "Mystery",
          image:
            "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZYfswIhFZ8ij7IGhysDXswKETPTDhFsDfFfeiW_aCSJ-uolasRkFTvllNVZmR8M5XO4ymKfGzbAON8qkr6M-7IiZpNriXDck2ZFsr-5-aHaNxhYz60qNXhBbiFKg3Yg7CpIcy64P7J_k6uSSQ.jpg?r=d16",
        },
      ],
    },
  ];

  const images_videos: obj[] = [
    {
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      video:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/3045163-hd_1920_1080_25fps.mp4?alt=media&token=bb97cfb1-2ac7-4459-a481-d4e39b921d30",
      type: "MOVIE",
    },
    {
      image:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      video:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/855289-hd_1920_1080_25fps.mp4?alt=media&token=bb70817b-7215-493e-9c0e-c7f43d32fc4a",
      type: "SHOW",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      video:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/856787-hd_1920_1080_30fps.mp4?alt=media&token=9d0f0b92-0e91-4976-8871-dd3a89d76af2",
      type: "SERIES",
    },
  ];

  useEffect(() => {
    setShowVideo(false);

    const imageTimeout = setTimeout(() => {
      setShowVideo(true); // After the last image, show the video
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(imageTimeout); // Cleanup timeout on unmount
  }, [currentImage]);
  return (
    <div className="w-screen pt-32 ">
      <div className="flex relative">
        <svg
          onClick={() => {
            if (currentImage > 0) {
              setCurrentImage((prev) => prev - 1);
            } else {
              setCurrentImage(images_videos.length - 1);
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

        <section className=" w-5/6 h-[80vh] m-auto relative border-black border-8 bg-black">
          {!showVideo && (
            <img
              src={images_videos[currentImage].image}
              className={`absolute z-40 w-full h-full `}
            />
          )}
          <video
            id="video"
            src={images_videos[currentImage].video}
            className="absolute z-0 w-full h-full"
            autoPlay
            muted
          ></video>
          <div className="absolute right-0 bottom-0 bg-white z-50 ">
            <h3>
              TRAILER OF
              <br /> MOST WATCHED {images_videos[currentImage].type}{" "}
            </h3>
          </div>
        </section>
        <svg
          onClick={() => {
            if (currentImage < images_videos.length - 1) {
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
            <div className="ml-[5%] flex w-[90%] justify-between h-96 overflow-x-hidden mt-10">
              {category.genres.map((genre) => (
                <div
                  key={genre.name}
                  className="w-1/4 h-full border-2 border-black"
                >
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="w-full h-80 border-b-2 border-black"
                  />
                  <h3 className="text-center font-bold text-2xl mt-4">
                    {genre.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
          <hr className="w-full h-[2px] bg-black border-0  " />
        </div>
      ))}

      <Footer />
    </div>
  );
}
