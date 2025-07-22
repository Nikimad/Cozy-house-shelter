import type { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import cn from "classnames";

import "@/styles/global.scss";

import Providers from "@/providers"
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozy house",
  description: "Cozy house shelter",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn("body", roboto.className)}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
