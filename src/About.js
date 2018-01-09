import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
      return (
        <div className="about">
          <h1>
            Dan McCune
          </h1>
          <h2>
            Front-End Developer
          </h2>
          <div className="about-discription">
          Dan McCune is a St. Petersburg local and a Software Developer in the Tampa Bay Area. Selected projects are available to be viewed on <a href="https://github.com/DannMcC">GitHub</a>.
          </div>
        </div>
      );
    }
  }

export default About;