import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

type LinkColor = "primary" | "secondary";

export type LinkProps = AriaLinkProps & { color?: LinkColor };

const baseStyles =
  "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid";

const styles: { [key in LinkColor]: string } = {
  primary: `${baseStyles} text-ev-primary`,
  secondary: `${baseStyles} text-ev-secondary`,
};
const styleIt = ({ color = "primary" }: LinkProps) => styles[color];

export const Link = (props: LinkProps) => {
  return (
    <AriaLink
      {...props}
      {...(props.target === "_blank" && {
        children: (
          <>
            {/* <i className="fa-solid fa-link mr-2"></i> */}
            <FontAwesomeIcon icon={faLink} className="mr-2" />
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
