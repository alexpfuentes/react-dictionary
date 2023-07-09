import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>
      What word would you like to look up?
      </p>
      <form onSubmit={search} >
        <input 
          type="search"
          onChange={handleKeywordChange}
          autofocus={true}
        />
      </form>
    </div>
  );
}