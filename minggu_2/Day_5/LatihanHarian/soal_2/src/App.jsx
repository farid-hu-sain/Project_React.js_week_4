import Toolbar from "./components/Toolbar.jsx"

export default function App() {
  const user = { name : "Salsa", from : "Jakarta" }
  return (
    <Toolbar user={user}/>
  )
}