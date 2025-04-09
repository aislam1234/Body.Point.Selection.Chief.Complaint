import React from "react";
import BodyMarker from "./body-marker";

const RightPanel = () => (
  <div style={{ width: "25%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{
      marginBottom: "1rem",
      background: "black",
      color: "white",
      padding: "0.4rem 1rem",
      borderRadius: "20px",
      fontSize: "0.8rem"
    }}>
      Front View
    </div>
    <BodyMarker />
  </div>
);

export default RightPanel;
