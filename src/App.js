import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeader from "./components/MovieHeader";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  async function getMovieRequest(searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=992abd39`;

    const response = await fetch(url);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div class="container-fluid movie-app">
      <div class="row m-5 mt-5 d-flex align-items-center fixed-top">
        <MovieHeader heading="RateMyFlix" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div class="row" style={{ marginTop: "110px" }}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;


