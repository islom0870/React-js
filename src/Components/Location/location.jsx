import "./location.css";

function Location() {
  return (
    <div className="location">
      <div className="block">
        <div>
          <b>Location</b>
          <p>
            101 Cuba St, <br />
            Te Aro, Wellington
          </p>
        </div>
        <div>
          <b>Hours</b>
          <p>
            Tuesday to Friday <br /> 7AM - 3PM
          </p>

          <p style={{ marginTop: "35px" }}>
            Saturday to Sunday <br /> 8AM - 3PM
          </p>
        </div>
        <div>
          <b>Mondays?</b>
          <p>
            We are closed on Mondays <br /> to reflect and refuel
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;
