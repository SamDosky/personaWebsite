import React, { Component } from "react";
import axios from "axios";

class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      teachers: []
    };
  }

  componentDidMount() {
    this.getTeachers();
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

  render() {
    const { teachers } = this.state;
    return (
      <div className="main-container">
        <h1>All Teachers</h1>
        <ul>
          <li className="li-div-menu">
            <div>Name</div>
            <div>Subject</div>
            <div>School</div>
          </li>
          {teachers.map(teacher => (
            <li key={teacher.id} className="li-div-container">
              {teacher.teacher}---------------------------------------------------------------------
              {teacher.subject}---------------------------------------------------------------------
              {teacher.school}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Teachers;
