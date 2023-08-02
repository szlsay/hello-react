import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Typography, Empty, Spin } from "antd";
import ListSearch from "../../components/ListSearch";
import styles from "./common.module.scss";
import QuestionCard from "../../components/QuestionCard";

const { Title } = Typography;
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
const Star: FC = () => {
  useTitle("星标问卷");
  const [list, setList] = useState([]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>

        <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}></div>
    </>
  );
};

export default Star;
