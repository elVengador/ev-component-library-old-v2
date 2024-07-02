import { ComponentPropsWithoutRef, ReactNode } from "react";
import { AriaListBoxProps } from "react-aria";
import { Node, useListState } from "react-stately";

type ListProps<T> = AriaListBoxProps<T> & ComponentPropsWithoutRef<"ul">;

export const List = <T extends object>(props: ListProps<T>) => {
  const state = useListState<T>(props);

  // const stateList = useListState(props);
  // const refList = useRef(null);
  // const { gridProps } = useGridList(props, stateList, refList);

  return (
    <ul>
      {[...state.collection].map((cur) => (
        <li key={cur.key}>{cur.rendered}</li>
      ))}
    </ul>
    // <ul {...gridProps} ref={refList}>
    //   {[...stateList.collection].map((item) => (
    //     <ListItem key={item.key} item={item} state={stateList} />
    //   ))}
    // </ul>
  );
};
