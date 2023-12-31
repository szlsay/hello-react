import { FC, useEffect, useRef, useState } from "react";

const Demo: FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const add = () => {
    setCount(count + 1);
  };

  function alertFn() {
    setTimeout(() => {
      // alert(count) // count 值类型
      // alert(countRef.current); // ref 引用类型
      console.log(count, countRef.current)
    }, 3000);
  }

  return (
    <>
      <p>闭包陷阱</p>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alert</button>
      </div>
    </>
  );
};

export default Demo;
