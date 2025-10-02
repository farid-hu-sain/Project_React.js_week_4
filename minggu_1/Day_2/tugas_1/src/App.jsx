import React from "react";



function ProfileCard(props) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const listStyle = {
    textAlign: "left",
    paddingLeft: "20px",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <img src={props.photo} alt={props.name} style={imgStyle} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <h4>Keahlian:</h4>
      <ul style={listStyle}>
        {props.skills.map((skill, index) => (
          <li key={index}>✅ {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
