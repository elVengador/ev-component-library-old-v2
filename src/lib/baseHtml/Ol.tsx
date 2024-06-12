import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type OlProps = ComponentPropsWithoutRef<"ol">;

export const Ol = ({ children, className, ...props }: OlProps) => {
  return (
    <ol {...props} className={twMerge("pl-2 list-decimal", className)}>
      {children}
    </ol>
  );
};
