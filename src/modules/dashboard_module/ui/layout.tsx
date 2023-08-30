import React from "react";

interface Props {
  children: React.ReactElement;
}

const DashboardLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
