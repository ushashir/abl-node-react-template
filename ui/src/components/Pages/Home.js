import React, { Component } from 'react'
import Header from "../Pages/Header";
// import image from "../assets/img/team/1.jpg";
import "../../css/Home.css";
import Info from '../Pages/Info'

//Re-usable components

class Home extends Component {
  render() {
    const h = window.screen.height * 0.63
    return (
      <div>
        <Header
          headerHeight={{height: `${h}px`}}
          title="Welcome to our official website"
          subtitle=""
          buttonText="GET STARTED"
          link="/getstarted"
          showButton={true}
        />
        <Info />
      </div>
    )
  }
}

export default Home
