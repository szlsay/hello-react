import React from 'react';
import logo from './logo.svg';
import './App.css';
const list = (
  <div></div>
)
const temp = (
  <></>
)

function App() {
  const a = 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{a}</span>
        <p>
          Edit <code>src/App.tsx</code> and save to reload stapp.
        </p>
        <div>
          <label htmlFor="name">姓名</label>
          <input type="text" id='name' />
        </div>
        <div className='box'>
        </div>
        <div style={{width: '10px', height: "10px", backgroundColor: "green"}}></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
