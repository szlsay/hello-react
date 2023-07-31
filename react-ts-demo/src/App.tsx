import React from "react";

import "./App.css";
import "./List1.css";
function App() {
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
    <div className="App">
      <div>
        {questionList.map((item) => {
          return (
            <div key={item.id} className="list-item">
              <strong>{item.title}</strong>
              {item.isPublished ? <span>已发布</span> : <span>未发布</span>}
              <button
                onClick={() => {
                  edit(item.id);
                }}
              >
                编辑{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
