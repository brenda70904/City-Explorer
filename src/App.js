import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


export default class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}
