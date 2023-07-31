import React from 'react';
import logo from './logo.svg';
import './App.css';
const list = (
  <div></div>
)
const temp = (
  <></>
)

function clickFun() {
  console.log('clickFun')
}

function clickGreenFun(value: string) {
  console.log('clickGreenFun', value)
}

function clickBlueFun(event: React.MouseEvent<HTMLParagraphElement>, value: string) {
  event.preventDefault()
  console.log('clickBlueFun', event, value)
}
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
        <div className='box' onClick={clickFun}>
        </div>
        <div style={{width: '100px', height: "100px", backgroundColor: "green"}} onClick={() => clickGreenFun('green')}></div>
        <div style={{width: '100px', height: "100px", backgroundColor: "blue"}} onClick={(e: React.MouseEvent<HTMLParagraphElement>) => clickBlueFun(e, 'green')}></div>
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
