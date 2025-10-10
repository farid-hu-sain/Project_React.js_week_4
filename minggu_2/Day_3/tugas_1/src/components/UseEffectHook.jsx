import { useEffect } from "react";

export default function UseEffectHook() {
  useEffect(() => {
    console.log("KOMPONEN AKAN DIRENDER");
  }, []);

  return (
    <>
      <p>Coba kau cek Console</p>
    </>
  );
}
