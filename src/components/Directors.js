import React from "react";
import { directors } from "../data";

function Directors() {
  const displayItem = directors.map(d => {
    return (
      <div key={d.name}>
        <h2>{d.name}</h2>
        <ul>
          {d.movies.map(movie => {
            return(
              <li key={movie}>
                {movie}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>
        Directors Page
      </h1>
      <div>
        {displayItem}
      </div>
    </div>
  )
}

export default Directors;
