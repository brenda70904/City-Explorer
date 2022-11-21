import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Weather from "../Weather/Weather";
import Map from "../Map/Map";
import Movie from "../Movie/Movie"
import WeatherDay from '../Weather/WeatherDay/WeatherDay';
import "./Main.css";



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      lat: "",
      lon: "",
      isHidden: true,
      isError: false,
      displayMap: false,
      errorMessage: "",
      forecast: [],
      movies:[]
    }
  }


  handleLocationSubmit = async (e) => {
    try {
      e.preventDefault();
      //weather API
      let location = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${e.target.city.value}&format=json`)
      let locationNameOnly = location.data[0].display_name.split(',').slice(0,1);
      // console.log(locationNameOnly)
      
      //Weather API
      let weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${location.data[0].lat}&lon=${location.data[0].lon}`)

      //Movie API
      let movie = await axios.get(`${process.env.REACT_APP_SERVER}/movie?cityName=${locationNameOnly}`);
      
      this.setState({
        location: location.data[0],
        lat: location.data[0].lat,
        lon: location.data[0].lon,
        forecast: typeof(weather.data) != 'string' ?  weather.data : [],//Array of forecast weather
        movies: movie.data, 
        displayMap: true,
        locationNameOnly:location.data[0].display_name.split(',').slice(0,1)
      })
    } catch (error) {
      this.setState({
        // isError:true,
        errorMessage: error.message
      })
    }
  }
  render() {
    
    //Do deconstruction here

    return (
      <>
        <Form className="SearchFrom" onSubmit={this.handleLocationSubmit} >
          <Form.Label className="searchFormLabel">Search City</Form.Label>
          <Form.Control type="text" name="city" placeholder="enter city..." />
          <Button className="formButton" type="submit" >Explore!</Button>
        </Form>

        <Map
          displayMap={this.state.displayMap}
          lon={this.state.lon}
          lat={this.state.lat}
          location={this.state.location}
          displayName={this.state.displayName}
          errorMessage={this.state.errorMessage}

        />
        <WeatherDay forecast={this.state.forecast}/>
        <Weather forecast={this.state.forecast} />
        <Movie
          movies={this.state.movies}
          locationNameOnly={this.state.locationNameOnly}
        />  
      </>
    )
  }
}
