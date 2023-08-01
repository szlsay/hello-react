import { FC, useState } from "react";

const State01: FC = () => {
  const [count, setCount] = useState(0)
  const add = ()=> {
    // 异步更新
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // console.log(count)

    setCount(count => count + 1) // 使用函数，state 更新不会被合并
    setCount(count => count + 1)
    setCount(count => count + 1)
    console.log(count)
  }
  return (
    <>
    <button onClick={add}>add {count}</button>
    </>
  )
}

export default State01