import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type StrongProps = ComponentPropsWithoutRef<"strong">;

export const Strong = ({ children, className, ...props }: StrongProps) => {
  return (
    <strong
      {...props}
      className={twMerge(
        "text-ev-dark dark:text-ev-light text-base font-bold",
        className
      )}
    >
      {children}
    </strong>
  );
};
