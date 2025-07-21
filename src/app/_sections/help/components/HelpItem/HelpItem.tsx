import type { FC } from "react";

import Image from "next/image";

import styles from "./HelpItem.module.scss";

interface ItemProps {
    title: string;
    src: string;
    alt: string;
}

const HelpItem: FC<ItemProps> = ({ title, src, alt }) => (
  <li className={styles.root}>
    <Image width={60} height={60} src={src} alt={alt} />
    <h4 className={styles.__title}>{title}</h4>
  </li>
);

export default HelpItem;
