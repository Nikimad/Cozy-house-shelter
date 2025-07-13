"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/breakpoints";

import Backdrop from "@/components/Backdrop";
import NavigationList from "../NavigationList";

import styles from "./Navigation.module.scss";

interface NavigationProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: FC<NavigationProps> = ({ id, isOpen, onClose }) => {
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.tablet}px)`);

  if (isTablet) {
    return (
      <nav id={id} className={styles.root}>
        <NavigationList />
      </nav>
    );
  }

  return (
    <Backdrop isOpen={isOpen} onClose={onClose}>
      <motion.nav
        id={id}
        initial={{ x: "100%" }}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={styles.root}
      >
        <NavigationList />
      </motion.nav>
    </Backdrop>
  );
};

export default Navigation;
