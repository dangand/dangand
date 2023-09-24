import React from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"h2"> {
  children: React.ReactNode;
}

export const TitleSection = (props: ContainerProps) => {
  const { children, ...resProps } = props;
  return (
    <h2
      {...resProps}
      className={clsx(resProps.className, "2xl:text-5xl text-4xl")}
    >
      {children}
    </h2>
  );
};
