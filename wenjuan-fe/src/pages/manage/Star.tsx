import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Typography, Empty, Spin } from "antd";

import styles from "./common.module.scss";

const { Title } = Typography;

const Star: FC = () => {
  useTitle("星标问卷");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.content}></div>
      <div className={styles.footer}></div>
    </>
  );
};

export default Star;
