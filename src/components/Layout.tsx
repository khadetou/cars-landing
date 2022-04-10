import React, { Children, FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      {children}
    </main>
  );
};

export default Layout;
