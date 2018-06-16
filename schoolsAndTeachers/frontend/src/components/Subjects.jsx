import React, { Component } from "react";
import axios from "axios";

class Subjects extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",
      subjects: [],
      teachers: []
    };
  }

  componentDidMount() {
    this.getSubjects();
  }

  getSubjects = () => {
    axios
      .get(`/teachers`)
      .then(res => {
        return res.data.data;
      })
      .then(allTeachers => {
        let allSubjects = allTeachers.map(item => item.subject);
        let subjList = [""];

        allSubjects.map(item => {
          if (!subjList.includes(item)) {
            subjList = [...subjList, item];
          }
        });

        this.setState({
          subjects: subjList
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  bySubject = () => {
    axios
      .post(`/teachers/subject`, {
        subject: this.state.selectValue
      })
      .then(res => {
        this.setState({
          teachers: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSelect = e => {
    this.setState(
      {
        selectValue: e.target.value
      },
      () => {
        this.bySubject();
      }
    );
  };

  render() {
    const { selectValue, subjects, teachers } = this.state;
    console.log(this.state);

    return (
      <div className="main-container">
        <h1>Teachers by Subject</h1>
        <select value={selectValue} onChange={this.handleSelect}>
          {subjects.map(subject => <option val={subject}>{subject}</option>)}
        </select>
        <ul>
          <li className="li-div-menu">
            <div>Name</div>
            <div>School</div>
          </li>
          {teachers.map(teacher => (
            <li className="li-div-container">
              <div>{teacher.teacher}</div>
              <div>{teacher.school}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Subjects;
