import React, { useMemo } from "react";

export default function MediumComponent() {
  console.log("Medium Component Render");

  const numbers = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 50000; i++) total += Math.sqrt(i);
    return total;
  }, []);

  return <p>Komponen Menengah — hasil kalkulasi: {numbers.toFixed(2)}</p>;
}
