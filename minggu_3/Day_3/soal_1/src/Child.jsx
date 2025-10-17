import React from "react";

function Child({ text }) {
    console.log("Child telah dirender");
    return (
    <div style={{ marginTop: 20, padding: 10, border: "1px solid gray" }}>
        <p>{text}</p>
    </div>
    )
}

export default React.memo(Child)