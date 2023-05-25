/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SearchBox({searchfield, searchChange}) {
  return (
    <div className="pa2">
      <input type="search" 
      placeholder="search robots" 
      className="pa3 ba b--green bg-lightest-blue"
      onChange={searchChange}
      
      />
    </div>
  );
}

export default SearchBox;
