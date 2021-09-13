import React from 'react';
import Counter from "./components/Counter"
import {Task} from "./components/Task"
import './App.css';

function App() {
  return (
    <div
      className="myContainer">
      <div
        className="main">
        <Counter/>
        <Task/>
      </div>
    </div>
  );
}

export default App;

