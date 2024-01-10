import "./menu.css";
import mn from "../src/image1/IMAGE (3).png";
function Menu() {
  return (
    <div className="menuStyle">
      <div>
        <span>Menu</span>
        <p>
          We change our menu every season. Here is what we are currently dishing
          up.
        </p>
        <div className="buttonGroup">
          <button>Food Menu</button>
          <button>Drinks Menu</button>
          <button>Takeaway Menu</button>
        </div>
      </div>
      <div>
        <img src={mn} className="Mn" alt="Menu" />
      </div>
    </div>
  );
}

export default Menu;
