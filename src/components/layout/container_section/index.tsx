import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ContainerSection = ({ children }: Props) => {
  return <div className="max-w-screen-xl mx-auto py-24">{children}</div>;
};
