import { twMerge } from "tailwind-merge";
import { Hashtag } from "./BaseHtml";
import { ComponentPropsWithoutRef } from "react";

export type H1Props = ComponentPropsWithoutRef<"h1">;
export const H1 = ({ children, className, ...props }: H1Props) => {
  return (
    <h1
      {...props}
      className={twMerge("text-ev-primary text-6xl font-semibold", className)}
    >
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h1>
  );
};
