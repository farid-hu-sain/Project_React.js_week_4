import React from "react";
import Avatar from "./Avatar.jsx";
import ThemeDisplay from "./ThemeDisplay.jsx";

export default function Profie ({ user }) {
return (
    <>
    <Avatar user={user}/>
    <ThemeDisplay theme={user.theme}/>
    </>
    )
}