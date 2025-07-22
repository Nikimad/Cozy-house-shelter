import type { RefObject } from "react";

import { useCallback, useContext, useEffect, useState, useRef } from "react";

import InertContext from "@/contexts/InertContext";

const usePortal = (openerRef?: RefObject<HTMLElement | null>) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const isPortalClosed = useRef(true);

  const { setInert, removeInert } = useContext(InertContext);

  const openPortal = useCallback(() => {
    if (!isPortalOpen) {
      setIsPortalOpen(true);
      isPortalClosed.current = false;
      setInert();
    }
  }, [isPortalOpen, setInert]);

  const closePortal = useCallback(() => {
    if (isPortalOpen) {
      setIsPortalOpen(false);
      isPortalClosed.current = true;
      removeInert();
    }
  }, [isPortalOpen, removeInert]);

  useEffect(() => {
    if (isPortalClosed.current && openerRef?.current) {
      openerRef.current?.focus({ preventScroll: true });
    }
  }, [openerRef, isPortalOpen]);

  useEffect(() => {
    return () => {
      if (isPortalOpen && !isPortalClosed.current) {
        closePortal();
      }
    };
  }, [isPortalOpen, closePortal]);

  return { isPortalOpen, openPortal, closePortal };
};

export default usePortal;
