import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type Img = ComponentPropsWithoutRef<"img">;

export const Img = ({ className, ...props }: Img) => {
  return (
    <img
      {...props}
      loading="lazy"
      className={twMerge("rounded-lg", className)}
    />
  );
};
