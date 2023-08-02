import { FC, useEffect } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Stat: FC = () => {
  const { loading, data, error } = useLoadQuestionData();
  return <>{JSON.stringify(data)}</>;
};

export default Stat;
