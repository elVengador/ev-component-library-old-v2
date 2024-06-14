import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type AProps = ComponentPropsWithoutRef<"a">;

export const A = ({ className, children, ...props }: AProps) => (
  <a
    {...props}
    className={twMerge(
      "border-b-2 border-dashed border-ev-dark hover:border-solid hover:text-ev-primary hover:border-ev-primary",
      className
    )}
    target="_blank"
    rel="noreferrer noopener"
  >
    <FontAwesomeIcon icon={faLink} className="mr-2" />
    {children}
  </a>
);
