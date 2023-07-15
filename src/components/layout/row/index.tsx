import React, { useMemo } from "react";

import { clsx } from "@/libs/clsx";

import type { ComponentPropsWithoutRef } from "react";

interface RowProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  spacing?: number;
  alignItems?: "center" | "start" | "end";
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
}

export function Row(props: RowProps) {
  const {
    spacing = 0,
    alignItems = "start",
    justify = "start",
    children,
    ...resProps
  } = props;

  const getAlign = useMemo(() => {
    switch (alignItems) {
      case "start":
        return "items-start";
      case "end":
        return "items-end";
      case "center":
        return "items-center";
    }
  }, [alignItems]);

  const getJustify = useMemo(() => {
    switch (justify) {
      case "start":
        return "justify-start";
      case "end":
        return "justify-end";
      case "center":
        return "justify-center";
      case "evenly":
        return "justify-evenly";
      case "around":
        return "justify-around";
      case "between":
        return "justify-between";
    }
  }, [justify]);

  const flexGap = useMemo(() => {
    if (spacing === 0) {
      return 0;
    } else if (spacing >= 1) {
      return spacing * 4;
    }
  }, [spacing]);

  return (
    <div
      {...resProps}
      className={clsx("flex", getAlign, getJustify, resProps.className)}
      style={{ gap: flexGap }}
    >
      {children}
    </div>
  );
}
