import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieHeader from "./components/MovieHeader";
import SearchBar from "./components/SearchBar";
import FavouritesHeader from "./components/FavouritesHeader";
import RemoveButton from "./components/RemoveButton";
import FavouriteButton from "./components/FavouriteButton";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  

  // Takes the searchValue and sends a request
  // Response is fetched and converted to a json, if results come back then results are
  // put into setMovies state
  async function getMovieRequest(searchValue) {
    // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=992abd39`;  // old API

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f0330c295533a251a6b3748238b60fca&query=${searchValue}&include_adult=false&language=en-US`;


    const response = await fetch(url);
    const jsonResponse = await response.json();

    console.log(jsonResponse);  // To Test

    if (jsonResponse.results) {
      setMovies(jsonResponse.results);
    }
  }

  // Use Effects gets called on render of website and when search bar is inputted
  // Calls getMovieRequests and passes in searchValue
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);



  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);



  useEffect(() => {
    if (!searchValue) {
      setSearchValue("Harry Potter");
    }
  }, [searchValue]);




  function addFavourite(movie) {
    if (favourites.includes(movie)) {
      alert("Sorry this movie is already in your favourites");
    } else {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToStorage(newFavouriteList);
    }
  }



  function removeFavourite(movie) {
    const newRemovedList = favourites.filter(
      (favourites) => favourites.id !== movie.id
    );
    setFavourites(newRemovedList);
    saveToStorage(newRemovedList);
  }


  
  function saveToStorage(items) {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  }

  // Recives updated movie state and takes the movie list and renders it onto the page
  return (
    //Main Movie list section

    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-3 m-1 mb-3">
        <MovieHeader heading="RateMyFlix" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <MovieList
          movies={movies}
          onClickFavourite={addFavourite}
          favouriteComponenet={FavouriteButton}
        />
      </div>

      <div className="row d-flex align-items-center mt-5 m-1 ">
        <FavouritesHeader heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          onClickFavourite={removeFavourite}
          favouriteComponenet={RemoveButton}
        />
      </div>
    </div>
  );
}

export default App;
