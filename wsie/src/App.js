import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wsie-container">
        <h1 className='header'>Where Shouldn't I Eat?</h1>
        <div className='random-restaurant'>Random Restaurant</div>
        <div className='random-comment'>Random Comment</div>
        <div className='front-page-buttons'>
          <button className='button-another'>Give Me Another</button>
          <button className='button-near'>Near Me</button>
        </div>
      </div>
    );
  }
}

export default App;
