import React from "react";
import {Card, ListGroup } from 'react-bootstrap';
import "./Map.css";

export default class Map extends React.Component {
  render(){
    return (
      <>
      {this.props.displayMap ?
          <Card className="mapCard" show={this.props.isHidden} >
            <Card.Header>{this.props.location.display_name}</Card.Header>
            <Card.Body>
              <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13`} alt={this.props.location.display_name} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Latitude: {this.props.lat}</ListGroup.Item>
                <ListGroup.Item>Longtitude: {this.props.lon}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          : <p>{this.props.errorMessage}</p>}
      </>
    )

  }
}
