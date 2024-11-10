import Image from "next/image";
import Link from "next/link";

export default function Watchlist() {
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
    genre: "Action" | "Drama" | "Comedy" | "Reality" | "Documentary" | "Talk Show" | "Sci-Fi" | "Fantasy" | "Mystery";
    title: string;
    image: string;
    actors: string[];
    story: string;
    video: string;
    releaseDate?: string; // Optional for series and shows
    seasons?: string; // Optional for items with multiple seasons
    rating: string;
  }
  
  const watchlist: WatchItem[] = [
    {
      category: "Movies",
      genre: "Action",
      title: "Mad Max: Fury Road",
      image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      actors: ["Tom Hardy", "Charlize Theron"],
      story: "In a post-apocalyptic wasteland, Max teams up with Furiosa to survive.",
      video: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
      releaseDate: "2015",
      rating: "8.1/10"
    },
    {
      category: "Movies",
      genre: "Action",
      title: "Die Hard",
      image: "https://image.tmdb.org/t/p/w500/7f7aiS5w4Ve7kcdJbBOuj5gWzz9.jpg",
      actors: ["Bruce Willis", "Alan Rickman"],
      story: "A New York cop fights terrorists in a Los Angeles skyscraper.",
      video: "https://www.youtube.com/watch?v=2TQ-pOvI6Xo",
      releaseDate: "1988",
      rating: "8.2/10"
    },
    {
      category: "Movies",
      genre: "Drama",
      title: "The Shawshank Redemption",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      actors: ["Tim Robbins", "Morgan Freeman"],
      story: "Two imprisoned men bond over a number of years, finding solace and redemption.",
      video: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
      releaseDate: "1994",
      rating: "9.3/10"
    },
    {
      category: "Movies",
      genre: "Drama",
      title: "Forrest Gump",
      image: "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
      actors: ["Tom Hanks", "Robin Wright"],
      story: "A man with a low IQ recounts his extraordinary life adventures.",
      video: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      releaseDate: "1994",
      rating: "8.8/10"
    },
    {
      category: "Movies",
      genre: "Comedy",
      title: "The Hangover",
      image: "https://image.tmdb.org/t/p/w500/bLQVRKZg2ve8qnD2VjmtXw9u89F.jpg",
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
      story: "Three friends must piece together their wild night in Las Vegas to find their missing friend.",
      video: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
      releaseDate: "2009",
      rating: "7.7/10"
    },
    {
      category: "Movies",
      genre: "Comedy",
      title: "Superbad",
      image: "https://image.tmdb.org/t/p/w500/4TfApzPqfU0oI0ps5mjdl0hRrTv.jpg",
      actors: ["Jonah Hill", "Michael Cera"],
      story: "Two high school friends attempt to make the most of their last days before graduation.",
      video: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
      releaseDate: "2007",
      rating: "7.6/10"
    },
    {
      category: "Series",
      genre: "Reality",
      title: "Survivor",
      image: "https://image.tmdb.org/t/p/w500/yH7YWb3qt4rkm7UGFYwA1zuPIwM.jpg",
      actors: ["Jeff Probst"],
      story: "Contestants are stranded in remote locations and must outwit, outplay, and outlast each other to win.",
      video: "https://www.youtube.com/watch?v=8z8vP7l4g14",
      seasons: "40+",
      rating: "7.3/10"
    },
    {
      category: "Series",
      genre: "Reality",
      title: "The Amazing Race",
      image: "https://image.tmdb.org/t/p/w500/kN2rbvPbPPi7f43bEnuQzL9oC5D.jpg",
      actors: ["Phil Keoghan"],
      story: "Teams of two race around the world to win a grand prize in a test of endurance.",
      video: "https://www.youtube.com/watch?v=rBq5yq_CeDE",
      seasons: "33",
      rating: "7.6/10"
    },
    {
      category: "Series",
      genre: "Documentary",
      title: "Planet Earth",
      image: "https://image.tmdb.org/t/p/w500/6FZS3b7PBZevnRxrTXZ0XRjcySx.jpg",
      actors: ["David Attenborough"],
      story: "An exploration of Earth’s natural wonders and breathtaking wildlife.",
      video: "https://www.youtube.com/watch?v=2P-ml7FI1Fs",
      seasons: "2",
      rating: "9.4/10"
    },
    {
      category: "Series",
      genre: "Documentary",
      title: "Making a Murderer",
      image: "https://image.tmdb.org/t/p/w500/xgzzkMIImJXQLUgSmr2k8J7RIh8.jpg",
      actors: ["Steven Avery", "Brendan Dassey"],
      story: "A documentary exploring the controversial conviction of Steven Avery.",
      video: "https://www.youtube.com/watch?v=qxgbdYaR_KQ",
      seasons: "2",
      rating: "8.6/10"
    },
    {
      category: "Series",
      genre: "Talk Show",
      title: "The Tonight Show Starring Jimmy Fallon",
      image: "https://image.tmdb.org/t/p/w500/8m2NOMQgn0W2EKC4eR4MvvnLueB.jpg",
      actors: ["Jimmy Fallon"],
      story: "A late-night talk show featuring celebrity guests, comedy skits, and musical performances.",
      video: "https://www.youtube.com/watch?v=_4oK9hbxzxU",
      seasons: "9+",
      rating: "7.1/10"
    },
    {
      category: "Series",
      genre: "Talk Show",
      title: "The Ellen DeGeneres Show",
      image: "https://image.tmdb.org/t/p/w500/w7kt9frlxhVnV6uMc75TW84vGns.jpg",
      actors: ["Ellen DeGeneres"],
      story: "A daytime talk show featuring celebrity interviews, games, and giveaways.",
      video: "https://www.youtube.com/watch?v=jIuG5v6d9QA",
      seasons: "19",
      rating: "6.9/10"
    },
    {
      category: "Shows",
      genre: "Sci-Fi",
      title: "Stranger Things",
      image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      actors: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
      story: "A group of kids uncover supernatural forces and secret experiments in their town.",
      video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
      seasons: "4",
      rating: "8.7/10"
    },
    {
      category: "Shows",
      genre: "Sci-Fi",
      title: "The Expanse",
      image: "https://image.tmdb.org/t/p/w500/8Ww4mEQ9gMl07JwEn4ZALd0zPGk.jpg",
      actors: ["Steven Strait", "Dominique Tipper"],
      story: "A detective and a rogue captain unravel a conspiracy in a future where humanity has colonized space.",
      video: "https://www.youtube.com/watch?v=caLji74IIp4",
      seasons: "6",
      rating: "8.5/10"
    },
    {
      category: "Shows",
      genre: "Fantasy",
      title: "Game of Thrones",
      image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
      actors: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
      story: "Noble families vie for control over the Seven Kingdoms of Westeros.",
      video: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
      seasons: "8",
      rating: "9.3/10"
    },
    {
      category: "Shows",
      genre: "Fantasy",
      title: "The Witcher",
      image: "https://image.tmdb.org/t/p/w500/4LrRGUzR7v3irRlDE4ZL1wefwDX.jpg",
      actors: ["Henry Cavill", "Anya Chalotra"],
      story: "Geralt of Rivia, a mutated monster-hunter, journeys through a world where people often prove more wicked than beasts.",
      video: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
      seasons: "3",
      rating: "8.2/10"
    },
    {
      category: "Shows",
      genre: "Mystery",
      title: "Sherlock",
      image: "https://image.tmdb.org/t/p/w500/7YgF30nWyw4C0C4b6vSe8Oq9A71.jpg",
      actors: ["Benedict Cumberbatch", "Martin Freeman"],
      story: "Sherlock Holmes and Dr. Watson solve modern-day mysteries in London.",
      video: "https://www.youtube.com/watch?v=xK7S9mrFWL4",
      seasons: "4",
      rating: "9.1/10"
    },
    {
      category: "Shows",
      genre: "Mystery",
      title: "True Detective",
      image: "https://image.tmdb.org/t/p/w500/2sGGmyEZVPdfRW9aqotO0CzFTIH.jpg",
      actors: ["Matthew McConaughey", "Woody Harrelson"],
      story: "Detectives investigate dark cases and the effect they have on their personal lives.",
      video: "https://www.youtube.com/watch?v=TXwCoNwBSkQ",
      seasons: "3",
      rating: "9.0/10"
    }
  ];
  
  return (
    <div className="pt-32 px-[2.5%] min-h-screen">
      <div className="flex items-center space-x-4 p-4 bg-black rounded-lg mb-4">
        <input
          type="text"
          placeholder="Search What To Watch..."
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
      </div>
      <main className="w-full  relative h-full flex">
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
        <section style={{ width: "calc(100% - 240px)" }}>
          {watchlist.map((item)=>
          <div             key={item.title}
          className="w-full mb-7 h-[250px] flex flex-col md:flex-row p-2 bg-black rounded-lg text-white">
          <div className="w-[350px]">
            <img
              src={item.image}
              alt="My Image"
             
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-auto">
          <div className="px-4 h-full flex flex-col justify-between">
            <div className="text-2xl font-bold">{item.title}</div>
           
            <p className="text-lg">
           Category : {item.category}
            </p>
            <p className="text-lg">
           Genre : {item.genre}
            </p>
            <p className="text-lg">
           Actors : {...item.actors}
            </p>
            <p className="text-lg">
           Rating : {item.rating}
            </p>
            <p className="text-lg">
           Link : 
           <Link href={item.video} className="ml-1">
           <span className="underline">

            {item.video}
           </span>
           </Link>
            </p>

            <p>
            Story : {item.story}
            </p>
          </div>
<div  className="px-4 flex flex-col justify-between absolute right-0 top-0">
  {
    item.releaseDate ? 
<p className="text-lg">
           Release Date : {item.releaseDate}
            </p> : null
}
  {
    item.seasons ? 
<p className="text-lg">
           Seasons : {item.seasons}
            </p> : null
}

</div>
          </div>
          </div>
          )}
          
        
         
        </section>
        <section className="w-[220px] min-h-10 bg-black absolute h-auto rounded-lg right-0 py-3">
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
                  <input type="checkbox" value={genre} className="mr-2" />
                  {category.name} - {genre}
                </label>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
