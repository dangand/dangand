import { useMemo } from "react";

import { LoadingAnimation } from "@/assets/svg";
import { clsx } from "@/libs";

import type { ComponentPropsWithoutRef } from "react";

interface BaseButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  containerClassName?: string;
  loading?: boolean;
  variant?: "primary" | "bordered" | "secondary" | "tertiary" | "transparent";
}

export const BaseButton = (props: BaseButtonProps) => {
  const {
    label,
    containerClassName,
    loading,
    variant: btnType = "primary",
    ...restProps
  } = props;

  const btnStyle = useMemo(() => {
    switch (btnType) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-white text-gray-600";
      case "tertiary":
        return "bg-red-500 text-white";
      case "transparent":
        return "text-black";
    }
  }, [btnType]);

  const loadingStyle = useMemo(() => {
    switch (btnType) {
      case "primary":
        return "text-white fill-white";
      case "secondary":
        return "text-gray-600 fill-gray-600";
      case "tertiary":
        return "text-white fill-white";
    }
  }, [btnType]);

  return (
    <div className={containerClassName}>
      {btnType == "bordered" ? (
        <button
          {...restProps}
          className={clsx(
            btnStyle,
            "border-2 box-content border-primary text-primary font-semibold text-sm rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transtion duration-200 disabled:opacity-50",
            restProps.className,
          )}
          disabled={loading || restProps.disabled}
        >
          {loading ? (
            <LoadingAnimation
              className={clsx(
                "inline w-5 h-5 text-opacity-40 animate-spin",
                loadingStyle,
              )}
            />
          ) : (
            label
          )}
        </button>
      ) : btnType == "transparent" ? (
        <button
          {...restProps}
          className={clsx(
            btnStyle,
            "border-2 box-content border-transparent  text-black font-semibold text-sm rounded-3xl px-4 py-2 hover:border-primary hover:text-primary transtion duration-200 disabled:opacity-50",
            restProps.className,
          )}
          disabled={loading || restProps.disabled}
        >
          {loading ? (
            <LoadingAnimation
              className={clsx(
                "inline w-5 h-5 text-opacity-40 animate-spin",
                loadingStyle,
              )}
            />
          ) : (
            label
          )}
        </button>
      ) : (
        <button
          {...restProps}
          className={clsx(
            btnStyle,
            "font-regular text-sm rounded-3xl px-4 py-2.5 hover:opacity-80 transtion duration-200 disabled:opacity-50",
            restProps.className,
          )}
          disabled={loading || restProps.disabled}
        >
          {loading ? (
            <LoadingAnimation
              className={clsx(
                "inline w-5 h-5 text-opacity-40 animate-spin",
                loadingStyle,
              )}
            />
          ) : (
            label
          )}
        </button>
      )}
    </div>
  );
};
