import type { FC, ReactNode } from "react";

import cn from "classnames";

import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ id, className, children }) => (
  <section className={cn(styles.root, className)} id={id} data-observe="true">
    {children}
  </section>
);

export default Section;
