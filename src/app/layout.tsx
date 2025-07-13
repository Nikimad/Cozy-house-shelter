import type { FC, ReactNode } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import cn from "classnames";

import Providers from "@/components/Providers";
import Header from "./_components/Header";

import "@/styles/global.scss";

interface RootLayoutProps {
  children: ReactNode;
}

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozy house",
  description: "Cozy house shelter",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("body", roboto.className)}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
