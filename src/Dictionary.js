import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //let key = "4c3ab30f0419b703b56ofe9631t0a52a";
  //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search} >
        <input 
          type="search"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results}/>
    </div>
  );
}