import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";
import { ComponentPropsWithoutRef } from "react";

export type H2Props = ComponentPropsWithoutRef<"h2">;
export const H2 = ({ children, className, ...props }: H2Props) => {
  return (
    <h2
      {...props}
      className={twMerge("text-ev-primary text-5xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h2>
  );
};
