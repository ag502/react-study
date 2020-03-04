import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/courses">Coures</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
