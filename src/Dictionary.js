import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  let key = "4c3ab30f0419b703b56ofe9631t0a52a";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <p>
      What word would you like to look up?
      </p>
      <form onSubmit={search} >
        <input 
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
        />
      </form>
    </div>
  );
}