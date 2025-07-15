"use client";

import { useContext } from "react";
import { NavigationObserverContext } from "@/components/NavigationObserver";

const useNavigationObserver = () => {
  const ctx = useContext(NavigationObserverContext);

  return ctx?.activeSection || "";
};

export default useNavigationObserver;
