import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { onToggleTheme } from "../src/utils/theme.utils";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="relative border-2 border-blue-500 bg-ev-light dark:bg-ev-dark">
        {/* // <ThemeProvider theme= "default" > */}
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <button
          onClick={onToggleTheme}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "20px",
            height: "20px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        </button>
        <Story />
        {/* // </ThemeProvider> */}
      </div>
    ),
  ],
};

export default preview;
