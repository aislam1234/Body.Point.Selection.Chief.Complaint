import React from "react";

interface Props {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const OptionButton = ({ label, selected, onClick }: Props) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.8rem",
      borderRadius: "6px",
      border: "2px solid #f5f5f5",
      background: selected ? "#1d3f77" : "white",
      color: selected ? "white" : "black",
      fontWeight: 500,
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    {label}
  </button>
);

export default OptionButton;
