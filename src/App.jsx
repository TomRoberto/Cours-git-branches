import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "blue" }}>
        <p>Je suis une Balise P</p>
        <div style={{ backgroundColor: "yellow" }}>Je suis la Nav</div>
        <span>Span</span>
      </main>
    </>
  );
}

export default App;
