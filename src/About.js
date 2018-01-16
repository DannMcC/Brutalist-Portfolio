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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed eros a urna varius tempus at convallis ante. Cras blandit risus nec pharetra gravida. Praesent sodales, mi non volutpat imperdiet, ex lacus sodales nunc, at porttitor lectus turpis ut risus. Nam finibus nisl non dapibus convallis. Ut malesuada commodo sapien pretium bibendum. Aliquam ut ex eget risus molestie feugiat id quis purus. Nam consequat ligula at ullamcorper consectetur. Vivamus a lobortis urna, eu suscipit lacus. Quisque convallis dolor id nunc blandit, id convallis felis tincidunt. Vivamus volutpat augue at massa commodo posuere. Sed enim justo, egestas vel aliquet sed, tempus a odio.
          </div>
        </div>
      );
    }
  }

export default About;