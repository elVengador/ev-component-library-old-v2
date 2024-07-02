import { ComponentPropsWithoutRef, useRef } from "react";
import { useGridList } from "react-aria";
import { ListProps, useListState } from "react-stately";
import { ListItem } from "../GridList";

type ListPropsDefault = ComponentPropsWithoutRef<"ul">;

const List = (props: ListProps<ListPropsDefault>) => {
  const stateList = useListState(props);
  const refList = useRef(null);
  const { gridProps } = useGridList(props, stateList, refList);

  return (
    <ul {...gridProps} ref={refList}>
      {[...stateList.collection].map((item) => (
        <ListItem key={item.key} item={item} state={stateList} />
      ))}
    </ul>
  );
};
