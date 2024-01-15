import React from "react";

function movieList(props) {
  const FavouriteComponenet = props.favouriteComponenet;

  return (
    <div className="d-flex justify-content-start m-3 overflow-auto">
      {props.movies.map((movie, index) => (
        <div className="bg-cover m-3 image-container d-flex justify-content-start justify-content-center">
          <img className="rounded-2xl w-48" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie"></img>
          <div
            onClick={() => props.onClickFavourite(movie)}
            className="overlay mb-3"
          >
            <FavouriteComponenet />
          </div>
        </div>
      ))}
    </div>
  );
}

export default movieList;
