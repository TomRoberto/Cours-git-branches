import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "blue" }}>
        <p>Je suis une Balise P</p>
        <nav style={{ backgroundColor: "purple" }}>Je suis la Nav</nav>
      </main>
    </>
  );
}

export default App;
