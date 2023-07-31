import { FC } from "react";

type PropsType = {
  id: string;
  name: string;
};

const User: FC<PropsType> = (props) => {
  const { id, name } = props;
  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default User;
