import Header from "./component/Header";
import Dashboard from "./feature/dashboard";
import Detail from "./feature/detail";
import Hero from "./feature/hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/hero" component={Hero} />
            <Route path="/hero/:id" component={Detail} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
