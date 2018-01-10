import React, { Component } from 'react';
import './Ornament.css';

class Ornament extends Component {
    render() {
      return (
        <div className="ornaments">
            <marquee className="ornament-1">test</marquee>
            <marquee className="ornament-2">test</marquee>
            <marquee className="ornament-3">test</marquee>
        </div>
      );
    }
  }

export default Ornament;