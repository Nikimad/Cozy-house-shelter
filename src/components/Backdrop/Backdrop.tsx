"use client";

import { FC, ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Backdrop.module.scss";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Backdrop: FC<BackdropProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.root}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
            {children}
        </>
      )}
    </AnimatePresence>
  );
};

export default Backdrop;
