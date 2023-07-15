import React, { useMemo } from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface CenterProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const Center = (props: CenterProps) => {
  const { children, ...resProps } = props;

  //   const flexDirection = useMemo(() => {
  //     switch (direction) {
  //       case "row":
  //         return "flex";
  //       case "Row":
  //         return "flex flex-col";
  //     }
  //   }, [direction]);

  //   const flexGap = useMemo(() => {
  //     if (spacing === 0) {
  //       return 0;
  //     } else if (spacing > 1) {
  //       return spacing * 2;
  //     }
  //   }, [spacing]);

  return (
    <div
      {...resProps}
      className={clsx(
        "flex w-full h-full justify-center items-center",
        resProps.className,
      )}
      //   style={{ gap: flexGap }}
    >
      {children}
    </div>
  );
};
