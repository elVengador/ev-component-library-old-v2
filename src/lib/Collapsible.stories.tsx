import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./Collapsible";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Collapsible",
  component: Collapsible,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: 'color' },
  //   color:{control:}
  // },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Title",
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
        exercitationem quasi aspernatur minus harum explicabo id laudantium sit.
        Deleniti ipsum officiis quod tempora fugiat harum qui. Magni ullam
        similique eveniet?
      </p>
    ),
    // color: "primary",
    // children: "Redirect",
  },
};

// export const OpenInNewTabLink: Story = {
//   args: {
//     color: "primary",
//     target: "_blank",
//     children: "Open in new tab",
//   },
// };
