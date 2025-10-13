import React from "react";
import { useState } from "react";
import InputText from "./components/InputText.jsx";
import DisplayText from "./components/DisplayText.jsx";

export default function ParentComponent() {
    const [text, setText] = useState("")
    
    return (
    <>
        <h2>Mencoba Berbagi State </h2>
        <InputText text= {text} onTextChange={setText}/>
        <DisplayText text={text}/>
    </>

    )
}