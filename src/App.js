import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './template/Header';
import SideBar from './template/SideBar';
import Content from './template/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default App;
