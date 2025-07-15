import type { FC } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";

import Navigation from "../Navigation";

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Header: FC<HeaderProps> = ({ isOpen, onToggle }) => (
  <header className={cn(styles.root)}>
    <div className={cn("container", styles.content)}>
      <div className={styles.brand}>
        <h1 className={styles.brand__title}>Cozy House</h1>
        <h2 className={styles.brand__subtitle}>Shelter for pets in Boston</h2>
      </div>
      <div className={styles.sidebar}>
        <Navigation id="main-navigation" isOpen={isOpen} onClose={onToggle} />
        <button
          className={cn(styles.sidebar__button, {
            [styles.sidebar__button_open]: isOpen,
          })}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={onToggle}
          tabIndex={0}
        >
          <span className={styles.sidebar__button__line} aria-hidden="true" />
          <span className={styles.sidebar__button__line} aria-hidden="true" />
          <span className={styles.sidebar__button__line} aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
