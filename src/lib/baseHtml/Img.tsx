import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type Img = ComponentPropsWithoutRef<"img">;

export const Img = ({ className, ...props }: Img) => {
  return (
    <img
      loading="lazy"
      {...props}
      className={twMerge("rounded-lg", className)}
    />
  );
};
