import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "solid" | "flat";
type ButtonColor =
  | "primary"
  | "secondary"
  | "destructive"
  | "foreground"
  | "background";

export type ButtonProps = RACButtonProps & {
  variant?: ButtonVariant;
  color?: ButtonColor;
};

const baseStyles = "px-2 py-1 rounded-md";

const styles: { [key in ButtonVariant]: { [key in ButtonColor]: string } } = {
  flat: {
    primary: `${baseStyles} bg-transparent text-ev-primary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    secondary: `${baseStyles} bg-transparent text-ev-secondary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    destructive: `${baseStyles} bg-transparent text-ev-destructive hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    foreground: `${baseStyles} bg-transparent text-ev-dark hover:bg-gray-200 pressed:bg-gray-300 dark:text-ev-light hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    background: `${baseStyles} bg-transparent text-ev-light hover:bg-gray-800 pressed:bg-gray-700 dark:text-ev-dark hover:dark:bg-gray-200  pressed:dark:bg-gray-300`,
  },
  solid: {
    primary: `${baseStyles} bg-ev-primary hover:bg-cyan-600 pressed:bg-cyan-700 text-white`,
    secondary: `${baseStyles} bg-ev-secondary hover:bg-orange-600 pressed:bg-orange-700 text-white`,
    destructive: `${baseStyles} bg-ev-destructive hover:bg-red-600 pressed:bg-red-700 text-white`,
    foreground: `${baseStyles} bg-ev-dark text-ev-light hover:bg-gray-700 pressed:bg-gray-600 dark:bg-ev-light dark:text-ev-dark dark:hover:bg-gray-200  dark:pressed:bg-gray-300`,
    background: `${baseStyles} bg-ev-light text-ev-dark hover:bg-gray-200 pressed:bg-gray-300 dark:bg-ev-dark dark:text-ev-light hover:dark:bg-gray-700  pressed:dark:bg-gray-600`,
  },
};

const styleIt = ({ variant = "solid", color = "primary" }: ButtonProps) =>
  styles[variant][color];

export const Button = (props: ButtonProps) => {
  console.log({ props });
  return (
    <RACButton
      {...props}
      className={twMerge(styleIt(props), props.className as string)}
    />
  );
};
