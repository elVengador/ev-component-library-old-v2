import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type PreProps = ComponentPropsWithoutRef<"pre">;

export const Pre = ({ children, className, ...props }: PreProps) => {
  return (
    <pre
      {...props}
      className={twMerge(
        "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
        className
      )}
    >
      {children}
    </pre>
  );
};
