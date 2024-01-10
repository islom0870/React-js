import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Navbar";
import reportWebVitals from "./reportWebVitals";
import Room from "./Room";
import About from "./about";
import Menu from "./menu";
import Location from "./location";
import Gallery from "./gallery";
import Footer from "./footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Room />
    <About />
    <Menu />
    <Location />
    <Gallery />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();