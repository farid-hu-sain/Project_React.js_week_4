import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export default  function UserInfo() {
    const { user } = useContext(UserContext)

    if (!user.isLoggedIn) {
        return <p>belum ada yang login</p>
    }

    return(
        <>
            <h2>Informasi Pengguna</h2>
            <p>nama: {user.name}</p>
            <p>email: {user.email}</p>
        </>
    )
}