import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="App-header text-center">
        <h1>Dictionary 📖</h1>
      </header>

      <main>
        <Dictionary />
      </main>
   
      <footer>
        Coded by Alex Fuentes,{" "}
        <a href="https://github.com/alexpfuentes/react-dictionary">open-source</a>
      </footer>

      </div>
    </div>
  );
}

export default App;
