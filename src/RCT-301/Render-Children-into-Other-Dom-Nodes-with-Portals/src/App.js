import React, { Component } from 'react';
import logo from './logo.svg';
// import ReactDOM from 'react-dom';
import './App.css';

import StudentForm from './components/StudentForm';
import Modal from './components/Modal'

class App extends Component {
   handleClick = () => {
        console.log("Clicked!");
      }
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm />
        <Modal >
          <div className ="modal">
            This is modal
            <button>Close X</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
