import React from "react";

export default class Movie extends React.Component{
  render(){
    return(
      <>
      {this.props.movies.map((movie, i) =>(
        <div key={i}>{movie.title}</div>
      ))}
      </>
    )
  }

}
