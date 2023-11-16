import React from "react";

function searchBar(props) {
  return (
    <div class="col col-sm-4">
      <input 
            class="form-control" 
            placeholder="Search Movie..."
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
    </div>
  );
}

export default searchBar;
