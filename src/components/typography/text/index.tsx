import React, { useMemo } from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface TextProps extends ComponentPropsWithoutRef<"p"> {
  child: string;
  size: "heading" | "sub heading" | "title" | "body" | "body small";
}

export function Text(props: TextProps) {
  const { child, size, ...resProps } = props;

  const textSize = useMemo(() => {
    switch (size) {
      case "heading":
        return "text-3xl";
      case "sub heading":
        return "text-2xl";
      case "title":
        return "text-xl";
      case "body":
        return "text-base";
      case "body small":
        return "text-sm";
    }
  }, [size]);

  return (
    <>
      <p {...resProps} className={clsx(textSize, props.className)}>
        {child}
      </p>
    </>
  );
}
