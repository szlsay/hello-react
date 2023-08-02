
import { FC, useEffect } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData();
  return <>{JSON.stringify(questionData)}</>;
};

export default Edit;
