import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";

export type H3Props = ComponentPropsWithoutRef<"h3">;
export const H3 = ({ children, className, ...props }: H3Props) => {
  return (
    <h3
      {...props}
      className={twMerge("text-ev-primary text-4xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h3>
  );
};
