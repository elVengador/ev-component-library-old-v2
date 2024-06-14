import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";
import { ComponentPropsWithoutRef } from "react";

export type H5Props = ComponentPropsWithoutRef<"h5">;
export const H5 = ({ children, className, ...props }: H5Props) => {
  return (
    <h1
      {...props}
      className={twMerge("text-ev-primary text-2xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h1>
  );
};
