import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="p2">
      <input className="ma2 pa3 ba b--green bg-lightest-blue"
      typeof="search" 
      placeholder="search robots"
      onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;