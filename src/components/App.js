import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div styleName="logo">
          <Logo />
        </div>
        <h1 styleName="heading">Sexy Dribbble</h1>
      </div>
    );
  }
}

export default App;
