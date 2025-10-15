import { UserProvider } from "./context/UserContext.jsx";
import UserInfo from "./components/UserInfo.jsx";
import UserActions from "./components/UserAction.jsx";

export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: 20 }}>
        <h1>Manajemen User dengan Context API</h1>
        <UserActions />
        <hr />
        <UserInfo />
      </div>
    </UserProvider>
  );
}
