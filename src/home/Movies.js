import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useState } from "react";
import MovieList from "../components/MovieList";
import MovieHeader from "../components/MovieHeader";
import FavouriteButton from "../components/FavouriteButton";
import FavouritesHeader from "../components/FavouritesHeader";

function Movies() {
  const [recentlyReleased, setRecentlyReleased] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [favourites, setFavourites] = useState([]);


  // Takes the searchValue and sends a request
  // Response is fetched and converted to a json, if results come back then results are
  // put into setMovies state
  async function getMovieRequests() {

    const urlRecent = "https://api.themoviedb.org/3/movie/now_playing?api_key=f0330c295533a251a6b3748238b60fca&language=en-US&page=1";


    const responseRecent = await fetch(urlRecent);
    const jsonResponseRecent = await responseRecent.json();

    console.log(jsonResponseRecent);  // To Test

    if (jsonResponseRecent.results) {
        setRecentlyReleased(jsonResponseRecent.results);
    }


    const urlTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=f0330c295533a251a6b3748238b60fca&language=en-US&page=1";

    const responseTopRated = await fetch(urlTopRated);
    const jsonResponseTopRated = await responseTopRated.json();

    console.log(jsonResponseTopRated);  // To Test

    if (jsonResponseTopRated.results) {
        setTopRatedMovies(jsonResponseTopRated.results);
    }

    const urlupcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=f0330c295533a251a6b3748238b60fca&language=en-US&page=1";

    const responseUpcoming = await fetch(urlupcoming);
    const jsonResponseUpcoming = await responseUpcoming.json();

    console.log(jsonResponseUpcoming);  // To Test

    if (jsonResponseUpcoming.results) {
        setUpcoming(jsonResponseUpcoming.results);
    }
  }


  useEffect(() => {
    getMovieRequests();
  }, []);


  function addFavourite(movie) {
    if (favourites.includes(movie)) {
      alert("Sorry this movie is already in your favourites");
    } else {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToStorage(newFavouriteList);
    }
  }

  
  function saveToStorage(items) {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  }

  // Recives updated movie state and takes the movie list and renders it onto the page
  return (
    //Main Movie list section

    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-3 m-1">
        <MovieHeader heading="RateMyFlix" />
      </div>

      <div className="row d-flex align-items-center mt-5 m-1 ">
        <FavouritesHeader heading="Recently Released" />
      </div>
      <div className="row">
        <MovieList
          movies={recentlyReleased}
          onClickFavourite={addFavourite}
          favouriteComponenet={FavouriteButton}
        />
      </div>

      <div className="row d-flex align-items-center mt-5 m-1 ">
        <FavouritesHeader heading="Top Rated" />
      </div>
      <div className="row">
        <MovieList
          movies={topRatedMovies}
          onClickFavourite={addFavourite}
          favouriteComponenet={FavouriteButton}
        />
      </div>


      <div className="row d-flex align-items-center mt-5 m-1 ">
        <FavouritesHeader heading="Upcoming Movies" />
      </div>
      <div className="row">
        <MovieList
          movies={upcoming}
          onClickFavourite={addFavourite}
          favouriteComponenet={FavouriteButton}
        />
      </div>
    </div>
  );
}

export default Movies;
