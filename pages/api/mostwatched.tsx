
import axios from 'axios'
interface MostWatched {
    image: string;
    video: string;
    type: string;
  }
 export default async function fetchMostWatched(): Promise<MostWatched[]> {
    const mostWatchedUrl = 'https://tv-web-server.glitch.me/api/mostwatched';

    const response = await axios.get<MostWatched[]>(mostWatchedUrl);
    return response.data;
  }