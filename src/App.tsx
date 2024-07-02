import { Item } from "react-stately";
import { List } from "./lib/atoms/List";

function App() {
  const items: { label: string; value: string }[] = [];

  return (
    <main className="py-2 px-5">
      <h1 className="font-bold">Components</h1>
      <h2 className="font-semibold">Atoms</h2>
      <ol className="list-decimal">
        <li>Button: complete</li>
        <li>Icon Button: not review</li>
        <li>Collapsible: not review</li>
        <li>Link: not review</li>
        <li>Youtube Video: not review</li>
        <li>Check Box: not review</li>
        <li>Text Area: not review</li>
        <li>Text Field: not review</li>
        <li>Grid List: not review</li>
        <li></li>
      </ol>
      <List>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </List>
      {/* <List items={items}>{(i) => <li>{i.label}</li>}</List> */}
    </main>
  );
}

export default App;
