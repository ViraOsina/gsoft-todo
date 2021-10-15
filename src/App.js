import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

//components
import Home from "./components/Home";
import MyList from "./components/MyList";
import CreateNewTodo from "./components/CreateNewTodo";

//styled components
import { NavigationBar, NavigationLink, Main } from './components/StyledComponents';

function App() {

  return (
    <Router>
      <NavigationBar>
        <ul>
        <NavigationLink><NavLink to="/gsoft-todo/" exact activeClassName="active__link">Home</NavLink></NavigationLink>
        <NavigationLink><NavLink to="/todo-list" exact activeClassName="active__link">Todos</NavLink></NavigationLink>
        <NavigationLink><NavLink to="/create-new-todo" exact activeClassName="active__link">Create todo form</NavLink></NavigationLink>
        </ul>
      </NavigationBar>
      <Main>
        <Switch>
          <Route exact path="/gsoft-todo/" component={Home} />
          <Route exact path="/todo-list" component={MyList} />
          <Route exact path="/create-new-todo" component={CreateNewTodo} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
