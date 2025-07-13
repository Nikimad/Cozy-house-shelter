"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

type NavigationObserverType = {
  activeSection: string;
};

export const NavigationObserverContext = createContext<NavigationObserverType | null>(null);

export const NavigationObserverProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const observer = useRef<IntersectionObserver | null>(null);

  const handleObserve = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const sectionElements = document.querySelectorAll(
      "section[data-observe='true']"
    );
    observer.current = new IntersectionObserver(handleObserve, {
      threshold: 0.5,
    });

    sectionElements.forEach((el) => observer.current?.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.current?.unobserve(el));
      observer.current?.disconnect();
    };
  }, [handleObserve]);

  return (
    <NavigationObserverContext.Provider value={{ activeSection }}>
      {children}
    </NavigationObserverContext.Provider>
  );
};
