import React from "react";

import "./App.css";
// import List1 from "./List1";
// import List2 from "./List2";
// import Immer1 from "./Immer1";
// import UseRefDemo from "./UseRefDemo";
// import UseMemoDemo from "./UseMemoDemo";
// import UseCallbackDemo from "./UseCallbackDemo";
// import useTitle from "./hooks/useTitle";
// import useMouse from "./hooks/useMouse";
// import useGetInfo from "./hooks/useGetInfo";

// import ClosureTrap from "./ClosureTrap";
// import { useTitle } from "ahooks";

import StyledComponentsDemo from "./StyledComponentsDemo";
function App() {
  // useTitle("App page")
  // const {x, y} = useMouse()
  // const {loading, info} = useGetInfo();
  // useTitle("测试");


  return (
    <div className="App">
      {/* <List1></List1> */}
      {/* <List2></List2> */}
      {/* <Immer1></Immer1> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}
      {/* <p>{x} {y}</p> */}
      {/* <p>{loading ? 'loading' : info}</p> */}
      {/* <ClosureTrap></ClosureTrap> */}
      <StyledComponentsDemo></StyledComponentsDemo>
    </div>
  );
}

export default App;
