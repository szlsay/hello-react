import { FC } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from 'ahooks'
const Edit: FC = () => {
  const { id } = useParams();
  useTitle(`问卷编辑 - `)
  return <>Edit {id}</>;
};

export default Edit;
