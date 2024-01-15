import React from "react";


function FavouritesHeader(props) {
    return (
        <div className="col">
            <h3>{props.heading}</h3>
        </div>
    );
};

export default FavouritesHeader;