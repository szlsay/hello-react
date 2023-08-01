import { FC, useState } from "react";

const State02: FC = () => {
  const [list, setList] = useState(['x', 'y'])
  const add = () => {
    setList([...list, 'z'])
    // setList(list.concat('z')) 
    // setList(list.push('z')) // 报错
  }
  const [user, setUser] = useState({name: 'st0', age: 10})
  const addUser = () => {
    setUser({
      ...user,
      age: 11
    })
  }
  return (
    <>
      <p>{list}</p>
      <p>{JSON.stringify(list)}</p>
      <button onClick={add}>add item</button>

      {/* <p>{user}</p> */}
      <p>{JSON.stringify(user)}</p>
      <button onClick={addUser}>add user</button>
    </>
  )
}

export default State02