import React, { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface DefaultTemplateProps {
  children: ReactNode;
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
