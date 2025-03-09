import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div className="min-w-full">{children}</div>
);
