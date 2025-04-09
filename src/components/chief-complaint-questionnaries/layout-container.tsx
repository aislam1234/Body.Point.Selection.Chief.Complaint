import React from "react";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      background: "#f2f4f5",
      height: "85vh",
      fontFamily: "sans-serif",
    }}
  >
    {children}
  </div>
);

export default LayoutContainer;
