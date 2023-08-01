import React, { FC, useState } from "react";
// import type { FC } from 'react'
// import "./List1.css";
import { produce } from "immer";
import QuestionCard from "./components/QuestionCard";
const List2: FC = () => {
  console.log("加载List2")
  // // 问卷列表数据
  // const questionList = [
  //   { id: "q1", title: "问卷1", isPublished: false },
  //   { id: "q2", title: "问卷2", isPublished: true },
  //   { id: "q3", title: "问卷3", isPublished: false },
  //   { id: "q4", title: "问卷4", isPublished: true },
  // ];

  const [questionList, setQuestionList] = useState([
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
  ]);

  const deleteQuestion = (id: string) => {
    // setQuestionList.filter((q) => {
    //   return q.id !== id;
    // });
    // setQuestionList(questionList.filter((q) => q.id !== id));
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((q) => q.id === id);
        draft.splice(index, 1);
      })
    );
  };

  const addQuestion = () => {
    const r = Math.random().toString().slice(-3);
    // setQuestionList([
    //   ...questionList,
    //   { id: "q" + r, title: "问卷" + r, isPublished: false },
    // ]);
    setQuestionList(
      produce((draft) => {
        draft.push({ id: "q" + r, title: "好的问卷" + r, isPublished: false });
      })
    );
  };

  const publishQuestion = (id: string) => {
    // setQuestionList(
    //   questionList.map((q) => {
    //     if (q.id === id) {
    //       q.isPublished = true;
    //     }
    //     return q;
    //   })
    // );
    setQuestionList(
      produce((draft) => {
        const question = draft.find((q) => q.id === id);
        if (question) {
          question.isPublished = true;
        }
      })
    );
  };
  return (
    <div>
      {questionList.map((question) => {
        const { id, title, isPublished } = question;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            deleteQuestion={deleteQuestion}
            publishQuestion={publishQuestion}
          />
        );
      })}
      <button onClick={addQuestion}>add Question</button>
    </div>
  );
};

export default List2;
