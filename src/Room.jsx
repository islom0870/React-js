import room from "../src/image1/IMAGE (1).png";

import "./Room.css";

function Room() {
  return (
    <div className="roomSection">
      <img src={room} className="room" alt="room" />
    </div>
  );
}

export default Room;
