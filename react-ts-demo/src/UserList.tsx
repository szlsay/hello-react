import { FC } from "react";
import User from "./User";

const UserList: FC = () => {
  const users = [
    { id: "0", name: "st0" },
    { id: "1", name: "st1" },
    { id: "2", name: "st2" },
    { id: "3", name: "st3" },
  ];
  return (
    <>
      {users.map((user) => {
        const { id, name } = user;
        return <User key={id} id={id} name={name}></User>
        // return <div key={id}>{name}</div>;
      })}
    </>
  );
};

export default UserList;
