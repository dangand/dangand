import React, { useMemo } from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  children: React.ReactNode;
  variant?:
    | "display 1"
    | "display 2"
    | "display 3"
    | "display 4"
    | "headline"
    | "title"
    | "body"
    | "body small"
    | "caption";
  weight?: "bold" | "semibold" | "medium" | "regular";
}

export function Text(props: TextProps) {
  const { children, variant = "body", weight = "regular", ...resProps } = props;

  const fontWeight = useMemo(() => {
    switch (weight) {
      case "bold":
        return "font-bold";
      case "semibold":
        return "font-semibold";
      case "medium":
        return "font-medium";
      case "regular":
        return "font-regular";
    }
  }, [weight]);

  const fontVariant = useMemo(() => {
    switch (variant) {
      case "display 1":
        return (
          <h1 className={clsx(fontWeight, "text-6xl", resProps.className)}>
            {children}
          </h1>
        );
      case "display 2":
        return (
          <h2 className={clsx(fontWeight, "text-4xl", resProps.className)}>
            {children}
          </h2>
        );
      case "display 3":
        return (
          <h3 className={clsx(fontWeight, "text-3xl", resProps.className)}>
            {children}
          </h3>
        );
      case "display 4":
        return (
          <h4 className={clsx(fontWeight, "text-2xl", resProps.className)}>
            {children}
          </h4>
        );
      case "headline":
        return (
          <h5 className={clsx(fontWeight, "text-xl", resProps.className)}>
            {children}
          </h5>
        );
      case "title":
        return (
          <h6 className={clsx(fontWeight, "text-lg", resProps.className)}>
            {children}
          </h6>
        );
      case "body":
        return (
          <p className={clsx(fontWeight, "text-base", resProps.className)}>
            {children}
          </p>
        );
      case "body small":
        return (
          <p className={clsx(fontWeight, "text-sm", resProps.className)}>
            {children}
          </p>
        );
      case "caption":
        return (
          <p className={clsx(fontWeight, "text-xs", resProps.className)}>
            {children}
          </p>
        );
    }
  }, [variant, children, fontWeight, resProps]);

  return (
    <>
      {fontVariant}
      {/* <p {...resProps} className={clsx(textSize, fontWeight, props.className)}>
        {children}
      </p> */}
    </>
  );
}
