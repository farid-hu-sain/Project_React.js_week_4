import React, { useState } from "react";

interface ToggleProps {
  render: (state: { on: boolean; toggle: () => void }) => React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({ render }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  return <>{render({ on, toggle })}</>;
};
