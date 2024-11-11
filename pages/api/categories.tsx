import axios from 'axios'
interface genre {
  name: string;
  image: string;
}
interface Category {
  name: string;
  genres: genre[];
}
 
export default async function fetchCategories(): Promise<Category[]> {
    const categoriesUrl = 'https://tv-web-server.glitch.me/api/categories';

  const response = await axios.get<Category[]>(categoriesUrl);
  return response.data;
}