"use client";

import type { FC, ReactNode } from "react";

import useNavigationObserver from "@/hooks/useNavigationObserver";

import NavigationLink from "./NavigationLink";

interface NavigationLinkContainerProps {
  id: string;
  href: string;
  activeClassName: string;
  children: ReactNode;
  onClick: () => void;
}

const NavigationLinkContainer: FC<NavigationLinkContainerProps> = ({
  id,
  href,
  activeClassName,
  children,
  onClick,
}) => {
  const isActive = useNavigationObserver() === id;

  return (
    <NavigationLink
      isActive={isActive}
      href={href}
      activeClassName={activeClassName}
      onClick={onClick}
    >
      {children}
    </NavigationLink>
  );
};

export default NavigationLinkContainer;
