import { FC, useRef } from "react";

// const Demo: FC = () => {
//   const nameRef = useRef("st");
//   const changeName = () => {
//     nameRef.current = "st0"; // 不是 DOM 节点，普通的 JS 变量
//     console.log(nameRef.current); // 修改 ref 值，不会触发 rerender （ state 修改会触发组件 rerender ）
//   };
//   return (
//     <>
//       <p>{nameRef.current}</p>
//       <button onClick={changeName}>change name</button>
//     </>
//   );
// };

// export default Demo;

const Demo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  function selectInput() {
    const inputElem = inputRef.current
    if (inputElem) inputElem.select() // DOM 节点，DOM 操作 API
  }

  return (
    <div>
      <input ref={inputRef} defaultValue="hello world" />
      <button onClick={selectInput}>选中 input</button>
    </div>
  )
}

export default Demo;