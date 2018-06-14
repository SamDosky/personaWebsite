import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import People from './components/People.jsx'
import Locations from './components/Locations.jsx'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  renderHome = () => (
    <Home  />
  )

  renderMovies = () => (
    <Movies  />
  )

  renderPeople = () => (
    <People  />
  )

  renderLocation = () => (
    <Locations  />
  )

  render() {

    return (
      <div class = 'links'>
        <nav>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/movies'>Movies</Link></div>
          <div><Link to='/people'>People </Link></div>
          <div><Link to='/locations'>Location</Link></div>
          <img src = 'https://www.dhresource.com/200x200/f2/albu/g5/M00/57/9D/rBVaJFjIqhKAOpiXAAFqkzVQh_g133.jpg' height = '100' width = '100'  />

        </nav>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/movies' render={this.renderMovies} />
          <Route exact path='/people' render={this.renderPeople} />
          <Route exact path='/locations' render={this.renderLocation} />

        </Switch>
      </div>
    )
  }
}

export default App
