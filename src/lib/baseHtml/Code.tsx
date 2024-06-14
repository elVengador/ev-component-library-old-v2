import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type CodeProps = ComponentPropsWithoutRef<"code">;

export const Code = ({ children, className, ...props }: CodeProps) => {
  return (
    <code
      {...props}
      className={twMerge(
        "px-1 text-ev-dark bg-ev-light-hard dark:text-ev-light  dark:bg-ev-dark-hard text-base rounded-md",
        className
      )}
    >
      {children}
    </code>
  );
};
