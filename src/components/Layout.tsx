import React, { Children, FC } from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-screen w-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
