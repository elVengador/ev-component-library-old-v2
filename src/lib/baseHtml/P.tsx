import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type PProps = ComponentPropsWithoutRef<"p">;

export const P = ({ children, className, ...props }: PProps) => {
  return (
    <p
      {...props}
      className={twMerge(
        "text-ev-dark dark:text-ev-light text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
