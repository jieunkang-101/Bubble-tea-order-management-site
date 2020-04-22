import React from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function MovieList(props) {
  return(
    <>{props.movieList.map((movie, id) => 
      <p>
        <Movie
          key = {id = v4()}
          name = {movie.name}
          description = {movie.description}
          quantity = {movie.quantity} />
      </p>
  )}
  </>);
}

MovieList.propTypes = {
  movieList: PropTypes.array
}

export default MovieList;

