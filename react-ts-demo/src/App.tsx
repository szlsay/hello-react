import React from "react";

import "./App.css";
import List1 from "./List1";
import List2 from "./List2";
import Immer1 from "./Immer1";
import UseRefDemo from "./UseRefDemo";
import UseMemoDemo from "./UseMemoDemo";
import UseCallbackDemo from "./UseCallbackDemo";
import useTitle from "./hooks/useTitle";
function App() {
  useTitle("App page")
  return (
    <div className="App">
      {/* <List1></List1> */}
      {/* <List2></List2> */}
      {/* <Immer1></Immer1> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}
    </div>
  );
}

export default App;
