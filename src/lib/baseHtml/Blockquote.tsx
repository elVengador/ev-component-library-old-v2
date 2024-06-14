import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
  variant?: "base" | "default";
  source?: string;
};

export const Blockquote = ({
  children,
  className,
  variant = "default",
  source,
  ...props
}: BlockquoteProps) => {
  return (
    <blockquote
      {...props}
      className={twMerge(
        "text-ev-dark dark:text-ev-light text-base border-l-4 border-ev-primary pl-4 italic",
        className
      )}
    >
      <div className="inline">
        {variant === "default" && (
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="mr-2 text-ev-primary"
          />
        )}
        {children}
        {variant === "default" && (
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="ml-2 text-ev-primary"
          />
        )}
      </div>
      <div className="text-right">{source}</div>
    </blockquote>
  );
};
