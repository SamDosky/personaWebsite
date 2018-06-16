import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Teachers from "./components/Teachers";
import Schools from "./components/Schools";
import Subjects from "./components/Subjects";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
  }

  renderHome = () => <h1>Teachers and Schools</h1>;
  
  render() {
    return (
      <div>
        <div className="container">
          <nav>
            <div>
              <Link to="/teachers">All Teachers</Link>
            </div>
            <div>
              <Link to="/teachers/schools">Teachers By School</Link>
            </div>
            <div>
              <Link to="/teachers/subjects">Teachers By Subject</Link>
            </div>
            <div>
              <Link to="/teachers/look">look By Name</Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route exact path="/teachers" render={() => <Teachers />} />
          <Route path="/teachers/schools" render={() => <Schools />} />
          <Route path="/teachers/subjects" render={() => <Subjects />} />
          <Route path="/teachers/look" render={() => <Search />} />
        </Switch>
      </div>
    );
  }
}

export default App;
