import { useRef } from "react";
import { ListProps, ListState, Node, useListState } from "react-stately";
import {
  mergeProps,
  useFocusRing,
  useGridList,
  useGridListItem,
} from "react-aria";
import { twMerge } from "tailwind-merge";

export const GridList = (
  props: ListProps<object> & { className?: string; itemClassName?: string }
) => {
  let state = useListState(props);
  let ref = useRef<HTMLUListElement>(null);
  let { gridProps } = useGridList(props, state, ref);

  return (
    <ul {...gridProps} ref={ref} className={twMerge("p-1", props.className)}>
      {[...state.collection].map((item) => (
        <ListItem
          key={item.key}
          item={item}
          state={state}
          className={props.itemClassName}
        />
      ))}
    </ul>
  );
};

type ListItemProps = {
  item: Node<object>;
  state: ListState<object>;
  className?: string;
};

export const ListItem = ({ item, state, className }: ListItemProps) => {
  let ref = useRef(null);
  let { rowProps, gridCellProps, isPressed } = useGridListItem(
    { node: item },
    state,
    ref
  );

  let { isFocusVisible, focusProps } = useFocusRing();
  let showCheckbox =
    state.selectionManager.selectionMode !== "none" &&
    state.selectionManager.selectionBehavior === "toggle";

  return (
    <li
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      className={`${isPressed ? "pressed" : ""} ${
        isFocusVisible ? "focus-visible" : ""
      }`}
    >
      <div
        {...gridCellProps}
        className={twMerge(`px-1 flex items-start gap-1`, className)}
      >
        {showCheckbox && <ListCheckbox item={item} state={state} />}
        {item.rendered}
      </div>
    </li>
  );
};

import { useGridListSelectionCheckbox } from "react-aria";
import { Checkbox } from "./CheckBox";

// Reuse the Checkbox from your component library. See below for details.
// import {Checkbox} from 'your-component-library';

type ListCheckboxProps = {
  item: Node<object>;
  state: ListState<object>;
};

function ListCheckbox({ item, state }: ListCheckboxProps) {
  let { checkboxProps } = useGridListSelectionCheckbox(
    { key: item.key },
    state
  );
  return <Checkbox {...checkboxProps} />;
}
