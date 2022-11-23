import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Movie.css";

export default class Movie extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          {this.props.movies.map((movie, i) => (
              <Carousel.Item className="carousel mb-1" key={i}>
                <Carousel.Caption className="caption">
                  <h3>{movie.title}</h3>
                  <h5>{movie.releaseDate}</h5>
                  {/* <p>{movie.overview}</p> */}
                </Carousel.Caption>
                {
                  movie.src.match(/w500null$/) ? <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt='noImage' width="500"></img> 
                  :<img src={movie.src} alt={movie.title} ></img>
                }
              </Carousel.Item>

            
          ))}

        </Carousel>
      </>
    )
  }

}
