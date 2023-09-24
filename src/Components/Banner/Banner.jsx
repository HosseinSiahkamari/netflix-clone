import { useEffect, useState } from "react";
import axios from 'axios'
import './Banner.css'

const Banner = ({ fetchURL }) => {
    const [movies, setMovies] = useState([]);
    const [discShow, setDiscShow] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 750);

    useEffect(() => {
        async function apiRequest() {
            const response = await axios(`https://api.themoviedb.org/3${fetchURL} `);
            await setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            return movies;
        }
        apiRequest();
    }, [])

    useEffect(() => {
        const handleResize = () => {
          const newIsLargeScreen = window.innerWidth >= 750;
          setIsLargeScreen(newIsLargeScreen);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    console.log(movies);
    return (
        <header className="h-72 lg:h-96 object-contain object-cover relative"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
                backgroundPosition: "center center",
            }}
        >
            <div className=" h-3/4 left-9 top-1/4 w-2/5 absolute flex flex-col ">
                <h1 className="text-md lg:text-4xl md:text-lg font-sans text-white font-extrabold">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="p-3 flex w-40 md:w-60 mt-3 ">
                    <button className="cursor-pointer text-xs md:text-base text-white w-14 md:w-32 mx-1 rounded-md h-6 md:h-8 bg-neutral-500 hover:bg-slate-300 text-slate-900 transition-all">Play</button>
                    <button className="cursor-pointer text-xs md:text-base text-white w-14 md:w-32 mx-1 rounded-md h-6 md:h-8 bg-neutral-500 hover:bg-slate-300 text-slate-900 transition-all">More Info</button>
                </div>
                {isLargeScreen ? <h1 className=" text-white text-xs md:text-sm mt-5 lg:mt-8">
                    {movies?.overview}
                </h1> : ''}
            </div>
            <div className="overflow-hidden"></div>
        </header>
    );
}

export default Banner;