import React from "react";
import MovieHeader from "../components/MovieHeader";

function MyReviews() {
  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-3 m-1 mb-3">
          <MovieHeader heading="RateMyFlix" />
        </div>
        <h1>Coming Soon</h1>
      </div>
    </>
  );
}

export default MyReviews;
