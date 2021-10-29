import "./App.css";
import Toggle from "./components/toggle/Toggle";
import Word from "./components/word/Word";

function App() {
  return (
    <section className="main">
      <button className="my_list">My List</button>
      <Toggle />
      <Word />
    </section>
  );
}

export default App;
