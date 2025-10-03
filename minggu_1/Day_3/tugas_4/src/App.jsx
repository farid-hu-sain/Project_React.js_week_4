import Commentt from "./comment.jsx";
import JokoIMG from "./assets/joko.jpg";

function App() {
  const user = { avatarUrl: JokoIMG, name: "Joko Widodo" };

  return (
    <div style={{ textAlign: "center", marginLeft: "700px"}}>
      <Commentt user={user} text="Cihuyyy" date="1 Oktober 2025" />
    </div>
  );
}

export default App;
