import { FC, useState } from "react";
import { produce } from "immer";
const Demo: FC = () => {
  const [list, setList] = useState(["x", "y"]);
  const add = () => {
    setList(
      produce((draft) => {
        draft.push("z");
      })
    );
  };
  const [user, setUser] = useState({ name: "st0", age: 10 });
  const addUser = () => {
    setUser(
      produce((draft) => {
        draft.name = "st1";
        draft.age = 21;
      })
    );
  };
  return (
    <>
      <p>{list}</p>
      <p>{JSON.stringify(list)}</p>
      <button onClick={add}>add item</button>

      {/* <p>{user}</p> */}
      <p>{JSON.stringify(user)}</p>
      <button onClick={addUser}>add user</button>
    </>
  );
};

export default Demo;
