import type { FC, ReactNode } from "react";

import styles from "./FooterColumn.module.scss";

interface ColumnProps {
  title: string;
  children: ReactNode;
}

const FooterColumn: FC<ColumnProps> = ({ title, children }) => (
  <div className={styles.root}>
    <h3 className={styles.__title}>{title}</h3>
    {children}
  </div>
);

export default FooterColumn;
