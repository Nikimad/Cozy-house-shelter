"use client";

import type { FC, ReactNode } from "react";
import { NavigationObserverProvider } from "../NavigationObserver";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => (
  <NavigationObserverProvider>{children}</NavigationObserverProvider>
);

export default Providers;
