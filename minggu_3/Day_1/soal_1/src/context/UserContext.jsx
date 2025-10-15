import { createContext, useState } from "react";
// createContext → membuat wadah (context) tempat kita menyimpan data global.
// useState → menyimpan dan mengubah data di dalam komponen.

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const login = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: "", email: "", isLoggedIn: false });
  };

  const updateProfile = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}
