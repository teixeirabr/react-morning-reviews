import React, { Component } from "react";
import movies from "../data/movies.json";
import ListItem from "./ListItem.js";

export default class List extends Component {
  constructor() {
    super();

    this.state = {
      movies: movies
    };
  }

  render() {
    console.log(movies);
    const moviesMap = this.state.movies.map(movie => {
      return <ListItem key={movie.id} movie={movie} />;
    });
    return <div className="List">{moviesMap}</div>;
  }
}
