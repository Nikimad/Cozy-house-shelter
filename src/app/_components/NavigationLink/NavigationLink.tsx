import type { FC, ReactNode } from "react";

import cn from "classnames";

import Link from "next/link";

import styles from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  isActive: boolean;
  href: string;
  activeClassName: string;
  children: ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  isActive,
  href,
  activeClassName,
  children,
}) => (
  <li
    className={cn(styles.root, {
      [activeClassName]: isActive,
      [styles.root_active]: isActive,
    })}
  >
    <Link href={href}>{children}</Link>
  </li>
);

export default NavigationLink;
