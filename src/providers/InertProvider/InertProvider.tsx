import type { PropsWithChildren } from "react";

import { useState, useRef, useCallback } from "react";

import useScroll from "@/hooks/useScroll";

import InertContext from "@/contexts/InertContext";

const InertProvider = ({ children }: PropsWithChildren) => {
  const rootRef = useRef(null);
  const [isInert, setIsInert] = useState(false);
  const { blockScroll, unblockScroll } = useScroll(rootRef);

  const setInert = useCallback(() => {
    if (!isInert) {
      blockScroll();
      setIsInert(true);
    }
  }, [isInert, blockScroll]);

  const removeInert = useCallback(() => {
    if (isInert) {
      unblockScroll();
      setIsInert(false);
    }
  }, [isInert, unblockScroll]);

  return (
    <InertContext.Provider value={{ setInert, removeInert }}>
      <div id="content-root" ref={rootRef} inert={isInert || undefined}>
        {children}
      </div>
      <div id="popup-root" />
    </InertContext.Provider>
  );
};

export default InertProvider;
