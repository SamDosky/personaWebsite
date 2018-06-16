import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      teachers: [],
      search: ""
    };
  }

  getTeachers = () => {
    axios
      .get(`/teachers`)
      .then(res => {
        this.setState({
          teachers: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    this.getTeachers();
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const teacherResults = this.state.teachers.filter(item =>
      item.teacher.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const subjectResults = this.state.teachers.filter(item =>
      item.subject.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const schoolResults = this.state.teachers.filter(item =>
      item.school.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const allResults = [...teacherResults, ...subjectResults, ...schoolResults];

    return (
      <div className="main-container">
        <h1>Search Teachers</h1>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleInput}
        />{" "}
        <button onClick={this.handleSubmit}> search by name </button>
        <ul>
          <li className="li-div-menu">
            <div>Name</div>
            <div>Subject</div>
            <div>School</div>
          </li>
          {this.state.search
            ? allResults.map(teacher => (
                <li className="li-div-container">
                  <div>{teacher.teacher}</div>
                  <div>{teacher.subject}</div>
                  <div>{teacher.school}</div>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default Search;
