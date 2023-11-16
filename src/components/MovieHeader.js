import React from "react";


function movieHeader(props) {
    return (
        <div class="col">
            <h1><strong>{props.heading}</strong></h1>
        </div>
    );
};

export default movieHeader;