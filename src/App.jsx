import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "blue" }}>
        <p>Je suis une Balise P</p>
        <div style={{ backgroundColor: "yellow" }}>Je suis la Nav</div>
        <span>Span Coucou</span>
        <span>Hello world</span>
      </main>
      <Footer />
    </>
  );
}

export default App;
