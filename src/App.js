import "./App.css";
import Review from "./Review";

function App() {
  return (
    <main className="App">
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
