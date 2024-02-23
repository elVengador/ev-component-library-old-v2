import { useState } from "react";
import { Button } from "./lib/Button";
import { IconButton } from "./lib/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "./lib/Link";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="grid place-items-center w-full h-dvh border border-blue-400">
      <div className="max-w-[1000px] m-auto">
        <header>
          <h1 className="text-center text-[24px]">
            elVengador component library
          </h1>
        </header>
        <p className="text-[20px] text-center p-12">
          This component library is using <b>react-aria-components</b> +{" "}
          <b>tailwindcss</b>
        </p>

        <section className="grid place-items-center gap-2">
          <h2>Examples:</h2>
          <Button
            color="primary"
            variant="solid"
            onPress={() => setCount((count) => count + 1)}
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
        </section>
      </div>
    </main>
  );
}

export default App;
