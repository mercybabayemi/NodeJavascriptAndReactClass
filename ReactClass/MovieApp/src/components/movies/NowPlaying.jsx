import React from 'react';
import {useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery} from "../../service/MovieAPI.jsx";

import MovieCard from "../../reusable/MovieCard";
export const NowPlaying = () => {
    const nowPlayingData = useGetNowPlayingMoviesQuery();
    return (
        <div>
            <MovieCard data={nowPlayingData}/>
        </div>
    );
};