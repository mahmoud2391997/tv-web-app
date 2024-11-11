import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return  <div  className={`${oswald.className} w-full h-auto min-h-screen`} >
<Navbar/>
  <Component {...pageProps}/>;
<Footer/>
  </div>
}
