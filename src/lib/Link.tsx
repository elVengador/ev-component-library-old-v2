import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export type LinkProps = AriaLinkProps & {
  color?: "primary" | "secondary" | "foreground" | "background";
};

// TODO: manage disable
// TODO: manage focus

const styleIt = ({ color = "primary" }: LinkProps) => {
  const base =
    "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid";
  if (color === "primary") return `${base} text-ev-green`;
  if (color === "secondary") return `${base} text-ev-orange`;
  if (color === "foreground") return `${base} text-ev-dark dark:text-ev-light`;
  if (color === "background") return `${base} text-ev-light dark:text-ev-dark`;
};

export const Link = (props: LinkProps) => {
  return (
    <AriaLink
      {...props}
      {...(props.target === "_blank" && {
        children: (
          <>
            <i className="fa-solid fa-link mr-2"></i>
            {props.children}
          </>
        ),
      })}
      className={twMerge(styleIt(props), props.className as string)}
    />
  );
};

export const OpenLink = (props: LinkProps) => (
  <Link {...props} target="_blank" rel="noopener" />
);
