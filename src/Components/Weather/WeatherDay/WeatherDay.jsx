import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class EachDay extends React.Component{

  render(){
    return(
      <>
      <Card style={{ width: '18rem' }}>
      <Card.Header>Today's Weather</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{this.props.forecast[0].time}</ListGroup.Item>
        <ListGroup.Item>{this.props.forecast[0].forecast}</ListGroup.Item>
      </ListGroup>
    </Card>
      </>
    )
  }
}
