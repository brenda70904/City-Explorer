import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Weather.css"

export default class Weather extends React.Component {
  render() {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Daily Weather
          </Dropdown.Toggle>
          <Dropdown.Menu>{
            this.props.forecast.map((eachDate, idx) => (
              <Dropdown.Item key={idx} >{eachDate.time} : {eachDate.forecast}</Dropdown.Item>
            ))
          }</Dropdown.Menu>
        </Dropdown>

      </>
    )
  }
}
