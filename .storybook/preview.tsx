import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { onToggleTheme } from "../src/utils/theme.utils";
import { withThemeByClassName } from "@storybook/addon-themes";

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
      <div
        style={{ padding: "20px", display: "grid", placeItems: "center" }}
        className="bg-ev-dark dark:bg-ev-dark"
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),

    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: "light",
//       dark: "dark",
//     },
//     defaultTheme: "light",
//   }),
// ];

export default preview;
