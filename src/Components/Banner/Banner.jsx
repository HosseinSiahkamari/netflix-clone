import { useEffect, useState } from "react";
import axios from 'axios'
import './Banner.css'

const Banner = ({fetchURL} ) => {
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        async function apiRequest (){
            const response = await axios(`https://api.themoviedb.org/3${fetchURL} `);
             await setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            //  console.log(response.data.results[Math.floor(Math.random()*response.data.results.length - 1)].name);
            //  console.log(movies);
            return movies;
        }
        apiRequest();
    },[])

    console.log(movies);
    return ( 
        <header className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
            backgroundPosition:"center center",
        }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">More Info</button>
                </div>
                <h1 className="banner-disc">
                    {movies?.overview}
                </h1>
            </div>
            <div className="banner-fade"></div>
        </header>
     );
}
 
export default Banner;