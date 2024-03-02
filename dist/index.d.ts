import { AriaButtonOptions } from 'react-aria';
import { AriaLinkOptions } from 'react-aria';
import { ButtonHTMLAttributes } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { DetailedHTMLProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';

export declare const A: ({ className, children, ...props }: AProps) => JSX_2.Element;

export declare type AProps = ComponentPropsWithoutRef<"a">;

export declare const Blockquote: ({ children, className, variant, ...props }: BlockquoteProps) => JSX_2.Element;

export declare type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
    variant?: "base" | "default";
};

export declare const Button: ForwardRefExoticComponent<AriaButtonOptions<"button"> & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    variant?: ButtonVariant | undefined;
    color?: ButtonColor | undefined;
} & RefAttributes<HTMLButtonElement>>;

declare type ButtonColor = "primary" | "secondary" | "destructive" | "foreground";

declare type ButtonColor_2 = "primary" | "secondary" | "destructive" | "foreground";

export declare type ButtonProps = AriaButtonOptions<"button"> & ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
};

declare type ButtonVariant = "solid" | "flat";

declare type ButtonVariant_2 = "solid" | "flat";

export declare const Code: ({ children, className, ...props }: CodeProps) => JSX_2.Element;

export declare type CodeProps = ComponentPropsWithoutRef<"code">;

export declare const H1: ({ children, className, ...props }: H1Props) => JSX_2.Element;

export declare type H1Props = ComponentPropsWithoutRef<"h1">;

export declare const H2: ({ children, className, ...props }: H2Props) => JSX_2.Element;

export declare type H2Props = ComponentPropsWithoutRef<"h2">;

export declare const H3: ({ children, className, ...props }: H3Props) => JSX_2.Element;

export declare type H3Props = ComponentPropsWithoutRef<"h3">;

export declare const H4: ({ children, className, ...props }: H4Props) => JSX_2.Element;

export declare type H4Props = ComponentPropsWithoutRef<"h4">;

export declare const H5: ({ children, className, ...props }: H5Props) => JSX_2.Element;

export declare type H5Props = ComponentPropsWithoutRef<"h5">;

export declare const H6: ({ children, className, ...props }: H6Props) => JSX_2.Element;

export declare type H6Props = ComponentPropsWithoutRef<"h6">;

export declare const IconButton: ForwardRefExoticComponent<AriaButtonOptions<"button"> & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    variant?: ButtonVariant_2 | undefined;
    color?: ButtonColor_2 | undefined;
} & RefAttributes<HTMLButtonElement>>;

export declare type IconButtonProps = AriaButtonOptions<"button"> & ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant_2;
    color?: ButtonColor_2;
};

export declare type Img = ComponentPropsWithoutRef<"img">;

export declare const Img: ({ className, ...props }: Img) => JSX_2.Element;

export declare const Link: ForwardRefExoticComponent<AriaLinkOptions & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    color?: LinkColor | undefined;
} & RefAttributes<HTMLAnchorElement>>;

declare type LinkColor = "primary" | "secondary";

export declare type LinkProps = AriaLinkOptions & ComponentPropsWithoutRef<"button"> & {
    color?: LinkColor;
};

export declare const Ol: ({ children, className, ...props }: OlProps) => JSX_2.Element;

export declare type OlProps = ComponentPropsWithoutRef<"ol">;

export declare const P: ({ children, className, ...props }: PProps) => JSX_2.Element;

export declare type PProps = ComponentPropsWithoutRef<"p">;

export declare const Pre: ({ children, className, ...props }: CodeProps) => JSX_2.Element;

export declare type PrevProps = ComponentPropsWithoutRef<"pre">;

export declare const Strong: ({ children, className, ...props }: StrongProps) => JSX_2.Element;

export declare type StrongProps = ComponentPropsWithoutRef<"strong">;

export declare const Ul: ({ children, className, ...props }: UlProps) => JSX_2.Element;

export declare type UlProps = ComponentPropsWithoutRef<"ul">;

export { }
