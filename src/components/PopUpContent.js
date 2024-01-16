import React from "react";
import "./PopUp.css";

function PopUpContent(props) {
  return (
    <div className="content-container ">


      <div className="content">


        <button onClick={props.close} class="float-right mb-3 rounded-lg">
          Close Modal
        </button>

        <img
          src="https://picsum.photos/500/250"
          alt="movie poster"
          className="mb-4 border-2"
        />


        <h3>Test Review</h3>


        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
          semper sapien, et accumsan magna blandit ut. Sed vitae congue odio.
          Vestibulum ac ante enim. Mauris fermentum, libero et egestas
          tincidunt, lectus enim mollis orci, vitae mollis libero tortor varius
          nisl. Aliquam maximus dignissim auctor. Vivamus vel lectus nunc.
          Praesent rhoncus mi eu maximus ultricies. Quisque et magna quis nibh
          accumsan feugiat non eu nulla. In facilisis nunc eget augue
          ullamcorper tempor. Ut eleifend, enim vitae tristique dignissim,
          sapien massa condimentum nunc, quis ultricies nulla leo a enim.
        </p>


      </div>
    </div>
  );
}

export default PopUpContent;
