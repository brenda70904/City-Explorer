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
                <img className="carouselImg"
                  alt={movie.title}
                  src={movie.src}
                ></img>
              </Carousel.Item>

            
          ))}

        </Carousel>
      </>
    )
  }

}
