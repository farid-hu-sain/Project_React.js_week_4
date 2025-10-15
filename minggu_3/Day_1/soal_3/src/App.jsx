import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";
import { NotificationProvider, useNotification } from "./context/NotificationContext.jsx";

function Header() {
  const { language, toggleLanguage } = useLanguage();
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
      <h2>🌍 Bahasa: {language === "id" ? "Indonesia" : "English"}</h2>
      <p>🔔 Notifikasi: {count}</p>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleLanguage} style={{ marginRight: "10px" }}>
          Ganti Bahasa
        </button>
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
    <LanguageProvider>
      <NotificationProvider>
        <Header />
      </NotificationProvider>
    </LanguageProvider>
  );
}
