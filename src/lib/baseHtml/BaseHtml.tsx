import {
  faLink,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

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

export type PProps = ComponentPropsWithoutRef<"p">;
export const P = ({ children, className, ...props }: PProps) => {
  return (
    <p
      {...props}
      className={twMerge(
        "text-ev-dark dark:text-ev-light text-base",
        className
      )}
    >
      {children}
    </p>
  );
};

export type StrongProps = ComponentPropsWithoutRef<"strong">;
export const Strong = ({ children, className, ...props }: StrongProps) => {
  console.log({ className });
  return (
    <strong
      {...props}
      className={twMerge(
        "text-ev-dark dark:text-ev-light text-base font-bold",
        className
      )}
    >
      {children}
    </strong>
  );
};

export type CodeProps = ComponentPropsWithoutRef<"code">;
export const Code = ({ children, className, ...props }: CodeProps) => {
  return (
    <code
      {...props}
      className={twMerge(
        "px-1 text-ev-dark bg-ev-light-hard dark:text-ev-light  dark:bg-ev-dark-hard text-base rounded-md",
        className
      )}
    >
      {children}
    </code>
  );
};

export type PrevProps = ComponentPropsWithoutRef<"pre">;
export const Pre = ({ children, className, ...props }: CodeProps) => {
  return (
    <pre
      {...props}
      className={twMerge(
        "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
        className
      )}
    >
      {children}
    </pre>
  );
};

export type UlProps = ComponentPropsWithoutRef<"ul">;
export const Ul = ({ children, className, ...props }: UlProps) => {
  return (
    <ul {...props} className={twMerge("pl-4 list-disc", className)}>
      {children}
    </ul>
  );
};

export type OlProps = ComponentPropsWithoutRef<"ol">;
export const Ol = ({ children, className, ...props }: OlProps) => {
  return (
    <ol {...props} className={twMerge("pl-2 list-decimal", className)}>
      {children}
    </ol>
  );
};

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

const Hashtag = ({ id }: { id: string }) => (
  <a href={`#${id}`} className="px-2 text-ev-primary/50 hover:text-ev-primary">
    #
  </a>
);
