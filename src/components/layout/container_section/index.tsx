import React from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const ContainerSection = (props: ContainerProps) => {
  const { children, ...resProps } = props;
  return (
    <div
      {...resProps}
      className={clsx(
        resProps.className,
        "max-w-full px-4 md:max-w-screen-sm xl:max-w-screen-lg 2xl:max-w-screen-xl py-5 md:py-24 mx-auto",
      )}
    >
      {children}
    </div>
  );
};
