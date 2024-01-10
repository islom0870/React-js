import instm from "../src/image1/IMAGE.png";

import logo from "../src/image1/IMAGE (2).png";

import mail from "../src/image1/Vector (1).png";
import face from "../src/image1/Vector (2).png";
import "./Navbar.css";

function Nav() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <div id="about"></div>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about"> Menu</a>
          </li>
          <li>
            <a href="#about">Info</a>
          </li>
          <li>
            <a href="#about">Booking</a>
          </li>
        </ul>
        <img src={logo} className="logo" alt="logo" />
        <div className="Social">
          <img src={mail} className="App-logo" alt="logo" />
          <img src={face} className="App-logo" alt="logo" />
          <img src={instm} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Nav;
