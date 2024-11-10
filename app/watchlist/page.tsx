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
          <div className="w-full mb-7 h-[300px] flex flex-col md:flex-row p-2 bg-black rounded-lg text-white">
            <div className="lg:w-1/2 w-full min-w-[240px]">
              <Image
                src="/team.jpg"
                alt="My Image"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="px-4 flex flex-col justify-between">
              <div className="text-2xl font-bold">Artix (User Website)</div>
              <div className="flex jus">
                <div className="text one">Website Link:</div>
                <Link
                  className="ml-1"
                  href={"https://art-handmade-ecommerce.vercel.app/"}
                >
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    https://art-handmade-ecommerce.vercel.app/
                  </p>
                </Link>
              </div>
              <p className="text-lgs">
                Using: Reactjs - Redux - Node.js - MongoDB
              </p>

              <p>
                Website displays handicrafts and art pieces in our application.
                Our application helps clients to find the best products. Also,
                it provides events for displaying products and artistic talents,
                where clients can book a ticket. Moreover, we send the ticket to
                mail provided by our client.
              </p>
            </div>
          </div>
          <div className="w-full mb-7 h-[300px] flex flex-col md:flex-row p-2 bg-black rounded-lg text-white">
            <div className="lg:w-1/2 w-full min-w-[240px]">
              <Image
                src="/team.jpg"
                alt="My Image"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="px-4 flex flex-col justify-between">
              <div className="text-2xl font-bold">Artix (User Website)</div>
              <div className="flex jus">
                <div className="text one">Website Link:</div>
                <Link
                  className="ml-1"
                  href={"https://art-handmade-ecommerce.vercel.app/"}
                >
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    https://art-handmade-ecommerce.vercel.app/
                  </p>
                </Link>
              </div>
              <p className="text-lgs">
                Using: Reactjs - Redux - Node.js - MongoDB
              </p>

              <p>
                Website displays handicrafts and art pieces in our application.
                Our application helps clients to find the best products. Also,
                it provides events for displaying products and artistic talents,
                where clients can book a ticket. Moreover, we send the ticket to
                mail provided by our client.
              </p>
            </div>
          </div>
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
