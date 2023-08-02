import { FC, useEffect } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData();
  return <>{questionData}</>;
};

export default Stat;
