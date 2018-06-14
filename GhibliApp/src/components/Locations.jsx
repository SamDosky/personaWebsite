import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/locations").then(res => {
      this.setState({
        locations: res.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3>List of Locations </h3>
        {this.state.locations.map(location => (
          <li>
            {" "}
            {location.name}
            {" --------------"}
            {location.climate === "TODO" ? "Unknown" : location.climate}
            {" --------------"}
            {location.terrain === "TODO" ? "Unknown" : location.terrain}
            {" "}
          </li>
        ))}
      </div>
    );
  }
}

export default Locations;
