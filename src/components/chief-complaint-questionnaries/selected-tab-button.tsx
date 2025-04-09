import React from "react";

const SelectedTabButton = ({ label }: { label: string }) => (
  <button
    style={{
      background: "white",
      border: "2px solid black",
      padding: "0.6rem 1rem",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      minWidth: "150px",
    }}
  >
    {label}
  </button>
);

export default SelectedTabButton;
