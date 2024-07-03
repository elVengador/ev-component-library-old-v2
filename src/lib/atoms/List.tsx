import { ComponentPropsWithoutRef, useRef } from "react";
import {
  AriaListBoxOptions,
  AriaListBoxProps,
  useListBox,
  useOption,
} from "react-aria";
import { ListState, Node, useListState } from "react-stately";

type ListProps<T> = AriaListBoxProps<T> & ComponentPropsWithoutRef<"ul">;

export const List = <T extends object>(props: ListProps<T>) => {
  const refList = useRef(null);
  const state = useListState<T>(props);
  const { labelProps, listBoxProps } = useListBox(props, state, refList);

  // const stateList = useListState(props);
  // const refList = useRef(null);
  // const { gridProps } = useGridList(props, stateList, refList);

  return (
    <div {...labelProps}>
      <ul {...listBoxProps} ref={refList}>
        {[...state.collection].map((cur) => (
          <Option item={cur} state={state} key={cur.key}>
            {cur.rendered}
          </Option>
        ))}
      </ul>
    </div>
    // <ul {...gridProps} ref={refList}>
    //   {[...stateList.collection].map((item) => (
    //     <ListItem key={item.key} item={item} state={stateList} />
    //   ))}
    // </ul>
  );
};

type OptionProps<T> = AriaListBoxOptions<T> &
  ComponentPropsWithoutRef<"li"> & {
    item: { key: string; rendered: string } | Node<T>;
    state: ListState<T>;
  };

const Option = <T extends object>(props: OptionProps<T>) => {
  const refOption = useRef(null);
  const { optionProps } = useOption(
    { key: props.item.key },
    props.state,
    refOption
  );
  return (
    <li key={props.item.key} {...optionProps} ref={refOption}>
      {props.item.rendered}
    </li>
  );
};
