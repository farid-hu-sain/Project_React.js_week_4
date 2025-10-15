import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(3);

  const addNotification = () => setCount((prev) => prev + 1);
  const clearNotifications = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, addNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
