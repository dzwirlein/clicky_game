import React from "react";
import "./style.css";

function MainContainer(props) {
    return (
      <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>

    );
  }

  export default MainContainer;