import React from 'react';

const MovieCard = (props) => {
    const {data, isLoading} = props.data
    console.log(data)
    if (isLoading) return <div>Loading...</div>
    let imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            {
                data?.results?.map((result) => (
                    <div key={result.id}>
                        <img src={`${imageBaseUrl}${result.poster_path}`} alt="image"/>
                        <p><h3>Title:</h3>{result.title}</p>
                        <p><h3>Overview:</h3> {result.overview}</p>
                        <p><h3>Avg. Rating:</h3> {result.vote_average}</p>
                        <p><h3>Rating Count:</h3> {result.vote_count}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default MovieCard;