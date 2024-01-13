import React, { Component } from "react";
import Nav from "./Components/Navbar/Navbar";
import Room from "./Components/Room/Room";
import About from "./Components/About/about";
import Menu from "./Components/Menu/menu";
import Location from "./Components/Location/location";
import Gallery from "./Components/Gallery/gallery";
import Footer from "./Components/Footer/footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Room></Room>
        <About></About>
        <Menu></Menu>
        <Location></Location>
        <Gallery></Gallery>
        <Footer></Footer>
      </div>
    );
  }
}
