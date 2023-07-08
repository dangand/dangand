import React, { useMemo } from "react";

import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface VisibleProps extends ComponentPropsWithoutRef<"div"> {
  visible: boolean;
  children: React.ReactNode;
}

export default function Visible(props: VisibleProps) {
  const { visible = false, children } = props;

  const visibleCondition = useMemo(() => {
    switch (visible) {
      case true:
        return "hidden";
      case false:
        return "block";
    }
  }, [visible]);

  return <div className={clsx(visibleCondition)}>{children}</div>;
}
