import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import List from "./components/list/List";
import Toggle from "./components/toggle/Toggle";
import Word from "./components/word/Word";

function App() {
  return (
    <BrowserRouter>
      <section className="main">
        <Toggle />
        <Switch>
          <Route exact path="/">
            <Word />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
