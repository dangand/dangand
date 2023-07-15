import React, { useMemo } from "react";

import { clsx } from "@/libs/clsx";

import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  maxWidth: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  spacing?: number;
}

export function Container(props: ContainerProps) {
  const { children, maxWidth = "full", ...resProps } = props;

  const getMaxWidth = useMemo(() => {
    switch (maxWidth) {
      case "sm":
        return "max-w-screen-sm";
      case "md":
        return "max-w-screen-md";
      case "lg":
        return "max-w-screen-lg";
      case "xl":
        return "max-w-screen-xl";
      case "2xl":
        return "max-w-screen-2xl";
      case "full":
        return "max-w-full";
    }
  }, [maxWidth]);

  return (
    <section
      {...resProps}
      className={clsx(resProps.className, getMaxWidth, "mx-auto w-screen")}
    >
      {children}
    </section>
  );
}
