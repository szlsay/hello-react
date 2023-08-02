import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
import { getQuestionService } from "../../../services/question";
const Edit: FC = () => {
  const { id = "" } = useParams();
  useTitle(`问卷编辑 - `);

  useEffect(() => {
    async function fn() {
      const data = await getQuestionService(id);
      console.log(data);
    }
    fn();
  }, []);
  return <>Edit {id}</>;
};

export default Edit;
