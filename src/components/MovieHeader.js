import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Logo.png";

function movieHeader(props) {
  return (
    <div className="col">
      <div className="mt-1 inline-flex items-center cursor-pointer hover">

        {/* Logo Image */}
        <Link to="/">
          <img src={logo} alt="Rate My Flix Logo" className="w-20 mr-3" />
        </Link>

        {/* Header Title */}
        <Link to="/" className="hover:no-underline">
          <h3 className="text-3xl text-black ">
            <strong>{props.heading}</strong>
          </h3>
        </Link>

        <h3 className="ml-4">|</h3>

        {/* Header Bar Directory */}
        <ul className="gap-7 row text-center justify-center mt-3">
          <Link to="/myReviews" className="hover:no-underline">
            <h4 className="text-xl text-black hover:scale-110 duration-150">My Reviews</h4>
          </Link>
          <Link to="/movies" className="hover:no-underline">
            <h4 className="text-xl text-black hover:scale-110 duration-150">Movies</h4>
          </Link>
          <Link to="/tv" className="hover:no-underline">
            <h4 className="text-xl text-black hover:scale-110 duration-150">TV</h4>
          </Link>
          <Link to="/contact" className="hover:no-underline">
            <h4 className="text-xl text-black hover:scale-110 duration-150">Contact</h4>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default movieHeader;
