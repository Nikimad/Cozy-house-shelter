import type { FC, ReactNode } from "react";

import cn from "classnames";

import styles from "./ContentWrapper.module.scss";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => (
  <div className={cn(styles.root, className)}>{children}</div>
);

export default ContentWrapper;
