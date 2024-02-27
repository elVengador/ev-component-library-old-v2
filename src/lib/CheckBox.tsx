// import { Check, Minus } from "lucide-react";
import React, { RefObject } from "react";
import { useToggleState } from "react-stately";
import {
  AriaCheckboxProps,
  VisuallyHidden,
  mergeProps,
  useCheckbox,
  useFocusRing,
} from "react-aria";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

type CheckBoxColor = "primary" | "secondary";

// Can't use ComponentPropsWithoutRef<"input"> because other elements elements are passing only AriaCheckboxProps
type CheckBoxProps = AriaCheckboxProps & { color?: CheckBoxColor };

const baseBoxStyles =
  "w-5 h-5 text-ev-light  flex-shrink-0 rounded flex items-center justify-center border-2 border-ev-primary transition";

type BoxStylesInput = { false: string; true: string };
const boxStyles: BoxStylesInput = {
  false: `${baseBoxStyles} bg-transparent `,
  true: `${baseBoxStyles} bg-ev-primary`,
};

const styleBox = ({ isSelected }: { isSelected: boolean }) => {
  console.log({ isSelected });
  return boxStyles[isSelected ? "true" : "false"];
};

export const Checkbox = ({
  color = "primary",
  children,
  ...props
}: CheckBoxProps) => {
  const state = useToggleState(props);
  let ref = React.useRef(null);

  const { inputProps } = useCheckbox(
    props,
    state,
    ref as RefObject<HTMLInputElement>
  );
  let { /* isFocusVisible */ focusProps } = useFocusRing();
  let isSelected = state.isSelected && !props.isIndeterminate;
  console.log({ state });

  return (
    <label
      className={`flex items-center gap-2 ${props.isDisabled && "opacity-60"}`}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>

      <div className={styleBox({ isSelected })}>
        {state.isSelected && <FontAwesomeIcon icon={faCheck} />}
        {props.isIndeterminate && <FontAwesomeIcon icon={faMinus} />}
      </div>
      {children}
    </label>
  );
};
