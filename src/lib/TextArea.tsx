import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

type TextAreaProps = AriaTextFieldProps & {
  variant?: "flat" | "solid";
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export const TextArea = ({
  variant = "solid",
  className,
  labelClassName,
  inputClassName,
  ...props
}: TextAreaProps) => {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps } = useTextField(
    {
      ...props,
      inputElementType: "textarea",
    },
    ref
  );

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
      <textarea
        {...inputProps}
        ref={ref}
        className={twMerge(
          inputProps.className,
          "bg-inherit h-full",
          inputClassName
        )}
      />
    </div>
  );
};
