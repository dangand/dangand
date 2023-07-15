import React, { useMemo } from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  width?: string | "screen" | "auto" | "full";
  heigth?: string | "screen" | "auto" | "full";
  border?: boolean;
  rounded?: boolean;
}
export const Card = (props: CardProps) => {
  const { children, width, heigth, border, rounded, ...resProps } = props;

  const getWidth = useMemo(() => {
    if (width !== undefined) {
      if (+width > 0) {
        return +width * 4;
      } else if (width.includes("%")) {
        return `${width}`;
      } else if (width == "full") {
        return "100%";
      } else if (width == "auto") {
        return "auto";
      } else if (width == "screen") {
        return "100vw";
      }
    }
    return "";
  }, [width]);

  const getHeight = useMemo(() => {
    if (heigth !== undefined) {
      if (+heigth > 0) {
        return +heigth * 4;
      } else if (heigth.includes("%")) {
        return `${heigth}`;
      } else if (heigth == "full") {
        return "100%";
      } else if (heigth == "auto") {
        return "auto";
      } else if (heigth == "screen") {
        return "100vh";
      }
    }
    return "";
  }, [heigth]);

  return (
    <div
      {...resProps}
      className={clsx(
        resProps.className,
        border ? "border border-gray-500" : " ",
        rounded ? "rounded-md" : "",
      )}
      style={{ width: getWidth, height: getHeight }}
    >
      {children}
    </div>
  );
};
