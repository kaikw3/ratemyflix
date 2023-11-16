import React from "react";

function movieList(props) {
  return (
    <div class="d-flex justify-content-start m-3">
      {props.movies.map((movie, index) => (
        <div class="m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </div>
  );
}

export default movieList;
