import Link from "next/link";
import React from "react";

import { Text } from "@/components/typography";

import type { TextProps } from "@/components/typography";
import type { ComponentPropsWithoutRef } from "react";

interface NavigateProps extends ComponentPropsWithoutRef<"a"> {
  label: string;
  to: string;
  textVariant?: TextProps["variant"];
}

export const Navigate = (props: NavigateProps) => {
  const { label, to, textVariant } = props;
  return (
    <Link href={to}>
      <Text variant={textVariant}>{label}</Text>
    </Link>
  );
};
