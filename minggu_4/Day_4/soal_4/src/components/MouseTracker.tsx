import React, { useState } from "react";

interface MouseTrackerProps {
  render: (state: { x: number; y: number }) => React.ReactNode;
}

export const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        height: "200px",
        border: "2px dashed gray",
        marginBottom: "20px",
        textAlign: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
};
