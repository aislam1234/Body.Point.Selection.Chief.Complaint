import React from "react";

interface Props {
  label: string;
  active?: boolean;
  disabled?: boolean;
}

const TabButton = ({ label, active = false, disabled = false }: Props) => (
  <button
    disabled={disabled}
    style={{
      background: active ? "#1d3f77" : "#e0e0e0",
      color: active ? "white" : "black",
      border: "none",
      padding: "0.6rem 1rem",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.3 : 1,
      minWidth: "150px",
    }}
  >
    {label}
  </button>
);

export default TabButton;
