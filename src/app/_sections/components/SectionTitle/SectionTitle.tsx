import type { FC, ReactNode } from "react";

import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <h3 className={styles.root}>{children}</h3>
);

export default SectionTitle;
