import MaxWidhWrapper from "@/components/MaxWithWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidhWrapper className="flex-1 flex flex-col">{children}</MaxWidhWrapper>
  );
};

export default Layout;
