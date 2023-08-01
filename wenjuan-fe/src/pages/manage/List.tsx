import { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import styles from "./List.module.scss";

const rawList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "2023年8月1日16:40:19",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "2023年8月1日16:40:19",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "2023年8月1日16:40:19",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStar: true,
    answerCount: 50,
    createdAt: "2013年8月1日16:40:19",
  },
];

const List: FC = () => {
  const [list, setList] = useState(rawList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>左边</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        列表
        {list.map((item) => {
          // return <div>{JSON.stringify(item)}</div>;
          return <QuestionCard key={item._id} {...item}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>底部</div>
      {/* <QuestionCard></QuestionCard> */}
    </>
  );
};

export default List;
