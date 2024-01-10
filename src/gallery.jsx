import "./gallery.css";
import vine from "../src/image1/IMAGE (4).png";
import ice from "../src/image1/IMAGE (5).png";
import room from "../src/image1/IMAGE (6).png";
function Gallery() {
  return (
    <div className="gallery">
      <div className="images">
        <div>
          <img src={vine} alt="vine" />
          <img src={ice} alt="icecream" />
        </div>
        <img src={room} alt="room" />
      </div>
    </div>
  );
}

export default Gallery;
