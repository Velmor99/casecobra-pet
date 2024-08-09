import MaxWidhWrapper from "@/components/MaxWithWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidhWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidhWrapper>
  );
};

export default Layout;
