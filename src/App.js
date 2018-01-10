import React, { Component } from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';
import Ornament from './Ornament';


class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Skills />
        <Ornament />
        <Footer />
      </div>
    );
  }
}

export default App;
