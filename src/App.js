import React, { Component } from 'react';
import './App.css'
import AwardList from './AwardList'

class App extends Component {
  render() {
    return(
      <div className="AppWrap">
        <h1>High5</h1>
        <h3>photoslider</h3>
        <AwardList />
        <h3>footer</h3>
      </div>
    )
  }
}

export default App;
