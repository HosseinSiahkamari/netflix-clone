import { useEffect, useState } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.svg'


const Row = ({ title, fetchURL, isLarge, rowId }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrls] = useState("");

    useEffect(() => {
        async function apiRequest() {
            const response = await axios(`https://api.themoviedb.org/3${fetchURL} `);
            await setMovies(response.data.results);
            return movies;
        }
        apiRequest();
    }, [fetchURL]);

    const opts = {
        height: '390',
        width: '100%',
        playersVars: {
            autoplay: 1,
        }
    }
    const handelClick = (item) => {
        if (trailerUrl) {
            setTrailerUrls('')
        } else {
            movieTrailer(item?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrls(urlParams.get("v"))
                }

                ).catch(error => console.log(error))
        }
    }

    const dynamicID = rowId;

    const slideRightHandler = () => {
        const rowSlideRight = document.getElementById(dynamicID);
        const scrollAmount = 10; // میزان اسکرول به هر بار
        const scrollSpeed = 1; // سرعت اسکرول
        const targetScrollLeft = rowSlideRight.scrollLeft + 500; // مقدار مورد نظر برای اسکرول

        const animateScroll = () => {
            if (rowSlideRight.scrollLeft < targetScrollLeft) {
                rowSlideRight.scrollLeft += scrollAmount;
                const scrollLeft = rowSlideRight.scrollLeft;
                requestAnimationFrame(() => {
                    if (rowSlideRight.scrollLeft === scrollLeft) {
                        animateScroll();
                    }
                });
            }
        };

        animateScroll();
    };


    const slideLeftHandler = () => {
        const rowSlideRight = document.getElementById(dynamicID);
        const scrollAmount = 10; // میزان اسکرول به هر بار
        const scrollSpeed = 1; // سرعت اسکرول
        const targetScrollLeft = rowSlideRight.scrollLeft - 500; // مقدار مورد نظر برای اسکرول به سمت چپ

        const animateScroll = () => {
            if (rowSlideRight.scrollLeft > targetScrollLeft) {
                rowSlideRight.scrollLeft -= scrollAmount;
                const scrollLeft = rowSlideRight.scrollLeft;
                requestAnimationFrame(() => {
                    if (rowSlideRight.scrollLeft === scrollLeft) {
                        animateScroll();
                    }
                });
            }
        };

        animateScroll();
    };


    return (
        <div className="bg-zinc-900 relative">
            <h2 className='text-white'>{title} </h2>
            <div className='group flex justify-center items-center relative'>
                <button onClick={slideLeftHandler} className="absolute h-10 w-10 left-8  rounded-full opacity-50 z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='hidden group-hover:block fill-white w-10 h-10 hover:scale-125 transition-all' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </button>
                <div id={dynamicID} className=" w-full m-h-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-hidden overflow-y-hidden justify-center">
                    <div className='flex flex-row flex-center '>
                        {movies.map(item => (
                            <img onClick={() => handelClick(item)} className={`p-2 row-poster ${isLarge && "row-poster-large"}`} key={item.id} src={`https://image.tmdb.org/t/p/original${isLarge ? item.backdrop_path : item.poster_path}`} alt="item.poster_path" />
                        ))
                        }
                    </div>
                </div>
                <button onClick={slideRightHandler} id='slideRight' className="absolute h-10 w-10 right-8 rounded-full flex justify-center align-middle opacity-50 z-30  ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='hidden group-hover:block fill-white  w-10 h-10 hover:scale-125 transition-all' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </button>
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>);
}

export default Row;