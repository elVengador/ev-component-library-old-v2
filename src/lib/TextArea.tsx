import { useEffect, useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

type TextAreaProps = AriaTextFieldProps & {
  variant?: "flat" | "solid";
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  autoResize?: boolean;
};

export const TextArea = ({
  variant = "solid",
  className,
  labelClassName,
  inputClassName,
  autoResize,
  ...props
}: TextAreaProps) => {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      inputElementType: "textarea",
    },
    ref
  );

  const autoResizeTextarea = (element: any) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const onInputCustom = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (inputProps.onInput) {
      inputProps.onInput(e);
    }
    if (autoResize) {
      autoResizeTextarea(e.target);
    }
  };

  useEffect(() => {
    if (autoResize && ref.current) {
      autoResizeTextarea(ref.current);
    }
  }, [autoResize]);

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
        onInput={onInputCustom}
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
