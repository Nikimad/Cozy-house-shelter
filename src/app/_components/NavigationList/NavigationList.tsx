import styles from "./NavigationList.module.scss";

import NavigationLink from "../NavigationLink";

const NavigationList = () => (
  <ul className={styles.root}>
    <NavigationLink
      id="about"
      href="#about"
      activeClassName={styles.activeItem}
    >
      About the shelter
    </NavigationLink>
    <NavigationLink id="pets" href="/pets" activeClassName={styles.activeItem}>
      Our pets
    </NavigationLink>
    <NavigationLink id="help" href="#help" activeClassName={styles.activeItem}>
      Help the shelter
    </NavigationLink>
    <NavigationLink
      id="contacts"
      href="#contacts"
      activeClassName={styles.activeItem}
    >
      Contacts
    </NavigationLink>
  </ul>
);

export default NavigationList;
