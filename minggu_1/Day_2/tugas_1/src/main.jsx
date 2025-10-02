import React from "react";
import ReactDOM from "react-dom/client";
import ProfileCard from "./App.jsx"; 
import markPhoto from "./assets/mark.jpeg"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProfileCard
      name="Mark Zuckerberg"
      photo={markPhoto} 
      bio="Pendiri Facebook, pengusaha dan programmer asal Amerika Serikat. Lahir pada 14 Mei 1984."
      skills={["Pemrograman", "Visi Bisnis", "Leadership", "Networking"]}
    />
  </React.StrictMode>
);
