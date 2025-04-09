import React from "react";
import TabButton from "./tab-button";
import SelectedTabButton from "./selected-tab-button";
import { IBodyPoint } from "./left-panel";

interface Props {
  bodyPoints: IBodyPoint[];
}

const TabSection = ({ bodyPoints }: Props) => {
  
  return (
    <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      <TabButton label="✓ Right Shoulder" active />
      <TabButton label="✓ Left Lower Back" active />
      <SelectedTabButton label="Right Knee" />
      <TabButton label="Left Elbow" disabled />
      <TabButton label="✓ Right Shoulder" active />
      <TabButton label="✓ Left Lower Back" active />
      <SelectedTabButton label="Right Knee" />
      <TabButton label="Left Elbow" disabled />
    </div>
  )
};

export default TabSection;
