import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "blue" }}>
        <p>Je suis une Balise P</p>
        <div style={{ backgroundColor: "yellow" }}>
          Div ajoutée sur tom-branch
        </div>
      </main>
    </>
  );
}

export default App;
