import { useState } from "react";
import { Button } from "./lib/Button";
import { IconButton } from "./lib/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "./lib/Link";
import { Checkbox } from "./lib/CheckBox";
import { GridList } from "./lib/GridList";
import { Item } from "react-stately";
import { Bold, Code, H1, H2, H3, H4, H5, H6, P } from "./lib/Text";
// import { GridList, GridListItem } from "./lib/GridList.old";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="grid place-items-center w-full min-h-dvh border border-blue-400 bg-ev-light dark:bg-ev-dark text-ev-dark dark:text-ev-light">
      <div className="max-w-[1000px] m-auto">
        <header>
          <h1 className="text-center text-[24px]">
            elVengador component library
          </h1>
        </header>
        <p className="text-[20px] text-center p-12">
          This component library is using <b>react-aria</b> + <b>tailwindcss</b>
        </p>

        <section className="grid place-items-center gap-2">
          <h2>Examples:</h2>
          <Button
            color="primary"
            variant="solid"
            onPress={() => setCount((count) => count + 1)}
            title="here"
          >
            count is {count}
          </Button>
          <IconButton>
            <FontAwesomeIcon icon={faHouse} />
          </IconButton>
          <Link href="/">redirect</Link>
          <Link href="/" target="_blank">
            new tab
          </Link>
          <Checkbox
            color="primary"
            aria-label="checkbox example"
            isDisabled
            isSelected
          >
            Check box example
          </Checkbox>
          {/* <GridList aria-label="example list">
            <GridListItem children={"First children"} />
            <GridListItem children={"Second children"} />
            <GridListItem children={"Third children"} />
          </GridList> */}
          <GridList
            aria-label="example list"
            selectionMode="single"
            selectionBehavior="toggle"
          >
            <Item textValue="aa">aa</Item>
            <Item textValue="bb">bb</Item>
            <Item textValue="cc">cc</Item>
          </GridList>

          <H1 id="title-h1">H1 title</H1>
          <H2 id="title-h2">H2 title</H2>
          <H3>H3 title</H3>
          <H4>H4 title</H4>
          <H5>H5 title</H5>
          <H6>H6 title</H6>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            est voluptates cupiditate modi velit doloremque pariatur omnis id
            corrupti! Neque nulla molestias expedita soluta distinctio quas est
            necessitatibus reiciendis quisquam.
          </P>
          <Bold>Important text here</Bold>
          <Code>console.log('Hello')</Code>
        </section>
      </div>
    </main>
  );
}

export default App;
