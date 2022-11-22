import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Holmes";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
    }, [dispatch]);
    return (
        <div>
            <div className="banner-im"></div>
            <MovieListing />
        </div>
    );
};

export default Home;