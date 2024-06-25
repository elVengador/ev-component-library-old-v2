import { filterDOMProps } from "@react-aria/utils";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef, RefObject, forwardRef } from "react";
import { AriaButtonOptions, useButton, useHover } from "react-aria";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "solid" | "flat";
type ButtonColor =
  | "primary"
  | "secondary"
  | "destructive"
  | "foreground"
  | "background";
type ButtonSize = "md" | "sm";

export type IconButtonProps = AriaButtonOptions<"button"> &
  ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
  };

const styleIt2 = ({
  variant = "solid",
  color = "primary",
  size = "md",
}: IconButtonProps) => {
  const base = "w-[32px] h-[32px] rounded-md";
  return clsx([
    base,
    variant === "flat" && [
      color === "primary" &&
        "bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 disabled:text-ev-primary/40",
      color === "secondary" &&
        "bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40 disabled:text-ev-secondary/40",
      color === "destructive" &&
        "bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40 disabled:text-ev-destructive/40",
      color === "foreground" &&
        "bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40 disabled:text-ev-dark/40",
      color === "background" &&
        "bg-transparent text-ev-light data-[hovered]:bg-ev-light-hard data-[pressed]:bg-ev-light-harder dark:text-ev-dark data-[hovered]:dark:bg-ev-dark/20  data-[pressed]:dark:bg-ev-dark/40 disabled:text-ev-light/40",
    ],
    variant === "solid" && [
      color === "primary" &&
        "bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light disabled:bg-ev-primary/40",
      color === "secondary" &&
        "bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light disabled:bg-ev-secondary-hard/40",
      color === "destructive" &&
        "bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light disabled:bg-ev-destructive-hard/40",
      color === "foreground" &&
        "bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:data-[hovered]:bg-ev-light-hard  dark:data-[pressed]:bg-ev-light-harder disabled:bg-ev-dark-hard/40",
      color === "background" &&
        "bg-ev-light text-ev-light data-[hovered]:bg-ev-light-hard data-[pressed]:bg-ev-light-harder dark:bg-ev-dark dark:text-ev-light dark:data-[hovered]:bg-ev-dark-hard  dark:data-[pressed]:bg-ev-dark-harder disabled:bg-ev-light-hard/40",
    ],
    size === "md" && "w-[32px] h-[32px] text-[16px]",
    size === "sm" && "w-[24px] h-[24px] text-[12px]",
  ]);
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    const { buttonProps, isPressed } = useButton(
      props,
      ref as RefObject<Element>
    );
    const { hoverProps, isHovered } = useHover({});

    return (
      <button
        ref={ref}
        {...filterDOMProps(props)}
        {...hoverProps}
        {...buttonProps}
        {...(props.isDisabled && { "data-disabled": true, disabled: true })}
        {...(isPressed && { "data-pressed": isPressed })}
        {...(isHovered &&
          !isPressed &&
          !props.isDisabled && { "data-hovered": isHovered })}
        className={twMerge(styleIt2(props), props.className as string)}
      >
        {children}
      </button>
    );
  }
);
