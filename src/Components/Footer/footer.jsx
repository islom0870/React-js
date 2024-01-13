import "./footer.css";
import "../Navbar/Navbar.css";
import instm from "../../assets/image1/instgrm.png";
import mail from "../../assets/image1/mail.png";
import face from "../../assets/image1/facebook.png";
function Footer() {
  return (
    <div className="footer">
      <p>
        Award winning <br /> cafe and bar.
        <br />
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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
export default Footer;
