import React from "react";

function AddReview() {
  return (
    <>
      <div className="row items-center ml-5 border-3 border-solid w-36 rounded-2xl justify-center">
        <div className="inline-flex justify-center items-center">
          <h4 className="text-xl ">Add A Review</h4>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            className="ml-2"
          >
            <path fill="#373846" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default AddReview;
