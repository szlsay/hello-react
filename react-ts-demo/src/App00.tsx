import React from "react";
import logo from "./logo.svg";
import "./App.css";
const list = <div></div>;
const temp = <></>;

function clickFun() {
  console.log("clickFun");
}

function clickGreenFun(value: string) {
  console.log("clickGreenFun", value);
}

function clickBlueFun(
  event: React.MouseEvent<HTMLParagraphElement>,
  value: string
) {
  event.preventDefault();
  console.log("clickBlueFun", event, value);
}
function App() {
  const a = 0;
  const flag = true;

  function Hello() {
    if (flag) return <p>你好</p>;
    else return <p>再见</p>;
  }

  const list = [
    { username: "zhangsan", name: "张三" },
    { username: "lisi", name: "李四" },
    { username: "shuangyue", name: "双越" },
  ];

  const ul = (
    <ul>
      {list.map((user) => {
        return <li key={user.username}>{user.name}</li>;
      })}
    </ul>
  );

  return (
    <div className="App">
      <header className="App-header">
        {ul}
        <ul>
          {list.map((user) => {
            return <li key={user.username}>{user.name}</li>;
          })}
        </ul>
        {Hello()}
        <Hello></Hello>
        {flag && <div>hello</div>}
        {flag ? <div>a</div> : <div>b</div>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>{logo}</p>
        <span>{a}</span>
        {/* 注释 */}
        <p>{true ? "a" : "b"}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload stapp.
        </p>
        <div>
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" />
        </div>
        <div className="box" onClick={clickFun}></div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "green" }}
          onClick={() => clickGreenFun("green")}
        ></div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
          onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
            clickBlueFun(e, "green")
          }
        ></div>
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
