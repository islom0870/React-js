import instm from "../../assets/image1/instgrm.png";
import logo from "../../assets/image1/logo.png";
import mail from "../../assets/image1/mail.png";
import face from "../../assets/image1/facebook.png";

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
        <SocialLinks></SocialLinks>
      </header>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="Social">
      <img src={mail} className="App-logo" alt="logo" />
      <img src={face} className="App-logo" alt="logo" />
      <img src={instm} className="App-logo" alt="logo" />
    </div>
  );
}
// export default SocialLinks;
export default Nav;
