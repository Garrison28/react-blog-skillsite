import React from 'react'
import TMDB from './TMDB';
// import axios from 'axios';

function FavoriteMovie(props) {
    // const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    var mappedFavoriteMovies = props.favoriteMovies.map(favoriteMovie => <p>{favoriteMovie}</p>)
    return (
        <div>
            <h1>My Favorite Movies:</h1>
            {mappedFavoriteMovies}
        </div>
    )
}

export default FavoriteMovie