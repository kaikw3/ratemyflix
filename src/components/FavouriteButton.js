import React from "react";

function FavouriteButton(props) {
  return (
    <>
      <div className="text-white ml-1 text-xs">Add to Favourites</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="15"
        fill="red"
        className="bi bi-heart-fill mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </>
  );
}

export default FavouriteButton;
