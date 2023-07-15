import React, { useMemo } from "react";

import { clsx } from "@/libs/clsx";

import type { ComponentPropsWithoutRef, ReactElement } from "react";

interface GridProps<T extends ReactElement>
  extends ComponentPropsWithoutRef<"div"> {
  children: T | T[];
  spacing?: number;
}

interface ItemGridProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  span: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export function Item(props: ItemGridProps) {
  const { span, children, ...resProps } = props;

  const gridSpan = useMemo(() => {
    if (span === 0) {
      return `col-span-0`;
    } else if (span > 1) {
      return `col-span-${span}`;
    }
  }, [span]);

  return (
    <div
      {...resProps}
      className={clsx(resProps.className, gridSpan)}
      style={{ gridColumn: `span ${span}` }}
    >
      {children}
    </div>
  );
}

export function Grid<T extends ReactElement>(props: GridProps<T>) {
  const { spacing = 0, children, ...resProps } = props;

  const gridGap = useMemo(() => {
    if (spacing === 0) {
      return 0;
    } else if (spacing >= 1) {
      return +spacing * 4;
    }
  }, [spacing]);

  const itemChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return child;
    } else {
      throw new Error("Grid component only accepts Item as children");
    }
  });

  return (
    <div
      {...resProps}
      className={clsx("grid grid-cols-12 ", resProps.className)}
      style={{ gap: gridGap }}
    >
      {itemChildren}
    </div>
  );
}
