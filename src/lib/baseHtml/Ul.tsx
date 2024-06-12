import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type UlProps = ComponentPropsWithoutRef<"ul">;

export const Ul = ({ children, className, ...props }: UlProps) => {
  return (
    <ul {...props} className={twMerge("pl-4 list-disc", className)}>
      {children}
    </ul>
  );
};
