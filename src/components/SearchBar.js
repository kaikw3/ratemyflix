import React from "react";

function searchBar(props) {
  return (
    <div className="col col-sm-4">
      <input 
            className="form-control border-2 border-slate-500" 
            placeholder="Search Movie..."
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
    </div>
  );
}

export default searchBar;
