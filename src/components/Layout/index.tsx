import { Layout } from "antd";
import React, {FC} from "react";
import styles from "./styles.module.scss";

const { Header, Content } = Layout;

interface ILayoutWrapper {
  title: string;
  children: React.ReactNode
};

const LayoutWrapper: FC<ILayoutWrapper> = ({ title, children }) => (
  <Layout>
    <Header className={styles.heading}>{title}</Header>
    <Content>{children}</Content>
  </Layout>
);

export default LayoutWrapper;
