import { ComponentPropsWithoutRef } from "react";

type H1Props = ComponentPropsWithoutRef<"h1">;
export const H1 = ({ children, className, ...props }: H1Props) => {
  return (
    <h1 {...props} className="text-ev-primary text-6xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h1>
  );
};

type H2Props = ComponentPropsWithoutRef<"h2">;
export const H2 = ({ children, className, ...props }: H2Props) => {
  return (
    <h2 {...props} className="text-ev-primary text-5xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h2>
  );
};

type H3Props = ComponentPropsWithoutRef<"h3">;
export const H3 = ({ children, className, ...props }: H3Props) => {
  return (
    <h3 {...props} className="text-ev-primary text-4xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h3>
  );
};

type H4Props = ComponentPropsWithoutRef<"h4">;
export const H4 = ({ children, className, ...props }: H4Props) => {
  return (
    <h4 {...props} className="text-ev-primary text-3xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h4>
  );
};

type H5Props = ComponentPropsWithoutRef<"h5">;
export const H5 = ({ children, className, ...props }: H5Props) => {
  return (
    <h1 {...props} className="text-ev-primary text-2xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h1>
  );
};

type H6Props = ComponentPropsWithoutRef<"h6">;
export const H6 = ({ children, className, ...props }: H6Props) => {
  return (
    <h6 {...props} className="text-ev-primary text-xl">
      <span>{children}</span>
      {props.id && <Hashtag id={props.id} />}
    </h6>
  );
};

type PProps = ComponentPropsWithoutRef<"p">;
export const P = ({ children, className, ...props }: PProps) => {
  return (
    <p {...props} className="text-ev-dark dark:text-ev-light text-base">
      {children}
    </p>
  );
};

type BoldProps = ComponentPropsWithoutRef<"strong">;
export const Bold = ({ children, className, ...props }: BoldProps) => {
  return (
    <strong
      {...props}
      className="text-ev-dark dark:text-ev-light text-base font-bold"
    >
      {children}
    </strong>
  );
};

type CodeProps = ComponentPropsWithoutRef<"code">;
export const Code = ({ children, className, ...props }: CodeProps) => {
  return (
    <code
      {...props}
      className="px-1 text-ev-dark bg-ev-light-harder dark:text-ev-light  dark:bg-ev-dark-harder text-base rounded-md"
    >
      {children}
    </code>
  );
};

const Hashtag = ({ id }: { id: string }) => (
  <a href={`#${id}`} className="px-2">
    #
  </a>
);
