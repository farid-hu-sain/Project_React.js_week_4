import Avatar from "./Avatar.jsx";
import Location from "./Location.jsx";


export default function Profile({ user }) {
    return(
        <>
        <Avatar user={user}/>
        <Location from={user.from}/>
        </>
    )
}