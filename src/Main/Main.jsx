import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
    }
  }
  
  
  handleLocationSubmit = async (e) => {
    e.preventDefault();
    //console.log(e.target.city.value);
  let location = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${e.target.city.value}&format=json`)
  this.setState({location:location.data[0]})
  console.log(location.data[0])
  }
  render(){ 
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`;
    return(
      <>
          <Form onSubmit={this.handleLocationSubmit}>
            <Form.Label>Search City</Form.Label>
            <Form.Control type="text" name ="city"placeholder="enter city..."/>
            <Button type="submit" >Explore!</Button>
          </Form>

            <p>{this.state.location.display_name}</p>
            <li>{this.state.location.lat}</li>
            <li>{this.state.location.lon}</li>
            <img src= {mapURL} alt={this.state.location.display_name}/>
      </>
    )
  }
}
