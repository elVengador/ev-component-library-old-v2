import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

type TextFieldProps = AriaTextFieldProps & {
  variant: "flat" | "solid";
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
};

export const TextField = ({
  variant = "solid",
  className,
  labelClassName,
  inputClassName,
  descriptionClassName,
  errorClassName,
  ...props
}: TextFieldProps) => {
  let { label } = props;
  let ref = useRef(null);
  let {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(props, ref);

  return (
    <div className={twMerge("flex flex-col w-full", className)}>
      {variant === "solid" && (
        <label
          {...labelProps}
          className={twMerge(labelProps.className, labelClassName)}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={twMerge(
          `bg-inherit ${variant === "flat" && "border-0 "} ${
            variant === "solid" && "border-2 border-ev-dark rounded-sm"
          }`,
          inputClassName
        )}
        ref={ref}
      />
      {props.description && (
        <div
          {...descriptionProps}
          className={twMerge("text-[12px]", descriptionClassName)}
        >
          {props.description}
        </div>
      )}
      {isInvalid && (
        <div
          {...errorMessageProps}
          className={twMerge("text-red-700 text-[12px]", errorClassName)}
        >
          {validationErrors.join(" ")}
        </div>
      )}
    </div>
  );
};
