import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps extends RACButtonProps {
  variant?: "solid" | "flat";
  color?: "primary" | "secondary" | "destructive" | "foreground" | "background";
}

const styleIt = (props: IconButtonProps) => {
  const base = "w-[32px] h-[32px] rounded-md";
  // flat variant
  if (props.variant === "flat" && props.color === "primary")
    return `${base} bg-transparent hover:bg-gray-200 hover:dark:bg-gray-800 pressed:bg-gray-400 pressed:dark:bg-gray-600 text-cyan-600`;
  if (props.variant === "flat" && props.color === "secondary")
    return `${base} bg-transparent hover:bg-gray-200 hover:dark:bg-gray-800 pressed:bg-gray-400 pressed:dark:bg-gray-600 text-orange-600`;
  if (props.variant === "flat" && props.color === "destructive")
    return `${base} bg-transparent hover:bg-gray-200 hover:dark:bg-gray-800 pressed:bg-gray-400 pressed:dark:bg-gray-600 text-red-700`;
  if (props.variant === "flat" && props.color === "foreground")
    return `${base} bg-transparent hover:bg-gray-100 hover:dark:bg-gray-600 pressed:bg-gray-400 pressed:dark:bg-gray-600 text-black dark:text-white`;
  if (props.variant === "flat" && props.color === "background")
    return `${base} bg-transparent hover:bg-gray-800 hover:dark:bg-gray-200 pressed:bg-gray-700 pressed:dark:bg-gray-300 text-white dark:text-dark`;

  // solid variant
  if (props.variant === "solid" && props.color === "primary")
    return `${base} bg-cyan-600 hover:bg-cyan-700 pressed:bg-cyan-800 text-white`;
  if (props.variant === "solid" && props.color === "secondary")
    return `${base} bg-orange-600 hover:bg-orange-700 pressed:bg-orange-800 text-white`;
  if (props.variant === "solid" && props.color === "destructive")
    return `${base} bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white`;
  if (props.variant === "solid" && props.color === "foreground")
    return `${base} bg-white hover:bg-gray-200 hover:dark:bg-grey-100 pressed:bg-gray-400 pressed:dark:bg-gray-600 text-black dark:text-white`;
  if (props.variant === "solid" && props.color === "background")
    return `${base} bg-transparent hover:bg-gray-800 hover:dark:bg-gray-200 pressed:bg-gray-700 pressed:dark:bg-gray-300 text-white dark:text-dark`;
};

export const IconButton = (props: IconButtonProps) => {
  return (
    <RACButton
      {...props}
      className={twMerge(styleIt(props), props.className as string)}
    />
  );
};
