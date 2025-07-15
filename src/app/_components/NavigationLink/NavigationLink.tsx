import type { FC, ReactNode } from "react";

import cn from "classnames";

import Link from "next/link";

import styles from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  isActive: boolean;
  href: string;
  activeClassName: string;
  children: ReactNode;
  onClick: () => void;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  isActive,
  href,
  activeClassName,
  children,
  onClick,
}) => (
  <li
    className={cn(styles.root, {
      [activeClassName]: isActive,
      [styles.root_active]: isActive,
    })}
  >
    <Link href={href} onClick={onClick}>{children}</Link>
  </li>
);

export default NavigationLink;
