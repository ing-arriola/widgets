import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          origin: "*",

          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const rederedResults = results.map((result) => (
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          target="_blank"
          rel="noreferrer"
          className="ui button"
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            placeholder="Type what you wanna search for"
          />
        </div>
      </div>
      <div className="ui celled list">{rederedResults}</div>
    </div>
  );
};

export default Search;
