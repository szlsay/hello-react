import { FC, useState } from "react";

const State01: FC = () => {
  const [count, setCount] = useState(0)
  const add = ()=> {
    setCount(count => count + 1)
  }
  return (
    <>
    <button onClick={add}>add {count}</button>
    </>
  )
}

export default State01