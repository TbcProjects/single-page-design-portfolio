import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <h1>Header</h1>
      <main>{children}</main>
      {/* Footer */}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
