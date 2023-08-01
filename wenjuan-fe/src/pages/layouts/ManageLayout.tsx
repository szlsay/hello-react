import { FC } from "react";
import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
    </div>
    <div className={styles.right}>
      <Outlet />
    </div>
  </div>
  )
}

export default ManageLayout