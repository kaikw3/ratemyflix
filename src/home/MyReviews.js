import React from "react";
import MovieHeader from "../components/MovieHeader";
import ReviewPopUp from "../components/ReviewPopUp";
import { useState } from "react";
import AddReview from "../components/AddReview";

function MyReviews() {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onClickReview() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-3 m-1 mb-3">
          <MovieHeader heading="RateMyFlix" />
        </div>

        <div className="mt-10 ml-16 cursor-pointer" onClick={onClickReview}>
          <AddReview />
        </div>

        <div className="w-screen h-screen">
        <ReviewPopUp text={"Test Modal"} open={isOpen} close={onClose} />
        </div>


      </div>
    </>
  );
}

export default MyReviews;

// onClick={function () {
//   setIsOpen(true);
//   console.log(isOpen);
// }}

        /* <h1 className="mt-100">top 10 rated movies and shows</h1> */
