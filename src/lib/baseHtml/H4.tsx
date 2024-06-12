import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";

export type H4Props = ComponentPropsWithoutRef<"h4">;
export const H4 = ({ children, className, ...props }: H4Props) => {
  return (
    <h4
      {...props}
      className={twMerge("text-ev-primary text-3xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h4>
  );
};
