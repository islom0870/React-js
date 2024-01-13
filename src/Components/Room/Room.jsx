import room from "../../assets/image1/room.png";

import "./Room.css";

function Room() {
  return (
    <div className="roomSection">
      <img src={room} className="room" alt="room" />
    </div>
  );
}

export default Room;
