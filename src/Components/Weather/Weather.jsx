import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Weather.css"

export default class Weather extends React.Component{
  render(){
    return(
      <>
        {
          this.props.forecast.map((eachDate,idx) => (
            <ListGroup key={idx} horizontal={eachDate} className="weatherLs my-2">
            <ListGroup.Item>{eachDate.description}</ListGroup.Item>
            <ListGroup.Item>{eachDate.date}</ListGroup.Item>
          </ListGroup>
          ))
        }
      </>
    )
  }
}
