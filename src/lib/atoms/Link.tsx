import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterDOMProps } from "@react-aria/utils";
import { ComponentPropsWithoutRef, useRef } from "react";
import { AriaLinkOptions, useLink } from "react-aria";

import { twMerge } from "tailwind-merge";

type LinkColor = "primary" | "secondary";

export type LinkProps = AriaLinkOptions &
  ComponentPropsWithoutRef<"a"> & {
    color?: LinkColor;
    showExternalIcon?: boolean;
  };

const baseStyles =
  "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid";

const styles: { [key in LinkColor]: string } = {
  primary: `${baseStyles} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${baseStyles} text-ev-secondary hover:text-ev-secondary-hard`,
};
const styleIt = ({ color = "primary" }: LinkProps) => styles[color];

export const Link = ({
  children,
  showExternalIcon = true,
  ...props
}: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, ref);

  return (
    <a
      ref={ref}
      {...filterDOMProps(props)}
      {...linkProps}
      className={twMerge(styleIt(props), props.className as string)}
    >
      {props.target === "_blank" && showExternalIcon && (
        <FontAwesomeIcon icon={faLink} className="mr-2" />
      )}
      {children}
    </a>
  );
};
