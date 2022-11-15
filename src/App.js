import React from "react";

export default class App extends React.Component{
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render(){
    return(
      <>
        <h1> City Explorer </h1>
          <form onSubmit={this.handleSubmit}>
            <label>Search for City
            <input type="text" name="city" placeholder="enter city..."/>
            </label>
            <button type="submit" >Search a City</button>
            </form>
      </>
    )
  }
  
}
