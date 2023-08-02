import { FC } from "react";
import { useParams } from "react-router-dom";

const Edit: FC = () => {
  const { id } = useParams();
  return <>Edit {id}</>;
};

export default Edit;
