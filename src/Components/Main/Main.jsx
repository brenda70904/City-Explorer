import React from "react";
import axios from "axios";
// import Map from "../Map/Map";
// import Weather from "../Weather/Weather";
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import "./Main.css"
import { Next } from "react-bootstrap/esm/PageItem";


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      lat:"",
      lon:"",
      isHidden:true,
      isError:false,
      displayMap:false,
      errorMessage:"",
      forecast:[]
    }
  }


  handleLocationSubmit = async (e) => {
    try{
    e.preventDefault();
    //console.log(e.target.city.value);
    let location = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${e.target.city.value}&format=json`)
    
    //Make request to server
    // let weather = await axios.get(process.env.REACT_APP_SERVER+"/weather?lat="+location.lat+"&lon="+location.lon);

    this.setState({ 
      location: location.data[0], 
      displayMap:true,
      // isError: false,
      // forecast: weather //Array of forecast weather
    })

  }catch(error){
    // console.log(error.message);
    this.setState({
      // isError:true,
      errorMessage : error.message})
  }
    // console.log(location.data[0])
  }
  render() {
    return (
      <>
        <Form className="SearchFrom" onSubmit={this.handleLocationSubmit} >
          <Form.Label className="searchFormLabel">Search City</Form.Label>
          <Form.Control type="text" name="city" placeholder="enter city..." />
          <Button className="formButton" type="submit" >Explore!</Button>
        </Form>
        
      {this.state.displayMap ?
          <Card className="mapCard" show={this.state.isHidden} >
          <Card.Header>{this.state.location.display_name}</Card.Header>
          <Card.Body>
            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`} alt={this.state.location.display_name} />
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Latitude: {this.state.location.lat}</ListGroup.Item>
              <ListGroup.Item>Longtitude: {this.state.location.lon}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      : <p>{this.state.errorMessage}</p>}
        
      <div>
        {
          this.state.forecast.map(eachDate => (
            <div>
              {eachDate.description}
            </div>
          ))
        }
      </div>

      </>
    )


  }
}
