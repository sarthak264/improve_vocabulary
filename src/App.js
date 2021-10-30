import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import List from "./components/list/List";
import Toggle from "./components/toggle/Toggle";
import Word from "./components/word/Word";
import { FavProvider } from "./context/FavContext";

function App() {
  return (
    <BrowserRouter>
      <section className="main">
        <FavProvider>
          <Toggle />
          <Switch>
            <Route exact path="/">
              <Word />
            </Route>
            <Route path="/list">
              <List />
            </Route>
          </Switch>
        </FavProvider>
      </section>
    </BrowserRouter>
  );
}

export default App;
