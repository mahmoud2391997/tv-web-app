
import axios from 'axios';

// Define the interfaces based on your structure
interface WatchListItem {
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
export default async function fetchWatchList(): Promise<WatchListItem[]> {
  const watchlistUrl = 'https://tv-web-server.glitch.me/api/watchlist';

  const response = await axios.get<WatchListItem[]>(watchlistUrl);
  return response.data;
}