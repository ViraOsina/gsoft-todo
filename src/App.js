import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

//components
import Home from "./components/Home";
import NewList from "./components/NewList";
import MyList from "./components/MyList";

function App() {

  return (
    <Router>
      <div className="navigation">
        <ul>
        <li><NavLink to="/" exact activeClassName="active__link">Home</NavLink></li>
        <li><NavLink to="/new-list" exact activeClassName="active__link">Create new todo list</NavLink></li>
        <li><NavLink to="/my-todo" exact activeClassName="active__link">My todo list</NavLink></li>
        </ul>
      </div>
      <main className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-list" component={NewList} />
          <Route exact path="/my-todo" component={MyList} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
