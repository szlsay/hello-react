import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
const MainLayout: FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}> MainLayout</div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.main}>
        <div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default MainLayout;
