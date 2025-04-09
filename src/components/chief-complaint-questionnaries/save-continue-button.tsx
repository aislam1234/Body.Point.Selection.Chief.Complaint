import React from "react";

interface Props {
  isCurrentBodyPointIsTheLast?: boolean;
  saveAndContinueHandler: () => void;
}

const SaveContinueButton = ({
  isCurrentBodyPointIsTheLast, 
  saveAndContinueHandler
}: Props) => (
  <button
    style={{
      background: "#1d3f77",
      color: "white",
      padding: "0.7rem 1.2rem",
      border: "none",
      borderRadius: "6px 6px 0 0",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "18px",
      minWidth: "200px",
    }}
    onClick={() => {
      saveAndContinueHandler();
    }}
  >
    Save {isCurrentBodyPointIsTheLast === false && " & Continue" }
  </button>
);

export default SaveContinueButton;
