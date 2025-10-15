import { UserProvider, useUser } from "./context/UserContext.jsx";
import {
  NotificationProvider,
  useNotification,
} from "./context/NotificationContext.jsx";

function Header() {
  const { user, login, logout } = useUser();
  const { count, addNotification, clearNotifications } = useNotification();

  return (
    <header
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h2>
        👤 Pengguna:{" "}
        {user.loggedIn ? user.name : <span style={{ color: "gray" }}>Tamu</span>}
      </h2>
      <p>🔔 Notifikasi: {count}</p>

      <div style={{ marginTop: "10px" }}>
        {user.loggedIn ? (
          <button onClick={logout} style={{ marginRight: "10px" }}>
            Logout
          </button>
        ) : (
          <button onClick={() => login("Tamu Baru")} style={{ marginRight: "10px" }}>
            Login
          </button>
        )}
        <button onClick={addNotification} style={{ marginRight: "10px" }}>
          Tambah Notif
        </button>
        <button onClick={clearNotifications}>Hapus Notif</button>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <Header />
      </NotificationProvider>
    </UserProvider>
  );
}
