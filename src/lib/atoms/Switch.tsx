import { ComponentPropsWithoutRef, RefObject, forwardRef } from "react";
import {
  AriaSwitchProps,
  VisuallyHidden,
  useHover,
  useSwitch,
} from "react-aria";
import { useToggleState } from "react-stately";
import { removeDataAttributes } from "../../utils/adobe.utils";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { filterDOMProps } from "@react-aria/utils";

type SwitchColor =
  | "primary"
  | "secondary"
  | "destructive"
  | "foreground"
  | "background";
type SwitchSize = "md" | "sm";

type SwitchProps = AriaSwitchProps &
  ComponentPropsWithoutRef<"switch"> & {
    size?: SwitchSize;
    color?: SwitchColor;
  };

const styleItLabel = ({ size = "md", color = "primary" }: SwitchProps) => {
  const base = "flex items-center justify-center gap-3";
  return clsx([
    base,
    size === "md" && [
      color === "primary" &&
        "text-[16px] text-ev-primary group/switch data-[hovered]:text-ev-primary-hard data-[pressed]:text-ev-primary-harder data-[selected]:text-ev-primary data-[hovered]:dark:text-ev-primary/20 data-[pressed]:dark:text-ev-primary/40 data-[disabled]:text-ev-primary/40",
      color === "secondary" &&
        "text-[16px] text-ev-secondary group/switch data-[hovered]:text-ev-secondary-hard data-[pressed]:text-ev-secondary-harder data-[selected]:text-ev-secondary data-[hovered]:dark:text-ev-secondary/20 data-[pressed]:dark:text-ev-secondary/40 data-[disabled]:text-ev-secondary/40",
      color === "destructive" &&
        "text-[16px] text-ev-destructive group/switch data-[hovered]:text-ev-destructive-hard data-[pressed]:text-ev-destructive-harder data-[selected]:text-ev-destructive data-[hovered]:dark:text-ev-destructive/20 data-[pressed]:dark:text-ev-destructive/40 data-[disabled]:text-ev-destructive/40",
      color === "foreground" &&
        "text-[16px] text-ev-dark group/switch data-[hovered]:text-ev-dark-hard data-[pressed]:text-ev-dark-harder data-[selected]:text-ev-dark data-[hovered]:dark:text-ev-dark/20 data-[pressed]:dark:text-ev-dark/40 data-[disabled]:text-ev-dark/40",
      color === "background" &&
        "text-[16px] text-ev-light group/switch data-[hovered]:text-ev-light-hard data-[pressed]:text-ev-light-harder data-[selected]:text-ev-light data-[hovered]:dark:text-ev-light/20 data-[pressed]:dark:text-ev-light/40 data-[disabled]:text-ev-light/40",
    ],
    size === "sm" && [
      color === "primary" &&
        "text-[14px] text-ev-primary group/switch data-[hovered]:text-ev-primary-hard data-[pressed]:text-ev-primary-harder data-[hovered]:dark:text-ev-primary/20 data-[pressed]:dark:text-ev-primary/40 data-[disabled]:text-ev-primary/40",
      color === "secondary" &&
        "text-[14px] text-ev-secondary group/switch data-[hovered]:text-ev-secondary-hard data-[pressed]:text-ev-secondary-harder data-[hovered]:dark:text-ev-secondary/20 data-[pressed]:dark:text-ev-secondary/40 data-[disabled]:text-ev-secondary/40",
      color === "destructive" &&
        "text-[14px] text-ev-destructive group/switch data-[hovered]:text-ev-destructive-hard data-[pressed]:text-ev-destructive-harder data-[hovered]:dark:text-ev-destructive/20 data-[pressed]:dark:text-ev-destructive/40 data-[disabled]:text-ev-destructive/40",
      color === "foreground" &&
        "text-[14px] text-ev-dark group/switch data-[hovered]:text-ev-dark-hard data-[pressed]:text-ev-dark-harder data-[hovered]:dark:text-ev-dark/20 data-[pressed]:dark:text-ev-dark/40 data-[disabled]:text-ev-dark/40",
      color === "background" &&
        "text-[14px] text-ev-light group/switch data-[hovered]:text-ev-light-hard data-[pressed]:text-ev-light-harder data-[hovered]:dark:text-ev-light/20 data-[pressed]:dark:text-ev-light/40 data-[disabled]:text-ev-light/40",
    ],
  ]);
};

const styleItSwitchContain = ({
  size = "md",
  color = "primary",
}: SwitchProps) => {
  const base = "rounded-full relative border";
  return clsx([
    base,
    size === "md" && [
      color === "primary" &&
        "w-[36px] h-[20px] py-2 border-ev-primary group/contain group-data-[hovered]/switch:border-ev-primary-hard group-data-[hovered]/switch:data-[selected]:bg-ev-primary-hard data-[selected]:bg-ev-primary group-data-[pressed]/switch:border-ev-primary-harder data-[hovered]:dark:border-ev-primary/20 data-[pressed]:dark:border-ev-primary/40 data-[disabled]:border-ev-primary/40",
      color === "secondary" &&
        "w-[36px] h-[20px] py-2 border-ev-secondary group/contain group-data-[hovered]/switch:border-ev-secondary-hard group-data-[hovered]/switch:data-[selected]:bg-ev-secondary-hard data-[selected]:bg-ev-secondary group-data-[pressed]/switch:border-ev-secondary-harder data-[hovered]:dark:border-ev-secondary/20 data-[pressed]:dark:border-ev-secondary/40 data-[disabled]:border-ev-secondary/40",
      color === "destructive" &&
        "w-[36px] h-[20px] py-2 border-ev-destructive group/contain group-data-[hovered]/switch:border-ev-destructive-hard group-data-[hovered]/switch:data-[selected]:bg-ev-destructive-hard data-[selected]:bg-ev-destructive group-data-[pressed]/switch:border-ev-destructive-harder data-[hovered]:dark:border-ev-destructive/20 data-[pressed]:dark:border-ev-destructive/40 data-[disabled]:border-ev-destructive/40",
      color === "foreground" &&
        "w-[36px] h-[20px] py-2 border-ev-dark group/contain group-data-[hovered]/switch:border-ev-dark-hard group-data-[hovered]/switch:data-[selected]:bg-ev-dark-hard data-[selected]:bg-ev-dark group-data-[pressed]/switch:border-ev-dark-harder data-[hovered]:dark:border-ev-dark/20 data-[pressed]:dark:border-ev-dark/40 data-[disabled]:border-ev-dark/40",
      color === "background" &&
        "w-[36px] h-[20px] py-2 border-ev-light group/contain group-data-[hovered]/switch:border-ev-light-hard group-data-[hovered]/switch:data-[selected]:bg-ev-light-hard data-[selected]:bg-ev-light group-data-[pressed]/switch:border-ev-light-harder data-[hovered]:dark:border-ev-light/20 data-[pressed]:dark:border-ev-light/40 data-[disabled]:border-ev-light/40",
    ],
    size === "sm" && [
      color === "primary" &&
        "w-[28px] h-[16px] py-1 border-ev-primary group/contain group-data-[hovered]/switch:border-ev-primary-hard group-data-[hovered]/switch:data-[selected]:bg-ev-primary-hard data-[selected]:bg-ev-primary group-data-[pressed]/switch:border-ev-primary-harder data-[hovered]:dark:border-ev-primary/20 data-[pressed]:dark:border-ev-primary/40 data-[disabled]:border-ev-primary/40",
      color === "secondary" &&
        "w-[28px] h-[16px] py-1 border-ev-secondary group/contain group-data-[hovered]/switch:border-ev-secondary-hard group-data-[hovered]/switch:data-[selected]:bg-ev-secondary-hard data-[selected]:bg-ev-secondary group-data-[pressed]/switch:border-ev-secondary-harder data-[hovered]:dark:border-ev-secondary/20 data-[pressed]:dark:border-ev-secondary/40 data-[disabled]:border-ev-secondary/40",
      color === "destructive" &&
        "w-[28px] h-[16px] py-1 border-ev-destructive group/contain group-data-[hovered]/switch:border-ev-destructive-hard group-data-[hovered]/switch:data-[selected]:bg-ev-destructive-hard data-[selected]:bg-ev-destructive group-data-[pressed]/switch:border-ev-destructive-harder data-[hovered]:dark:border-ev-destructive/20 data-[pressed]:dark:border-ev-destructive/40 data-[disabled]:border-ev-destructive/40",
      color === "foreground" &&
        "w-[28px] h-[16px] py-1 border-ev-dark group/contain group-data-[hovered]/switch:border-ev-dark-hard group-data-[hovered]/switch:data-[selected]:bg-ev-dark-hard data-[selected]:bg-ev-dark group-data-[pressed]/switch:border-ev-dark-harder data-[hovered]:dark:border-ev-dark/20 data-[pressed]:dark:border-ev-dark/40 data-[disabled]:border-ev-dark/40",
      color === "background" &&
        "w-[28px] h-[16px] py-1 border-ev-light group/contain group-data-[hovered]/switch:border-ev-light-hard group-data-[hovered]/switch:data-[selected]:bg-ev-light-hard data-[selected]:bg-ev-light group-data-[pressed]/switch:border-ev-light-harder data-[hovered]:dark:border-ev-light/20 data-[pressed]:dark:border-ev-light/40 data-[disabled]:border-ev-light/40",
    ],
  ]);
};

const styleItSwitchBall = ({ size = "md", color = "primary" }: SwitchProps) => {
  const base =
    "rounded-full absolute top-[1px] left-[1px] duration-100 bg-light";
  return clsx([
    base,
    size === "md" && [
      color === "primary" &&
        "w-[16px] h-[16px] bg-ev-primary group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[17px] group-data-[pressed]/switch:bg-ev-primary-harder data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 data-[disabled]:bg-ev-primary/40",
      color === "secondary" &&
        "w-[16px] h-[16px] bg-ev-secondary group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[17px] data-[pressed]:bg-ev-secondary-harder data-[hovered]:dark:bg-ev-secondary/20 data-[pressed]:dark:bg-ev-secondary/40 data-[disabled]:bg-ev-secondary/40",
      color === "destructive" &&
        "w-[16px] h-[16px] bg-ev-destructive group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[17px] data-[pressed]:bg-ev-destructive-harder data-[hovered]:dark:bg-ev-destructive/20 data-[pressed]:dark:bg-ev-destructive/40 data-[disabled]:bg-ev-destructive/40",
      color === "foreground" &&
        "w-[16px] h-[16px] bg-ev-dark group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-light data-[selected]:left-[17px] data-[pressed]:bg-ev-dark-harder data-[hovered]:dark:bg-ev-dark/20 data-[pressed]:dark:bg-ev-dark/40 data-[disabled]:bg-ev-dark/40",
      color === "background" &&
        "w-[16px] h-[16px] bg-ev-light group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark-harder data-[selected]:left-[17px] data-[pressed]:bg-ev-light-harder data-[hovered]:dark:bg-ev-light/20 data-[pressed]:dark:bg-ev-light/40 data-[disabled]:bg-ev-light/40",
    ],
    size === "sm" && [
      color === "primary" &&
        "w-[12px] h-[12px] bg-ev-primary group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[13px] group-data-[pressed]/switch:bg-ev-primary-harder data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 data-[disabled]:bg-ev-primary/40",
      color === "secondary" &&
        "w-[12px] h-[12px] bg-ev-secondary group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[13px] data-[pressed]:bg-ev-secondary-harder data-[hovered]:dark:bg-ev-secondary/20 data-[pressed]:dark:bg-ev-secondary/40 data-[disabled]:bg-ev-secondary/40",
      color === "destructive" &&
        "w-[12px] h-[12px] bg-ev-destructive group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark data-[selected]:left-[13px] data-[pressed]:bg-ev-destructive-harder data-[hovered]:dark:bg-ev-destructive/20 data-[pressed]:dark:bg-ev-destructive/40 data-[disabled]:bg-ev-destructive/40",
      color === "foreground" &&
        "w-[12px] h-[12px] bg-ev-dark group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-light data-[selected]:left-[13px] data-[pressed]:bg-ev-dark-harder data-[hovered]:dark:bg-ev-dark/20 data-[pressed]:dark:bg-ev-dark/40 data-[disabled]:bg-ev-dark/40",
      color === "background" &&
        "w-[12px] h-[12px] bg-ev-light group/ball group-data-[hovered]/switch:bg-dark-hard data-[selected]:bg-ev-dark-harder data-[selected]:left-[13px] data-[pressed]:bg-ev-light-harder data-[hovered]:dark:bg-ev-light/20 data-[pressed]:dark:bg-ev-light/40 data-[disabled]:bg-ev-light/40",
    ],
  ]);
};

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ children, size, color, ...props }, ref) => {
    const state = useToggleState(props);

    const { hoverProps, isHovered } = useHover({});

    const { labelProps, inputProps, isPressed, isSelected, isDisabled } =
      useSwitch(
        {
          ...removeDataAttributes(props),
          children,
        },
        state,
        ref as RefObject<HTMLInputElement>
      );

    return (
      <label
        {...labelProps}
        {...filterDOMProps(props)}
        {...(isPressed && { "data-pressed": isPressed })}
        {...(isSelected && { "data-selected": isSelected })}
        {...(isSelected && isPressed && { "data-pressed": isPressed })}
        {...(isDisabled && { "data-disabled": true, disabled: true })}
        className={twMerge(
          styleItLabel({ size, color }),
          props.className as string
        )}
      >
        <VisuallyHidden>
          <input {...inputProps} ref={ref} />
        </VisuallyHidden>
        <div
          {...hoverProps}
          {...(isPressed && { "data-pressed": isPressed })}
          {...(isSelected && { "data-selected": isSelected })}
          {...(isDisabled && { "data-disabled": true, disabled: true })}
          {...(isHovered &&
            !isPressed &&
            !isDisabled && { "data-hovered": isHovered })}
          className={twMerge(
            styleItSwitchContain({ size, color }),
            props.className as string
          )}
        >
          <div
            {...(isPressed && { "data-pressed": isPressed })}
            {...(isSelected && { "data-selected": isSelected })}
            {...(isDisabled && { "data-disabled": true, disabled: true })}
            className={twMerge(
              styleItSwitchBall({ size, color }),
              props.className as string
            )}
          />
        </div>
        {children}
      </label>
    );
  }
);
