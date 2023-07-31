import React, {FC} from "react";
// import type { FC } from 'react'
// import "./List1.css";

import QuestionCard from './components/QuestionCard'
const List1: FC = () => {
    // 问卷列表数据
    const questionList = [
      { id: "q1", title: "问卷1", isPublished: false },
      { id: "q2", title: "问卷2", isPublished: true },
      { id: "q3", title: "问卷3", isPublished: false },
      { id: "q4", title: "问卷4", isPublished: true },
    ];
  
    function edit(value: string) {
      console.log(value);
    }
  return (
    <div>
    {questionList.map((question) => {
        const { id, title, isPublished } = question
      return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
      // return (
      //   <div key={item.id} className="list-item">
      //     <strong>{item.title}</strong>
      //     {item.isPublished ? <span>已发布</span> : <span>未发布</span>}
      //     <button
      //       onClick={() => {
      //         edit(item.id);
      //       }}
      //     >
      //       编辑{" "}
      //     </button>
      //   </div>
      // );
    })}
  </div>
  )
}

export default List1