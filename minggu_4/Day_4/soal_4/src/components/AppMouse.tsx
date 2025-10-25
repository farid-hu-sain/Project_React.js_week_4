import React from "react";
import { MouseTracker } from "./MouseTracker";

export default function AppMouse() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p>
        Posisi Kursor saat ini: <strong>{x}</strong>, <strong>{y}</strong>
        </p>
      )}
    />
  );
}
