import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";
import { ComponentPropsWithoutRef } from "react";

export type H6Props = ComponentPropsWithoutRef<"h6">;
export const H6 = ({ children, className, ...props }: H6Props) => {
  return (
    <h6
      {...props}
      className={twMerge("text-ev-primary text-xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h6>
  );
};
