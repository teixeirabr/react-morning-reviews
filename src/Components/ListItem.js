import React from "react";

export default function ListItem(props) {
  const { movie } = props;
  return (
    <div className="List-Item">
      <img
        src={props.movie.posterImg}
        className="movie-poster"
        alt={movie.title}
      />
      <div className="movie-info">
        <p>{props.movie.title}</p>
        <p>{props.movie.year}</p>
      </div>
    </div>
  );
}
