import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'One',
          category: 'Category One'
        },
        {
          title: 'Two',
          category: 'Category Two'
        },
        {
          title: 'Three',
          category: 'Category Three'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        myApp
        <Projects projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
