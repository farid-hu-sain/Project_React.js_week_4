import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserAction() {
  const { user, login, logout, updateProfile } = useContext(UserContext);

  const handleLogin = () => {
    login("HAY JAWA", "JAWAJAWAJAWA@gmail.com");
  };

  const handleUpdate = () => {
    updateProfile({ name: "halo" });
  };

  return (
    <div>
      {!user.isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <button onClick={handleUpdate}>Update Profil</button>
        </>
      )}
    </div>
  );
}
