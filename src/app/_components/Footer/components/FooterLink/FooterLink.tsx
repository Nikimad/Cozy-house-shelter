import type { FC, ReactNode } from "react";

import styles from "./FooterLink.module.scss";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink: FC<LinkProps> = ({ href, children }) => (
  <a href={href} className={styles.root}>{children}</a>
);

export default FooterLink;
