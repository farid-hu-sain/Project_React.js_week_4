import React from "react";

// 1. Komponen untuk Greeting dengan if statement
function UserGreeting(props) {
    return <h1>Selamat Datang Kembali</h1>;
}

function GuestGreeting(props) {
    return <h1>Silahkan masuk</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

// Komponen untuk mailbox (contoh operator &&)
function mailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && (
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            )}
        </div>
    )
}




