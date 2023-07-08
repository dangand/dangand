import React, { useMemo } from "react";

import { clsx } from "@/libs/clsx";

import type { ComponentPropsWithoutRef } from "react";

interface ColumnProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  spacing?: number;
}

export default function Column(props: ColumnProps) {
  const { spacing = 0, children, ...resProps } = props;

  //   const flexDirection = useMemo(() => {
  //     switch (direction) {
  //       case "row":
  //         return "flex";
  //       case "column":
  //         return "flex flex-col";
  //     }
  //   }, [direction]);

  const flexGap = useMemo(() => {
    if (spacing === 0) {
      return 0;
    } else if (spacing > 1) {
      return spacing * 2;
    }
  }, [spacing]);

  return (
    <div
      {...resProps}
      className={clsx("flex-col", resProps.className)}
      style={{ gap: flexGap }}
    >
      {children}
    </div>
  );
}
