import "./gallery.css";
import vine from "../../assets/image1/gallery1.png";
import ice from "../../assets/image1/gallery2.png";
import room from "../../assets/image1/gallery3.png";
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
