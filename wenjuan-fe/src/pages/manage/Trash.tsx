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
import ListSearch from "../../components/ListSearch";
import styles from "./common.module.scss";

const { Title } = Typography;
const { confirm } = Modal;
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
const Trash: FC = () => {
  useTitle("回收站");
  const [list, setList] = useState(rawList);
  // 记录选中的 id
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title",
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
    },
  ];

  // 可以把 JSX 片段定义为一个变量
  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedIds.length === 0}
            // onClick={recover}
          >
            恢复
          </Button>
          <Button
            danger
            disabled={selectedIds.length === 0}
            // onClick={del}
          >
            彻底删除
          </Button>
        </Space>
      </div>
      <div style={{ border: "1px solid #e8e8e8" }}>
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={(q) => q._id}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys) => {
              setSelectedIds(selectedRowKeys as string[]);
            },
          }}
        />
      </div>
    </>
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}></div>
    </>
  );
};

export default Trash;
