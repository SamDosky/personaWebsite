import React, { Component } from "react";
import axios from "axios";

class Schools extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",
      schools: [],
      teachers: []
    };
  }

  componentDidMount() {
    this.getSchools();
  }

  getSchools = () => {
    axios
      .get(`/teachers`)
      .then(res => {
        return res.data.data;
      })
      .then(allTeachers => {
        let schoolsList = allTeachers.map(item => item.school);
        let schList = [""];

        schoolsList.map(item => {
          if (!schList.includes(item)) {
            schList = [...schList, item];
          }
        });

        this.setState({
          schools: schList
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getTeachersBySchool = () => {
    if (this.state.selectValue === "null") {
      axios
        .get("/teachers/notEmployed")
        .then(res => {
          this.setState({
            teachers: res.data.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post(`/teachers/school`, {
          school: this.state.selectValue
        })
        .then(res => {
          this.setState({
            teachers: res.data.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleSelect = e => {
    this.setState(
      {
        selectValue: e.target.value
      },
      () => {
        this.getTeachersBySchool();
      }
    );
  };

  render() {
    const { selectValue, schools, teachers } = this.state;
    console.log(this.state);
    let schoolChoices = [...schools, "null"];

    return (
      <div className="main-container">
        <h1>Teachers by School</h1>
        <select value={selectValue} onChange={this.handleSelect}>
          {schoolChoices.map(school => <option val={school}>{school}</option>)}
        </select>
        <ul>
          <li className="li-div-menu">
            <div>Name</div>
            <div>Subject</div>
          </li>
          {teachers.map(teacher => (
            <li className="li-div-container">
              <div>{teacher.teacher}</div>
              <div>{teacher.subject}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Schools;
