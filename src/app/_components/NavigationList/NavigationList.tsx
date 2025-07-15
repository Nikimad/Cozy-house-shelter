import type { FC } from "react";

import NavigationLink from "../NavigationLink";

import styles from "./NavigationList.module.scss";

interface NavigationListProps {
  onLinkClick: () => void;
}

const NavigationList: FC<NavigationListProps> = ({ onLinkClick }) => (
  <ul className={styles.root}>
    <NavigationLink
      id="about"
      href="#about"
      activeClassName={styles.activeItem}
      onClick={onLinkClick}
    >
      About the shelter
    </NavigationLink>
    <NavigationLink
      id="pets"
      href="/pets"
      activeClassName={styles.activeItem}
      onClick={onLinkClick}
    >
      Our pets
    </NavigationLink>
    <NavigationLink
      id="help"
      href="#help"
      activeClassName={styles.activeItem}
      onClick={onLinkClick}
    >
      Help the shelter
    </NavigationLink>
    <NavigationLink
      id="contacts"
      href="#contacts"
      activeClassName={styles.activeItem}
      onClick={onLinkClick}
    >
      Contacts
    </NavigationLink>
  </ul>
);

export default NavigationList;
