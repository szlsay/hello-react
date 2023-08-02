import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import {
  Typography,
  Empty,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  Spin,
  message,
} from "antd";
import styles from "./common.module.scss";

const { Title } = Typography;
const { confirm } = Modal;

const Trash: FC = () => {
  useTitle("回收站");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.content}></div>
      <div className={styles.footer}></div>
    </>
  );
};

export default Trash;
