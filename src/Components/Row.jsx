import { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'


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
        <div className="row-container">
            <h2>{title} </h2>
            <div className="row-posters">
                <button onClick={slideLeftHandler} className="flash-button-left">
                    <img className='arrow' src={arrowLeft} alt="arrow" />
                </button>
                <div id={dynamicID} className='row-slide'>
                    {movies.map(item => (
                        <img onClick={() => handelClick(item)} className={`row-poster ${isLarge && "row-poster-large"}`} key={item.id} src={`https://image.tmdb.org/t/p/original${isLarge ? item.backdrop_path : item.poster_path}`} alt="item.poster_path" />
                    ))
                    }
                </div>
                <button onClick={slideRightHandler} id='slideRight' className="flash-button-right">
                    <img className='arrow' src={arrowRight} alt="arrow" />
                </button>
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>);
}

export default Row;